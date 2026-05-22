let $ManaInfusionRecipe = Java.loadClass("vazkii.botania.common.crafting.ManaInfusionRecipe")
let $RegistryAccess = Java.loadClass("net.minecraft.core.RegistryAccess")
let $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
let $RunicAltarRecipe = Java.loadClass("vazkii.botania.common.crafting.RunicAltarRecipe")
let $PetalsRecipe = Java.loadClass("vazkii.botania.common.crafting.PetalsRecipe")
MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:modular_ember_alchemy", e => {
    let event = e.event
    const { recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe } = event

    let inputList = []
    let aspectList = []

    if (proxyTypeId == "embers:alchemy") {
        let tablet = proxyRecipe.tablet

        /**@type {Internal.ArrayList} */
        let aspects = proxyRecipe.aspects

        /**@type {Internal.ArrayList} */
        let inputs = proxyRecipe.inputs

        let output = proxyRecipe.output

        inputs.forEach(input => {
            inputList.push(input)
        })

        aspects.forEach(aspects => {
            aspectList.push(aspects)
        })

        /**@type {Internal.MBDRecipeSchema$MBDRecipeJS} */
        var recipe = recipeType.recipeBuilder().id(proxyRecipeId + "_mbd2")
        recipe.inputItems(tablet)
            .inputItems(inputList)
            .chance(0, builder => {
                builder.inputItems(aspectList)
            })
            .outputItems(output)

        event.mbdRecipe = recipe.buildMBDRecipe()
    }
})
MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:mana_pool", e => {
    let event = e.event
    let inputsList = []
    const { recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe } = event

    /** @type {Internal.ManaInfusionRecipe}*/
    let proxy = proxyRecipe
    if (proxyTypeId == "botania:mana_infusion") {

        /**@type {Internal.ItemStack[]} */
        let inputs = proxy.getIngredients()

        /**@type {Internal.ItemStack} */
        let output = proxy.getResultItem(null)

        let mana = proxy.getManaToConsume()

        /**@type {Internal.MBDRecipeSchema$MBDRecipeJS} */
        let recipe = recipeType.recipeBuilder().id(proxyRecipeId + "_mbd2")

        inputs.forEach(input => {
            inputsList.push(input)
        })

        if (proxy.getRecipeCatalyst() != null) {
            let catalyst = proxy.getRecipeCatalyst().getDisplayedStacks()

            recipe.inputItems(inputsList).chance(0, builder =>
                builder.inputItems([catalyst])
            )
                .outputItems([output])
                .inputMana(mana * 0.8)
                .duration(5)
        } else {
            let catalyst = null

            recipe.inputItems(inputsList)
                .outputItems([output])
                .inputMana(mana * 0.8)
                .duration(5)
        }

        event.mbdRecipe = recipe.buildMBDRecipe()
    }
})
MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:runic_altar", e => {
    let event = e.event
    const { recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe } = event
    if (proxyTypeId == "botania:runic_altar") {
        /** @type {Internal.RunicAltarRecipe} */
        let proxy = proxyRecipe
        let inputslist = []
        let output = proxy.getResultItem(null)
        let mana = proxy.getManaUsage()
        let inputs = proxy.getIngredients()

        inputs.forEach(input => {
            inputslist.push(input)
        })

        /**@type {Internal.MBDRecipeSchema$MBDRecipeJS} */
        let recipe = recipeType.recipeBuilder().id(proxyRecipeId + "_mbd2")
        recipe.inputItems(inputslist)
            .outputItems([output])
            .inputMana(mana)
            .duration(1200)

        event.mbdRecipe = recipe.buildMBDRecipe()
    }
})
MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:genic_altar", e => {
    let event = e.event
    let inputslist = []
    const { recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe } = event
    if (proxyTypeId == "botania:petal_apothecary") {
        /** @type {Internal.PetalsRecipe} */
        let proxy = proxyRecipe
        let output = proxy.getResultItem(null)
        let inputs = proxy.getIngredients()
        inputs.forEach(input => {
            input.getItemIds().forEach(id => {
                if (id.match(/^botania:.*_petal$/)) {
                    let color = id.match(/^botania:(.*)_.*$/)[1]
                    let item = Item.of(`kubejs:${color}_gene`)
                    inputslist.push(item)
                } else if (id.match(/^botania:.*_mushroom$/)){
                    return
                } else {
                    inputslist.push(input)
                }
            })
        })
        /**@type {Internal.MBDRecipeSchema$MBDRecipeJS} */
        let recipe = recipeType.recipeBuilder().id(proxyRecipeId + "_mbd2")
        recipe.inputItems(inputslist)
            .outputItems([output]).chance(0.5)
            .outputItems([output])
            .inputFluids([Fluid.of("minecraft:water")])
            .duration(6000)

        event.mbdRecipe = recipe.buildMBDRecipe()
    }
})