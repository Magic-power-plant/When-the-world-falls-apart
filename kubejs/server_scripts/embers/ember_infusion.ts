export {}

const g = global as any

type ItemRef = string
type FluidRef = string
type EmberInfusionRecipe = {
    input?: ItemRef
    output?: ItemRef
    fluid?: FluidRef
    fluidO?: FluidRef
    emberCost: number
    recipeTime: number
}

const itemJson = (value: ItemRef) => g.json.ItemObjectToJson(value)
const fluidJson = (value: FluidRef) => g.json.FluidObjectToJson(value)

function emberInfusion(event: Internal.RecipesEventJS, recipe: EmberInfusionRecipe) {

    const json : any = {
        type: "embers_extended:ember_infusing",
        emberCost: recipe.emberCost,
        recipeTime: recipe.recipeTime
    }

    if (recipe.input) json.itemInput = itemJson(recipe.input)
    if (recipe.output) json.itemOutput = itemJson(recipe.output)
    if (recipe.fluid) json.fluidInput = fluidJson(recipe.fluid)
    if (recipe.fluidO) json.fluidOutput = fluidJson(recipe.fluidO)

    event.custom(json as Internal.JsonObject_)
}

const emberInfusionRecipes: EmberInfusionRecipe[] = [
    {
        input: "embers:ember_shard",
        output: "kubejs:omni_aspectus",
        fluid: "30x kubejs:molten_spirit_silver",
        emberCost: 1000,
        recipeTime: 100
    },
    {
        input: "rftoolsbase:dimensionalshard",
        output: "kubejs:source_matter_base",
        fluid: "30x kubejs:molten_ultra_neodymium",
        emberCost: 1000,
        recipeTime: 100
    },
    {
        input: "minecraft:bookshelf",
        output: "apotheosis:hellshelf",
        fluid: "100x embers:soul_crude",
        emberCost: 1000,
        recipeTime: 100
    },
    {
        input: "minecraft:netherrack",
        output: "minecraft:nether_brick",
        fluid: "10x embers:soul_crude",
        emberCost: 1000,
        recipeTime: 100
    },
    {
        input: "ars_nouveau:source_gem",
        output: "2x kubejs:essence_base",
        fluid: "60x kubejs:motlen_burn_sun",
        emberCost: 3000,
        recipeTime: 100
    },
    {
        input: "minecraft:gold_ingot",
        output: "kubejs:crude_nether_alloy_slag",
        fluid: "90x kubejs:debris_molten_solution",
        emberCost: 100,
        recipeTime: 10
    },
    {
        input: "minecraft:gunpowder",
        output: "kubejs:super_ember_fuel",
        fluid: "500x kubejs:liquid_coal",
        emberCost: 1000,
        recipeTime: 10
    }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    emberInfusionRecipes.forEach(recipe => {
        emberInfusion(event, recipe)
    })
})
