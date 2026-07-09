export {}

type ItemRef = string
type RecipeFilter = {[key: string]: any}
type OutputReplacement = {output: ItemRef; input: ItemRef; replacement: ItemRef}
type FilteredReplacement = {filter: RecipeFilter; input: ItemRef; replacement: ItemRef}

const outputReplacements: OutputReplacement[] = [
    {output: "minecraft:compass", input: "minecraft:redstone", replacement: "kubejs:simple_basic_component"},
    {output: "embers:copper_charger", input: "minecraft:copper_ingot", replacement: "kubejs:dawnstone_machine_frame"},
    {output: "embers:pressure_refinery", input: "minecraft:copper_block", replacement: "kubejs:dawnstone_machine_frame"},
    {output: "embers:pressure_refinery", input: "embers:dawnstone_ingot", replacement: "embers:ember_activator"},
    {output: "embers:inferno_forge", input: "minecraft:copper_block", replacement: "kubejs:dawnstone_machine_frame"},
    {output: "embers:dawnstone_anvil", input: "embers:dawnstone_ingot", replacement: "kubejs:dawnstone_machine_frame"},
    {output: "embers:crystal_cell", input: "minecraft:copper_block", replacement: "kubejs:dawnstone_machine_frame"},
    {output: "embers:ember_relay", input: "thermal:iron_plate", replacement: "kubejs:simple_basic_component"},
    {output: "embers:beam_splitter", input: "thermal:iron_plate", replacement: "embers:ember_relay"},
    {output: "embers:copper_cell", input: "minecraft:copper_block", replacement: "kubejs:caminite_machine_frame"},
    {output: "ars_nouveau:imbuement_chamber", input: "ars_nouveau:archwood_planks", replacement: "kubejs:reinforced_archwood_planks"},
    {output: "ars_nouveau:imbuement_chamber", input: "minecraft:gold_ingot", replacement: "kubejs:ultra_neodymium_ingot"},
    {output: "embers:excavation_buckets", input: "minecraft:iron_ingot", replacement: "kubejs:caminite_machine_frame"},
    {output: "pipez:item_pipe", input: "minecraft:dropper", replacement: "embers:item_pipe"},
    {output: "pipez:fluid_pipe", input: "minecraft:bucket", replacement: "embers:fluid_pipe"},
    {output: "thermal:fluid_duct", input: "#forge:ingots/bronze", replacement: "embers:fluid_pipe"},
    {output: "thermal:fluid_duct_windowed", input: "#forge:ingots/bronze", replacement: "embers:fluid_pipe"},
    {output: "laserio:card_item", input: "minecraft:gold_nugget", replacement: "pipez:item_pipe"},
    {output: "laserio:card_fluid", input: "minecraft:gold_nugget", replacement: "pipez:fluid_pipe"},
    {output: "embers:ignem_reactor", input: "embers:caminite_bricks", replacement: "kubejs:burn_sun_block"},
    {output: "apotheosis:seashelf", input: "minecraft:prismarine_bricks", replacement: "alexscaves:mussel"},
    {output: "minecraft:enchanting_table", input: "minecraft:obsidian", replacement: "apotheosis:hellshelf"},
    {output: "minecraft:enchanting_table", input: "minecraft:diamond", replacement: "apotheosis:seashelf"},
    {output: "minecraft:enchanting_table", input: "minecraft:book", replacement: "apotheosis:dormant_deepshelf"},
    {output: "embers:heat_insulation", input: "minecraft:copper_block", replacement: "kubejs:dawnstone_machine_frame"},
    {output: "ars_nouveau:air_essence", input: "ars_nouveau:source_gem", replacement: "kubejs:essence_base"},
    {output: "ars_nouveau:fire_essence", input: "ars_nouveau:source_gem", replacement: "kubejs:essence_base"},
    {output: "ars_nouveau:conjuration_essence", input: "ars_nouveau:source_gem", replacement: "kubejs:essence_base"},
    {output: "ars_nouveau:water_essence", input: "ars_nouveau:source_gem", replacement: "kubejs:essence_base"},
    {output: "ars_nouveau:abjuration_essence", input: "ars_nouveau:source_gem", replacement: "kubejs:essence_base"},
    {output: "ars_nouveau:manipulation_essence", input: "ars_nouveau:source_gem", replacement: "kubejs:essence_base"},
    {output: "ars_nouveau:earth_essence", input: "ars_nouveau:source_gem", replacement: "kubejs:essence_base"},
    {output: "mob_grinding_utils:jumbo_tank", input: "mob_grinding_utils:tank", replacement: "portabletanks:ultimate_portable_tank"},
    {output: "functionalstorage:fluid_1", input: "minecraft:bucket", replacement: "mob_grinding_utils:jumbo_tank"},
    {output: "functionalstorage:fluid_2", input: "minecraft:bucket", replacement: "mob_grinding_utils:jumbo_tank"},
    {output: "functionalstorage:fluid_4", input: "minecraft:bucket", replacement: "mob_grinding_utils:jumbo_tank"},
    {output: "aetherworks:aetheriometer", input: "embers:ember_jar", replacement: "kubejs:source_netherite_component"},
    {output: "aetherworks:heat_dial", input: "minecraft:paper", replacement: "kubejs:source_netherite_component"},
    {output: "aetherworks:prism", input: "embers:archaic_circuit", replacement: "kubejs:aetherworks_machine_frame"},
    {output: "aetherworks:aether_prism_controller_matrix", input: "embers:intelligent_apparatus", replacement: "kubejs:aetherworks_machine_frame"},
    {output: "aetherworks:aether_forge", input: "embers:caminite_bricks", replacement: "kubejs:aetherworks_machine_frame"},
    {output: "aetherworks:aether_forge", input: "minecraft:copper_block", replacement: "aetherworks:aether_amalgam"},
    {output: "aetherworks:forge_heater", input: "#forge:plates/copper", replacement: "kubejs:aetherworks_machine_frame"},
    {output: "aetherworks:forge_cooler", input: "embers:archaic_circuit", replacement: "kubejs:aetherworks_machine_frame"},
    {output: "aetherworks:forge_anvil", input: "embers:dawnstone_block", replacement: "kubejs:aetherworks_machine_frame"},
    {output: "aetherworks:forge_metal_former", input: "embers:ash", replacement: "kubejs:aetherworks_machine_frame"},
    {output: "ae2:inscriber", input: "minecraft:sticky_piston", replacement: "embers:automatic_hammer"},
    {output: "ae2:inscriber", input: "minecraft:copper_ingot", replacement: "kubejs:source_gem_steel_machine_frame"},
    {output: "ae2:controller", input: "ae2:smooth_sky_stone_block", replacement: "kubejs:complex_processing_computer"},
    {output: "ae2:controller", input: "ae2:engineering_processor", replacement: "kubejs:source_gem_steel_machine_frame"},
    {output: "rootsclassic:imbuer", input: "minecraft:chiseled_stone_bricks", replacement: "kubejs:root_wrapped_invar_machine_frame"}
]

const filteredReplacements: FilteredReplacement[] = [
    {
        filter: {
            input: "minecraft:redstone_torch",
            output: "sophisticatedstorage:chest"
        },
        input: "minecraft:redstone_torch",
        replacement: "minecraft:chest"
    },
    {
        filter: {
            input: "minecraft:redstone_torch",
            output: "sophisticatedstorage:barrel"
        },
        input: "minecraft:redstone_torch",
        replacement: "minecraft:barrel"
    },
    {
        filter: {
            output: "ars_nouveau:source_gem",
            input: "minecraft:lapis_lazuli"
        },
        input: "minecraft:lapis_lazuli",
        replacement: "kubejs:source_matter_base"
    }
]

ServerEvents.recipes((event: any) => {
    outputReplacements.forEach(recipe => {
        event.replaceInput({output: recipe.output}, recipe.input, recipe.replacement)
    })

    filteredReplacements.forEach(recipe => {
        event.replaceInput(recipe.filter, recipe.input, recipe.replacement)
    })
})
