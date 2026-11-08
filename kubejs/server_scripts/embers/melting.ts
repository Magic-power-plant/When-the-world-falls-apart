import {itemJson, fluidJson, notEmptyTag, ItemRef, FluidRef} from "../globalFunction"
export {}

type MeltingRecipe = {
    input: ItemRef
    output: FluidRef
    conditionTag: string
    id?: string
}

function melting(event: any, recipe: MeltingRecipe) {
    const customRecipe = event.custom({
        type: "embers:melting",
        conditions: [notEmptyTag(recipe.conditionTag)],
        input: itemJson(recipe.input),
        output: fluidJson(recipe.output)
    })

    if (recipe.id) customRecipe.id(recipe.id)
}

const amberCondition = "forge:fragments/amber"

const dustMeltingMaterials = [
    "iron",
    "silver",
    "gold",
    "copper"
]

const meltingRecipes: MeltingRecipe[] = [
    {
        input: "#forge:fragments/amber",
        output: "100x #forge:fluids/liquid_amber",
        conditionTag: amberCondition,
        id: "wtwfacore:embers/melting_amber"
    },
    {
        input: "#minecraft:coals",
        output: "100x #forge:fluid/liquid_coal",
        conditionTag: amberCondition,
        id: "wtwfacore:embers/melting_coal"
    },
    {
        input: "#wtwfacore:item/raw_steel_billet",
        output: "90x #forge:molten/raw_steel",
        conditionTag: amberCondition,
        id: "wtwfacore:embers/melting_raw_steel"
    },
    {
        input: "#forge:ingots/heavy",
        output: "90x #forge:molten/heavy",
        conditionTag: amberCondition,
        id: "wtwfacore:embers/melting_heavy"
    },
    {
        input: "#forge:dusts/enriched_debris",
        output: "120x #forge:molten/debris_solution",
        conditionTag: amberCondition,
        id: "wtwfacore:molten/debris_solution"
    },
    {
        input: "#wtwfacore:energized_nether_alloy_crystal",
        output: "120x #wtwfacore:molten/alloy_catalytic_intermediate",
        conditionTag: amberCondition
    },
    {
        input: "#forge:ingots/ultra_neodymium",
        output: "90x #forge:molten/ultra_neodymium",
        conditionTag: amberCondition
    },
    {
        input: "wtwfacore:spirit_silver_ingot",
        output: "90x #forge:molten/spirit_silver",
        conditionTag: amberCondition
    },
    {
        input: "malum:cthonic_gold_fragment",
        output: "90x embers:molten_gold",
        conditionTag: amberCondition
    },
    {
        input: "wtwfacore:herb_residue",
        output: "100x wtwfacore:herb_residue_liquid",
        conditionTag: amberCondition
    },
    {
        input:"minecraft:blaze_rod",
        output:"80x tconstruct:blazing_blood",
        conditionTag: amberCondition
    },
    {
        input:"minecraft:blaze_powder",
        output:"35x tconstruct:blazing_blood",
        conditionTag: amberCondition
    }
]

ServerEvents.recipes((event: any) => {
    dustMeltingMaterials.forEach(material => {
        melting(event, {
            input: `#forge:dusts/${material}`,
            output: `90x #forge:molten_${material}`,
            conditionTag: `forge:dusts/${material}`,
            id: `wtwfacore:embers/melting_${material}`
        })
    })

    meltingRecipes.forEach(recipe => {
        melting(event, recipe)
    })
})
