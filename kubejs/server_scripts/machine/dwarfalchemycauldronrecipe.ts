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
}

ServerEvents.recipes(event => {
    oreSeedRecipes.forEach(recipe => registerLevel0CauldronRecipe(event, recipe))
})
