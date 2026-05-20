let $ManaInfusionRecipe = Java.loadClass("vazkii.botania.common.crafting.ManaInfusionRecipe")
let $RegistryAccess = Java.loadClass("net.minecraft.core.RegistryAccess")
let $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
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
        } else {
            let catalyst = null

            recipe.inputItems(inputsList)
                .outputItems([output])
                .inputMana(mana * 0.8)
        }
        
        event.mbdRecipe = recipe.buildMBDRecipe()
    }
})