MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:modular_ember_alchemy", e => {
    let event = e.event
    const {recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe} = event

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
        .chance(0,builder => {
            builder.inputItems(aspectList)
        })
        .outputItems(output)

        event.mbdRecipe = recipe.buildMBDRecipe()
    }
})