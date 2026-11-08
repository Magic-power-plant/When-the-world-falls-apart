import {itemJson, notEmptyTag, ItemRef} from "../globalFunction"
export {}

type AlchemyRecipe = {
    aspects: string[]
    inputs: ItemRef[]
    output: ItemRef
    tablet: ItemRef
    conditions?: any[]
}

const aspectJson = (tag: string) => ({tag: tag})

const ironAlchemyConditions = [
    {
        type: "forge:and",
        values: [
            notEmptyTag("forge:ingots/iron"),
            notEmptyTag("forge:nuggets/iron")
        ]
    }
]

function alchemy(event: any, recipe: AlchemyRecipe) {
    const json: any = {
        type: "embers:alchemy",
        aspects: recipe.aspects.map(aspectJson),
        inputs: recipe.inputs.map(itemJson),
        output: itemJson(recipe.output),
        tablet: itemJson(recipe.tablet)
    }

    if (recipe.conditions) json.conditions = recipe.conditions

    event.custom(json)
}

const alchemyRecipes: AlchemyRecipe[] = [
    {
        aspects: ["embers:aspectus/silver", "embers:aspectus/dawnstone"],
        inputs: [
            "#forge:plates/steel",
            "#forge:plates/ember_dawnstone",
            "#forge:plates/spirit_silver",
            "#embers:wildfire_core"
        ],
        output: "wtwfacore:ember_dawnstone_component",
        tablet: "#wtwfacore:simple_basic_component",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/iron"],
        inputs: [
            "#forge:ingots/iron",
            "#forge:ingots/iron",
            "#forge:ingots/iron",
            "#forge:normal_stone"
        ],
        output: "wtwfacore:stone_iron_block",
        tablet: "#forge:deepslate",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/nightstone", "embers:aspectus/duskstone"],
        inputs: [
            "#forge:dusts/azure_neodymium",
            "#forge:dusts/azure_neodymium",
            "#forge:dusts/azure_neodymium",
            "#forge:ingots/nightstone"
        ],
        output: "alexscaves:azure_neodymium_ingot",
        tablet: "#forge:ingots/steel",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/nightstone", "embers:aspectus/duskstone"],
        inputs: [
            "#forge:dusts/scarlet_neodymium",
            "#forge:dusts/scarlet_neodymium",
            "#forge:dusts/scarlet_neodymium",
            "#forge:ingots/duskstone"
        ],
        output: "alexscaves:scarlet_neodymium_ingot",
        tablet: "#forge:ingots/steel",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/nightstone", "embers:aspectus/duskstone"],
        inputs: [
            "#forge:ingots/dawnstone",
            "#forge:ingots/duskstone",
            "#forge:ingots/nightstone"
        ],
        output: "wtwfacore:burn_sun_ingot",
        tablet: "#forge:ingots/ember_dawnstone",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/nightstone", "embers:aspectus/duskstone"],
        inputs: [
            "#forge:ingots/azure_neodymium",
            "#forge:ingots/scarlet_neodymium"
        ],
        output: "wtwfacore:ultra_neodymium_ingot",
        tablet: "#forge:ingots/stone_iron",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/nightstone", "embers:aspectus/duskstone"],
        inputs: ["#forge:dusts/source_gem"],
        output: "wtwfacore:raw_source_gem_steel",
        tablet: "#forge:ingots/steel",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/nightstone", "embers:aspectus/duskstone"],
        inputs: [
            "#alexscaves:ferrouslime_ball",
            "#alexsmobs:banana_slug_slime",
            "#minecraft:magma_cream",
            "#forge:dusts/gold"
        ],
        output: "wtwfacore:purified_alloy_mass",
        tablet: "#forge:slag/crude_nether_alloy",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/nightstone", "embers:aspectus/duskstone"],
        inputs: ["#wtwfacore:metal_essence"],
        output: "wtwfacore:energized_nether_alloy_crystal",
        tablet: "#forge:ingots/annealed_alloy",
        conditions: ironAlchemyConditions
    },
    {
        aspects: ["embers:aspectus/nightstone", "embers:aspectus/duskstone"],
        inputs: [
            "#forge:plates/source_gem_steel",
            "#forge:plates/source_gem_steel",
            "#forge:plates/source_gem_steel",
            "#forge:plates/source_gem_steel"
        ],
        output: "wtwfacore:source_gem_steel_machine_frame",
        tablet: "#wtwfacore:dawnstone_machine_frame",
        conditions: ironAlchemyConditions
    },
    {
        aspects: [
            "embers:aspectus/nightstone",
            "embers:aspectus/duskstone",
            "embers:aspectus/copper",
            "embers:aspectus/dawnstone",
            "embers:aspectus/lead"
        ],
        inputs: [
            "embers_extended:duskstone_ingot",
            "embers_extended:nightstone_ingot",
            "embers:dawnstone_ingot",
            "wtwfacore:burn_sun_ingot",
            "aetherworks:ingot_aether"
        ],
        output: "wtwfacore:ember_essence",
        tablet: "aetherworks:aether_pearl",
        conditions: ironAlchemyConditions
    },
    {
        aspects: [
            "embers:aspectus/nightstone",
            "embers:aspectus/duskstone",
            "embers:aspectus/dawnstone"
        ],
        inputs: [
            "ae2:logic_processor",
            "ae2:logic_processor",
            "ae2:calculation_processor",
            "ae2:calculation_processor",
            "ae2:engineering_processor",
            "ae2:engineering_processor"
        ],
        output: "wtwfacore:1k_storage_circuits_etched_substrate",
        tablet: "wtwfacore:complex_processing_computer",
        conditions: ironAlchemyConditions
    },
    {
        aspects: [
            "bloodmagic:reagentwater",
            "bloodmagic:reagentlava",
            "bloodmagic:reagentvoid",
            "bloodmagic:reagentgrowth",
            "bloodmagic:reagentfastminer",
            "bloodmagic:reagentmagnetism",
            "bloodmagic:reagentair",
            "bloodmagic:reagentbloodlight",
            "bloodmagic:reagentsight",
            "bloodmagic:reagentholding",
            "animus:reagentbuilder",
            "animus:reagentchains",
            "animus:reagentconsumption",
            "animus:reagentleach",
            "animus:reagentstorm",
            "animus:reagenttransposition",
            "animus:reagentboundlessnature",
            "animus:reagentequivalency",
            "animus:reagentfreesoul",
            "animus:reagentheavelywrath",
            "animus:reagentremendium",
            "animus:reagentreparare",
            "animus:reagenttemporaldominance",
            "animus:reagentfist",
            "animus:reagentcrimsonwill"
        ],
        inputs: [
            "botania:rune_water",
            "botania:rune_fire",
            "botania:rune_earth",
            "botania:rune_air",
            "botania:rune_spring",
            "botania:rune_summer",
            "botania:rune_autumn",
            "botania:rune_winter",
            "botania:rune_mana",
            "botania:rune_lust",
            "botania:rune_gluttony",
            "botania:rune_greed",
            "botania:rune_sloth",
            "botania:rune_wrath",
            "botania:rune_envy",
            "botania:rune_pride",
            "mythicbotany:asgard_rune",
            "mythicbotany:vanaheim_rune",
            "mythicbotany:alfheim_rune",
            "mythicbotany:midgard_rune",
            "mythicbotany:joetunheim_rune",
            "mythicbotany:muspelheim_rune",
            "mythicbotany:niflheim_rune",
            "mythicbotany:nidavellir_rune",
            "mythicbotany:helheim_rune"
        ],
        output: "appbot:creative_mana_cell",
        tablet: "botania:creative_pool"
    },
    {
        aspects: [
            "ars_nouveau:air_essence",
            "ars_nouveau:earth_essence",
            "ars_nouveau:fire_essence",
            "ars_nouveau:water_essence",
            "wtwfacore:tree_essence",
            "wtwfacore:metal_essence"
        ],
        inputs: [
            "wtwfacore:sky_essence",
            "wtwfacore:swords_essence",
            "wtwfacore:range_mountains_essence",
            "wtwfacore:vast_ocean_essence",
            "wtwfacore:inferno_essence",
            "wtwfacore:lush_forests_essence"
        ],
        output: "arseng:creative_source_cell",
        tablet: "ars_nouveau:creative_source_jar"
    },
    {
        aspects:[
            "embers:aspectus/nightstone",
            "embers:aspectus/duskstone",
            "embers:aspectus/dawnstone"
        ],
        inputs:[
            'wtwfacore:dawnstone_machine_frame',
            'wtwfacore:dawnstone_machine_frame',
            'wtwfacore:dawnstone_machine_frame',
            'wtwfacore:dawnstone_machine_frame',
            'wtwfacore:dawnstone_machine_frame',
            'wtwfacore:dawnstone_machine_frame',
            'wtwfacore:ember_dawnstone_component',
            'wtwfacore:ember_dawnstone_component'
        ],
        output:'wtwfacore:dwarf_alchemy_cauldron_controller',
        tablet:'embers:ember_injector'
    }
]

ServerEvents.recipes((event: any) => {
    alchemyRecipes.forEach(recipe => {
        alchemy(event, recipe)
    })
})
