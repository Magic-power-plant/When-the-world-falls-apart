import {banitsList} from "../../shared_scripts/list"
import {ItemRef} from "../globalFunction"
export {}

type RecipeFilter = {[key: string]: any}

const removeIds: ItemRef[] = [
    "minecraft:crafting_table", "embers:caminite_blend", "minecraft:iron_ingot_from_blasting_raw_iron", "alexscaves:furnace/iron_from_galena_ore_blasting",
    "embers:silver_ingot_from_blasting_raw_silver", "thermal:smelting/silver_ingot_from_deepslate_ore_blasting", "embers:lead_ingot_from_blasting_raw_lead", "thermal:smelting/lead_ingot_from_deepslate_ore_blasting",
    "minecraft:copper_ingot_from_blasting_raw_copper", "minecraft:copper_ingot_from_blasting_copper_ore", "occultism:blasting/iron_ingot_from_dust", "embers:mechanical_core",
    "embers:ember_bore", "embers:ember_activator", "embers:melter", "embers:fluid_pipe",
    "embers:item_pipe", "embers:fluid_extractor", "embers:item_extractor", "embers:fluid_vessel",
    "embers:stamper", "embers:tinker_hammer", "embers:tinker_lens", "embers:atmospheric_gauge",
    "embers:ember_dial", "embers:item_dial", "embers:fluid_dial", "embers:stamp_base",
    "embers:ember_emitter", "embers:ember_receiver", "minecraft:lever", "embers:bin",
    "embers:clockwork_attenuator", "embers:ember_siphon", "embers:mechanical_pump", "embers:mini_boiler",
    "minecraft:furnace", "minecraft:chest", "aether:skyroot_chest", "ae2:misc/chests_sky_stone",
    "ae2:misc/chests_smooth_sky_stone", "ars_nouveau:archwood_chest", "sophisticatedstorage:generic_chest", "minecraft:barrel",
    "aether:skyroot_barrel", "embers:hearth_coil", "embers:mixing/molten_dawnstone", "tconstruct:smeltery/casting/scorched/foundry_controller",
    "ad_astra:etrionic_blast_furnace", "embers:alchemy_pedestal", "embers:alchemy_tablet", "embers:beam_cannon",
    "embers_extended:ember_liquifier", "embers_extended:tools/ember_infuser", "embers:alchemy/codebreaking_slate", "minecraft:flint_and_steel",
    "tconstruct:tools/building/flint_and_brick", "ad_astra:compressor", "tconstruct:smeltery/seared/grout", "tconstruct:smeltery/seared/grout_multiple",
    "tconstruct:smeltery/seared/basin", "tconstruct:smeltery/seared/table", "tconstruct:smeltery/seared/melter", "tconstruct:smeltery/scorched/table",
    "tconstruct:smeltery/scorched/basin", "alexscaves:azure_neodymium_ingot", "alexscaves:scarlet_neodymium_ingot", "minecraft:ender_eye",
    "tconstruct:smeltery/casting/ender/eye", "apotheosis:simple_reforging_table", "minecraft:nether_brick", "tconstruct:smeltery/casting/seared/smeltery_controller",
    "ars_nouveau:imbuement_amethyst_block", "mob_grinding_utils:recipe_tank", "portabletanks:basic_portable_tank", "ars_nouveau:arcane_pedestal",
    "ars_nouveau:arcane_core", "ars_nouveau:enchanting_apparatus", "minecraft:netherite_ingot", "tconstruct:smeltery/alloys/molten_netherite",
    "alexscaves:nuclear_furnace_component", "teonstruetsmeltery/melting/metal/molten_debris/ore", "embers_extended:mixing/molten_netherite", "avaritia:netherite_ingot_too",
    "ae2omnicells:components/shaped/omni_cell_component_1k", "ae2omnicells:components/shaped/complex_omni_cell_component_1k", "ae2omnicells:components/shaped/quantum_omni_cell_component_1k", "ae2omnicells:cells/shaped/omni_cell_1k",
    "ae2omnicells:cells/shaped/complex_omni_cell_1k", "ae2omnicells:cells/shaped/quantum_omni_cell_1k", "ae2omnicells:cells/shapeless/omni_cell_1k", "ae2omnicells:cells/shapeless/complex_omni_cell_1k",
    "ae2omnicells:cells/shapeless/quantum_omni_cell_1k", "ae2omnicells:cells/shapeless/portable_omni_cell_1k", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_1k", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_1k",
    "appbot:mana_storage_cell_1k", "ae2:network/cells/item_storage_cell_1k", "ae2:network/cells/item_storage_cell_1k_storage", "ae2:network/cells/fluid_storage_cell_1k",
    "ae2:network/cells/fluid_storage_cell_1k_storage", "arseng:source_storage_cell_1k", "crazyae2addons:mob_storage_cell_1k", "appbot:portable_mana_storage_cell_1k",
    "ae2:tools/portable_item_cell_1k", "ae2:tools/portable_fluid_cell_1k", "arseng:portable_source_cell_1k", "ae2:network/cells/item_storage_components_cell_1k_part",
    "ae2omnicells:components/shaped/omni_cell_component_4k", "ae2omnicells:components/shaped/complex_omni_cell_component_4k", "ae2omnicells:components/shaped/quantum_omni_cell_component_4k", "ae2omnicells:cells/shaped/omni_cell_4k",
    "ae2omnicells:cells/shaped/complex_omni_cell_4k", "ae2omnicells:cells/shaped/quantum_omni_cell_4k", "ae2omnicells:cells/shapeless/omni_cell_4k", "ae2omnicells:cells/shapeless/complex_omni_cell_4k",
    "ae2omnicells:cells/shapeless/quantum_omni_cell_4k", "ae2omnicells:cells/shapeless/portable_omni_cell_4k", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_4k", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_4k",
    "appbot:mana_storage_cell_4k", "ae2:network/cells/item_storage_cell_4k", "ae2:network/cells/item_storage_cell_4k_storage", "ae2:network/cells/fluid_storage_cell_4k",
    "ae2:network/cells/fluid_storage_cell_4k_storage", "arseng:source_storage_cell_4k", "crazyae2addons:mob_storage_cell_4k", "appbot:portable_mana_storage_cell_4k",
    "ae2:tools/portable_item_cell_4k", "ae2:tools/portable_fluid_cell_4k", "arseng:portable_source_cell_4k", "ae2:network/cells/item_storage_components_cell_4k_part",
    "ae2omnicells:components/shaped/omni_cell_component_16k", "ae2omnicells:components/shaped/complex_omni_cell_component_16k", "ae2omnicells:components/shaped/quantum_omni_cell_component_16k", "ae2omnicells:cells/shaped/omni_cell_16k",
    "ae2omnicells:cells/shaped/complex_omni_cell_16k", "ae2omnicells:cells/shaped/quantum_omni_cell_16k", "ae2omnicells:cells/shapeless/omni_cell_16k", "ae2omnicells:cells/shapeless/complex_omni_cell_16k",
    "ae2omnicells:cells/shapeless/quantum_omni_cell_16k", "ae2omnicells:cells/shapeless/portable_omni_cell_16k", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_16k", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_16k",
    "appbot:mana_storage_cell_16k", "ae2:network/cells/item_storage_cell_16k", "ae2:network/cells/item_storage_cell_16k_storage", "ae2:network/cells/fluid_storage_cell_16k",
    "ae2:network/cells/fluid_storage_cell_16k_storage", "arseng:source_storage_cell_16k", "crazyae2addons:mob_storage_cell_16k", "appbot:portable_mana_storage_cell_16k",
    "ae2:tools/portable_item_cell_16k", "ae2:tools/portable_fluid_cell_16k", "arseng:portable_source_cell_16k", "ae2:network/cells/item_storage_components_cell_16k_part",
    "ae2omnicells:components/shaped/omni_cell_component_64k", "ae2omnicells:components/shaped/complex_omni_cell_component_64k", "ae2omnicells:components/shaped/quantum_omni_cell_component_64k", "ae2omnicells:cells/shaped/omni_cell_64k",
    "ae2omnicells:cells/shaped/complex_omni_cell_64k", "ae2omnicells:cells/shaped/quantum_omni_cell_64k", "ae2omnicells:cells/shapeless/omni_cell_64k", "ae2omnicells:cells/shapeless/complex_omni_cell_64k",
    "ae2omnicells:cells/shapeless/quantum_omni_cell_64k", "ae2omnicells:cells/shapeless/portable_omni_cell_64k", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_64k", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_64k",
    "appbot:mana_storage_cell_64k", "ae2:network/cells/item_storage_cell_64k", "ae2:network/cells/item_storage_cell_64k_storage", "ae2:network/cells/fluid_storage_cell_64k",
    "ae2:network/cells/fluid_storage_cell_64k_storage", "arseng:source_storage_cell_64k", "crazyae2addons:mob_storage_cell_64k", "appbot:portable_mana_storage_cell_64k",
    "ae2:tools/portable_item_cell_64k", "ae2:tools/portable_fluid_cell_64k", "arseng:portable_source_cell_64k", "ae2:network/cells/item_storage_components_cell_64k_part",
    "ae2omnicells:components/shaped/omni_cell_component_256k", "ae2omnicells:components/shaped/complex_omni_cell_component_256k", "ae2omnicells:components/shaped/quantum_omni_cell_component_256k", "ae2omnicells:cells/shaped/omni_cell_256k",
    "ae2omnicells:cells/shaped/complex_omni_cell_256k", "ae2omnicells:cells/shaped/quantum_omni_cell_256k", "ae2omnicells:cells/shapeless/omni_cell_256k", "ae2omnicells:cells/shapeless/complex_omni_cell_256k",
    "ae2omnicells:cells/shapeless/quantum_omni_cell_256k", "ae2omnicells:cells/shapeless/portable_omni_cell_256k", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_256k", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_256k",
    "appbot:mana_storage_cell_256k", "ae2:network/cells/item_storage_cell_256k", "ae2:network/cells/item_storage_cell_256k_storage", "ae2:network/cells/fluid_storage_cell_256k",
    "ae2:network/cells/fluid_storage_cell_256k_storage", "arseng:source_storage_cell_256k", "crazyae2addons:mob_storage_cell_256k", "appbot:portable_mana_storage_cell_256k",
    "ae2:tools/portable_item_cell_256k", "ae2:tools/portable_fluid_cell_256k", "arseng:portable_source_cell_256k", "ae2:network/cells/item_storage_components_cell_256k_part",
    "ae2omnicells:components/shaped/omni_cell_component_1m", "ae2omnicells:components/shaped/complex_omni_cell_component_1m", "ae2omnicells:components/shaped/quantum_omni_cell_component_1m", "ae2omnicells:cells/shaped/omni_cell_1m",
    "ae2omnicells:cells/shaped/complex_omni_cell_1m", "ae2omnicells:cells/shaped/quantum_omni_cell_1m", "ae2omnicells:cells/shapeless/omni_cell_1m", "ae2omnicells:cells/shapeless/complex_omni_cell_1m",
    "ae2omnicells:cells/shapeless/quantum_omni_cell_1m", "ae2omnicells:cells/shapeless/portable_omni_cell_1m", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_1m", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_1m",
    "megacells:cells/standard/item_storage_cell_1m", "megacells:cells/standard/item_storage_cell_1m_with_housing", "megacells:cells/standard/fluid_storage_cell_1m", "megacells:cells/standard/fluid_storage_cell_1m_with_housing",
    "megacells:cells/portable/portable_item_cell_1m", "megacells:cells/portable/portable_fluid_cell_1m", "megacells:cells/standard/mana_storage_cell_1m_with_housing", "megacells:cells/portable/portable_mana_cell_1m",
    "megacells:cells/standard/source_storage_cell_1m", "megacells:cells/portable/portable_source_cell_1m", "megacells:cells/cell_component_1m", "ae2omnicells:components/shaped/omni_cell_component_4m",
    "ae2omnicells:components/shaped/complex_omni_cell_component_4m", "ae2omnicells:components/shaped/quantum_omni_cell_component_4m", "ae2omnicells:cells/shaped/omni_cell_4m", "ae2omnicells:cells/shaped/complex_omni_cell_4m",
    "ae2omnicells:cells/shaped/quantum_omni_cell_4m", "ae2omnicells:cells/shapeless/omni_cell_4m", "ae2omnicells:cells/shapeless/complex_omni_cell_4m", "ae2omnicells:cells/shapeless/quantum_omni_cell_4m",
    "ae2omnicells:cells/shapeless/portable_omni_cell_4m", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_4m", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_4m", "megacells:cells/standard/item_storage_cell_4m",
    "megacells:cells/standard/item_storage_cell_4m_with_housing", "megacells:cells/standard/fluid_storage_cell_4m", "megacells:cells/standard/fluid_storage_cell_4m_with_housing", "megacells:cells/portable/portable_item_cell_4m",
    "megacells:cells/portable/portable_fluid_cell_4m", "megacells:cells/standard/mana_storage_cell_4m_with_housing", "megacells:cells/portable/portable_mana_cell_4m", "megacells:cells/standard/source_storage_cell_4m",
    "megacells:cells/portable/portable_source_cell_4m", "megacells:cells/cell_component_4m", "ae2omnicells:components/shaped/omni_cell_component_16m", "ae2omnicells:components/shaped/complex_omni_cell_component_16m",
    "ae2omnicells:components/shaped/quantum_omni_cell_component_16m", "ae2omnicells:cells/shaped/omni_cell_16m", "ae2omnicells:cells/shaped/complex_omni_cell_16m", "ae2omnicells:cells/shaped/quantum_omni_cell_16m",
    "ae2omnicells:cells/shapeless/omni_cell_16m", "ae2omnicells:cells/shapeless/complex_omni_cell_16m", "ae2omnicells:cells/shapeless/quantum_omni_cell_16m", "ae2omnicells:cells/shapeless/portable_omni_cell_16m",
    "ae2omnicells:cells/shapeless/portable_complex_omni_cell_16m", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_16m", "megacells:cells/standard/item_storage_cell_16m", "megacells:cells/standard/item_storage_cell_16m_with_housing",
    "megacells:cells/standard/fluid_storage_cell_16m", "megacells:cells/standard/fluid_storage_cell_16m_with_housing", "megacells:cells/portable/portable_item_cell_16m", "megacells:cells/portable/portable_fluid_cell_16m",
    "megacells:cells/standard/mana_storage_cell_16m_with_housing", "megacells:cells/portable/portable_mana_cell_16m", "megacells:cells/standard/source_storage_cell_16m", "megacells:cells/portable/portable_source_cell_16m",
    "megacells:cells/cell_component_16m", "ae2omnicells:components/shaped/omni_cell_component_64m", "ae2omnicells:components/shaped/complex_omni_cell_component_64m", "ae2omnicells:components/shaped/quantum_omni_cell_component_64m",
    "ae2omnicells:cells/shaped/omni_cell_64m", "ae2omnicells:cells/shaped/complex_omni_cell_64m", "ae2omnicells:cells/shaped/quantum_omni_cell_64m", "ae2omnicells:cells/shapeless/omni_cell_64m",
    "ae2omnicells:cells/shapeless/complex_omni_cell_64m", "ae2omnicells:cells/shapeless/quantum_omni_cell_64m", "ae2omnicells:cells/shapeless/portable_omni_cell_64m", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_64m",
    "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_64m", "megacells:cells/standard/item_storage_cell_64m", "megacells:cells/standard/item_storage_cell_64m_with_housing", "megacells:cells/standard/fluid_storage_cell_64m",
    "megacells:cells/standard/fluid_storage_cell_64m_with_housing", "megacells:cells/portable/portable_item_cell_64m", "megacells:cells/portable/portable_fluid_cell_64m", "megacells:cells/standard/mana_storage_cell_64m_with_housing",
    "megacells:cells/portable/portable_mana_cell_64m", "megacells:cells/standard/source_storage_cell_64m", "megacells:cells/portable/portable_source_cell_64m", "megacells:cells/cell_component_64m",
    "ae2omnicells:components/shaped/omni_cell_component_256m", "ae2omnicells:components/shaped/complex_omni_cell_component_256m", "ae2omnicells:components/shaped/quantum_omni_cell_component_256m", "ae2omnicells:cells/shaped/omni_cell_256m",
    "ae2omnicells:cells/shaped/complex_omni_cell_256m", "ae2omnicells:cells/shaped/quantum_omni_cell_256m", "ae2omnicells:cells/shapeless/omni_cell_256m", "ae2omnicells:cells/shapeless/complex_omni_cell_256m",
    "ae2omnicells:cells/shapeless/quantum_omni_cell_256m", "ae2omnicells:cells/shapeless/portable_omni_cell_256m", "ae2omnicells:cells/shapeless/portable_complex_omni_cell_256m", "ae2omnicells:cells/shapeless/portable_quantum_omni_cell_256m",
    "megacells:cells/standard/item_storage_cell_256m", "megacells:cells/standard/item_storage_cell_256m_with_housing", "megacells:cells/standard/fluid_storage_cell_256m", "megacells:cells/standard/fluid_storage_cell_256m_with_housing",
    "megacells:cells/portable/portable_item_cell_256m", "megacells:cells/portable/portable_fluid_cell_256m", "megacells:cells/standard/mana_storage_cell_256m_with_housing", "megacells:cells/portable/portable_mana_cell_256m",
    "megacells:cells/standard/source_storage_cell_256m", "megacells:cells/portable/portable_source_cell_256m", "megacells:cells/cell_component_256m", "arsmeteorites:ritual_conjure_meteorites",
    "expatternprovider:circuit_cutter", "expatternprovider:ex_inscriber", "ars_nouveau:source_jar", "ars_nouveau:alchemical_sourcelink",
    "ars_nouveau:vitalic_sourcelink", "ars_nouveau:mycelial_sourcelink", "ars_nouveau:agronomic_sourcelink", "ars_nouveau:volcanic_sourcelink",
    "starbunclemania:fluid_sourcelink", "ars_nouveau:relay", "ars_nouveau:basic_spell_turret", "aetherworks:forge_vent_block",
    "aetherworks:aetherium_tool_station", "aetherworks:moonlight_amp_block", "aetherworks:mixing/aether_gas", "ae2:network/blocks/crystal_processing_charger",
    "ae2:network/blocks/storage_drive", "ae2:network/crafting/cpu_crafting_unit", "ae2:network/blocks/interfaces_interface", "ae2:network/blocks/pattern_providers_interface",
    "ae2:materials/annihilationcore", "ae2:materials/formationcore", "ae2:network/crafting/cpu_crafting_unit", "ae2:network/parts/panels_semi_dark_monitor",
    "ae2:network/crafting/cpu_crafting_accelerator", "ae2:network/crafting/patterns_blank", "explorerscompass:explorers_compass", "mine_fargo:empty_soul_stone",
    "integrateddynamics:crafting/coal_generator", "ad_astra:coal_generator", "ae2:network/blocks/energy_vibration_chamber", "botania:mana_fluxfield",
    "ae2:network/crystal_resonance_generator", "rootsclassic:brazier", "rootsclassic:altar", "rootsclassic:mundane_standing_stone",
    "avaritia:neutron_compressor", "rootsclassic:attuned_standing_stone", "suppsquared:daub_frame_slab", "suppsquared:daub_frame_stairs",
    "ars_nouveau:ritual_awakening", "eidolon:pewter_blend", "rootsclassic:mortar", "extendedcrafting:black_iron_ingot",
    "extendedcrafting:luminessence","enchanted:witch_oven","enchanted:soft_clay_jar","enchanted:altar","integrateddynamics:crafting/squeezer","integrateddynamics:crafting/energy_battery",
    "eidolon:crucible","eidolon:merammer_resin","expatternprovider:water_cell","expatternprovider:cobblestone_cell","avaritia:tc3_creative_slot_upgrades",
    "avaritia:tc3_creative_slot_defense","avaritia:botania_mana_tablet","avaritia:tc3_creative_slot_souls","avaritia:ae2_creative_energy_cell",
    "avaritia:tc3_creative_slot_ability","enchanted:quicklime","enchanted:distillery","eidolon:worktable","eidolon:wooden_altar"
    ]

const removeOutputs: ItemRef[] = [
    "twilightforest:uncrafting_table", "#goety:chests", 
    "tconstruct:fake_storage_block", "tconstruct:fake_ingot","suppsquared:daub_frame_slab"
].concat(banitsList as ItemRef[])

const specialRemoveFilters: RecipeFilter[] = [
    {
        input: "#forge:chests",
        output: "#forge:chests",
        not: {
            output: "#sophisticatedstorage:all_storage"
        }
    },
    {
        output: "ars_nouveau:source_gem",
        input: "minecraft:amethyst_shard"
    }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    removeIds.forEach(id => {
        event.remove({id: id} as Internal.RecipeFilter_)
    })

    removeOutputs.forEach(output => {
        event.remove({output: output} as Internal.RecipeFilter_)
    })

    specialRemoveFilters.forEach(filter => {
        event.remove(filter as Internal.RecipeFilter_)
    })
})
