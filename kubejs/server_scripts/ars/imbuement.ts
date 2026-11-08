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
        input: "wtwfacore:essence_base",
        output: "wtwfacore:tree_essence",
        source: 2000,
        pedestalItems: ["#minecraft:saplings", "#forge:seeds", "#minecraft:flowers"]
    },
    {
        input: "wtwfacore:essence_base",
        output: "wtwfacore:metal_essence",
        source: 2000,
        pedestalItems: ["minecraft:gold_ingot", "#forge:ingots/silver", "#forge:ingots/copper"]
    },
    {
        input: "wtwfacore:source_gem_steel_machine_frame",
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
        input: "wtwfacore:source_gem_steel_machine_frame",
        output: "ars_nouveau:enchanting_apparatus",
        source: 10000,
        pedestalItems: [
            "thermal:electrum_block",
            "ars_nouveau:sourcestone",
            "ars_nouveau:sourcestone",
            "ars_nouveau:air_essence",
            "wtwfacore:metal_essence",
            "wtwfacore:tree_essence",
            "ars_nouveau:earth_essence",
            "ars_nouveau:water_essence",
            "ars_nouveau:fire_essence"
        ]
    },
    {
        input: "wtwfacore:purified_alloy_mass",
        output: "wtwfacore:annealed_alloy_ingot_semi_stable",
        source: 1000,
        pedestalItems: []
    },
    {
        input: "wtwfacore:raw_source_gem_steel",
        output: "wtwfacore:source_gem_steel_ingot",
        source: 1000,
        pedestalItems: []
    },
    {
        input: "wtwfacore:source_gem_steel_machine_frame",
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
        input: "wtwfacore:1k_storage_circuits_etched_substrate",
        output: "wtwfacore:4k_storage_circuits_etched_substrate",
        source: 10000,
        pedestalItems: [
            "wtwfacore:ember_dawnstone_component",
            "wtwfacore:ember_dawnstone_component",
            "wtwfacore:ember_dawnstone_component",
            "wtwfacore:ember_dawnstone_component"
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
