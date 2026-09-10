import {ItemRef} from "../globalFunction"
export {}

type ItemOutput = ItemRef | (() => any)
type KeyMap = {[key: string]: ItemRef | (() => any) | Internal.Ingredient}
type RecipeExtras = {
    damage?: {item: ItemRef; amount: number}
    keep?: ItemRef
    id?: string
}

type RecipeBuilderMethods = {
    shaped: (output: any, pattern: string[], key: KeyMap) => any
    shapeless: (output: any, inputs: any[]) => any
    campfireCooking: (output: any, input: any, xp: number, time: number) => any
    smelting: (output: any, input: any, xp?: number, time?: number) => any
}

function nbtItem(item: ItemRef, nbt: string) {
    return function () {
        return Item.of(item as any, nbt)
    }
}

function outputOf(value: ItemOutput) {
    return typeof value == "function" ? value() : value
}

function applyExtras(builder: any, extras?: RecipeExtras) {
    if (!extras) return
    if (extras.damage) builder.damageIngredient(extras.damage.item, extras.damage.amount)
    if (extras.keep) builder.keepIngredient(extras.keep)
    if (extras.id) builder.id(extras.id)
}

function shaped(event: Internal.RecipesEventJS, output: ItemOutput, pattern: string[], key: KeyMap, extras?: RecipeExtras) {
    const builder = (event as unknown as RecipeBuilderMethods).shaped(outputOf(output), pattern, key)
    applyExtras(builder, extras)
}

function shapeless(event: Internal.RecipesEventJS, output: ItemOutput, inputs: any[], extras?: RecipeExtras) {
    const builder = (event as unknown as RecipeBuilderMethods).shapeless(outputOf(output), inputs)
    applyExtras(builder, extras)
}

function campfire(event: Internal.RecipesEventJS, output: ItemOutput, input: any, xp?: number, time?: number, extras?: RecipeExtras) {
    const builder = (event as unknown as RecipeBuilderMethods).campfireCooking(outputOf(output), input, xp as number, time as number)
    applyExtras(builder, extras)
}

function smelting(event: Internal.RecipesEventJS, output: ItemOutput, input: any, extras?: RecipeExtras) {
    const builder = (event as unknown as RecipeBuilderMethods).smelting(outputOf(output), input)
    applyExtras(builder, extras)
}

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    // Shaped crafting
    shaped(event, "minecraft:crafting_table", ["pp ", "ll ", "   "], {
        p: "#minecraft:planks",
        l: "#minecraft:logs"
    })
    shaped(event, "kubejs:fliny_hammer", [" fs", " sf", "s  "], {
        f: "minecraft:flint",
        s: "#forge:rods/wooden"
    })
    shaped(event, "2x kubejs:stone_iron_rod", ["  s", " ts", "  s"], {
        s: "kubejs:stone_iron_ingot",
        t: "embers:tinker_hammer"
    }, {keep: "embers:tinker_hammer"})
    shaped(event, "2x kubejs:simple_basic_component", ["srs", "rpr", "srs"], {
        r: "kubejs:stone_iron_rod",
        p: "kubejs:caminite_stoneiron_combine_plate",
        s: "kubejs:stone_iron_plate"
    })
    shaped(event, "kubejs:caminite_machine_frame", ["qcq", "bfb", "ada"], {
        c: "kubejs:caminite_stoneiron_combine_plate",
        b: "kubejs:stone_iron_rod",
        f: "kubejs:simple_basic_component",
        q: "minecraft:cobblestone",
        a: "embers:caminite_bricks",
        d: "kubejs:stone_iron_plate"
    })
    shaped(event, "embers:mechanical_core", ["sgs", "lfl", "s s"], {
        g: "kubejs:caminite_machine_frame",
        s: "kubejs:stone_iron_plate",
        l: "thermal:lead_plate",
        f: "kubejs:caminite_stoneiron_combine_plate"
    })
    shaped(event, "embers:ember_bore", ["eme", "fcf", "bsb"], {
        e: "thermal:copper_plate",
        m: "embers:mechanical_core",
        f: "kubejs:stone_iron_plate",
        c: "kubejs:simple_basic_component",
        s: "kubejs:stone_iron_rod",
        b: "embers:caminite_bricks"
    })
    shaped(event, "2x kubejs:copper_rod", ["  s", " ts", "  s"], {
        s: "minecraft:copper_ingot",
        t: "embers:tinker_hammer"
    }, {keep: "embers:tinker_hammer"})
    shaped(event, "embers:ember_activator", ["ece", "fmf", " b "], {
        e: "thermal:copper_plate",
        c: "kubejs:copper_rod",
        f: "kubejs:stone_iron_plate",
        m: "kubejs:caminite_machine_frame",
        b: "kubejs:simple_basic_component"
    })
    shaped(event, "minecraft:hopper", ["bpb", "ici", " i "], {
        i: "kubejs:stone_iron_ingot",
        p: "kubejs:stone_iron_plate",
        c: "kubejs:simple_basic_component",
        b: "kubejs:stone_iron_block"
    })
    shaped(event, "embers:melter", ["eme", "cfc", "aba"], {
        e: "thermal:copper_plate",
        m: "kubejs:caminite_stoneiron_combine_plate",
        c: "embers:caminite_bricks",
        f: "kubejs:caminite_machine_frame",
        a: "kubejs:stone_iron_plate",
        b: "kubejs:simple_basic_component"
    })
    shaped(event, "8x embers:fluid_pipe", [" c ", "aba", " c "], {
        a: "kubejs:stone_iron_ingot",
        c: "kubejs:stone_iron_plate",
        b: "kubejs:simple_basic_component"
    })
    shaped(event, "8x embers:item_pipe", [" c ", "aba", " c "], {
        a: "minecraft:copper_ingot",
        c: "thermal:copper_plate",
        b: "kubejs:simple_basic_component"
    })
    shaped(event, "embers:fluid_extractor", [" a ", "cfc", " a "], {
        a: "minecraft:redstone",
        c: "embers:fluid_pipe",
        f: "kubejs:simple_basic_component"
    })
    shaped(event, "embers:item_extractor", [" a ", "cfc", " a "], {
        a: "minecraft:redstone",
        c: "embers:item_pipe",
        f: "kubejs:simple_basic_component"
    })
    shaped(event, "2x embers:fluid_vessel", ["a a", "bcb", "ada"], {
        a: "embers:caminite_brick",
        b: "kubejs:stone_iron_plate",
        c: "kubejs:caminite_machine_frame",
        d: "kubejs:stone_iron_ingot"
    })
    shaped(event, "embers:stamper", ["aba", "aca", " c "], {
        a: "embers:caminite_brick",
        b: "kubejs:caminite_machine_frame",
        c: "kubejs:stone_iron_block"
    })
    shaped(event, "embers:tinker_hammer", ["aba", " c ", " c "], {
        a: "kubejs:stone_iron_ingot",
        b: "thermal:lead_ingot",
        c: "#forge:rods/wooden"
    })
    shaped(event, "embers:tinker_lens", ["abc", "deb", "abc"], {
        a: "kubejs:stone_iron_ingot",
        b: "thermal:lead_nugget",
        c: "#forge:glass",
        d: "thermal:lead_plate",
        e: "kubejs:simple_basic_component"
    })
    shaped(event, "embers:atmospheric_gauge", [" a ", "bcb", "bdb"], {
        a: "minecraft:redstone",
        b: "thermal:copper_plate",
        c: "kubejs:simple_basic_component",
        d: "kubejs:stone_iron_ingot"
    })
    shaped(event, "embers:ember_dial", [" a ", " b ", "   "], {
        a: "kubejs:simple_basic_component",
        b: "thermal:copper_plate"
    })
    shaped(event, "embers:item_dial", [" a ", " b ", "   "], {
        a: "kubejs:simple_basic_component",
        b: "thermal:lead_plate"
    })
    shaped(event, "embers:fluid_dial", [" a ", " b ", "   "], {
        a: "kubejs:simple_basic_component",
        b: "kubejs:stone_iron_plate"
    })
    shaped(event, "embers:stamp_base", ["   ", "aba", "cdc"], {
        a: "kubejs:stone_iron_plate",
        b: "kubejs:caminite_machine_frame",
        c: "embers:caminite_brick",
        d: "kubejs:stone_iron_block"
    })
    shaped(event, "5x embers:ember_emitter", [" a ", " b ", "cdc"], {
        a: "minecraft:lightning_rod",
        b: "kubejs:caminite_machine_frame",
        c: "kubejs:stone_iron_plate",
        d: "kubejs:simple_basic_component"
    })
    shaped(event, "5x embers:ember_receiver", ["   ", "aba", "cdc"], {
        a: "kubejs:stone_iron_plate",
        b: "kubejs:caminite_machine_frame",
        c: "thermal:copper_plate",
        d: "kubejs:simple_basic_component"
    })
    shaped(event, "2x embers:bin", ["a a", "aba", "ccc"], {
        a: "thermal:lead_ingot",
        b: "kubejs:caminite_machine_frame",
        c: "thermal:lead_plate"
    })
    shaped(event, "embers:clockwork_attenuator", [" a ", " b ", "   "], {
        a: "kubejs:simple_basic_component",
        b: "thermal:silver_plate"
    })
    shaped(event, "embers:ember_siphon", ["aba", " c ", "ddd"], {
        a: "embers:caminite_brick",
        b: "thermal:copper_plate",
        c: "kubejs:caminite_machine_frame",
        d: "embers:caminite_plate"
    })
    shaped(event, "embers:mechanical_pump", ["aba", "cdc", "e e"], {
        a: "embers:fluid_pipe",
        b: "embers:fluid_extractor",
        c: "kubejs:stone_iron_plate",
        d: "kubejs:caminite_machine_frame",
        e: "embers:caminite_plate"
    })
    shaped(event, "embers:mini_boiler", ["aba", "cdb", "aba"], {
        a: "kubejs:stone_iron_plate",
        b: "kubejs:stone_iron_block",
        c: "thermal:steel_block",
        d: "kubejs:caminite_machine_frame"
    })
    shaped(event, "minecraft:furnace", ["aba", "cdc", "aba"], {
        a: "minecraft:cobblestone",
        b: "thermal:iron_plate",
        c: "#forge:rods/iron",
        d: "kubejs:caminite_machine_frame"
    })
    shaped(event, "minecraft:chest", ["aaa", "bcb", "aaa"], {
        a: "#minecraft:planks",
        b: "#forge:rods/wooden",
        c: "embers:bin"
    })
    shaped(event, "2x minecraft:barrel", ["aba", "aca", "aba"], {
        a: "#minecraft:planks",
        b: "#minecraft:wooden_slabs",
        c: "minecraft:chest"
    })
    shaped(event, "embers:hearth_coil", ["aaa", "bcb", "ded"], {
        a: "thermal:copper_plate",
        b: "thermal:iron_plate",
        c: "minecraft:copper_block",
        d: "minecraft:furnace",
        e: "embers:mechanical_core"
    })
    shaped(event, "kubejs:dawnstone_machine_frame", ["aba", "bcb", "aba"], {
        a: "embers:dawnstone_ingot",
        b: "embers:dawnstone_plate",
        c: "kubejs:caminite_machine_frame"
    })
    shaped(event, "embers:alchemy_pedestal", ["a a", "bcb", "ded"], {
        a: "embers:dawnstone_plate",
        b: "embers:dawnstone_ingot",
        c: "embers:ember_crystal",
        d: "embers:caminite_bricks",
        e: "kubejs:dawnstone_machine_frame"
    })
    shaped(event, "embers:alchemy_tablet", [" a ", "bcb", "bdb"], {
        a: "embers:dawnstone_plate",
        b: "embers:caminite_bricks",
        c: "kubejs:dawnstone_machine_frame",
        d: "embers:dawnstone_ingot"
    })
    shaped(event, "embers:beam_cannon", ["aba", "aba", "cdc"], {
        a: "thermal:copper_plate",
        b: "embers:ember_crystal",
        c: "embers:dawnstone_ingot",
        d: "kubejs:dawnstone_machine_frame"
    })
    shaped(event, "embers:ancient_golem_spawn_egg", [" a ", "aba", " a "], {
        a: "embers:caminite_brick",
        b: "kubejs:stone_iron_ingot"
    })
    shaped(event, "embers_extended:liquifier", [" a ", "bcb", "ded"], {
        a: "embers:intelligent_apparatus",
        b: "thermal:steel_ingot",
        c: "embers:wildfire_core",
        d: "embers:dawnstone_plate",
        e: "kubejs:dawnstone_machine_frame"
    })
    shaped(event, "embers_extended:ember_infuser", [" a ", "bcb", "ded"], {
        a: "embers:fluid_vessel",
        b: "embers:dawnstone_plate",
        c: "embers:focal_lens",
        d: "embers:caminite_bricks",
        e: "kubejs:dawnstone_machine_frame"
    })
    shaped(event, "tconstruct:seared_melter", ["   ", "aba", "aca"], {
        a: "tconstruct:seared_brick",
        b: "kubejs:ember_dawnstone_component",
        c: "embers:melter"
    })
    shaped(event, "tconstruct:seared_table", ["aaa", "aba", "a a"], {
        a: "tconstruct:seared_brick",
        b: "kubejs:ember_dawnstone_component"
    })
    shaped(event, "tconstruct:seared_basin", ["a a", "aba", "aaa"], {
        a: "tconstruct:seared_brick",
        b: "kubejs:ember_dawnstone_component"
    })
    shaped(event, "tconstruct:scorched_table", ["aaa", "aba", "a a"], {
        a: "tconstruct:scorched_brick",
        b: "kubejs:ember_dawnstone_component"
    })
    shaped(event, "tconstruct:scorched_basin", ["a a", "aba", "aaa"], {
        a: "tconstruct:scorched_brick",
        b: "kubejs:ember_dawnstone_component"
    })
    shaped(event, nbtItem("alexscaves:cave_map", "{BiomeTargetResourceKey:\"alexscaves:primordial_caves\"}"), [" a ", "aba", " a "], {
        a: "embers:archaic_brick",
        b: "minecraft:paper"
    })
    shaped(event, "kubejs:stoneiron_machine_shell", [" a ", "aba", " a "], {
        a: "kubejs:stone_iron_plate",
        b: "kubejs:caminite_machine_frame"
    })
    shaped(event, "kubejs:dawnstone_machine_shell", [" a ", "aba", " a "], {
        a: "embers:dawnstone_plate",
        b: "kubejs:dawnstone_machine_frame"
    })
    shaped(event, "mbd2:dawnstone_crusher_controller", ["aba", "bcb", "aba"], {
        a: "kubejs:dawnstone_machine_frame",
        b: "embers:dawnstone_block",
        c: "kubejs:ember_dawnstone_component"
    })
    shaped(event, "mbd2:item_input_bin_dawnstone", [" a ", "aba", " a "], {
        a: "embers:dawnstone_plate",
        b: "embers:bin"
    })
    shaped(event, "mbd2:item_output_bin_dawnstone", ["a a", " b ", "a a"], {
        a: "embers:dawnstone_plate",
        b: "embers:bin"
    })
    shaped(event, "mbd2:fluid_input_bin_dawnstone", [" a ", "aba", " a "], {
        a: "embers:dawnstone_plate",
        b: "embers:fluid_vessel"
    })
    shaped(event, "mbd2:ember_input_bin", [" a ", " b ", " c "], {
        a: "embers:copper_cell",
        b: "kubejs:ember_dawnstone_component",
        c: "kubejs:dawnstone_machine_frame"
    })
    shaped(event, "kubejs:reinforced_archwood_planks", [" a ", "aba", " a "], {
        a: "kubejs:burn_sun_plate",
        b: "ars_nouveau:archwood_planks"
    })
    shaped(event, "3x kubejs:burn_sun_ingot", [" a ", "b c", " d "], {
        a: "kubejs:burn_sun_ingot",
        b: "embers_extended:duskstone_ingot",
        c: "embers_extended:nightstone_ingot",
        d: "kubejs:ember_dawnstone_ingot"
    })
    shaped(event, "mob_grinding_utils:tank", ["aba", "bbb", "aba"], {
        a: "embers:fluid_vessel",
        b: "#forge:glass"
    })
    shaped(event, "4x portabletanks:basic_portable_tank", ["aba", "bcb", "aba"], {
        a: "minecraft:iron_ingot",
        b: "#forge:glass",
        c: "mob_grinding_utils:tank"
    })
    shaped(event, "ars_nouveau:arcane_pedestal", ["aaa", " b ", "ccc"], {
        a: "#forge:ingots/electrum",
        b: "kubejs:source_gem_steel_machine_frame",
        c: "ars_nouveau:sourcestone"
    })
    shaped(event, "16x alexscaves:depth_glass", ["aaa", "aba", "aaa"], {
        a: "minecraft:glass",
        b: "ars_nouveau:water_essence"
    })
    shaped(event, "ars_nouveau:source_jar", ["aaa", "bcb", "aaa"], {
        a: "ars_nouveau:archwood_slab",
        b: "#forge:glass",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "ars_nouveau:alchemical_sourcelink", ["aba", "bcb", "aba"], {
        a: "minecraft:brewing_stand",
        b: "ars_nouveau:source_gem",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "ars_nouveau:vitalic_sourcelink", ["aba", "bcb", "aba"], {
        a: "#forge:bones/wither",
        b: "ars_nouveau:source_gem",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "ars_nouveau:mycelial_sourcelink", ["aba", "bcb", "aba"], {
        a: "minecraft:mycelium",
        b: "ars_nouveau:source_gem",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "ars_nouveau:agronomic_sourcelink", ["aba", "bcb", "aba"], {
        a: "tconstruct:mattock",
        b: "ars_nouveau:source_gem",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "ars_nouveau:volcanic_sourcelink", ["aba", "bcb", "aba"], {
        a: "kubejs:super_ember_fuel",
        b: "ars_nouveau:source_gem",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "starbunclemania:fluid_sourcelink", ["aba", "bcb", "aba"], {
        a: "starbunclemania:source_condenser",
        b: "ars_nouveau:source_gem",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "2x aetherworks:forge_vent", ["aba", "ccc", "ada"], {
        a: "kubejs:ember_dawnstone_ingot",
        b: "kubejs:source_netherite_component",
        c: "tconstruct:gold_bars",
        d: "kubejs:aetherworks_machine_frame"
    })
    shaped(event, "aetherworks:forge_tool_station", [" a ", "bcb", "ded"], {
        a: "aetherworks:gem_aether",
        b: "kubejs:ember_dawnstone_plate",
        c: "kubejs:source_netherite_component",
        d: "#forge:storage_blocks/silver",
        e: "kubejs:aetherworks_machine_frame"
    })
    shaped(event, "aetherworks:moonlight_amplifier", ["aba", "abb", "cdc"], {
        a: "kubejs:ember_dawnstone_plate",
        b: "aetherworks:aetherium_lens",
        c: "embers:dawnstone_block",
        d: "kubejs:aetherworks_machine_frame"
    })
    shaped(event, "ae2:charger", ["aba", "c  ", "aba"], {
        a: "minecraft:iron_ingot",
        b: "kubejs:source_netherite_component",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "kubejs:uninspired_computer", ["aba", "cdc", "ebe"], {
        a: "ae2:logic_processor",
        b: "kubejs:ultra_neodymium_plate",
        c: "ae2:calculation_processor",
        d: "kubejs:source_gem_steel_machine_frame",
        e: "ae2:engineering_processor"
    })
    shaped(event, "ae2:drive", ["aba", "cd ", "aba"], {
        a: "minecraft:iron_ingot",
        b: "kubejs:source_netherite_component",
        c: "kubejs:source_gem_steel_machine_frame",
        d: "kubejs:complex_processing_computer"
    })
    shaped(event, "ae2:pattern_provider", ["aba", "dcb", "ada"], {
        a: "minecraft:crafting_table",
        b: "ae2:formation_core",
        d: "ae2:annihilation_core",
        c: "ae2:interface"
    })
    shaped(event, "ae2:interface", ["eba", "cdb", "ace"], {
        a: "kubejs:source_netherite_component",
        e: "ae2:fluix_glass_cable",
        b: "ae2:formation_core",
        c: "ae2:annihilation_core",
        d: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "8x ae2:annihilation_core", [" a ", "bcb", " b "], {
        a: "kubejs:source_netherite_component",
        b: "pipez:universal_pipe",
        c: "kubejs:complex_processing_computer"
    })
    shaped(event, "8x ae2:formation_core", [" a ", "aba", " c "], {
        a: "pipez:universal_pipe",
        b: "kubejs:complex_processing_computer",
        c: "kubejs:source_netherite_component"
    })
    shaped(event, "ae2:crafting_unit", ["aba", "bcb", "aba"], {
        a: "kubejs:source_gem_steel_plate",
        b: "ae2:fluix_glass_cable",
        c: "kubejs:complex_processing_computer"
    })
    shaped(event, "ae2:semi_dark_monitor", ["aba", "aca", "ada"], {
        a: "ae2:quartz_glass",
        c: "kubejs:complex_processing_computer",
        b: "ae2:formation_core",
        d: "ae2:annihilation_core"
    })
    shaped(event, "ae2:crafting_accelerator", ["aba", "bcb", "aba"], {
        a: "kubejs:source_gem_steel_plate",
        b: "ae2:crafting_unit",
        c: "kubejs:source_gem_steel_machine_frame"
    })
    shaped(event, "4x ae2:blank_pattern", ["aab", "acb", "abb"], {
        a: "ae2:quartz_block",
        b: "ae2:quartz_glass",
        c: "kubejs:complex_processing_computer"
    })
    shaped(event, "embers:codebreaking_slate", ["aba", "cdc", "aca"], {
        a: "embers:dawnstone_plate",
        b: "embers:alchemical_waste",
        c: "minecraft:paper",
        d: "embers:ancient_codex"
    }, {keep: "embers:ancient_codex"})
    shaped(event, "explorerscompass:explorerscompass", [" a ", "bcb", " d "], {
        a: "embers:resonating_bell",
        b: "embers:archaic_circuit",
        c: "naturescompass:naturescompass",
        d: "embers:wildfire_core"
    })
    shaped(event, "rootsclassic:mortar", ["a a", "a a", " a "], {
        a: "rootsclassic:attuned_standing_stone"
    })
    shaped(event, "integrateddynamics:squeezer", ["aba","cdc","aea"],{
        a:"kubejs:uninspired_computer",
        b:"ae2:inscriber",
        c:"kubejs:root_wrapped_invar_plate",
        d:"kubejs:root_wrapped_invar_machine_frame",
        e:"embers:stamp_base"
    })
    shaped(event, "wtwfacore:disposable_ritual_chalk" ,['aba','aca','ada'],{
        a:"enchanted:quicklime",
        b:"minecraft:slime_block",
        c:"tconstruct:sky_slime",
        d:"tconstruct:ender_slime"
    })

    // Shapeless crafting
    shapeless(event, "thermal:iron_dust", ["kubejs:fliny_hammer", "2x minecraft:iron_ore"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "thermal:iron_dust", ["kubejs:fliny_hammer", "2x minecraft:raw_iron"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "biomancy:stone_powder", ["kubejs:fliny_hammer", "2x #minecraft:stone_tool_materials"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "kubejs:stone_iron_dust", ["thermal:iron_dust", "biomancy:stone_powder"])
    shapeless(event, "6x embers:caminite_blend", ["4x minecraft:clay_ball", "kubejs:stone_iron_dust", "#forge:sand"])
    shapeless(event, "kubejs:stone_iron_block", ["9x kubejs:stone_iron_ingot"])
    shapeless(event, "9x kubejs:stone_iron_ingot", ["kubejs:stone_iron_block"])
    shapeless(event, "thermal:silver_dust", ["kubejs:fliny_hammer", "2x #forge:ores/silver"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "thermal:silver_dust", ["kubejs:fliny_hammer", "2x #forge:raw_materials/silver"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "thermal:copper_dust", ["kubejs:fliny_hammer", "2x minecraft:copper_ore"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "thermal:copper_dust", ["kubejs:fliny_hammer", "2x minecraft:raw_copper"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "thermal:lead_dust", ["kubejs:fliny_hammer", "2x #forge:ores/lead"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "thermal:lead_dust", ["kubejs:fliny_hammer", "2x #forge:raw_materials/lead"], {damage: {item: "kubejs:fliny_hammer", amount: 1}})
    shapeless(event, "kubejs:stone_iron_plate", ["2x kubejs:stone_iron_ingot", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "kubejs:caminite_stoneiron_combine_plate", ["kubejs:stone_iron_plate", "embers:caminite_plate", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "minecraft:lever", ["#forge:rods/wooden", "kubejs:stone_iron_ingot"])
    shapeless(event, "kubejs:raw_steel_billet", ["thermal:iron_dust", "kubejs:high_carbon_iron_ingot", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "thermal:steel_ingot", ["kubejs:steel_billet", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "4x kubejs:amber_fragment", ["4x alexscaves:amber", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "4x kubejs:heavy_ingot", ["embers:solidified_metal", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "minecraft:flint_and_steel", ["thermal:steel_ingot", "minecraft:flint"])
    shapeless(event, "thermal:steel_plate", ["2x thermal:steel_ingot", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "4x tconstruct:grout", ["minecraft:clay_ball", "#minecraft:sand", "embers:caminite_blend", "minecraft:gravel"])
    shapeless(event, "16x tconstruct:grout", ["minecraft:clay", "3x #minecraft:sand", "embers:raw_caminite_block", "4x minecraft:gravel"])
    shapeless(event, "kubejs:burn_sun_plate", ["2x kubejs:burn_sun_ingot", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "embers_extended:ember_crystal_block", ["9x embers:ember_crystal"])
    shapeless(event, "4x kubejs:forged_nether_alloy_plate", ["embers:tinker_hammer", "kubejs:stable_alloy_casting_block"], {keep: "embers:tinker_hammer"})
    shapeless(event, "kubejs:source_gem_steel_plate", ["2x kubejs:source_gem_steel_ingot", "embers:tinker_hammer"], {keep: "embers:tinker_hammer"})
    shapeless(event, "3x minecraft:paper", ["3x minecraft:bamboo"])

    // Campfire cooking
    campfire(event, "kubejs:stone_iron_ingot", "kubejs:stone_iron_dust", 0.35, 100)
    campfire(event, "embers:caminite_brick", "embers:caminite_blend", 0.35, 100)
    campfire(event, "embers:caminite_plate", "embers:raw_caminite_plate", 0.35, 100)
    campfire(event, "embers:ingot_stamp", "embers:raw_ingot_stamp", 0.35, 100)

    // Smelting
    smelting(event, "kubejs:stone_iron_ingot", "kubejs:stone_iron_dust")
    smelting(event, "eidolon:withered_heart","minecraft:nether_star")
})
