export {}

const g = global as any

type ItemRef = string
type RitualRecipe = {
    effect: string
    level: number
    color: string
    ingredients: ItemRef[]
    incenses?: ItemRef[]
    result?: ItemRef
    entity?: string
}

const itemJson = (value: ItemRef) => g.json.ItemObjectToJson(value)

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
            "kubejs:root_wrapped_invar_machine_frame",
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
            "kubejs:root_wrapped_invar_machine_frame",
            "kubejs:entangle_aura_root",
            "aether:sentry_stone"
        ],
        incenses: [
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root",
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
            "kubejs:aubergine_seed",
            "kubejs:sky_essence"
        ],
        incenses: [
            "kubejs:sky_essence",
            "kubejs:sky_essence",
            "kubejs:tree_essence",
            "kubejs:lush_forests_essence",
            "kubejs:range_mountains_essence",
            "aether:enchanted_gravitite"
        ],
        result: "kubejs:moonglow_seed"
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
            "kubejs:moonglow_seed",
            "minecraft:wheat_seeds",
            "aether:golden_amber"
        ],
        incenses: [
            "aether:ambrosium_shard",
            "kubejs:swords_essence",
            "kubejs:metal_essence",
            "thermal:electrum_block"
        ],
        result: "kubejs:wildewheet_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "kubejs:wildewheet_seed",
            "kubejs:range_mountains_essence",
            "kubejs:inferno_essence"
        ],
        incenses: [
            "kubejs:stone_iron_block",
            "twilightforest:ironwood_block",
            "twilightforest:knightmetal_block",
            "minecraft:netherite_block"
        ],
        result: "kubejs:stalicripe_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "kubejs:stalicripe_seed",
            "twilightforest:thorn_rose",
            "minecraft:beetroot"
        ],
        incenses: [
            "kubejs:double_compression_liquid_source_bucket",
            "ars_nouveau:apprentice_spell_book",
            "kubejs:tree_essence",
            "kubejs:range_mountains_essence"
        ],
        result: "kubejs:pereskia_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "kubejs:pereskia_seed",
            "kubejs:nouveau_essence",
            "aetherworks:aether_amalgam"
        ],
        incenses: [
            "twilightforest:aurora_block",
            "apotheosis:infused_seashelf",
            "starbunclemania:glyph_pickup_fluid",
            "ars_nouveau:glyph_conjure_water"
        ],
        result: "kubejs:dewgonia_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "aetherworks:crossbow_magma",
            "kubejs:dewgonia_seed",
            "aether:aerogel"
        ],
        incenses: [
            "twilightforest:fluffy_cloud",
            "kubejs:nouveau_essence",
            "kubejs:sky_essence",
            "ars_nouveau:air_essence"
        ],
        result: "kubejs:cloud_berry_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "kubejs:cloud_berry_seed",
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root"
        ],
        incenses: [
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root",
            "kubejs:entangle_aura_root"
        ],
        result: "kubejs:wildroot_seed"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "kubejs:wildroot_seed",
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
        result: "kubejs:spiritleaf_seed"
    }
]

const alloyRituals: RitualRecipe[] = [
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: ["kubejs:root_wrapped_invar_ingot", "tconstruct:slimesteel_ingot"],
        incenses: [
            "rootsclassic:sylvan_hood",
            "rootsclassic:sylvan_robe",
            "rootsclassic:sylvan_tunic",
            "rootsclassic:sylvan_boots"
        ],
        result: "kubejs:sylvan_ingot"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: ["kubejs:root_wrapped_invar_ingot", "tconstruct:slimesteel_ingot"],
        incenses: [
            "rootsclassic:living_sword",
            "rootsclassic:living_shovel",
            "rootsclassic:living_pickaxe",
            "rootsclassic:living_axe",
            "rootsclassic:living_hoe"
        ],
        result: "kubejs:living_ingot"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: ["kubejs:root_wrapped_invar_ingot", "tconstruct:slimesteel_ingot"],
        incenses: [
            "rootsclassic:wildwood_mask",
            "rootsclassic:wildwood_plate",
            "rootsclassic:wildwood_leggings",
            "rootsclassic:wildwood_boots",
            "kubejs:wildroot_seed"
        ],
        result: "kubejs:wildwood_ingot"
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
        result: "kubejs:big_currant"
    },
    {
        effect: greenCrafting,
        level: 2,
        color: greenColor,
        ingredients: [
            "kubejs:life_sustaining_metal",
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
            "kubejs:life_sustaining_metal",
            "thermal:lead_block",
            "thermal:tin_block"
        ],
        incenses: [],
        result: "kubejs:weighty_lead_ingot"
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
