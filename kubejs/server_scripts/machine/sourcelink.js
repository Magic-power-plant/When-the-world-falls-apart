const $RECIPE_TYPE = Java.loadClass("net.minecraft.world.item.crafting.RecipeType");
const $ForgeHooks = Java.loadClass('net.minecraftforge.common.ForgeHooks')
const SMELTING = $RECIPE_TYPE.SMELTING;

const $brewing = Java.loadClass("net.minecraft.world.item.alchemy.PotionBrewing")
const $potion = $brewing.POTION_MIXES

ServerEvents.recipes(event =>{
    Ingredient.all.stacks.forEach(fuel =>{
        let burnTime = $ForgeHooks.getBurnTime(fuel,SMELTING)
        if (burnTime > 0) {
            let time = Math.ceil(burnTime/(200/9))
        event.recipes.mbd2.modular_volcanic_sourcelink()
        .inputItems(fuel)
        .duration(time)
        .perTick(builder => builder
            .outputFluids("starbunclemania:source_fluid 100")
        )
        .chance(0,builder => builder
            .inputItems("ars_nouveau:source_gem")
        )

        event.recipes.mbd2.modular_volcanic_sourcelink()
        .inputItems(fuel)
        .duration(time)
        .isXEIHidden(true)
        .perTick(builder => builder
            .outputFluids("kubejs:compression_liquid_source 10")
        )
        .chance(0,builder => builder
            .inputItems("ars_nouveau:source_gem_block")
        )

        event.recipes.mbd2.modular_volcanic_sourcelink()
        .inputItems(fuel)
        .duration(time)
        .isXEIHidden(true)
        .perTick(builder => builder
            .outputFluids("kubejs:double_compression_liquid_source 1")
        )
        .chance(0,builder => builder
            .inputItems("kubejs:nouveau_essence")
        )
        }
    })

    Ingredient.all.stacks.forEach(food =>{
        let foodstack = food.getFoodProperties(null)
        if (foodstack != null) {
            let hunger = foodstack.getNutrition()
            let saturationModifier = foodstack.getSaturationModifier()
            let saturation = hunger*saturationModifier*2
            if (hunger > 0 & saturation > 0) {
                let cook1 = hunger/saturation
                let cook2 = saturation/hunger

                let cooktiem = Math.ceil(hunger * Math.max(cook1,cook2))*hunger

                event.recipes.mbd2.modular_mycelial_sourcelink()
                .inputItems(food)
                .duration(cooktiem)
                .perTick(builder => builder
                    .outputFluids("starbunclemania:source_fluid 100")
                )
                .chance(0,builder => builder
                    .inputItems("ars_nouveau:source_gem")
                )

                event.recipes.mbd2.modular_mycelial_sourcelink()
                .inputItems(food)
                .duration(cooktiem)
                .isXEIHidden(true)
                .perTick(builder => builder
                    .outputFluids("kubejs:compression_liquid_source 10")
                )
                .chance(0,builder => builder
                    .inputItems("ars_nouveau:source_gem_block")
                )

                event.recipes.mbd2.modular_mycelial_sourcelink()
                .inputItems(food)
                .duration(cooktiem)
                .isXEIHidden(true)
                .perTick(builder => builder
                    .outputFluids("kubejs:double_compression_liquid_source 1")
                )
                .chance(0,builder => builder
                    .inputItems("kubejs:nouveau_essence")
                )
            }
        }
    })

    $potion.forEach(potions =>{
        let fromId = potions.from
        let ingredients = potions.ingredient
        let toId = potions.to

        let inputs = fromId.key().location().toString()
        let outputs = toId.key().location().toString()

        event.recipes.mbd2.modular_wixie_cauldron()
        .inputItems(Item.of('minecraft:potion', `{Potion:"${inputs}"}`).weakNBT().withCount(6))
        .inputItems(ingredients)
        .outputItems("3x kubejs:herb_residue")
        .duration(200)
        .outputItems(Item.of('minecraft:potion',`{Potion:"${outputs}",tooltips:"薇克精秘制~"}`).weakNBT().withCount(6))
        .chance(0,builder => builder
            .inputEntities("1x ars_nouveau:wixie")
        )
        .perTick(builder => builder
            .inputFluids("starbunclemania:source_fluid 10")
        )

        event.recipes.mbd2.modular_wixie_cauldron()
        .inputItems(Item.of('minecraft:potion', `{Potion:"${outputs}"}`).weakNBT().withCount(6))
        .inputItems("minecraft:gunpowder")
        .outputItems("3x kubejs:herb_residue")
        .duration(100)
        .outputItems(Item.of("minecraft:splash_potion",`{Potion:"${outputs}",tooltips:"薇克精秘制~"}`).weakNBT().withCount(6))
        .chance(0,builder => builder
            .inputEntities("1x ars_nouveau:wixie")
        )
        .perTick(builder => builder
            .inputFluids("starbunclemania:source_fluid 10")
        )

        event.recipes.mbd2.modular_wixie_cauldron()
        .inputItems(Item.of('minecraft:splash_potion', `{Potion:"${outputs}"}`).weakNBT().withCount(6))
        .inputItems("minecraft:dragon_breath")
        .outputItems("3x kubejs:herb_residue")
        .duration(100)
        .outputItems(Item.of("minecraft:lingering_potion",`{Potion:"${outputs}",tooltips:"薇克精秘制~"}`).weakNBT().withCount(6))
        .chance(0,builder => builder
            .inputEntities("1x ars_nouveau:wixie")
        )
        .perTick(builder => builder
            .inputFluids("starbunclemania:source_fluid 10")
        )

        event.recipes.mbd2.modular_wixie_cauldron()
        .inputItems(Item.of('minecraft:splash_potion', `{Potion:"${inputs}"}`).weakNBT().withCount(6))
        .inputItems(ingredients)
        .outputItems("3x kubejs:herb_residue")
        .duration(200)
        .outputItems(Item.of('minecraft:splash_potion',`{Potion:"${outputs}",tooltips:"薇克精秘制~"}`).weakNBT().withCount(6))
        .chance(0,builder => builder
            .inputEntities("1x ars_nouveau:wixie")
        )
        .perTick(builder => builder
            .inputFluids("starbunclemania:source_fluid 10")
        )

        event.recipes.mbd2.modular_wixie_cauldron()
        .inputItems(Item.of('minecraft:lingering_potion', `{Potion:"${inputs}"}`).weakNBT().withCount(6))
        .inputItems(ingredients)
        .outputItems("3x kubejs:herb_residue")
        .duration(200)
        .outputItems(Item.of('minecraft:lingering_potion',`{Potion:"${outputs}",tooltips:"薇克精秘制~"}`).weakNBT().withCount(6))
        .chance(0,builder => builder
            .inputEntities("1x ars_nouveau:wixie")
        )
        .perTick(builder => builder
            .inputFluids("starbunclemania:source_fluid 10")
        )
    })
})

const $Potions = Java.loadClass('net.minecraft.world.item.alchemy.Potion')
const $MobEffect = Java.loadClass('net.minecraft.world.effect.MobEffect')

const effectInstanceToNBT = (effect) => {
    let effectObj = effect.getEffect();
    let registryName = "";
    let effectId = -1;
    
    // 安全地获取注册名
    try {
        if (effectObj.getRegistryName && typeof effectObj.getRegistryName === 'function') {
            let registryNameObj = effectObj.getRegistryName();
            if (registryNameObj) {
                registryName = registryNameObj.toString();
            }
        }
    } catch (e) {
        // 忽略错误，尝试其他方法
    }
    
    // 如果无法通过getRegistryName获取，尝试其他方法
    if (!registryName) {
        try {
            if (effectObj.getDescriptionId && typeof effectObj.getDescriptionId === 'function') {
                let descId = effectObj.getDescriptionId();
                if (descId && descId.startsWith("effect.")) {
                    registryName = descId.substring(7).replace('.', ':');
                }
            }
        } catch (e) {
            // 忽略错误
        }
    }
    
    // 安全地获取效果ID
    try {
        if (effectObj.getId && typeof effectObj.getId === 'function') {
            effectId = effectObj.getId();
        }
    } catch (e) {
        // 忽略错误，保持默认值-1
    }
    
    // 如果仍然无法获取注册名，使用默认值
    if (!registryName) {
        registryName = "unknown:unknown";
    }
    
    return {
        // 原版数字 ID（如果存在）
        Id: effectId,
        // Forge 字符串 ID（模组兼容）
        "forge:id": registryName,
        Amplifier: effect.getAmplifier(),
        Duration: effect.getDuration(),
        Ambient: effect.isAmbient() ? 1 : 0,
        ShowParticles: effect.isVisible() ? 1 : 0,
        ShowIcon: effect.showIcon() ? 1 : 0
        // 注意：原效果的其他字段（如 CurativeItems）未保留，如有需要可在此扩展
    };
}

// 辅助函数：检查效果是否已存在
function hasEffect(effects, newEffect) {
    let newEffectId = newEffect["forge:id"] || (newEffect.Id >= 0 ? newEffect.Id : null);
    if (!newEffectId) return false;
    
    return effects.some(effect => {
        let existingEffectId = effect["forge:id"] || (effect.Id >= 0 ? effect.Id : null);
        return existingEffectId === newEffectId;
    });
}

// 主函数：合并两个药水物品
function combinePotionStacks(stack1, stack2) {
    // 获取 NBT（自动转换为 JavaScript 对象）
    let nbt1 = stack1.nbt;
    let nbt2 = stack2.nbt;
    if (!nbt1 || !nbt2) {
        console.error('合并药水失败：其中一个物品没有 NBT 数据');
        return Item.of('minecraft:potion'); // 返回空药水备用
    }

    // 第一个药水的 Potion 标签（必须存在）
    let potion1 = nbt1.Potion;
    if (!potion1) {
        console.error('第一个药水物品缺少 Potion 标签');
        return Item.of('minecraft:potion');
    }

    // 新的效果列表（JavaScript 数组）
    let newEffects = [];

    // 1. 添加第一个药水的自定义效果（保持原序）
    if (nbt1.CustomPotionEffects) {
        let effects1 = nbt1.CustomPotionEffects;
        effects1.forEach(effect => {
            if (!hasEffect(newEffects, effect)) {
                newEffects.push(effect);
            }
        });
    }

    // 2. 处理第二个药水的 Potion，转换为效果并添加
    let potion2 = nbt2.Potion;
    if (potion2) {
        let potionObj = $Potions.byName(potion2); // 获取 $Potion 对象
        if (potionObj) {
            let effectsFromPotion = potionObj.getEffects(); // Java List<MobEffectInstance>
            effectsFromPotion.forEach(effect => {
                let effectObj = effectInstanceToNBT(effect);
                if (!hasEffect(newEffects, effectObj)) {
                    newEffects.push(effectObj);
                }
            });
        }
    }

    // 3. 添加第二个药水的自定义效果（保持原序）
    if (nbt2.CustomPotionEffects) {
        let effects2 = nbt2.CustomPotionEffects;
        effects2.forEach(effect => {
            if (!hasEffect(newEffects, effect)) {
                newEffects.push(effect);
            }
        });
    }

    // 构建新的 NBT（JavaScript 对象）
    let newNbt = {
        Potion: potion1,
        tooltips: "薇克精秘制~"
    };
    if (newEffects.length > 0) {
        newNbt.CustomPotionEffects = newEffects; // 数组自动转换为 NBT 列表
    }

    // 返回新药水物品
    return Item.of('minecraft:potion', newNbt);
}

MBDMachineEvents.onAfterRecipeWorking("mbd2:modular_wixie_cauldron",e =>{
    const mbdEvent = e.getEvent();
    const { machine, recipe } = mbdEvent
    let level = machine.getLevel()
    
/**    let item1 = Item.of('minecraft:potion', '{CustomPotionEffects:[{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:36000,Id:106,ShowIcon:1b,ShowParticles:1b,"forge:id":"attributeslib:flying"},{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:36000,Id:106,ShowIcon:1b,ShowParticles:1b,"forge:id":"ars_nouveau:freezing"}],Potion:"ars_nouveau:freezing_potion"}')
    let item2 = Item.of('minecraft:potion', '{Potion:"alexscaves:strong_haste"}')
    console.log(combinePotionStacks(item1,item2).nbt) */

    const direction = machine.frontFacing.get(); // 机器正面朝向：'north', 'south', 'east', 'west'
    
    // 缓存机器坐标，提高性能
    const machineX = machine.pos.getX();
    const machineY = machine.pos.getY();
    const machineZ = machine.pos.getZ();

    /**
     * 根据机器朝向将相对坐标（左偏移、前偏移、Y偏移）转换为全局坐标
     * @param {number} relLeft  左偏移（正数向左，负数向右）
     * @param {number} relFore  前偏移（正数向前）
     * @param {number} relY     Y偏移（正数向上）
     * @returns {[number, number, number]} 全局坐标 [x, y, z]
     */
    function relativeToGlobal(relLeft, relFore, relY) {
        let x = machineX;
        let z = machineZ;

        switch (direction) {
            case 'south':
                x += relLeft;       // 左 => +X
                z += relFore;       // 前 => +Z
                break;
            case 'north':
                x -= relLeft;       // 左 => -X
                z -= relFore;       // 前 => -Z
                break;
            case 'east':
                x += relFore;       // 前 => +X
                z -= relLeft;       // 左 => -Z
                break;
            case 'west':
                x -= relFore;       // 前 => -X
                z += relLeft;       // 左 => +Z
                break;
            default:
                // 未知朝向，默认按原坐标处理（理论上不会发生）
                break;
        }

        const y = machineY + relY;
        return [x, y, z];
    }

    // 定义需要检查的三个位置（相对坐标：左偏移、前偏移、Y偏移）
    // 位置1：机器上方一格（正上方）
    const posCenter = relativeToGlobal(0, 0, 1);
    // 位置2：上方一格的左边一格（相对于机器正面左侧）
    const posLeft = relativeToGlobal(-1, 0, 1);
    // 位置3：上方一格的右边一格
    const posRight = relativeToGlobal(1, 0, 1);

    let block1 = level.getBlock(posCenter)
    let block2 = level.getBlock(posLeft)
    let block3 = level.getBlock(posRight)
    if (block1.getItem().getMod() != "functionalstorage" && block2.getItem().getMod() != "functionalstorage" && block3.getItem().getMod() != "functionalstorage") {
    if( block1.getInventory() != null && block2.getInventory() != null && block3.getInventory() != null ){
        let potionStack1 = block1.getInventory().getStackInSlot(0)
        let potionStack2 = block2.getInventory().getStackInSlot(0)
        let potionStack3 = block3.getInventory().getStackInSlot(0)
        if(potionStack1 === null && potionStack2.getId() === "minecraft:potion" && potionStack3.getId() === "minecraft:potion" ){
            let count = Math.min(potionStack2.getCount(),potionStack3.getCount(),16)
            potionStack2.count -= count
            potionStack3.count -= count
           let potionResult = combinePotionStacks(potionStack2,potionStack3)
           potionResult.count += (count-1)
           block1.getInventory().setStackInSlot(0,potionResult)
        }
    }}
})

const $ContentModifier = Java.loadClass('com.lowdragmc.mbd2.api.recipe.content.ContentModifier')

ServerEvents.recipes(event =>{
    event.recipes.mbd2.modular_vitalic_sourcelink()
    .inputItems("minecraft:rotten_flesh")
    .duration(1)
    .perTick(builder => builder
        .outputFluids("starbunclemania:source_fluid 1")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem")
    )

    event.recipes.mbd2.modular_vitalic_sourcelink()
    .inputItems("minecraft:rotten_flesh")
    .duration(1)
    .isXEIHidden(true)
    .perTick(builder => builder
        .outputFluids("kubejs:compression_liquid_source 1")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem_block")
    )

    event.recipes.mbd2.modular_vitalic_sourcelink()
    .inputItems("minecraft:rotten_flesh")
    .duration(1)
    .isXEIHidden(true)
    .perTick(builder => builder
        .outputFluids("kubejs:double_compression_liquid_source 1")
    )
    .chance(0,builder => builder
        .inputItems("kubejs:nouveau_essence")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#forge:crops")
    .duration(20)
    .perTick(builder => builder
        .outputFluids("starbunclemania:source_fluid 100")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#forge:crops")
    .duration(20)
    .isXEIHidden(true)
    .perTick(builder => builder
        .outputFluids("kubejs:compression_liquid_source 10")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem_block")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#forge:crops")
    .duration(20)
    .isXEIHidden(true)
    .perTick(builder => builder
        .outputFluids("kubejs:double_compression_liquid_source 1")
    )
    .chance(0,builder => builder
        .inputItems("kubejs:nouveau_essence")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#forge:seeds")
    .duration(20)
    .perTick(builder => builder
        .outputFluids("starbunclemania:source_fluid 100")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#forge:seeds")
    .duration(20)
    .isXEIHidden(true)
    .perTick(builder => builder
        .outputFluids("kubejs:compression_liquid_source 10")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem_block")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#forge:seeds")
    .duration(20)
    .isXEIHidden(true)
    .perTick(builder => builder
        .outputFluids("kubejs:double_compression_liquid_source 1")
    )
    .chance(0,builder => builder
        .inputItems("kubejs:nouveau_essence")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#minecraft:saplings")
    .duration(20)
    .perTick(builder => builder
        .outputFluids("starbunclemania:source_fluid 100")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#minecraft:saplings")
    .duration(20)
    .isXEIHidden(true)
    .perTick(builder => builder
        .outputFluids("kubejs:compression_liquid_source 10")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem_block")
    )

    event.recipes.mbd2.modular_agronomic_sourcelink()
    .inputItems("#minecraft:saplings")
    .duration(20)
    .isXEIHidden(true)
    .perTick(builder => builder
        .outputFluids("kubejs:double_compression_liquid_source 1")
    )
    .chance(0,builder => builder
        .inputItems("kubejs:nouveau_essence")
    )

    event.recipes.mbd2.modular_alchemical_sourcelink()
    .inputFluids("kubejs:alchemical_extraction_liquid 10")
    .duration(20)
    .perTick(builder => builder
        .outputFluids("starbunclemania:source_fluid 100")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem")
    )

    event.recipes.mbd2.modular_alchemical_sourcelink()
    .inputFluids("kubejs:alchemical_extraction_liquid 10")
    .duration(20)
    .perTick(builder => builder
        .outputFluids("kubejs:compression_liquid_source 10")
    )
    .chance(0,builder => builder
        .inputItems("ars_nouveau:source_gem_block")
    )

    event.recipes.mbd2.modular_alchemical_sourcelink()
    .inputFluids("kubejs:alchemical_extraction_liquid 10")
    .duration(20)
    .perTick(builder => builder
        .outputFluids("kubejs:double_compression_liquid_source 1")
    )
    .chance(0,builder => builder
        .inputItems("kubejs:nouveau_essence")
    )
})
MBDMachineEvents.onBeforeRecipeModify("mbd2:modular_vitalic_sourcelink",e =>{
    const { machine, recipe } = e.event
    let level = machine.getLevel()

    let model = 0

    const inputItem = recipe.inputs.values().toArray()
    inputItem[0].forEach(item =>{
        let content = item.getContent().getInner().getStacks()
        content.forEach(itemStack=>{
            if(itemStack.getId() === "ars_nouveau:source_gem"){
                model = 1
            }
            else if(itemStack.getId() === "ars_nouveau:source_gem_block"){
                model = 2
            }
            else if(itemStack.getId() === "kubejs:nouveau_essence"){
                model = 3
            }
        })
    })
    console.log(model)
    
    const direction = machine.frontFacing.get();
    
    // 缓存机器坐标，提高性能
    const machineX = machine.pos.getX();
    const machineY = machine.pos.getY();
    const machineZ = machine.pos.getZ();

    function relativeToGlobal(relLeft, relFore, relY) {
        let x = machineX;
        let z = machineZ;

        switch (direction) {
            case 'south':
                x += relLeft;       // 左 => +X
                z += relFore;       // 前 => +Z
                break;
            case 'north':
                x -= relLeft;       // 左 => -X
                z -= relFore;       // 前 => -Z
                break;
            case 'east':
                x += relFore;       // 前 => +X
                z -= relLeft;       // 左 => -Z
                break;
            case 'west':
                x -= relFore;       // 前 => -X
                z += relLeft;       // 左 => +Z
                break;
            default:
                break;
        }

        const y = machineY + relY;
        return [x, y, z];
    }

    let totalHealth = 0

    const posLow = relativeToGlobal(-1,-4,14)
    const posHigh = relativeToGlobal(2,-7,17)

    let entities = level.getEntitiesWithin(AABB.of(posLow[0], posLow[1], posLow[2], posHigh[0], posHigh[1], posHigh[2]))

    entities.forEach(entity =>{
        if (entity.type != 'minecraft:player' && entity.isLiving() && entity.type != "dummmmmmy:target_dummy") {
            totalHealth += entity.health
            entity.kill()
        }
    })
    let multiple = totalHealth ** (1/2)

    if(model = 1){
        let finilirecipe = e.event.getRecipe().copy($ContentModifier.multiplier(multiple*100),false,"out")
        finilirecipe.duration *= multiple
        e.event.setRecipe(finilirecipe)
    }
    else if(model = 2){
        let finilirecipe = e.event.getRecipe().copy($ContentModifier.multiplier(multiple*10),false,"out")
        finilirecipe.duration *= multiple
        e.event.setRecipe(finilirecipe)
    }
    else if(model = 3){
        let finilirecipe = e.event.getRecipe().copy($ContentModifier.multiplier(multiple*1),false,"out")
        finilirecipe.duration *= multiple
        e.event.setRecipe(finilirecipe)
    }
})

let NBTGrowthPoint = "growthPoint"
let NBTCropStage1 = "cropStage1"
let NBTCropStage2 = "cropStage2"
let NBTCropStage3 = "cropStage3"
let NBTCropStage4 = "cropStage4"
let NBTCropStage5 = "cropStage5"
let NBTCropStage6 = "cropStage6"
let NBTCropStage7 = "cropStage7"
let NBTCropStage8 = "cropStage8"
let NBTCropStage9 = "cropStage9"

MBDMachineEvents.onStructureFormed("mbd2:modualr_agronomic_sourcelink",e => {
    let event = e.event
    let machine = event.getMachine()
    let level = machine.getLevel()

    let growthpoint = 0

    const direction = machine.frontFacing.get();
    
    // 缓存机器坐标，提高性能
    const machineX = machine.pos.getX();
    const machineY = machine.pos.getY();
    const machineZ = machine.pos.getZ();

    function relativeToGlobal(relLeft, relFore, relY) {
        let x = machineX;
        let z = machineZ;

        switch (direction) {
            case 'south':
                x += relLeft;       // 左 => +X
                z += relFore;       // 前 => +Z
                break;
            case 'north':
                x -= relLeft;       // 左 => -X
                z -= relFore;       // 前 => -Z
                break;
            case 'east':
                x += relFore;       // 前 => +X
                z -= relLeft;       // 左 => -Z
                break;
            case 'west':
                x -= relFore;       // 前 => -X
                z += relLeft;       // 左 => +Z
                break;
            default:
                break;
        }

        const y = machineY + relY;
        return [x, y, z];
    }

    let pos1 = relativeToGlobal(-1,-3,7)
    let pos2 = relativeToGlobal(0,-3,7)
    let pos3 = relativeToGlobal(1,-3,7)
    let pos4 = relativeToGlobal(-1,-4,7)
    let pos5 = relativeToGlobal(0,-4,7)
    let pos6 = relativeToGlobal(1,-4,7)
    let pos7 = relativeToGlobal(-1,-5,7)
    let pos8 = relativeToGlobal(0,-5,7)
    let pos9 = relativeToGlobal(1,-5,7)

    let cropData1 = level.getBlock(pos1).properties.get("age")
    let cropData2 = level.getBlock(pos2).properties.get("age")
    let cropData3 = level.getBlock(pos3).properties.get("age")
    let cropData4 = level.getBlock(pos4).properties.get("age")
    let cropData5 = level.getBlock(pos5).properties.get("age")
    let cropData6 = level.getBlock(pos6).properties.get("age")
    let cropData7 = level.getBlock(pos7).properties.get("age")
    let cropData8 = level.getBlock(pos8).properties.get("age")
    let cropData9 = level.getBlock(pos9).properties.get("age")

    let data = event.getMachine().getCustomData()

    data.putInt(NBTGrowthPoint,growthpoint)

    if(cropData1 != null){
        data.putInt(NBTCropStage1,cropData1)
    }else{data.putInt(NBTCropStage1,0)}

    if(cropData2 != null){
        data.putInt(NBTCropStage2,cropData2)
    }else{data.putInt(NBTCropStage2,0)}

    if(cropData3 != null){
        data.putInt(NBTCropStage3,cropData3)
    }else{data.putInt(NBTCropStage3,0)}
    
    if(cropData4 != null){
        data.putInt(NBTCropStage4,cropData4)
    }else{data.putInt(NBTCropStage4,0)}
    
    if(cropData5 != null){
        data.putInt(NBTCropStage5,cropData5)
    }else{data.putInt(NBTCropStage5,0)}
    
    if(cropData6 != null){
        data.putInt(NBTCropStage6,cropData6)
    }else{data.putInt(NBTCropStage6,0)}
    
    if(cropData7 != null){
        data.putInt(NBTCropStage7,cropData7)
    }else{data.putInt(NBTCropStage7,0)}
    
    if(cropData8 != null){
        data.putInt(NBTCropStage8,cropData8)
    }else{data.putInt(NBTCropStage8,0)}
    
    if(cropData9 != null){
        data.putInt(NBTCropStage9,cropData9)
    }else{data.putInt(NBTCropStage9,0)}
})

MBDMachineEvents.onBeforeRecipeModify("mbd2:modualr_agronomic_sourcelink",e => {
    let { machine, recipe } = e.event
    let level = machine.getLevel()
    let data = machine.getCustomData()

    let multiples = (data.getInt(NBTGrowthPoint)+1)
    let finilirecipes = e.event.getRecipe().copy($ContentModifier.multiplier(multiples*10),false,"out")

    e.event.setRecipe(finilirecipes)
    data.putInt(NBTGrowthPoint,0)

    const direction = machine.frontFacing.get();
    
    // 缓存机器坐标，提高性能
    const machineX = machine.pos.getX();
    const machineY = machine.pos.getY();
    const machineZ = machine.pos.getZ();

    function relativeToGlobal(relLeft, relFore, relY) {
        let x = machineX;
        let z = machineZ;

        switch (direction) {
            case 'south':
                x += relLeft;       // 左 => +X
                z += relFore;       // 前 => +Z
                break;
            case 'north':
                x -= relLeft;       // 左 => -X
                z -= relFore;       // 前 => -Z
                break;
            case 'east':
                x += relFore;       // 前 => +X
                z -= relLeft;       // 左 => -Z
                break;
            case 'west':
                x -= relFore;       // 前 => -X
                z += relLeft;       // 左 => +Z
                break;
            default:
                break;
        }

        const y = machineY + relY;
        return [x, y, z];
    }

    let pos1 = relativeToGlobal(-1,-3,7)
    let pos2 = relativeToGlobal(0,-3,7)
    let pos3 = relativeToGlobal(1,-3,7)
    let pos4 = relativeToGlobal(-1,-4,7)
    let pos5 = relativeToGlobal(0,-4,7)
    let pos6 = relativeToGlobal(1,-4,7)
    let pos7 = relativeToGlobal(-1,-5,7)
    let pos8 = relativeToGlobal(0,-5,7)
    let pos9 = relativeToGlobal(1,-5,7)

    let basicStage1 = data.getInt(NBTCropStage1)
    let basicStage2 = data.getInt(NBTCropStage2)
    let basicStage3 = data.getInt(NBTCropStage3)
    let basicStage4 = data.getInt(NBTCropStage4)
    let basicStage5 = data.getInt(NBTCropStage5)
    let basicStage6 = data.getInt(NBTCropStage6)
    let basicStage7 = data.getInt(NBTCropStage7)
    let basicStage8 = data.getInt(NBTCropStage8)
    let basicStage9 = data.getInt(NBTCropStage9)

    let cropData1 = level.getBlock(pos1).properties.get("age")
    let cropData2 = level.getBlock(pos2).properties.get("age")
    let cropData3 = level.getBlock(pos3).properties.get("age")
    let cropData4 = level.getBlock(pos4).properties.get("age")
    let cropData5 = level.getBlock(pos5).properties.get("age")
    let cropData6 = level.getBlock(pos6).properties.get("age")
    let cropData7 = level.getBlock(pos7).properties.get("age")
    let cropData8 = level.getBlock(pos8).properties.get("age")
    let cropData9 = level.getBlock(pos9).properties.get("age")

    data.putInt(NBTCropStage1,cropData1)
    data.putInt(NBTCropStage2,cropData2)
    data.putInt(NBTCropStage3,cropData3)
    data.putInt(NBTCropStage4,cropData4)
    data.putInt(NBTCropStage5,cropData5)
    data.putInt(NBTCropStage6,cropData6)
    data.putInt(NBTCropStage7,cropData7)
    data.putInt(NBTCropStage8,cropData8)
    data.putInt(NBTCropStage9,cropData9)

    let totalPoint = Math.abs(cropData1-basicStage1) +
    Math.abs(cropData2-basicStage2) +
    Math.abs(cropData3-basicStage3) +
    Math.abs(cropData4-basicStage4) +
    Math.abs(cropData5-basicStage5) +
    Math.abs(cropData6-basicStage6) +
    Math.abs(cropData7-basicStage7) +
    Math.abs(cropData8-basicStage8) +
    Math.abs(cropData9-basicStage9)

    data.putInt(NBTGrowthPoint,totalPoint)

})