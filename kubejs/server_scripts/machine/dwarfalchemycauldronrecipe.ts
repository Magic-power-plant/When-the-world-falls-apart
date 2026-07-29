export {}

type CauldronOreRecipe = {
    seed: string
    input: string
    output: string
}

const oreSeedRecipes: CauldronOreRecipe[] = [
    { seed: "embers:iron_crystal_seed", input: "#forge:cobblestone", output: "2x minecraft:iron_ore" },
    { seed: "embers:copper_crystal_seed", input: "#forge:cobblestone", output: "2x minecraft:copper_ore" },
    { seed: "embers:lead_crystal_seed", input: "#forge:cobblestone", output: "2x thermal:lead_ore" },
    { seed: "embers:silver_crystal_seed", input: "#forge:cobblestone", output: "2x thermal:silver_ore" },
    { seed: "embers:gold_crystal_seed", input: "#forge:cobblestone", output: "2x minecraft:gold_ore" },
    { seed: "embers:nickel_crystal_seed", input: "#forge:cobblestone", output: "2x thermal:nickel_ore" },
    { seed: "embers:tin_crystal_seed", input: "#forge:cobblestone", output: "2x thermal:tin_ore" },
]

function cauldronRecipeId(recipe: CauldronOreRecipe) {
    const inputId = recipe.input.replace(":", "_").replace("#", "")
    const outputId = recipe.output.replace(":", "_").replace(" ", "_")

    return `mbd2:${inputId}_to_${outputId}`
}

function registerLevel0CauldronRecipe(event: any, recipe: CauldronOreRecipe) {
    event.recipes.mbd2.dwarf_alchemy_cauldron()
        .id(cauldronRecipeId(recipe))
        .duration(100)
        .inputItems(recipe.input)
        .outputItems(recipe.output)
        .blocksInStructure(0, 0, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputEmber(10))
        .chance(0, (builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputItems(recipe.seed as InputItem_)
        )

    event.recipes.mbd2.dwarf_alchemy_cauldron()
        .id(cauldronRecipeId(recipe) + "_level1")
        .duration(100)
        .inputItems(recipe.input)
        .outputItems(recipe.output)
        .blocksInStructure(1, 1, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputFluids("embers_extended:liquid_ember 10"))
        .chance(0, (builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputItems(recipe.seed as InputItem_)
        )
}

ServerEvents.recipes(event => {
    oreSeedRecipes.forEach(recipe => registerLevel0CauldronRecipe(event, recipe))

    event.recipes.mbd2.dwarf_alchemy_cauldron()
        .duration(200)
        .inputItems("kubejs:shattered_pages")
        .inputFluids("kubejs:drygmy_brain_tissue 270")
        .outputFluids("kubejs:mind_nectar 180")
        .blocksInStructure(1, 1, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputFluids("embers_extended:liquid_ember 50"))
        .id("kubejs:mind_nectar_from_dwarf_alchemy_cauldron")

    event.recipes.mbd2.dwarf_alchemy_cauldron()
        .duration(200)
        .inputItems(["24x enchanted:wood_ash",Item.of('avaritia:singularity', '{Id:"kubejs:cobblestone_singularity"}').weakNBT()] as InputItem_[])
        .outputItems("3x enchanted:quicklime" as InputItem_)
        .blocksInStructure(1, 1, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputFluids("embers_extended:liquid_ember 50"))
        .id("kubejs:quicklime_from_dwarf_alchemy_cauldron")
})
