export {}

const $RECIPE_TYPE = Java.loadClass("net.minecraft.world.item.crafting.RecipeType")
const $ForgeHooks = Java.loadClass("net.minecraftforge.common.ForgeHooks")
const $brewing = Java.loadClass("net.minecraft.world.item.alchemy.PotionBrewing")
const $Potions = Java.loadClass("net.minecraft.world.item.alchemy.Potion")
const $ContentModifier = Java.loadClass("com.lowdragmc.mbd2.api.recipe.content.ContentModifier")

const SMELTING = $RECIPE_TYPE.SMELTING
const POTION_MIXES = $brewing.POTION_MIXES
const WIXIE_TOOLTIP : string = "薇克精秘制"

type SourceTier = {
    catalyst: string
    outputFluid: string
    hidden: boolean
}

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

const STANDARD_SOURCE_TIERS: SourceTier[] = [
    { catalyst: "ars_nouveau:source_gem", outputFluid: "starbunclemania:source_fluid 100", hidden: false },
    { catalyst: "ars_nouveau:source_gem_block", outputFluid: "kubejs:compression_liquid_source 10", hidden: true },
    { catalyst: "kubejs:nouveau_essence", outputFluid: "kubejs:double_compression_liquid_source 1", hidden: true },
]

const VITALIC_SOURCE_TIERS: SourceTier[] = [
    { catalyst: "ars_nouveau:source_gem", outputFluid: "starbunclemania:source_fluid 1", hidden: false },
    { catalyst: "ars_nouveau:source_gem_block", outputFluid: "kubejs:compression_liquid_source 1", hidden: true },
    { catalyst: "kubejs:nouveau_essence", outputFluid: "kubejs:double_compression_liquid_source 1", hidden: true },
]

const ALCHEMICAL_SOURCE_TIERS: SourceTier[] = [
    { catalyst: "ars_nouveau:source_gem", outputFluid: "starbunclemania:source_fluid 100", hidden: false },
    { catalyst: "ars_nouveau:source_gem_block", outputFluid: "kubejs:compression_liquid_source 10", hidden: false },
    { catalyst: "kubejs:nouveau_essence", outputFluid: "kubejs:double_compression_liquid_source 1", hidden: false },
]

const AGRONOMIC_INPUTS = [
    "#forge:crops",
    "#forge:seeds",
    "#minecraft:saplings",
]

const NBT_GROWTH_POINT = "growthPoint"
const CROP_STAGE_KEYS = [
    "cropStage1",
    "cropStage2",
    "cropStage3",
    "cropStage4",
    "cropStage5",
    "cropStage6",
    "cropStage7",
    "cropStage8",
    "cropStage9",
]

const AGRONOMIC_CROP_POSITIONS: RelativePos[] = [
    { left: -1, fore: -3, y: 7 },
    { left: 0, fore: -3, y: 7 },
    { left: 1, fore: -3, y: 7 },
    { left: -1, fore: -4, y: 7 },
    { left: 0, fore: -4, y: 7 },
    { left: 1, fore: -4, y: 7 },
    { left: -1, fore: -5, y: 7 },
    { left: 0, fore: -5, y: 7 },
    { left: 1, fore: -5, y: 7 },
]

function machineAnchor(machine: any): MachineAnchor {
    return {
        x: machine.pos.getX(),
        y: machine.pos.getY(),
        z: machine.pos.getZ(),
        direction: machine.frontFacing.get(),
    }
}

function relativeToMachine(anchor: MachineAnchor, pos: RelativePos, legacySouthFallthrough: boolean) {
    let x = anchor.x
    let z = anchor.z

    switch (anchor.direction) {
        case "south":
            x += pos.left
            z += pos.fore
            if (!legacySouthFallthrough) {
                break
            }
        case "north":
            x -= pos.left
            z -= pos.fore
            break
        case "east":
            x += pos.fore
            z -= pos.left
            break
        case "west":
            x -= pos.fore
            z += pos.left
            break
        default:
            break
    }

    return [x, anchor.y + pos.y, z]
}

function applySourceTier(recipe: any, tier: SourceTier) {
    if (tier.hidden) {
        recipe.isXEIHidden(true)
    }

    recipe.perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.outputFluids(tier.outputFluid)
    )
    recipe.chance(0, (builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputItems(tier.catalyst as unknown as InputItem_[])
    )
}

function registerItemSourceRecipe(recipe: any, input: any, duration: number, tier: SourceTier) {
    recipe.inputItems(input)
    recipe.duration(duration)
    applySourceTier(recipe, tier)
}

function registerFluidSourceRecipe(recipe: any, inputFluid: string, duration: number, tier: SourceTier) {
    recipe.inputFluids(inputFluid)
    recipe.duration(duration)
    applySourceTier(recipe, tier)
}

function registerVolcanicSource(event: any, fuel: any, duration: number) {
    STANDARD_SOURCE_TIERS.forEach(tier => {
        registerItemSourceRecipe(event.recipes.mbd2.modular_volcanic_sourcelink(), fuel, duration, tier)
    })
}

function registerMycelialSource(event: any, food: any, duration: number) {
    STANDARD_SOURCE_TIERS.forEach(tier => {
        registerItemSourceRecipe(event.recipes.mbd2.modular_mycelial_sourcelink(), food, duration, tier)
    })
}

function registerVitalicSource(event: any) {
    VITALIC_SOURCE_TIERS.forEach(tier => {
        registerItemSourceRecipe(event.recipes.mbd2.modular_vitalic_sourcelink(), "minecraft:rotten_flesh", 1, tier)
    })
}

function registerAgronomicSource(event: any, input: string) {
    STANDARD_SOURCE_TIERS.forEach(tier => {
        registerItemSourceRecipe(event.recipes.mbd2.modular_agronomic_sourcelink(), input, 20, tier)
    })
}

function registerAlchemicalSource(event: any) {
    ALCHEMICAL_SOURCE_TIERS.forEach(tier => {
        registerFluidSourceRecipe(event.recipes.mbd2.modular_alchemical_sourcelink(), "kubejs:alchemical_extraction_liquid 10", 20, tier)
    })
}

function sourceDurationFromFood(food: any) {
    let foodProperties = food.getFoodProperties(null)
    if (foodProperties == null) {
        return 0
    }

    let hunger = foodProperties.getNutrition()
    let saturation = hunger * foodProperties.getSaturationModifier() * 2
    if (hunger <= 0 || saturation <= 0) {
        return 0
    }

    let hungerToSaturation = hunger / saturation
    let saturationToHunger = saturation / hunger
    return Math.ceil(hunger * Math.max(hungerToSaturation, saturationToHunger)) * hunger
}

function potionStack(itemId: string, potionId: string) {
    return Item.of(itemId as Internal.ItemStack_, `{Potion:"${potionId}"}`).weakNBT().withCount(6)
}

function wixiePotionOutput(itemId: string, potionId: string) {
    return Item.of(itemId as Internal.ItemStack_, { Potion: potionId, tooltips: WIXIE_TOOLTIP }).weakNBT().withCount(6)
}

function registerWixiePotionRecipe(event: any, inputItem: string, inputPotion: string, ingredient: any, outputItem: string, outputPotion: string, duration: number) {
    event.recipes.mbd2.modular_wixie_cauldron()
        .inputItems(potionStack(inputItem, inputPotion))
        .inputItems(ingredient)
        .outputItems("3x kubejs:herb_residue")
        .duration(duration)
        .outputItems(wixiePotionOutput(outputItem, outputPotion))
        .chance(0, (builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputEntities("1x ars_nouveau:wixie")
        )
        .perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputFluids("starbunclemania:source_fluid 10")
        )
}

function registerWixiePotionMix(event: any, potionMix: any) {
    let fromPotion = potionMix.from.key().location().toString()
    let toPotion = potionMix.to.key().location().toString()
    let ingredient = potionMix.ingredient

    registerWixiePotionRecipe(event, "minecraft:potion", fromPotion, ingredient, "minecraft:potion", toPotion, 200)
    registerWixiePotionRecipe(event, "minecraft:potion", toPotion, "minecraft:gunpowder", "minecraft:splash_potion", toPotion, 100)
    registerWixiePotionRecipe(event, "minecraft:splash_potion", toPotion, "minecraft:dragon_breath", "minecraft:lingering_potion", toPotion, 100)
    registerWixiePotionRecipe(event, "minecraft:splash_potion", fromPotion, ingredient, "minecraft:splash_potion", toPotion, 200)
    registerWixiePotionRecipe(event, "minecraft:lingering_potion", fromPotion, ingredient, "minecraft:lingering_potion", toPotion, 200)
}

function effectInstanceToNBT(effect: any) {
    let effectObj = effect.getEffect()
    let registryName = ""
    let effectId = -1

    try {
        if (effectObj.getRegistryName && typeof effectObj.getRegistryName === "function") {
            let registryNameObj = effectObj.getRegistryName()
            if (registryNameObj) {
                registryName = registryNameObj.toString()
            }
        }
    } catch (e) {
    }

    if (!registryName) {
        try {
            if (effectObj.getDescriptionId && typeof effectObj.getDescriptionId === "function") {
                let descId = effectObj.getDescriptionId()
                if (descId && descId.startsWith("effect.")) {
                    registryName = descId.substring(7).replace(".", ":")
                }
            }
        } catch (e) {
        }
    }

    try {
        if (effectObj.getId && typeof effectObj.getId === "function") {
            effectId = effectObj.getId()
        }
    } catch (e) {
    }

    if (!registryName) {
        registryName = "unknown:unknown"
    }

    return {
        Id: effectId,
        "forge:id": registryName,
        Amplifier: effect.getAmplifier(),
        Duration: effect.getDuration(),
        Ambient: effect.isAmbient() ? 1 : 0,
        ShowParticles: effect.isVisible() ? 1 : 0,
        ShowIcon: effect.showIcon() ? 1 : 0,
    }
}

function hasEffect(effects: any[], newEffect: any) {
    let newEffectId = newEffect["forge:id"] || (newEffect.Id >= 0 ? newEffect.Id : null)
    if (!newEffectId) {
        return false
    }

    return effects.some(effect => {
        let existingEffectId = effect["forge:id"] || (effect.Id >= 0 ? effect.Id : null)
        return existingEffectId === newEffectId
    })
}

function addUniqueEffect(effects: any[], effect: any) {
    if (!hasEffect(effects, effect)) {
        effects.push(effect)
    }
}

function combinePotionStacks(stack1: any, stack2: any) {
    let nbt1 = stack1.nbt
    let nbt2 = stack2.nbt
    if (!nbt1 || !nbt2) {
        return Item.of("minecraft:potion")
    }

    let potion1 = nbt1.Potion
    if (!potion1) {
        return Item.of("minecraft:potion")
    }

    let newEffects : any[] = []

    if (nbt1.CustomPotionEffects) {
        nbt1.CustomPotionEffects.forEach((effect : any[]) => {
            addUniqueEffect(newEffects, effect)
        })
    }

    let potion2 = nbt2.Potion
    if (potion2) {
        let potionObj = $Potions.byName(potion2)
        if (potionObj) {
            potionObj.getEffects().forEach(effect => {
                addUniqueEffect(newEffects, effectInstanceToNBT(effect))
            })
        }
    }

    if (nbt2.CustomPotionEffects) {
        nbt2.CustomPotionEffects.forEach((effect : any[]) => {
            addUniqueEffect(newEffects, effect)
        })
    }

    let newNbt: any = {
        Potion: potion1,
        tooltips: WIXIE_TOOLTIP,
    }

    if (newEffects.length > 0) {
        newNbt.CustomPotionEffects = newEffects
    }

    return Item.of("minecraft:potion", newNbt)
}

function mergeAdjacentPotionStacks(level: any, machine: any) {
    let anchor = machineAnchor(machine)
    let center = relativeToMachine(anchor, { left: 0, fore: 0, y: 1 }, false)
    let left = relativeToMachine(anchor, { left: -1, fore: 0, y: 1 }, false)
    let right = relativeToMachine(anchor, { left: 1, fore: 0, y: 1 }, false)
    let blockCenter = level.getBlock(center)
    let blockLeft = level.getBlock(left)
    let blockRight = level.getBlock(right)

    if (blockCenter.getItem().getMod() != "functionalstorage" && blockLeft.getItem().getMod() != "functionalstorage" && blockRight.getItem().getMod() != "functionalstorage") {
        if (blockCenter.getInventory() != null && blockLeft.getInventory() != null && blockRight.getInventory() != null) {
            let potionStack1 = blockCenter.getInventory().getStackInSlot(0)
            let potionStack2 = blockLeft.getInventory().getStackInSlot(0)
            let potionStack3 = blockRight.getInventory().getStackInSlot(0)

            if (potionStack1 === null && potionStack2.getId() === "minecraft:potion" && potionStack3.getId() === "minecraft:potion") {
                let count = Math.min(potionStack2.getCount(), potionStack3.getCount(), 16)
                potionStack2.count -= count
                potionStack3.count -= count

                let potionResult = combinePotionStacks(potionStack2, potionStack3)
                potionResult.count += count - 1
                blockCenter.getInventory().setStackInSlot(0, potionResult)
            }
        }
    }
}

function readSourceModel(recipe: any) {
    let model = 0
    let inputItems = recipe.inputs.values().toArray()

    inputItems[0].forEach((item:Internal.Content) => {
        let content = item.getContent().getInner().getStacks()
        content.forEach((itemStack:Internal.ItemStack) => {
            if (itemStack.getId() === "ars_nouveau:source_gem") {
                model = 1
            } else if (itemStack.getId() === "ars_nouveau:source_gem_block") {
                model = 2
            } else if (itemStack.getId() === "kubejs:nouveau_essence") {
                model = 3
            }
        })
    })

    return model
}

function drainVitalicEntities(level: any, machine: any) {
    let anchor = machineAnchor(machine)
    let posLow = relativeToMachine(anchor, { left: -1, fore: -4, y: 14 }, false)
    let posHigh = relativeToMachine(anchor, { left: 2, fore: -7, y: 17 }, false)
    let entities = level.getEntitiesWithin(AABB.of(posLow[0], posLow[1], posLow[2], posHigh[0], posHigh[1], posHigh[2]))
    let totalHealth = 0

    entities.forEach((entity:Internal.Entity) => {
        if (entity.type != "minecraft:player" && entity.isLiving() && entity.type != "dummmmmmy:target_dummy") {
            let livingEntity = entity as unknown as Internal.LivingEntity
            totalHealth += livingEntity.health
            entity.kill()
        }
    })

    return totalHealth
}

function cropStages(level: any, machine: any, legacySouthFallthrough: boolean) {
    let anchor = machineAnchor(machine)
    let stages : any[] = []

    AGRONOMIC_CROP_POSITIONS.forEach(pos => {
        let globalPos = relativeToMachine(anchor, pos, legacySouthFallthrough)
        stages.push(level.getBlock(globalPos).properties.get("age"))
    })

    return stages
}

function writeInitialCropStages(data: any, stages: any[]) {
    data.putInt(NBT_GROWTH_POINT, 0)

    for (let i = 0; i < CROP_STAGE_KEYS.length; i++) {
        let stage = stages[i]
        data.putInt(CROP_STAGE_KEYS[i], stage != null ? stage : 0)
    }
}

function storedCropStages(data: any) {
    let stages = []
    for (let i = 0; i < CROP_STAGE_KEYS.length; i++) {
        stages.push(data.getInt(CROP_STAGE_KEYS[i]))
    }
    return stages
}

function writeCropStages(data: any, stages: any[]) {
    for (let i = 0; i < CROP_STAGE_KEYS.length; i++) {
        data.putInt(CROP_STAGE_KEYS[i], stages[i])
    }
}

function growthPointFromStages(previousStages: any[], currentStages: any[]) {
    let totalPoint = 0
    for (let i = 0; i < CROP_STAGE_KEYS.length; i++) {
        totalPoint += Math.abs(currentStages[i] - previousStages[i])
    }
    return totalPoint
}

ServerEvents.recipes(event => {
    Ingredient.all.stacks.forEach(fuel => {
        let burnTime = $ForgeHooks.getBurnTime(fuel, SMELTING)
        if (burnTime > 0) {
            registerVolcanicSource(event, fuel, Math.ceil(burnTime / (200 / 9)))
        }
    })

    Ingredient.all.stacks.forEach(food => {
        let duration = sourceDurationFromFood(food)
        if (duration > 0) {
            registerMycelialSource(event, food, duration)
        }
    })

    POTION_MIXES.forEach(potionMix => {
        registerWixiePotionMix(event, potionMix)
    })
})

MBDMachineEvents.onAfterRecipeWorking("mbd2:modular_wixie_cauldron", e => {
    const mbdEvent = e.getEvent()
    const { machine } = mbdEvent

    mergeAdjacentPotionStacks(machine.getLevel(), machine)
})

ServerEvents.recipes(event => {
    registerVitalicSource(event)
    AGRONOMIC_INPUTS.forEach(input => {
        registerAgronomicSource(event, input)
    })
    registerAlchemicalSource(event)
})

MBDMachineEvents.onBeforeRecipeModify("mbd2:modular_vitalic_sourcelink", e => {
    const { machine, recipe } = e.event
    let level = machine.getLevel()
    let model = readSourceModel(recipe)
    let multiple = drainVitalicEntities(level, machine) ** (1 / 2)

    if (model = 1) {
        let finalRecipe = e.event.getRecipe().copy($ContentModifier.multiplier(multiple * 100), false, "out")
        finalRecipe.duration *= multiple
        e.event.setRecipe(finalRecipe)
    } else if (model = 2) {
        let finalRecipe = e.event.getRecipe().copy($ContentModifier.multiplier(multiple * 10), false, "out")
        finalRecipe.duration *= multiple
        e.event.setRecipe(finalRecipe)
    } else if (model = 3) {
        let finalRecipe = e.event.getRecipe().copy($ContentModifier.multiplier(multiple * 1), false, "out")
        finalRecipe.duration *= multiple
        e.event.setRecipe(finalRecipe)
    }
})

MBDMachineEvents.onStructureFormed("mbd2:modualr_agronomic_sourcelink", e => {
    let event = e.event
    let machine = event.getMachine()
    let level = machine.getLevel()
    let data = event.getMachine().getCustomData()
    let stages = cropStages(level, machine, true)

    writeInitialCropStages(data, stages)
})

MBDMachineEvents.onBeforeRecipeModify("mbd2:modualr_agronomic_sourcelink", e => {
    let { machine } = e.event
    let level = machine.getLevel()
    let data = machine.getCustomData()
    let multiples = data.getInt(NBT_GROWTH_POINT) + 1
    let finalRecipe = e.event.getRecipe().copy($ContentModifier.multiplier(multiples * 10), false, "out")

    e.event.setRecipe(finalRecipe)
    data.putInt(NBT_GROWTH_POINT, 0)

    let previousStages = storedCropStages(data)
    let currentStages = cropStages(level, machine, false)
    writeCropStages(data, currentStages)
    data.putInt(NBT_GROWTH_POINT, growthPointFromStages(previousStages, currentStages))
})
