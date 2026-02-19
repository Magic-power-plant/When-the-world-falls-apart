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

MBDMachineEvents.onBeforeRecipeWorking("mbd2:modular_wixie_cauldron",event =>{
    
})