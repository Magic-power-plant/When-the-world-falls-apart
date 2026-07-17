export {}

let $ManaInfusionRecipe = Java.loadClass("vazkii.botania.common.crafting.ManaInfusionRecipe")
let $IngredientUtils = Java.loadClass("com.lowdragmc.mbd2.api.utils.IngredientUtils")

type ProxyTransferEvent = {
    recipeType: any
    proxyTypeId: string
    proxyRecipeId: string
    proxyRecipe: any
    mbdRecipe: any
}

function collectJavaList(list: any) {
    const values : any[] = []
    list.forEach((value : any) => {
        values.push(value)
    })
    return values
}

function transferEmberAlchemy(event: Internal.TransferProxyRecipeEvent) {
    if (event.proxyTypeId as unknown as string != "embers:alchemy") {
        return
    }

    let proxy = event.proxyRecipe as Internal.AlchemyRecipe
    let inputs = collectJavaList(proxy.inputs)
    let aspects = collectJavaList(proxy.aspects)
    let recipe = event.recipeType.recipeBuilder().id(event.proxyRecipeId + "_mbd2")

    recipe.inputItems(proxy.tablet)
        .inputItems(inputs)
        .chance(0, (builder:Internal.MBDRecipeSchema$MBDRecipeJS) => {
            builder.inputItems(aspects)
        })
        .outputItems(proxy.output)

    (event as {mbdRecipe : Internal.MBDRecipe}).mbdRecipe = recipe.buildMBDRecipe()
}

function transferManaInfusion(event: Internal.TransferProxyRecipeEvent) {
    if (event.proxyTypeId as unknown as string != "botania:mana_infusion") {
        return
    }
    // @ts-ignore
    let proxy = event.proxyRecipe as Internal.ManaInfusionRecipe
    let inputs = collectJavaList(proxy.getIngredients())
    let output = proxy.getResultItem(null as unknown as Internal.RegistryAccess_)
    let mana = proxy.getManaToConsume()
    let recipe = event.recipeType.recipeBuilder().id(event.proxyRecipeId + "_mbd2")

    if (proxy.getRecipeCatalyst() != null) {
        let catalyst = proxy.getRecipeCatalyst().getDisplayedStacks()

        recipe.inputItems(inputs).chance(0, (builder:Internal.MBDRecipeSchema$MBDRecipeJS) =>
            builder.inputItems([catalyst] as unknown as InputItem_[])
        )
            .outputItems([output])
            .inputMana(mana * 0.8)
            .duration(5)
    } else {
        recipe.inputItems(inputs)
            .outputItems([output])
            .inputMana(mana * 0.8)
            .duration(5)
    }

    (event as {mbdRecipe : Internal.MBDRecipe}).mbdRecipe = recipe.buildMBDRecipe()
}

function transferRunicAltar(event: Internal.TransferProxyRecipeEvent) {
    if (event.proxyTypeId as unknown as string != "botania:runic_altar") {
        return
    }

    let proxy = event.proxyRecipe as Internal.RunicAltarRecipe
    let inputs = collectJavaList($IngredientUtils.deduplicateElements(proxy.getIngredients().list))
    let output = proxy.getResultItem(null as unknown as Internal.RegistryAccess_)
    let mana = proxy.getManaUsage()
    let recipe = event.recipeType.recipeBuilder().id(event.proxyRecipeId + "_mbd2")

    recipe.inputItems(inputs)
        .outputItems([output])
        .inputMana(mana)
        .duration(1200)

    (event as {mbdRecipe : Internal.MBDRecipe}).mbdRecipe = recipe.buildMBDRecipe()
}

function addGenicInput(input: any, inputs: any[]) {
    input.getItemIds().forEach((id:String) => {
        if (id.match(/^botania:.*_petal$/)) {
            let color = id.match(/^botania:(.*)_.*$/)
            if (color) {
                inputs.push(Item.of(`kubejs:${color[1]}_gene` as Internal.ItemStack_))
            }
        } else if (id.match(/^botania:.*_mushroom$/)) {
            return
        } else {
            inputs.push(input)
        }
    })
}

function transferGenicAltar(event: Internal.TransferProxyRecipeEvent) {
    if (event.proxyTypeId as unknown as string != "botania:petal_apothecary") {
        return
    }

    let proxy = event.proxyRecipe
    let output = proxy.getResultItem(null as unknown as Internal.RegistryAccess_)
    let inputs : any[] = []
    let recipe = event.recipeType.recipeBuilder().id(event.proxyRecipeId + "_mbd2")

    proxy.getIngredients().forEach(input => {
        addGenicInput(input, inputs)
    })

    recipe.inputItems(inputs)
        .outputItems([output]).chance(0.5)
        .outputItems([output])
        .inputFluids([Fluid.of("minecraft:water")])
        .duration(6000)

    (event as {mbdRecipe : Internal.MBDRecipe}).mbdRecipe = recipe.buildMBDRecipe()
}

MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:modular_ember_alchemy", e => {
    transferEmberAlchemy(e.event)
    e.getEvent().mbdRecipe
})

MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:mana_pool", e => {
    transferManaInfusion(e.event)
})

MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:runic_altar", e => {
    transferRunicAltar(e.event)
})

MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:genic_altar", e => {
    transferGenicAltar(e.event)
})