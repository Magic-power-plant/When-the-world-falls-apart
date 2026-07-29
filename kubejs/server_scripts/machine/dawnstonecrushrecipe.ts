export {}

type CrusherRecipe = {
    input: string
    output: string
}

const commonCrusherRecipes: CrusherRecipe[] = [
    { input: "minecraft:copper_ingot", output: "thermal:copper_dust" },
    { input: "embers:lead_ingot", output: "thermal:lead_dust" },
    { input: "minecraft:netherite_ingot", output: "thermal:netherite_dust" },
    { input: "thermal:lumium_ingot", output: "thermal:lumium_dust" },
    { input: "thermal:constantan_ingot", output: "thermal:constantan_dust" },
    { input: "ad_astra:steel_ingot", output: "thermal:steel_dust" },
    { input: "thermal:tin_ingot", output: "thermal:tin_dust" },
    { input: "minecraft:iron_ingot", output: "thermal:iron_dust" },
    { input: "thermal:invar_ingot", output: "thermal:invar_dust" },
    { input: "bloodmagic:ingot_hellforged", output: "bloodmagic:sand_hellforged" },
    { input: "thermal:nickel_ingot", output: "thermal:nickel_dust" },
    { input: "thermal:signalum_ingot", output: "thermal:signalum_dust" },
    { input: "thermal:electrum_ingot", output: "thermal:electrum_dust" },
    { input: "embers:silver_ingot", output: "thermal:silver_dust" },
    { input: "thermal:enderium_ingot", output: "thermal:enderium_dust" },
    { input: "occultism:iesnium_ingot", output: "occultism:iesnium_dust" },
    { input: "minecraft:gold_ingot", output: "thermal:gold_dust" },
    { input: "forbidden_arcanus:obsidian_ingot", output: "occultism:obsidian_dust" },
    { input: "thermal:bronze_ingot", output: "thermal:bronze_dust" },
    { input: "thermal:rose_gold_ingot", output: "thermal:rose_gold_dust" },
    { input: "minecraft:raw_copper", output: "2x thermal:copper_dust" },
    { input: "bloodmagic:rawdemonite", output: "2x bloodmagic:sand_hellforged" },
    { input: "occultism:raw_iesnium", output: "2x occultism:iesnium_dust" },
    { input: "embers:raw_silver", output: "2x thermal:silver_dust" },
    { input: "thermal:raw_nickel", output: "2x thermal:nickel_dust" },
    { input: "minecraft:raw_gold", output: "2x thermal:gold_dust" },
    { input: "embers:raw_lead", output: "2x thermal:lead_dust" },
    { input: "thermal:raw_tin", output: "2x thermal:tin_dust" },
    { input: "minecraft:raw_iron", output: "2x thermal:iron_dust" },
    { input: "#minecraft:diamond_ores", output: "3x thermal:diamond_dust" },
    { input: "thermal:cinnabar_ore", output: "3x thermal:cinnabar_dust" },
    { input: "bloodmagic:dungeon_ore", output: "3x bloodmagic:sand_hellforged" },
    { input: "forbidden_arcanus:arcane_crystal_ore", output: "3x forbidden_arcanus:arcane_crystal_dust" },
    { input: "minecraft:nether_quartz_ore", output: "3x thermal:quartz_dust" },
    { input: "#minecraft:copper_ores", output: "5x thermal:copper_dust" },
    { input: "#minecraft:coal_ores", output: "3x bloodmagic:coalsand" },
    { input: "embers:deepslate_lead_ore", output: "3x thermal:lead_dust" },
    { input: "thermal:deepslate_niter_ore", output: "3x thermal:niter_dust" },
    { input: "#minecraft:emerald_ores", output: "3x thermal:emerald_dust" },
    { input: "embers:deepslate_silver_ore", output: "3x thermal:silver_dust" },
    { input: "#minecraft:gold_ores", output: "3x thermal:gold_dust" },
    { input: "#minecraft:lapis_ores", output: "3x thermal:lapis_dust" },
    { input: "#minecraft:iron_ores", output: "3x thermal:iron_dust" },
    { input: "thermal:deepslate_ruby_ore", output: "3x thermal:ruby_dust" },
    { input: "thermal:deepslate_nickel_ore", output: "3x thermal:nickel_dust" },
    { input: "thermal:deepslate_sulfur_ore", output: "3x thermal:sulfur_dust" },
    { input: "thermal:deepslate_tin_ore", output: "3x thermal:tin_dust" },
    { input: "#minecraft:redstone_ores", output: "9x minecraft:redstone" },
    { input: "thermal:apatite_ore", output: "3x thermal:apatite_dust" },
    { input: "occultism:iesnium_ore", output: "3x occultism:iesnium_dust" },
    { input: "thermal:deepslate_sapphire_ore", output: "3x thermal:sapphire_dust" },
    { input: "alexscaves:raw_azure_neodymium", output: "2x kubejs:azure_neodymium_dust" },
    { input: "alexscaves:raw_scarlet_neodymium", output: "2x kubejs:scarlet_neodymium_dust" },
    { input: "ars_nouveau:source_gem", output: "kubejs:source_gem_dust" },
]

const extraBothLevelCrusherRecipes: CrusherRecipe[] = [
    { input: "minecraft:netherite_scrap", output: "2x kubejs:ancient_debris_fragment" },
    { input: "kubejs:ancient_debris_fragment", output: "2x kubejs:enriched_debris_powder" },
    { input: "2x alexscaves:depth_glass", output: "alexscaves:sea_glass_shards" },
]

function crusherRecipeId(inputItem: string, outputItem: string, levelPrefix: string) {
    const inputId = inputItem.replace(":", "_").replace("#", "").replace(" ", "")
    const outputId = outputItem.replace(":", "_").replace(" ", "_")

    return `mbd2:${levelPrefix}${inputId}_to_${outputId}`
}

function registerLevel0CrusherRecipe(event: any, recipe: CrusherRecipe) {
    event.recipes.mbd2.dawnstone_crusher_controller()
        .id(crusherRecipeId(recipe.input, recipe.output, ""))
        .duration(50)
        .inputItems(recipe.input)
        .outputItems(recipe.output)
        .blocksInStructure(0, 0, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputEmber(10))
}

function registerLevel1CrusherRecipe(event: any, recipe: CrusherRecipe) {
    event.recipes.mbd2.dawnstone_crusher_controller()
        .id(crusherRecipeId(recipe.input, recipe.output, "level1"))
        .duration(50)
        .inputItems(recipe.input)
        .outputItems(recipe.output)
        .blocksInStructure(1, 1, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputFluids("embers_extended:liquid_ember 10"))
}

function registerBothCrusherLevels(event: any, recipe: CrusherRecipe) {
    registerLevel0CrusherRecipe(event, recipe)
    registerLevel1CrusherRecipe(event, recipe)
}

ServerEvents.recipes((event) => {
    commonCrusherRecipes.forEach(recipe => registerLevel0CrusherRecipe(event, recipe))
    commonCrusherRecipes.forEach(recipe => registerLevel1CrusherRecipe(event, recipe))
    extraBothLevelCrusherRecipes.forEach(recipe => registerBothCrusherLevels(event, recipe))

    event.recipes.mbd2.dawnstone_crusher_controller()
        .inputItems(["2x eidolon:merammer_root","eidolon:pewter_blend","kubejs:nouveau_essence"] as unknown as InputItem_[])
        .outputItems("eidolon:merammer_resin")
        .duration(500)
        .blocksInStructure(1, 1, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick((builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputFluids("embers_extended:liquid_ember 50"))
});