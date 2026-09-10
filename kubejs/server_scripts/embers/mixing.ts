import {fluidJson, FluidRef} from "../globalFunction"
export {}

type MixingRecipe = {
    inputs: FluidRef[]
    output: FluidRef
}

function mixing(event: any, recipe: MixingRecipe) {
    event.custom({
        type: "embers:mixing",
        inputs: recipe.inputs.map(fluidJson),
        output: fluidJson(recipe.output)
    })
}

const mixingRecipes: MixingRecipe[] = [
    {
        inputs: [
            "18x #forge:molten_copper",
            "9x #forge:molten_gold",
            "10x #forge:fluids/liquid_amber"
        ],
        output: "18x #forge:molten_dawnstone"
    },
    {
        inputs: [
            "9x #forge:molten_iron",
            "9x #forge:fluid/liquid_coal"
        ],
        output: "9x #forge:molten/high_carbon_iron"
    },
    {
        inputs: [
            "9x #forge:molten_iron",
            "9x #forge:molten/raw_steel"
        ],
        output: "18x #forge:molten_steel"
    },
    {
        inputs: [
            "9x #forge:molten_silver",
            "9x #forge:molten/heavy"
        ],
        output: "18x #forge:molten/spirit_silver"
    },
    {
        inputs: [
            "9x #forge:molten_dawnstone",
            "10x #forge:fluid/liquid_ember",
            "10x #forge:fluid/dwarven_oil"
        ],
        output: "9x #forge:molten/ember_dawnstone"
    },
    {
        inputs: [
            "9x #forge:molten/ember_dawnstone",
            "9x #forge:molten/spirit_silver"
        ],
        output: "18x #forge:molten/duskstone"
    },
    {
        inputs: [
            "9x #forge:molten/ember_dawnstone",
            "9x #forge:molten_steel"
        ],
        output: "18x #forge:molten/nightstone"
    },
    {
        inputs: [
            "3x aetherworks:alchemic_precursor",
            "3x aetherworks:aether_gas_impure",
            "3x #forge:molten_netherite"
        ],
        output: "6x aetherworks:aether_gas"
    },
    {
        inputs: [
            "10x aetherworks:alchemic_precursor",
            "10x tconstruct:potion",
            "10x kubejs:herb_residue_liquid"
        ],
        output: "30x kubejs:alchemical_extraction_liquid"
    }
]

ServerEvents.recipes((event: any) => {
    mixingRecipes.forEach(recipe => {
        mixing(event, recipe)
    })
})
