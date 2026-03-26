ServerEvents.recipes((event) => {
//level 0
function registerDawnstoneCrusherRecipe(event, inputItem, outputItem) {

    const recipeId = `mbd2:${inputItem.replace(':', '_').replace('#','').replace(' ','')}_to_${outputItem.replace(':', '_').replace(' ','_')}`;
    
    event.recipes.mbd2.dawnstone_crusher_controller()
        .id(recipeId)
        .duration(50)
        .inputItems(inputItem)
        .outputItems(outputItem)
        .blocksInStructure(0, 0, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick(builder => builder
            .inputEmber(10)) 
}
//level 1
function level1registerDawnstoneCrusherRecipe(event, inputItem, outputItem) {

    const recipeId = `mbd2:level1${inputItem.replace(':', '_').replace('#','').replace(' ','')}_to_${outputItem.replace(':', '_').replace(' ','_')}`;
    
    event.recipes.mbd2.dawnstone_crusher_controller()
        .id(recipeId)
        .duration(50)
        .inputItems(inputItem)
        .outputItems(outputItem)
        .isXEIHidden(true)
        .blocksInStructure(1, 1, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick(builder => builder
            .inputFluids("embers_extended:liquid_ember 10")) 
}

function alllevelcrusher(event, inputItem, outputItem) {
    registerDawnstoneCrusherRecipe(event, inputItem, outputItem)
    level1registerDawnstoneCrusherRecipe(event, inputItem, outputItem)
}
    registerDawnstoneCrusherRecipe(event, "minecraft:copper_ingot", "thermal:copper_dust");
    registerDawnstoneCrusherRecipe(event, "embers:lead_ingot", "thermal:lead_dust");
    registerDawnstoneCrusherRecipe(event, "minecraft:netherite_ingot", "thermal:netherite_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:lumium_ingot", "thermal:lumium_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:constantan_ingot", "thermal:constantan_dust");
    registerDawnstoneCrusherRecipe(event, "ad_astra:steel_ingot", "thermal:steel_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:tin_ingot", "thermal:tin_dust");
    registerDawnstoneCrusherRecipe(event, "minecraft:iron_ingot", "thermal:iron_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:invar_ingot", "thermal:invar_dust");
    registerDawnstoneCrusherRecipe(event, "bloodmagic:ingot_hellforged", "bloodmagic:sand_hellforged");
    registerDawnstoneCrusherRecipe(event, "thermal:nickel_ingot", "thermal:nickel_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:signalum_ingot", "thermal:signalum_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:electrum_ingot", "thermal:electrum_dust");
    registerDawnstoneCrusherRecipe(event, "embers:silver_ingot", "thermal:silver_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:enderium_ingot", "thermal:enderium_dust");
    registerDawnstoneCrusherRecipe(event, "occultism:iesnium_ingot", "occultism:iesnium_dust");
    registerDawnstoneCrusherRecipe(event, "minecraft:gold_ingot", "thermal:gold_dust");
    registerDawnstoneCrusherRecipe(event, "forbidden_arcanus:obsidian_ingot", "occultism:obsidian_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:bronze_ingot", "thermal:bronze_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:rose_gold_ingot", "thermal:rose_gold_dust");

    registerDawnstoneCrusherRecipe(event, "minecraft:raw_copper", "2x thermal:copper_dust");
    registerDawnstoneCrusherRecipe(event, "bloodmagic:rawdemonite", "2x bloodmagic:sand_hellforged");
    registerDawnstoneCrusherRecipe(event, "occultism:raw_iesnium", "2x occultism:iesnium_dust");
    registerDawnstoneCrusherRecipe(event, "embers:raw_silver", "2x thermal:silver_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:raw_nickel", "2x thermal:nickel_dust");
    registerDawnstoneCrusherRecipe(event, "minecraft:raw_gold", "2x thermal:gold_dust");
    registerDawnstoneCrusherRecipe(event, "embers:raw_lead", "2x thermal:lead_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:raw_tin", "2x thermal:tin_dust");
    registerDawnstoneCrusherRecipe(event, "minecraft:raw_iron", "2x thermal:iron_dust");

    registerDawnstoneCrusherRecipe(event, "#minecraft:diamond_ores", "3x thermal:diamond_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:cinnabar_ore", "3x thermal:cinnabar_dust");
    registerDawnstoneCrusherRecipe(event, "bloodmagic:dungeon_ore", "3x bloodmagic:sand_hellforged");
    registerDawnstoneCrusherRecipe(event, "forbidden_arcanus:arcane_crystal_ore", "3x forbidden_arcanus:arcane_crystal_dust");
    registerDawnstoneCrusherRecipe(event, "minecraft:nether_quartz_ore", "3x thermal:quartz_dust");
    registerDawnstoneCrusherRecipe(event, "#minecraft:copper_ores", "5x thermal:copper_dust");
    registerDawnstoneCrusherRecipe(event, "#minecraft:coal_ores", "3x bloodmagic:coalsand");
    registerDawnstoneCrusherRecipe(event, "embers:deepslate_lead_ore", "3x thermal:lead_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:deepslate_niter_ore", "3x thermal:niter_dust");
    registerDawnstoneCrusherRecipe(event, "#minecraft:emerald_ores", "3x thermal:emerald_dust");
    registerDawnstoneCrusherRecipe(event, "embers:deepslate_silver_ore", "3x thermal:silver_dust");
    registerDawnstoneCrusherRecipe(event, "#minecraft:gold_ores", "3x thermal:gold_dust");
    registerDawnstoneCrusherRecipe(event, "#minecraft:lapis_ores", "3x thermal:lapis_dust");
    registerDawnstoneCrusherRecipe(event, "#minecraft:iron_ores", "3x thermal:iron_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:deepslate_ruby_ore", "3x thermal:ruby_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:deepslate_nickel_ore", "3x thermal:nickel_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:deepslate_sulfur_ore", "3x thermal:sulfur_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:deepslate_tin_ore", "3x thermal:tin_dust");
    registerDawnstoneCrusherRecipe(event, "#minecraft:redstone_ores", "9x minecraft:redstone");
    registerDawnstoneCrusherRecipe(event, "thermal:apatite_ore", "3x thermal:apatite_dust");
    registerDawnstoneCrusherRecipe(event, "occultism:iesnium_ore", "3x occultism:iesnium_dust");
    registerDawnstoneCrusherRecipe(event, "thermal:deepslate_sapphire_ore", "3x thermal:sapphire_dust");
    registerDawnstoneCrusherRecipe(event, "alexscaves:raw_azure_neodymium", "2x kubejs:azure_neodymium_dust")
    registerDawnstoneCrusherRecipe(event, "alexscaves:raw_scarlet_neodymium", "2x kubejs:scarlet_neodymium_dust")
registerDawnstoneCrusherRecipe(event,"ars_nouveau:source_gem","kubejs:source_gem_dust")



level1registerDawnstoneCrusherRecipe(event, "minecraft:copper_ingot", "thermal:copper_dust");
level1registerDawnstoneCrusherRecipe(event, "embers:lead_ingot", "thermal:lead_dust");
level1registerDawnstoneCrusherRecipe(event, "minecraft:netherite_ingot", "thermal:netherite_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:lumium_ingot", "thermal:lumium_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:constantan_ingot", "thermal:constantan_dust");
level1registerDawnstoneCrusherRecipe(event, "ad_astra:steel_ingot", "thermal:steel_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:tin_ingot", "thermal:tin_dust");
level1registerDawnstoneCrusherRecipe(event, "minecraft:iron_ingot", "thermal:iron_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:invar_ingot", "thermal:invar_dust");
level1registerDawnstoneCrusherRecipe(event, "bloodmagic:ingot_hellforged", "bloodmagic:sand_hellforged");
level1registerDawnstoneCrusherRecipe(event, "thermal:nickel_ingot", "thermal:nickel_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:signalum_ingot", "thermal:signalum_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:electrum_ingot", "thermal:electrum_dust");
level1registerDawnstoneCrusherRecipe(event, "embers:silver_ingot", "thermal:silver_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:enderium_ingot", "thermal:enderium_dust");
level1registerDawnstoneCrusherRecipe(event, "occultism:iesnium_ingot", "occultism:iesnium_dust");
level1registerDawnstoneCrusherRecipe(event, "minecraft:gold_ingot", "thermal:gold_dust");
level1registerDawnstoneCrusherRecipe(event, "forbidden_arcanus:obsidian_ingot", "occultism:obsidian_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:bronze_ingot", "thermal:bronze_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:rose_gold_ingot", "thermal:rose_gold_dust");

level1registerDawnstoneCrusherRecipe(event, "minecraft:raw_copper", "2x thermal:copper_dust");
level1registerDawnstoneCrusherRecipe(event, "bloodmagic:rawdemonite", "2x bloodmagic:sand_hellforged");
level1registerDawnstoneCrusherRecipe(event, "occultism:raw_iesnium", "2x occultism:iesnium_dust");
level1registerDawnstoneCrusherRecipe(event, "embers:raw_silver", "2x thermal:silver_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:raw_nickel", "2x thermal:nickel_dust");
level1registerDawnstoneCrusherRecipe(event, "minecraft:raw_gold", "2x thermal:gold_dust");
level1registerDawnstoneCrusherRecipe(event, "embers:raw_lead", "2x thermal:lead_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:raw_tin", "2x thermal:tin_dust");
level1registerDawnstoneCrusherRecipe(event, "minecraft:raw_iron", "2x thermal:iron_dust");

level1registerDawnstoneCrusherRecipe(event, "#minecraft:diamond_ores", "3x thermal:diamond_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:cinnabar_ore", "3x thermal:cinnabar_dust");
level1registerDawnstoneCrusherRecipe(event, "bloodmagic:dungeon_ore", "3x bloodmagic:sand_hellforged");
level1registerDawnstoneCrusherRecipe(event, "forbidden_arcanus:arcane_crystal_ore", "3x forbidden_arcanus:arcane_crystal_dust");
level1registerDawnstoneCrusherRecipe(event, "minecraft:nether_quartz_ore", "3x thermal:quartz_dust");
level1registerDawnstoneCrusherRecipe(event, "#minecraft:copper_ores", "5x thermal:copper_dust");
level1registerDawnstoneCrusherRecipe(event, "#minecraft:coal_ores", "3x bloodmagic:coalsand");
level1registerDawnstoneCrusherRecipe(event, "embers:deepslate_lead_ore", "3x thermal:lead_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:deepslate_niter_ore", "3x thermal:niter_dust");
level1registerDawnstoneCrusherRecipe(event, "#minecraft:emerald_ores", "3x thermal:emerald_dust");
level1registerDawnstoneCrusherRecipe(event, "embers:deepslate_silver_ore", "3x thermal:silver_dust");
level1registerDawnstoneCrusherRecipe(event, "#minecraft:gold_ores", "3x thermal:gold_dust");
level1registerDawnstoneCrusherRecipe(event, "#minecraft:lapis_ores", "3x thermal:lapis_dust");
level1registerDawnstoneCrusherRecipe(event, "#minecraft:iron_ores", "3x thermal:iron_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:deepslate_ruby_ore", "3x thermal:ruby_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:deepslate_nickel_ore", "3x thermal:nickel_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:deepslate_sulfur_ore", "3x thermal:sulfur_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:deepslate_tin_ore", "3x thermal:tin_dust");
level1registerDawnstoneCrusherRecipe(event, "#minecraft:redstone_ores", "9x minecraft:redstone");
level1registerDawnstoneCrusherRecipe(event, "thermal:apatite_ore", "3x thermal:apatite_dust");
level1registerDawnstoneCrusherRecipe(event, "occultism:iesnium_ore", "3x occultism:iesnium_dust");
level1registerDawnstoneCrusherRecipe(event, "thermal:deepslate_sapphire_ore", "3x thermal:sapphire_dust");
level1registerDawnstoneCrusherRecipe(event, "alexscaves:raw_azure_neodymium", "2x kubejs:azure_neodymium_dust")
level1registerDawnstoneCrusherRecipe(event, "alexscaves:raw_scarlet_neodymium", "2x kubejs:scarlet_neodymium_dust")
level1registerDawnstoneCrusherRecipe(event,"ars_nouveau:source_gem","kubejs:source_gem_dust")

alllevelcrusher(event,"minecraft:netherite_scrap","2x kubejs:ancient_debris_fragment")
alllevelcrusher(event,"kubejs:ancient_debris_fragment","2x kubejs:enriched_debris_powder")
alllevelcrusher(event,"2x alexscaves:depth_glass","alexscaves:sea_glass_shards")
});