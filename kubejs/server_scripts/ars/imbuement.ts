export {}

type ItemRef = string
type ImbuementRecipe = {
    input: ItemRef
    output: ItemRef
    source: number
    pedestalItems: ItemRef[]
}

function imbuement(event: any, recipe: ImbuementRecipe) {
    event.recipes.ars_nouveau.imbuement(
        recipe.input,
        recipe.output,
        recipe.source,
        recipe.pedestalItems
    )
}

const emberImbuements: ImbuementRecipe[] = [
    {
        input: "#embers:ember/grit",
        output: "embers:ember_shard",
        source: 1000,
        pedestalItems: []
    },
    {
        input: "#embers:ember/shard",
        output: "embers:ember_crystal",
        source: 2000,
        pedestalItems: []
    },
    {
        input: "#embers:ember/crystal",
        output: "embers:ember_crystal_cluster",
        source: 3000,
        pedestalItems: []
    }
]

const arsImbuements: ImbuementRecipe[] = [
    {
        input: "kubejs:essence_base",
        output: "kubejs:tree_essence",
        source: 2000,
        pedestalItems: ["#minecraft:saplings", "#forge:seeds", "#minecraft:flowers"]
    },
    {
        input: "kubejs:essence_base",
        output: "kubejs:metal_essence",
        source: 2000,
        pedestalItems: ["minecraft:gold_ingot", "#forge:ingots/silver", "#forge:ingots/copper"]
    },
    {
        input: "kubejs:source_gem_steel_machine_frame",
        output: "ars_nouveau:arcane_core",
        source: 10000,
        pedestalItems: [
            "thermal:electrum_block",
            "ars_nouveau:sourcestone",
            "ars_nouveau:sourcestone",
            "ars_nouveau:sourcestone",
            "ars_nouveau:sourcestone"
        ]
    },
    {
        input: "kubejs:source_gem_steel_machine_frame",
        output: "ars_nouveau:enchanting_apparatus",
        source: 10000,
        pedestalItems: [
            "thermal:electrum_block",
            "ars_nouveau:sourcestone",
            "ars_nouveau:sourcestone",
            "ars_nouveau:air_essence",
            "kubejs:metal_essence",
            "kubejs:tree_essence",
            "ars_nouveau:earth_essence",
            "ars_nouveau:water_essence",
            "ars_nouveau:fire_essence"
        ]
    },
    {
        input: "kubejs:purified_alloy_mass",
        output: "kubejs:annealed_alloy_ingot_semi_stable",
        source: 1000,
        pedestalItems: []
    },
    {
        input: "kubejs:raw_source_gem_steel",
        output: "kubejs:source_gem_steel_ingot",
        source: 1000,
        pedestalItems: []
    },
    {
        input: "kubejs:source_gem_steel_machine_frame",
        output: "ars_nouveau:relay",
        source: 1000,
        pedestalItems: [
            "ars_nouveau:source_gem",
            "ars_nouveau:source_gem",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot"
        ]
    },
    {
        input: "kubejs:1k_storage_circuits_etched_substrate",
        output: "kubejs:4k_storage_circuits_etched_substrate",
        source: 10000,
        pedestalItems: [
            "kubejs:ember_dawnstone_component",
            "kubejs:ember_dawnstone_component",
            "kubejs:ember_dawnstone_component",
            "kubejs:ember_dawnstone_component"
        ]
    }
]

ServerEvents.recipes((event: any) => {
    emberImbuements.forEach(recipe => {
        imbuement(event, recipe)
    })

    arsImbuements.forEach(recipe => {
        imbuement(event, recipe)
    })
})
