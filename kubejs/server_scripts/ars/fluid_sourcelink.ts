export {}

type FluidSourcelinkRecipe = {
    fluid: string
    mbToSourceRatio: number
}

function fluidSourcelink(event: any, recipe: FluidSourcelinkRecipe) {
    event.custom({
        type: "starbunclemania:fluid_sourcelink",
        fluid: recipe.fluid,
        mb_to_source_ratio: recipe.mbToSourceRatio
    })
}

const fluidSourcelinkRecipes: FluidSourcelinkRecipe[] = [
    {fluid: "kubejs:compression_liquid_source", mbToSourceRatio: 10},
    {fluid: "kubejs:double_compression_liquid_source", mbToSourceRatio: 100}
]

ServerEvents.recipes((event: any) => {
    fluidSourcelinkRecipes.forEach(recipe => {
        fluidSourcelink(event, recipe)
    })
})
