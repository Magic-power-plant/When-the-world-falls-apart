let $MBDRecipe = Java.loadClass("com.lowdragmc.mbd2.api.recipe.MBDRecipe")
let $MBDMultiblockMachine = Java.loadClass("com.lowdragmc.mbd2.common.machine.MBDMultiblockMachine")
let $IRecipeCapabilityHolder = Java.loadClass("com.lowdragmc.mbd2.api.capability.recipe.IRecipeCapabilityHolder")
let $ACEntityRegistry = Java.loadClass("com.github.alexmodguy.alexscaves.server.entity.ACEntityRegistry")
let $FluidStack = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidStack")
let $MobJarItem = Java.loadClass("com.hollingsworth.arsnouveau.common.items.MobJarItem")
let $LivingEntity = Java.loadClass("net.minecraft.world.entity.LivingEntity")

/**
     * @param {Internal.MBDMachine} machine
    */
function UtilNum (machine) {
    let level = machine.getLevel()

    let machinePos = machine.getPos()
    let machinePosX = machinePos.getX()
    let machinePosY = machinePos.getY()
    let machinePosZ = machinePos.getZ()
    let machineDirection = machine.frontFacing.get()
    const machineToGlobal = {x:machinePosX,y:machinePosY,z:machinePosZ,direction:machineDirection}

    let startPos = relativeToGlobal(2,-4,2,machineToGlobal)
    let endPos = relativeToGlobal(-2,-9,-2,machineToGlobal)

    const minX = Math.min(startPos[0],endPos[0])
    const maxX = Math.max(startPos[0],endPos[0])
    const minY = Math.min(startPos[1],endPos[1])
    const maxY = Math.max(startPos[1],endPos[1])
    const minZ = Math.min(startPos[2],endPos[2])
    const maxZ = Math.max(startPos[2],endPos[2])

    let count = 0

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
                let block = level.getBlock(x,y,z)
                if (block.getId() === "kubejs:fel_reactor_unit") {
                    count++
                }
            }
        }
    }
    return count
}

/**
     * @param {Internal.MBDMachine} machine
    */
function UtilArr (machine) {
    let level = machine.getLevel()

    let machinePos = machine.getPos()
    let machinePosX = machinePos.getX()
    let machinePosY = machinePos.getY()
    let machinePosZ = machinePos.getZ()
    let machineDirection = machine.frontFacing.get()
    const machineToGlobal = {x:machinePosX,y:machinePosY,z:machinePosZ,direction:machineDirection}

    let startPos = relativeToGlobal(2,-4,2,machineToGlobal)
    let endPos = relativeToGlobal(-2,-9,-2,machineToGlobal)

    const minX = Math.min(startPos[0],endPos[0])
    const maxX = Math.max(startPos[0],endPos[0])
    const minY = Math.min(startPos[1],endPos[1])
    const maxY = Math.max(startPos[1],endPos[1])
    const minZ = Math.min(startPos[2],endPos[2])
    const maxZ = Math.max(startPos[2],endPos[2])

    let arr = []

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
                let block = level.getBlock(x,y,z)
                if (block.getId() === "kubejs:fel_reactor_unit") {
                    arr.push([x,y,z])
                }
            }
        }
    }
    return arr
}

let fuel = {
    "kubejs:vitality_uranium":{
        burnTime:1000,
        temperature:100
    }
}

let coolingFluid = {
    "minecraft:water":["embers:steam",300,400,5]
}

let Tem = "temperature"
let calorificValue = "calorific_value"
let Para = "parallel"

MBDMachineEvents.onPlaced("mbd2:carnage_reactor",e => {
    let machine = e.event.getMachine()
    let data = machine.customData
    data.putInt(Tem,293)
    data.putInt(calorificValue,0)
    data.putInt(Para,0)
})

MBDMachineEvents.onBeforeRecipeModify("mbd2:carnage_reactor",e => {
    const {recipe} = e.event
    /**@type {Internal.MBDMultiblockMachine}*/
    let machine = e.event.getMachine()
    let level = machine.getLevel()
    let data = machine.customData
    let fuelId = recipe.inputs.values().toArray()

    /**@type {ItemStackTransfer.prototype}*/
    let mobJarStorage = machine.getTraitByName("mob_jar").storage
    let mobJarStack = mobJarStorage.getStackInSlot(0)

    let MaxParallel = machine.getMaxParallel(recipe).multiplier
    let Parallel = $MBDRecipe.accurateParallel(machine,recipe,MaxParallel,false).getSecond()

    function logBase (base,x) {
        return Math.log(x) / Math.log(base)
    }

    function mobJarM (itemStack,level) {
        if (!itemStack.empty) {
            if ($MobJarItem.fromItem(itemStack,level) != null) {
                let mobEntity = $MobJarItem.fromItem(itemStack,level)
                let health = mobEntity.getMaxHealth()
                return +(1 + (logBase(20,health))).toFixed(2)
            }else {
                return 1
            }
        }else {
            return 1
        }
    }

    fuelId[0].forEach(id => {
        let content = id.getContent().getInner().getStacks()
        content.forEach(stack => {
            if (fuel[stack.getId()]) {
                let fuelData = fuel[stack.getId()]
                let calorificValueData = data.getInt(calorificValue)
                let machineParallel = data.getInt(Para)

                data.putInt(calorificValue,Math.max((calorificValueData+(fuelData.temperature + Math.floor(logBase(1.5,Parallel+1)*fuelData.temperature))),0))
                data.putInt(Para,Math.max((machineParallel + Parallel),0))

                recipe.data.putInt("parallel",Parallel)
            }
        })
    })

    let utilNum = UtilNum(machine)

    function TemOutMultiple (num) {
        if (num < 10666666) {
            let outMultiple = 0.8
            return outMultiple
        }else {
            let outMultiple = 0.8 + Math.min((((data.getInt(Tem) - 10666666) / (9333334)) * 0.7).toFixed(2),0.7)
            return outMultiple
        }
    }

    let Multiples = TemOutMultiple(data.getInt(Tem)) * mobJarM(mobJarStack,level)

    let finilirecipe = e.event.getRecipe().copy($ContentModifier.multiplier(Multiples),false,"out")
    finilirecipe.duration *= (utilNum/90).toFixed(2)
    e.event.setRecipe(finilirecipe)
})

MBDMachineEvents.onRecipeWorking("mbd2:carnage_reactor",e => {
    const { machine } = e.event
    let data = machine.customData
})

MBDMachineEvents.onAfterRecipeWorking("mbd2:carnage_reactor",e => {
    const { machine , recipe} = e.event
    let level = machine.getLevel()
    let data = machine.customData
    let fuelId = recipe.inputs.values().toArray()

    let recipeData = recipe.data
    let Parallel = recipeData.getInt("parallel")

    function logBase (base,x) {
        return Math.log(x) / Math.log(base)
    }
    
    fuelId[0].forEach(id => {
        let content = id.getContent().getInner().getStacks()
        content.forEach(stack => {
            if (fuel[stack.getId()]) {
                let fuelData = fuel[stack.getId()]
                let calorificValueData = data.getInt(calorificValue)
                let machineParallel = data.getInt(Para)

                data.putInt(calorificValue,Math.max((calorificValueData-(fuelData.temperature + Math.floor(logBase(1.5,Parallel+1)*fuelData.temperature))),0))
                data.putInt(Para,Math.max((machineParallel - Parallel),0))
            }
        })
    })

    let utilArr = UtilArr(machine)
    let Probability = Math.floor((data.getInt(Tem) - 10666666) / (9333334) * 100)
    function randomInt(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min)
    }

    const probabilityRandomNum = randomInt(1,100)

    if (Probability >= probabilityRandomNum && utilArr.length > 0) {
        let randomIndex = randomInt(1,utilArr.length) - 1
        level.getBlock(utilArr[randomIndex][0],utilArr[randomIndex][1],utilArr[randomIndex][2]).set("kubejs:will_mucus")
    }
})

MBDMachineEvents.onTick("mbd2:carnage_reactor",e => {
    const { machine } = e.event
    let data = machine.customData
    let level = machine.getLevel()
    
    if (machine.getMachineStateName() != "working") {
        if (data.getInt(calorificValue) != 0) {
            data.putInt(calorificValue,0)
        }
        if (data.getInt(Para) != 0) {
            data.putInt(Para,0)
        }
        if (data.getInt(Tem) > 293) {
        data.putInt(Tem,(data.getInt(Tem)-1))
        }
    }else {
        let calorificValueData = data.getInt(calorificValue)
        data.putInt(Tem,(data.getInt(Tem)+calorificValueData))
    }

    if (data.getInt(Tem) >= 20000000) {
        let utilArr = UtilArr(machine)
        utilArr.forEach(pos => {
            level.getBlock(pos[0],pos[1],pos[2]).set("kubejs:will_mucus")
        })

        /** @type {Internal.NuclearExplosionEntity} */
        let Bomb = $ACEntityRegistry.NUCLEAR_EXPLOSION.get().create(level)
        Bomb.setPos(machine.getPos().getCenter())
        Bomb.setSize(3)
        level.addFreshEntity(Bomb)
    }
    /**@type {FluidStorage}*/
    let coolStorage = machine.getTraitByName("cool").storages[0]
    /**@type {FluidStorage}*/
    let noCoolStorage = machine.getTraitByName("no_cool").storages[0]
    // 优化冷却系统处理
    const MIN_CONSUME_AMOUNT = 10
    const MAX_CONSUME_AMOUNT = 100
    const MIN_TEMPERATURE = 293
    const MAX_FLUID_CAPACITY = 2147483647
    
    let coolFluidStack = coolStorage.getFluidInTank(0)
    if (coolFluidStack.empty) return
    
    let coolFluidType = coolFluidStack.getFluid().getFluidType().toString()
    let coolFluidData = coolingFluid[coolFluidType]
    if (coolFluidData === undefined) return
    
    let noCoolFluidStack = noCoolStorage.getFluidInTank(0)
    let noCoolFluid = noCoolFluidStack.getFluid()
    
    // 计算冷却系数
    let coolCoefficient = (coolFluidData[2] - coolFluidData[1]) / 10
    
    // 处理冷却流体消耗和产出
    if (noCoolFluid.empty) {
        // 无产出流体时，直接消耗冷却流体
        let availableAmount = coolFluidStack.getAmount()
        
        // 检查是否有足够的最小冷却流体
        if (availableAmount < MIN_CONSUME_AMOUNT) return
        
        // 计算消耗量（限制在最小和最大值之间）
        let consumeAmount = Math.min(Math.max(availableAmount, MIN_CONSUME_AMOUNT), MAX_CONSUME_AMOUNT)
        
        // 创建产出流体
        let outputFluid = Fluid.of(coolFluidData[0]).getFluid()
        let outputAmount = consumeAmount * coolFluidData[3]
        noCoolStorage.setFluidInTank(0, $FluidStack["create(net.minecraft.world.level.material.Fluid,long)"](outputFluid, outputAmount))
        
        // 消耗冷却流体
        coolFluidStack.shrink(consumeAmount)
        
        // 降低温度
        updateTemperature(data, Tem, currentTem => 
            Math.max(currentTem - Math.floor(consumeAmount * coolCoefficient), MIN_TEMPERATURE)
        )
    } else if (coolFluidData[0] === noCoolFluid.getFluidType().toString()) {
        // 产出流体已存在且类型匹配
        let noCoolCurrentAmount = noCoolFluidStack.getAmount()
        let noCoolRemainingCapacity = MAX_FLUID_CAPACITY - noCoolCurrentAmount
        let minOutputRequired = coolFluidData[3] * MIN_CONSUME_AMOUNT
        
        // 检查是否有足够容量存储最小产出量
        if (noCoolRemainingCapacity > minOutputRequired) {
            // 基于剩余容量计算最大可消耗量
            let maxConsumeByCapacity = Math.floor(noCoolRemainingCapacity / (coolFluidData[3] * MIN_CONSUME_AMOUNT))
            let availableAmount = coolFluidStack.getAmount()
            
            // 确定实际消耗量（限制在最小和最大之间，且不超过可用量）
            let consumeAmount = Math.min(
                Math.max(maxConsumeByCapacity, MIN_CONSUME_AMOUNT),
                MAX_CONSUME_AMOUNT,
                availableAmount
            )
            
            if (consumeAmount >= MIN_CONSUME_AMOUNT) {
                // 计算并增加产出流体
                let outputAmount = consumeAmount * coolFluidData[3]
                noCoolFluidStack.grow(outputAmount)
                
                // 消耗冷却流体
                coolFluidStack.shrink(consumeAmount)
                
                // 降低温度
                updateTemperature(data, Tem, currentTem => 
                    Math.max(currentTem - Math.floor(consumeAmount * coolCoefficient), MIN_TEMPERATURE)
                )
            }
        }
    }
    
    // 辅助函数：更新温度数据
    function updateTemperature(data, key, updateFn) {
        let currentTem = data.getInt(key)
        data.putInt(key, updateFn(currentTem))
    }
})

MBDMachineEvents.onStructureInvalid("mbd2:carnage_reactor",e => {
    const { machine } = e.event
    let data = machine.customData
    let level = machine.getLevel()
    let reactorTem = data.getInt(Tem)

    let exceedCriticalTem = reactorTem - 10666666

    if (exceedCriticalTem > 0) {
        if (exceedCriticalTem <= 7000000) {
            let utilArr = UtilArr(machine)
            utilArr.forEach(pos => {
                level.getBlock(pos[0],pos[1],pos[2]).set("kubejs:will_mucus")
            })
            data.putInt(Tem,reactorTem - 1000000)
        }else {
            let utilArr = UtilArr(machine)
            utilArr.forEach(pos => {
                level.getBlock(pos[0],pos[1],pos[2]).set("kubejs:will_mucus")
            })

            /** @type {Internal.NuclearExplosionEntity} */
            let Bomb = $ACEntityRegistry.NUCLEAR_EXPLOSION.get().create(level)
            Bomb.setPos(machine.getPos().getCenter())
            Bomb.setSize(2)
            level.addFreshEntity(Bomb)
        }
    }
})

MBDMachineEvents.onUI("mbd2:carnage_reactor",e => {
    const { machine , root } = e.event
    let data = machine.customData
    let level = machine.getLevel()

    /**@type {ProgressWidget} */
    let temWidget = root.getFirstWidgetById("tem_progress")
    let temLabel1 = root.getFirstWidgetById("tem_label1")
    /**@type {LabelWidget} */
    let temLabel2 = root.getFirstWidgetById("tem_label2")
    let temLabel3 = root.getFirstWidgetById("tem_label3")
    let Util = root.getFirstWidgetById("util")
    let mobName = root.getFirstWidgetById("mob_name")
    let mobM = root.getFirstWidgetById("mob_m")

    /**@type {ItemStackTransfer.prototype}*/
    let mobJarStorage = machine.getTraitByName("mob_jar").storage
    let mobJarStack = mobJarStorage.getStackInSlot(0)
    function mobJarName (itemStack) {
        if (!itemStack.empty) {
            if ($MobJarItem.fromItem(itemStack,level) != null) {
                let mobEntity = $MobJarItem.fromItem(itemStack,level)
                return mobEntity.getDisplayName().getString()
            }else {
                return "收容罐为空"
            }
        }else {
            return "未放置收容罐"
        }
    }

    function logBase (base,x) {
        return Math.log(x) / Math.log(base)
    }

    function mobJarM (itemStack,level) {
        if (!itemStack.empty) {
            if ($MobJarItem.fromItem(mobJarStack,level) != null) {
                let mobEntity = $MobJarItem.fromItem(mobJarStack,level)
                let health = mobEntity.getMaxHealth()
                return `生命值倍率加成: ${(1 + logBase(20,health)).toFixed(2)}`
            }else {
                return "生命值倍率加成: 无"
            }
        }else {
            return "生命值倍率加成: 无"
        }
    }

    temWidget.setProgressSupplier(() => (data.getInt(Tem) / 20000000))

    /**
     * @param {Internal.CompoundTag} data
    */
    function temTips1 (data) {
        if (data.getInt(Tem) < 10666666) {
            return `${data.getInt(Tem)}/20000000`
        }else if (data.getInt(Tem) < 15333333) {
            return `${data.getInt(Tem)}/20000000`
        }else {
            return `${data.getInt(Tem)}/20000000`
        }
    }

    function temTips2 (data) {
        if (data.getInt(Tem) < 10666666) {
            temLabel2.setColor(0x48ff00)
            return 0
        }else if (data.getInt(Tem) < 15333333) {
            let persent = Math.floor((data.getInt(Tem) - 10666666) / (9333334) * 100)
            temLabel2.setColor(0xfff200)
            return persent
        }else {
            let persent = Math.min(Math.floor((data.getInt(Tem) - 10666666) / (9333334) * 100),100)
            temLabel2.setColor(0xff2a00)
            return persent
        }
    }

    function temTips3 (data) {
        let tem = data.getInt(Tem)
        if (tem < 10666666) {
            return "0.8"
        }else {
            let Multiple = 0.8 + Math.min((((tem - 10666666) / (9333334)) * 0.7).toFixed(2),0.7)
            return `${Multiple}`
        }
    }

    temLabel1.setTextProvider(() => "温度: "+temTips1(data))
    temLabel2.setTextProvider(() => "融毁风险: "+"0."+`${temTips2(data)}`)
    temLabel3.setTextProvider(() => "产出倍率: "+temTips3(data))
    Util.setTextProvider(() => "有效单元数: "+`${UtilNum(machine)}`+`| 配方时间倍率: ${(UtilNum(machine)/90).toFixed(2)}`)
    mobName.setTextProvider(() => mobJarName(mobJarStack))
    mobM.setTextProvider(() => mobJarM(mobJarStack,level))
})

ServerEvents.recipes(event => {
    event.recipes.mbd2.carnage_reactor()
    .inputItems("kubejs:vitality_uranium")
    .duration(200)
    .blocksInStructure(1,1000,"kubejs:fel_reactor_unit")
    .perTick(builder => builder
        .outputFluids("bloodmagic:life_essence_fluid 10000")
    )
})