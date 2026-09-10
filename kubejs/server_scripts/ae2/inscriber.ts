import {itemJson, ItemRef} from "../globalFunction"
export {}

type InscriberRecipe = {
    bottom: ItemRef
    middle: ItemRef
    top: ItemRef
    result: ItemRef
}

function inscriber(event: any, recipe: InscriberRecipe) {
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: itemJson(recipe.bottom),
            middle: itemJson(recipe.middle),
            top: itemJson(recipe.top)
        },
        mode: "press",
        result: itemJson(recipe.result)
    })
}

const digitalTransducers: InscriberRecipe[] = [
    {
        bottom: "ae2:annihilation_core",
        middle: "minecraft:chest",
        top: "ae2:formation_core",
        result: "kubejs:item_digital_transducer"
    },
    {
        bottom: "ae2:annihilation_core",
        middle: "embers:fluid_vessel",
        top: "ae2:formation_core",
        result: "kubejs:fluid_digital_transducer"
    },
    {
        bottom: "ae2:annihilation_core",
        middle: "botania:mana_pool",
        top: "ae2:formation_core",
        result: "kubejs:mana_digital_transducer"
    },
    {
        bottom: "ae2:annihilation_core",
        middle: "ars_nouveau:source_jar",
        top: "ae2:formation_core",
        result: "kubejs:source_digital_transducer"
    },
    {
        bottom: "ae2:annihilation_core",
        middle: "ae2:energy_cell",
        top: "ae2:formation_core",
        result: "kubejs:energy_digital_transducer"
    }
]

type PressTemplate = {
    top: ItemRef
    result: (tier: string) => ItemRef
}

const storageTiers = ["1k", "4k", "16k"]

const componentPresses: PressTemplate[] = [
    {
        top: "kubejs:item_digital_transducer",
        result: (tier: string) => `ae2:cell_component_${tier}`
    },
    {
        top: "kubejs:fluid_digital_transducer",
        result: (tier: string) => `kubejs:${tier}_fluid_cell`
    },
    {
        top: "kubejs:mana_digital_transducer",
        result: (tier: string) => `kubejs:${tier}_mana_cell`
    },
    {
        top: "kubejs:energy_digital_transducer",
        result: (tier: string) => `appflux:core_${tier}`
    },
    {
        top: "kubejs:source_digital_transducer",
        result: (tier: string) => `kubejs:${tier}_source_cell`
    }
]

type CellPressTemplate = {
    bottom: ItemRef
    top: (tier: string) => ItemRef
    result: (tier: string) => ItemRef
}

const cellPresses: CellPressTemplate[] = [
    {
        bottom: "ae2:item_cell_housing",
        top: (tier: string) => `ae2:cell_component_${tier}`,
        result: (tier: string) => `ae2:item_storage_cell_${tier}`
    },
    {
        bottom: "ae2:fluid_cell_housing",
        top: (tier: string) => `kubejs:${tier}_fluid_cell`,
        result: (tier: string) => `ae2:fluid_storage_cell_${tier}`
    },
    {
        bottom: "arseng:source_cell_housing",
        top: (tier: string) => `kubejs:${tier}_source_cell`,
        result: (tier: string) => `arseng:source_storage_cell_${tier}`
    },
    {
        bottom: "appflux:fe_cell_housing",
        top: (tier: string) => `appflux:core_${tier}`,
        result: (tier: string) => `appflux:fe_${tier}_cell`
    },
    {
        bottom: "appbot:mana_cell_housing",
        top: (tier: string) => `kubejs:${tier}_mana_cell`,
        result: (tier: string) => `appbot:mana_storage_cell_${tier}`
    }
]

ServerEvents.recipes((event: any) => {
    digitalTransducers.forEach(recipe => {
        inscriber(event, recipe)
    })

    storageTiers.forEach(tier => {
        componentPresses.forEach(recipe => {
            inscriber(event, {
                bottom: `kubejs:${tier}_storage_circuits_etched_substrate`,
                middle: "tconstruct:queens_slime_ingot",
                top: recipe.top,
                result: recipe.result(tier)
            })
        })

        cellPresses.forEach(recipe => {
            inscriber(event, {
                bottom: recipe.bottom,
                middle: "tinkersinnovation:slimton_ingot",
                top: recipe.top(tier),
                result: recipe.result(tier)
            })
        })
    })
})
