export {}

type MeteoriteRecipe = {
    name: string
    input: string
    source: number
    model: number
    catalysts: string
    meteorites: string[]
    weights: number[]
    layer?: number[]
}

const arsMeteorites: MeteoriteRecipe[] = [
    {
        name: "common_metals_meteors",
        input: "kubejs:common_metals_meteors",
        source: 50,
        model: 0,
        catalysts: "ars_nouveau:source_gem",
        meteorites: [
            "minecraft:iron_ore",
            "minecraft:copper_ore",
            "minecraft:gold_ore",
            "thermal:silver_ore",
            "thermal:nickel_ore",
            "thermal:tin_ore",
            "redstone_chemical_elements:aluminum/aluminum_ore",
            "minecraft:stone"
        ],
        weights: [15, 6, 7, 8, 7, 7, 20, 30]
    },
    {
        name: "abyssal",
        input: "kubejs:abyssal_meteors",
        source: 100,
        model: 3,
        catalysts: "ars_nouveau:source_gem",
        meteorites: [
            "minecraft:water",
            "alexscaves:bone_worms",
            "alexscaves:twilight_anemone",
            "alexscaves:dusk_anemone",
            "alexscaves:midnight_anemone",
            "alexscaves:mussel",
            "alexscaves:ping_pong_sponge",
            "alexscaves:tube_worm",
            "minecraft:water",
            "minecraft:oxidized_copper",
            "minecraft:wet_sponge",
            "minecraft:sea_lantern",
            "minecraft:deepslate_diamond_ore",
            "minecraft:deepslate",
            "alexscaves:muck",
            "minecraft:tuff",
            "alexscaves:abyssmarine"
        ],
        weights: [25, 2, 1, 1, 1, 5, 10, 5, 10, 5, 3, 5, 2, 3, 10, 2, 10],
        layer: [8, 5, 4, 50, 25, 25]
    },
    {
        name: "aetherwork",
        input: "kubejs:aetherworks_meteors",
        source: 100,
        model: 2,
        catalysts: "ars_nouveau:source_gem",
        meteorites: [
            "aetherworks:ore_aether",
            "aetherworks:suevite",
            "aetherworks:ore_aether",
            "aetherworks:suevite_cobble"
        ],
        weights: [2, 47, 2, 47]
    },
    {
        name: "alien",
        input: "kubejs:alien_meteors",
        source: 120,
        model: 3,
        catalysts: "ars_nouveau:source_gem",
        meteorites: [
            "ae2:mysterious_cube",
            "ae2:flawless_budding_quartz",
            "ae2:flawed_budding_quartz",
            "ae2:chipped_budding_quartz",
            "ae2:damaged_budding_quartz",
            "ae2:quartz_block",
            "ae2:sky_stone_block",
            "ae2:fluix_block"
        ],
        weights: [1, 10, 5, 4, 3, 7, 60, 10],
        layer: [6, 2, 30, 70]
    },
    {
        name: "candy",
        input: "kubejs:candy_meteors",
        source: 100,
        model: 3,
        catalysts: "ars_nouveau:source_gem",
        meteorites: [
            "alexscaves:candy_cane_pole",
            "alexscaves:licoroot",
            "alexscaves:stripped_candy_cane_block",
            "alexscaves:rock_candy_orange",
            "alexscaves:rock_candy_white",
            "alexscaves:rock_candy_lime",
            "alexscaves:rock_candy_light_blue",
            "alexscaves:rock_candy_yellow",
            "alexscaves:rock_candy_green",
            "alexscaves:vanilla_ice_cream",
            "alexscaves:chocolate_ice_cream",
            "alexscaves:sweetberry_ice_cream",
            "alexscaves:giant_sweetberry",
            "alexscaves:block_of_vanilla_frosting",
            "alexscaves:sugar_glass",
            "alexscaves:wafer_cookie_block",
            "alexscaves:block_of_polished_chocolate",
            "alexscaves:dough_block",
            "alexscaves:cookie_block",
            "alexscaves:gingerbread_block",
            "alexscaves:cake_layer",
            "alexscaves:block_of_chocolate",
            "alexscaves:block_of_frosted_chocolate"
        ],
        weights: [3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 5, 5, 10, 5, 7, 6, 7, 5],
        layer: [15, 8, 50, 50]
    },
    {
        name: "magnet",
        input: "kubejs:magnet_meteors",
        source: 100,
        model: 3,
        catalysts: "ars_nouveau:source_gem",
        meteorites: [
            "alexscaves:azure_neodymium_node",
            "alexscaves:azure_neodymium_pillar",
            "alexscaves:metal_swarf",
            "alexscaves:scarlet_neodymium_node",
            "alexscaves:scarlet_neodymium_pillar",
            "alexscaves:energized_galena_azure",
            "alexscaves:energized_galena_scarlet",
            "alexscaves:energized_galena_neutral",
            "alexscaves:galena_iron_ore",
            "alexscaves:galena",
            "minecraft:deepslate"
        ],
        weights: [7, 8, 20, 7, 8, 6, 6, 5, 10, 20, 3],
        layer: [5, 6, 50, 50]
    },
    {
        name: "primitive",
        input: "kubejs:primitive_meteors",
        source: 100,
        model: 3,
        catalysts: "ars_nouveau:source_gem",
        meteorites: [
            "minecraft:deepslate",
            "minecraft:packed_mud",
            "minecraft:sandstone",
            "alexscaves:limestone",
            "alexscaves:pewen_log",
            "alexscaves:fern_thatch",
            "alexscaves:pewen_branch",
            "alexscaves:subterranodon_egg",
            "minecraft:bone_block",
            "alexscaves:cycad",
            "alexscaves:amber",
            "minecraft:smooth_basalt",
            "alexscaves:flood_basalt",
            "alexscaves:primal_magma"
        ],
        weights: [2, 4, 3, 21, 5, 5, 3, 2, 15, 2, 8, 15, 8, 7],
        layer: [4, 7, 3, 30, 40, 30]
    }
]

ServerEvents.highPriorityData((event: any) => {
    arsMeteorites.forEach(recipe => {
        const meteorite: any = {
            input: recipe.input,
            source: recipe.source,
            model: recipe.model,
            catalysts: recipe.catalysts,
            meteorites: recipe.meteorites,
            weights: recipe.weights
        }

        if (recipe.layer) meteorite.layer = recipe.layer

        event.addJson(`arsmeteorites:meteorite_recipes/${recipe.name}.json`, JsonIO.of(meteorite))
    })
})
