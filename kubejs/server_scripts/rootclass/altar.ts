import {itemJson, ItemRef} from "../globalFunction"
export {}

type RitualRecipe = {
    effect: string
    level: number
    color: string
    ingredients: ItemRef[]
    incenses?: ItemRef[]
    result?: ItemRef
    entity?: string
}

function ritual(event: Internal.RecipesEventJS, recipe: RitualRecipe) {
    const json: any = {
        type: "rootsclassic:ritual",
        effect: recipe.effect,
        level: recipe.level,
        color: recipe.color,
        ingredients: recipe.ingredients.map(itemJson),
        incenses: recipe.incenses ? recipe.incenses.map(itemJson) : []
    }

    if (recipe.result) json.result = itemJson(recipe.result)
    if (recipe.entity) json.entity = recipe.entity

    event.custom(json)
}

const greenCrafting = "rootsclassic:crafting"
const greenColor = "#35f836"

const directRituals: RitualRecipe[] = [
    {
        effect: greenCrafting,
        level: 0,
        color: greenColor,
        ingredients: [
            "wtwfacore:root_wrapped_invar_machine_frame",
            "minecraft:iron_bars",
            "minecraft:campfire"
        ],
        result: "rootsclassic:brazier"
    },
    {
        effect: greenCrafting,
        level: 0,
        color: greenColor,
        ingredients: [
            "wtwfacore:root_wrapped_invar_machine_frame",
            "wtwfacore:entangle_aura_root",
            "aether:sentry_stone"
        ],
        incenses: [
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root",
            "minecraft:stone_bricks",
            "aether:carved_stone"
        ],
        result: "rootsclassic:mundane_standing_stone"
    },
    {
        effect: greenCrafting,
        level: 1,
        color: greenColor,
        ingredients: [
            "rootsclassic:verdant_sprig",
            "wtwfacore:aubergine_seed",
            "wtwfacore:sky_essence"
        ],
        incenses: [
            "wtwfacore:sky_essence",
            "wtwfacore:sky_essence",
            "wtwfacore:tree_essence",
            "wtwfacore:lush_forests_essence",
            "wtwfacore:range_mountains_essence",
            "aether:enchanted_gravitite"
        ],
        result: "wtwfacore:moonglow_seed"
    },
    {
        effect: greenCrafting,
        level: 1,
        color: greenColor,
        ingredients: [
            "rootsclassic:mundane_standing_stone",
            "rootsclassic:mundane_standing_stone",
            "twilightforest:castle_brick"
        ],
        incenses: [
            "twilightforest:raw_ironwood",
            "twilightforest:trollsteinn",
            "aether:carved_stone",
            "aether:enchanted_gravitite"
        ],
        result: "rootsclassic:attuned_standing_stone"
    },
    {
        effect: greenCrafting,
        level: 1,
        color: greenColor,
        ingredients: [
            "wtwfacore:moonglow_seed",
            "minecraft:wheat_seeds",
            "aether:golden_amber"
        ],
        incenses: [
            "aether:ambrosium_shard",
            "wtwfacore:swords_essence",
            "wtwfacore:metal_essence",
            "thermal:electrum_block"
        ],
        result: "wtwfacore:wildewheet_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "wtwfacore:wildewheet_seed",
            "wtwfacore:range_mountains_essence",
            "wtwfacore:inferno_essence"
        ],
        incenses: [
            "wtwfacore:stone_iron_block",
            "twilightforest:ironwood_block",
            "twilightforest:knightmetal_block",
            "minecraft:netherite_block"
        ],
        result: "wtwfacore:stalicripe_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "wtwfacore:stalicripe_seed",
            "twilightforest:thorn_rose",
            "minecraft:beetroot"
        ],
        incenses: [
            "wtwfacore:double_compression_liquid_source_bucket",
            "ars_nouveau:apprentice_spell_book",
            "wtwfacore:tree_essence",
            "wtwfacore:range_mountains_essence"
        ],
        result: "wtwfacore:pereskia_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "wtwfacore:pereskia_seed",
            "wtwfacore:nouveau_essence",
            "aetherworks:aether_amalgam"
        ],
        incenses: [
            "twilightforest:aurora_block",
            "apotheosis:infused_seashelf",
            "starbunclemania:glyph_pickup_fluid",
            "ars_nouveau:glyph_conjure_water"
        ],
        result: "wtwfacore:dewgonia_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "aetherworks:crossbow_magma",
            "wtwfacore:dewgonia_seed",
            "aether:aerogel"
        ],
        incenses: [
            "twilightforest:fluffy_cloud",
            "wtwfacore:nouveau_essence",
            "wtwfacore:sky_essence",
            "ars_nouveau:air_essence"
        ],
        result: "wtwfacore:cloud_berry_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "wtwfacore:cloud_berry_seed",
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root"
        ],
        incenses: [
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root",
            "wtwfacore:entangle_aura_root"
        ],
        result: "wtwfacore:wildroot_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "wtwfacore:wildroot_seed",
            "minecraft:oak_leaves",
            "minecraft:spruce_leaves"
        ],
        incenses: [
            "minecraft:birch_leaves",
            "minecraft:jungle_leaves",
            "minecraft:acacia_leaves",
            "minecraft:dark_oak_leaves",
            "minecraft:mangrove_leaves",
            "minecraft:cherry_leaves",
            "minecraft:azalea_leaves"
        ],
        result: "wtwfacore:spiritleaf_seed"
    }
]

const alloyRituals: RitualRecipe[] = [
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: ["wtwfacore:root_wrapped_invar_ingot", "tconstruct:slimesteel_ingot"],
        incenses: [
            "rootsclassic:sylvan_hood",
            "rootsclassic:sylvan_robe",
            "rootsclassic:sylvan_tunic",
            "rootsclassic:sylvan_boots"
        ],
        result: "wtwfacore:sylvan_ingot"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: ["wtwfacore:root_wrapped_invar_ingot", "tconstruct:slimesteel_ingot"],
        incenses: [
            "rootsclassic:living_sword",
            "rootsclassic:living_shovel",
            "rootsclassic:living_pickaxe",
            "rootsclassic:living_axe",
            "rootsclassic:living_hoe"
        ],
        result: "wtwfacore:living_ingot"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: ["wtwfacore:root_wrapped_invar_ingot", "tconstruct:slimesteel_ingot"],
        incenses: [
            "rootsclassic:wildwood_mask",
            "rootsclassic:wildwood_plate",
            "rootsclassic:wildwood_leggings",
            "rootsclassic:wildwood_boots",
            "wtwfacore:wildroot_seed"
        ],
        result: "wtwfacore:wildwood_ingot"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "rootsclassic:blackcurrant",
            "rootsclassic:redcurrant",
            "rootsclassic:whitecurrant"
        ],
        incenses: [],
        result: "wtwfacore:big_currant"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "wtwfacore:life_sustaining_metal",
            "thermal:lead_block",
            "minecraft:iron_block"
        ],
        incenses: [],
        result: "eidolon:pewter_blend"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "wtwfacore:life_sustaining_metal",
            "thermal:lead_block",
            "thermal:tin_block"
        ],
        incenses: [],
        result: "wtwfacore:weighty_lead_ingot"
    }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    directRituals.forEach(recipe => {
        ritual(event, recipe)
    })

    alloyRituals.forEach(recipe => {
        ritual(event, recipe)
    })
})
