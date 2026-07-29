export {}

const $MBDRecipe = Java.loadClass("com.lowdragmc.mbd2.api.recipe.MBDRecipe")
const $ACEntityRegistry = Java.loadClass("com.github.alexmodguy.alexscaves.server.entity.ACEntityRegistry")
const $FluidStack = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidStack")
const $MobJarItem = Java.loadClass("com.hollingsworth.arsnouveau.common.items.MobJarItem")
const $ContentModifier = Java.loadClass("com.lowdragmc.mbd2.api.recipe.content.ContentModifier")

type MachineAnchor = {
    x: number
    y: number
    z: number
    direction: string
}

type RelativePos = {
    left: number
    fore: number
    y: number
}

type FuelData = {
    burnTime: number
    temperature: number
}

type CoolingFluidData = {
    output: string
    lowTemperature: number
    highTemperature: number
    amountMultiplier: number
}

const REACTOR_ID = "mbd2:carnage_reactor"
const FEL_REACTOR_UNIT = "kubejs:fel_reactor_unit"
const WILL_MUCUS_BLOCK = "kubejs:will_mucus"

const NBT_TEMPERATURE = "temperature"
const NBT_CALORIFIC_VALUE = "calorific_value"
const NBT_PARALLEL = "parallel"

const BASE_TEMPERATURE = 293
const CRITICAL_TEMPERATURE = 10666666
const MAX_TEMPERATURE = 20000000
const MELTDOWN_RANGE = 9333334
const STRUCTURE_BREAK_EXPLOSION_LIMIT = 7000000

const MIN_CONSUME_AMOUNT = 10
const MAX_CONSUME_AMOUNT = 100
const MAX_FLUID_CAPACITY = 2147483647

const FEL_SCAN_START: RelativePos = { left: 2, fore: -4, y: 2 }
const FEL_SCAN_END: RelativePos = { left: -2, fore: -9, y: -2 }

const reactorFuels: { [key: string]: FuelData } = {
    "kubejs:vitality_uranium": {
        burnTime: 1000,
        temperature: 100,
    },
}

const coolingFluids: { [key: string]: CoolingFluidData } = {
    "minecraft:water": {
        output: "embers:steam",
        lowTemperature: 300,
        highTemperature: 400,
        amountMultiplier: 5,
    },
}

function machineAnchor(machine: any): MachineAnchor {
    let pos = machine.getPos()
    return {
        x: pos.getX(),
        y: pos.getY(),
        z: pos.getZ(),
        direction: machine.frontFacing.get(),
    }
}

function relativeToMachine(anchor: MachineAnchor, rel: RelativePos) {
    let x = anchor.x
    let z = anchor.z

    switch (anchor.direction) {
        case "south":
            x += rel.left
            z += rel.fore
            break
        case "north":
            x -= rel.left
            z -= rel.fore
            break
        case "east":
            x += rel.fore
            z -= rel.left
            break
        case "west":
            x -= rel.fore
            z += rel.left
            break
        default:
            break
    }

    return [x, anchor.y + rel.y, z]
}

function scanBox(anchor: MachineAnchor, start: RelativePos, end: RelativePos) {
    let startPos = relativeToMachine(anchor, start)
    let endPos = relativeToMachine(anchor, end)

    return {
        minX: Math.min(startPos[0], endPos[0]),
        maxX: Math.max(startPos[0], endPos[0]),
        minY: Math.min(startPos[1], endPos[1]),
        maxY: Math.max(startPos[1], endPos[1]),
        minZ: Math.min(startPos[2], endPos[2]),
        maxZ: Math.max(startPos[2], endPos[2]),
    }
}

function felUnitPositions(machine: any) {
    let level = machine.getLevel()
    let box = scanBox(machineAnchor(machine), FEL_SCAN_START, FEL_SCAN_END)
    let positions = []

    for (let x = box.minX; x <= box.maxX; x++) {
        for (let y = box.minY; y <= box.maxY; y++) {
            for (let z = box.minZ; z <= box.maxZ; z++) {
                let block = level.getBlock(x, y, z)
                if (block.getId() === FEL_REACTOR_UNIT) {
                    positions.push([x, y, z])
                }
            }
        }
    }

    return positions
}

function felUnitCount(machine: any) {
    return felUnitPositions(machine).length
}

function setFelUnitsToMucus(level: Internal.Level, machine: any) {
    felUnitPositions(machine).forEach(pos => {
        level.getBlock(pos[0], pos[1], pos[2]).set(WILL_MUCUS_BLOCK)
    })
}

function spawnNuclearExplosion(level: any, machine: any, size: number) {
    let bomb = $ACEntityRegistry.NUCLEAR_EXPLOSION.get().create(level)
    bomb.setPos(machine.getPos().getCenter())
    bomb.setSize(size)
    level.addFreshEntity(bomb)
}

function logBase(base: number, value: number) {
    return Math.log(value) / Math.log(base)
}

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function mobFromJar(itemStack: any, level: any) {
    if (itemStack.empty) {
        return null
    }

    return $MobJarItem.fromItem(itemStack, level)
}

function mobJarOutputMultiplier(itemStack: any, level: any) {
    let mobEntity = mobFromJar(itemStack, level) as unknown as Internal.LivingEntity
    if (mobEntity == null) {
        return 1
    }

    return +(1 + logBase(20, mobEntity.getMaxHealth())).toFixed(2)
}

function mobJarName(itemStack: any, level: any) {
    let mobEntity = mobFromJar(itemStack, level)
    if (mobEntity != null) {
        return mobEntity.getDisplayName().getString()
    }

    if (!itemStack.empty) {
        return "收容罐为空"
    }

    return "未放置收容罐"
}

function mobJarMultiplierText(itemStack: any, level: any) {
    let mobEntity = mobFromJar(itemStack, level) as unknown as Internal.LivingEntity
    if (mobEntity != null) {
        return "生命值倍率加成: " + (1 + logBase(20, mobEntity.getMaxHealth())).toFixed(2)
    }

    return "生命值倍率加成: 无"
}

function temperatureOutputMultiplier(temperature: number) {
    if (temperature < CRITICAL_TEMPERATURE) {
        return 0.8
    }

    return 0.8 + Math.min(Number((((temperature - CRITICAL_TEMPERATURE) / MELTDOWN_RANGE) * 0.7).toFixed(2)), 0.7)
}

function temperatureText(data: any) {
    return data.getInt(NBT_TEMPERATURE) + "/" + MAX_TEMPERATURE
}

function temperatureRiskPercent(data: any, label: any) {
    let temperature = data.getInt(NBT_TEMPERATURE)

    if (temperature < CRITICAL_TEMPERATURE) {
        label.setColor(0x48ff00)
        return 0
    }

    let percent = Math.floor((temperature - CRITICAL_TEMPERATURE) / MELTDOWN_RANGE * 100)
    if (temperature < 15333333) {
        label.setColor(0xfff200)
        return percent
    }

    label.setColor(0xff2a00)
    return Math.min(percent, 100)
}

function temperatureMultiplierText(data: any) {
    return String(temperatureOutputMultiplier(data.getInt(NBT_TEMPERATURE)))
}

function forEachRecipeFuel(recipe: any, onFuel: any) {
    let recipeInputs = recipe.inputs.values().toArray()

    recipeInputs[0].forEach((input:Internal.Content) => {
        let content = input.getContent().getInner().getStacks()
        content.forEach((stack:Internal.ItemStack) => {
            let fuelData = reactorFuels[stack.getId()]
            if (fuelData) {
                onFuel(fuelData, stack)
            }
        })
    })
}

function fuelTemperatureDelta(fuelData: FuelData, parallel: number) {
    return fuelData.temperature + Math.floor(logBase(1.5, parallel + 1) * fuelData.temperature)
}

function updateFuelState(data: any, recipe: any, parallel: number, direction: number, saveRecipeParallel: boolean) {
    forEachRecipeFuel(recipe, (fuelData : FuelData) => {
        let calorificValue = data.getInt(NBT_CALORIFIC_VALUE)
        let machineParallel = data.getInt(NBT_PARALLEL)
        let delta = fuelTemperatureDelta(fuelData, parallel)

        data.putInt(NBT_CALORIFIC_VALUE, Math.max(calorificValue + direction * delta, 0))
        data.putInt(NBT_PARALLEL, Math.max(machineParallel + direction * parallel, 0))
        if (saveRecipeParallel) {
            recipe.data.putInt(NBT_PARALLEL, parallel)
        }
    })
}

function updateTemperature(data: any, updateFn: any) {
    let currentTemperature = data.getInt(NBT_TEMPERATURE)
    data.putInt(NBT_TEMPERATURE, updateFn(currentTemperature))
}

function coolReactor(data: any, consumeAmount: number, coolingData: CoolingFluidData) {
    let coolCoefficient = (coolingData.highTemperature - coolingData.lowTemperature) / 10
    updateTemperature(data, (currentTemperature : number) =>
        Math.max(currentTemperature - Math.floor(consumeAmount * coolCoefficient), BASE_TEMPERATURE)
    )
}

function processEmptyOutputTank(data: any, coolStorage: any, noCoolStorage: any, coolFluidStack: any, coolingData: CoolingFluidData) {
    let availableAmount = coolFluidStack.getAmount()
    if (availableAmount < MIN_CONSUME_AMOUNT) {
        return
    }

    let consumeAmount = Math.min(Math.max(availableAmount, MIN_CONSUME_AMOUNT), MAX_CONSUME_AMOUNT)
    let outputFluid = Fluid.of(coolingData.output as Internal.FluidStackJS_).getFluid()
    let outputAmount = consumeAmount * coolingData.amountMultiplier

    noCoolStorage.setFluidInTank(0, $FluidStack["create(net.minecraft.world.level.material.Fluid,long)"](outputFluid, outputAmount))
    coolFluidStack.shrink(consumeAmount)
    coolReactor(data, consumeAmount, coolingData)
}

function processExistingOutputTank(data: any, coolFluidStack: any, noCoolFluidStack: any, coolingData: CoolingFluidData) {
    let noCoolRemainingCapacity = MAX_FLUID_CAPACITY - noCoolFluidStack.getAmount()
    let minOutputRequired = coolingData.amountMultiplier * MIN_CONSUME_AMOUNT

    if (noCoolRemainingCapacity <= minOutputRequired) {
        return
    }

    let maxConsumeByCapacity = Math.floor(noCoolRemainingCapacity / (coolingData.amountMultiplier * MIN_CONSUME_AMOUNT))
    let availableAmount = coolFluidStack.getAmount()
    let consumeAmount = Math.min(
        Math.max(maxConsumeByCapacity, MIN_CONSUME_AMOUNT),
        MAX_CONSUME_AMOUNT,
        availableAmount
    )

    if (consumeAmount >= MIN_CONSUME_AMOUNT) {
        noCoolFluidStack.grow(consumeAmount * coolingData.amountMultiplier)
        coolFluidStack.shrink(consumeAmount)
        coolReactor(data, consumeAmount, coolingData)
    }
}

function processCooling(machine: any, data: any) {
    let coolStorage = machine.getTraitByName("cool").storages[0]
    let noCoolStorage = machine.getTraitByName("no_cool").storages[0]
    let coolFluidStack = coolStorage.getFluidInTank(0)

    if (coolFluidStack.empty) {
        return
    }

    let coolFluidType = coolFluidStack.getFluid().getFluidType().toString()
    let coolingData = coolingFluids[coolFluidType]
    if (coolingData === undefined) {
        return
    }

    let noCoolFluidStack = noCoolStorage.getFluidInTank(0)
    let noCoolFluid = noCoolFluidStack.getFluid()

    if (noCoolFluid.empty) {
        processEmptyOutputTank(data, coolStorage, noCoolStorage, coolFluidStack, coolingData)
    } else if (coolingData.output === noCoolFluid.getFluidType().toString()) {
        processExistingOutputTank(data, coolFluidStack, noCoolFluidStack, coolingData)
    }
}

MBDMachineEvents.onPlaced(REACTOR_ID, e => {
    let machine = e.event.getMachine()
    let data = machine.customData

    data.putInt(NBT_TEMPERATURE, BASE_TEMPERATURE)
    data.putInt(NBT_CALORIFIC_VALUE, 0)
    data.putInt(NBT_PARALLEL, 0)
})

MBDMachineEvents.onBeforeRecipeModify(REACTOR_ID, e => {
    const { recipe } = e.event
    let machine = e.event.getMachine()
    let level = machine.getLevel()
    let data = machine.customData
    let mobJarStorage = (machine.getTraitByName("mob_jar") as Internal.ItemSlotCapabilityTrait).storage
    let mobJarStack = mobJarStorage.getStackInSlot(0)
    let maxParallel = machine.getMaxParallel(recipe).multiplier
    let parallel = $MBDRecipe.accurateParallel(machine as unknown as Internal.IRecipeCapabilityHolder_, recipe, maxParallel, false).getSecond()

    updateFuelState(data, recipe, parallel, 1, true)

    let unitCount = felUnitCount(machine)
    let outputMultiplier = temperatureOutputMultiplier(data.getInt(NBT_TEMPERATURE)) * mobJarOutputMultiplier(mobJarStack, level)
    let modifiedRecipe = e.event.getRecipe().copy($ContentModifier.multiplier(outputMultiplier), false, "out")

    modifiedRecipe.duration *= Number((unitCount / 90).toFixed(2))
    e.event.setRecipe(modifiedRecipe)
})

MBDMachineEvents.onAfterRecipeWorking(REACTOR_ID, e => {
    const { machine, recipe } = e.event
    let level = machine.getLevel()
    let data = machine.customData
    let parallel = recipe.data.getInt(NBT_PARALLEL)

    updateFuelState(data, recipe, parallel, -1, false)

    let positions = felUnitPositions(machine)
    let probability = Math.floor((data.getInt(NBT_TEMPERATURE) - CRITICAL_TEMPERATURE) / MELTDOWN_RANGE * 100)
    let probabilityRandomNum = randomInt(1, 100)

    if (probability >= probabilityRandomNum && positions.length > 0) {
        let randomIndex = randomInt(1, positions.length) - 1
        level.getBlock(positions[randomIndex][0], positions[randomIndex][1], positions[randomIndex][2]).set(WILL_MUCUS_BLOCK)
    }
})

MBDMachineEvents.onTick(REACTOR_ID, e => {
    const { machine } = e.event
    let data = machine.customData
    let level = machine.getLevel()

    if (machine.getMachineStateName() != "working") {
        if (data.getInt(NBT_CALORIFIC_VALUE) != 0) {
            data.putInt(NBT_CALORIFIC_VALUE, 0)
        }
        if (data.getInt(NBT_PARALLEL) != 0) {
            data.putInt(NBT_PARALLEL, 0)
        }
        if (data.getInt(NBT_TEMPERATURE) > BASE_TEMPERATURE) {
            data.putInt(NBT_TEMPERATURE, data.getInt(NBT_TEMPERATURE) - 1)
        }
    } else {
        let calorificValue = data.getInt(NBT_CALORIFIC_VALUE)
        data.putInt(NBT_TEMPERATURE, data.getInt(NBT_TEMPERATURE) + calorificValue)
    }

    if (data.getInt(NBT_TEMPERATURE) >= MAX_TEMPERATURE) {
        setFelUnitsToMucus(level, machine)
        spawnNuclearExplosion(level, machine, 3)
    }

    processCooling(machine, data)
})

MBDMachineEvents.onStructureInvalid(REACTOR_ID, e => {
    const { machine } = e.event
    let data = machine.customData
    let level = machine.getLevel()
    let reactorTemperature = data.getInt(NBT_TEMPERATURE)
    let exceedCriticalTemperature = reactorTemperature - CRITICAL_TEMPERATURE

    if (exceedCriticalTemperature > 0) {
        setFelUnitsToMucus(level, machine)

        if (exceedCriticalTemperature <= STRUCTURE_BREAK_EXPLOSION_LIMIT) {
            data.putInt(NBT_TEMPERATURE, reactorTemperature - 1000000)
        } else {
            spawnNuclearExplosion(level, machine, 2)
        }
    }
})

MBDMachineEvents.onUI(REACTOR_ID, e => {
    const { machine, root } = e.event
    let data = machine.customData
    let level = machine.getLevel()
    let temperatureProgress = root.getFirstWidgetById("tem_progress") as ProgressWidget
    let temperatureLabel = root.getFirstWidgetById("tem_label1") as LabelWidget
    let riskLabel = root.getFirstWidgetById("tem_label2") as LabelWidget
    let multiplierLabel = root.getFirstWidgetById("tem_label3") as LabelWidget
    let unitLabel = root.getFirstWidgetById("util") as LabelWidget
    let mobNameLabel = root.getFirstWidgetById("mob_name") as LabelWidget
    let mobMultiplierLabel = root.getFirstWidgetById("mob_m") as LabelWidget
    let mobJarStorage = (machine.getTraitByName("mob_jar") as Internal.ItemSlotCapabilityTrait).storage
    let mobJarStack = mobJarStorage.getStackInSlot(0)

    temperatureProgress.setProgressSupplier(() => data.getInt(NBT_TEMPERATURE) / MAX_TEMPERATURE)
    temperatureLabel.setTextProvider(() => "温度: " + temperatureText(data))
    riskLabel.setTextProvider(() => "融毁风险: 0." + temperatureRiskPercent(data, riskLabel))
    multiplierLabel.setTextProvider(() => "产出倍率: " + temperatureMultiplierText(data))
    unitLabel.setTextProvider(() => {
        let count = felUnitCount(machine)
        return "有效单元数: " + count + "| 配方时间倍率: " + (count / 90).toFixed(2)
    })
    mobNameLabel.setTextProvider(() => mobJarName(mobJarStack, level))
    mobMultiplierLabel.setTextProvider(() => mobJarMultiplierText(mobJarStack, level))
})

ServerEvents.recipes(event => {
    event.recipes.mbd2.carnage_reactor()
        .inputItems("kubejs:vitality_uranium")
        .duration(200)
        .blocksInStructure(1, 1000, FEL_REACTOR_UNIT)
        .perTick(builder => builder.outputFluids(["bloodmagic:life_essence_fluid 10000"] as any_[])
        )
})
