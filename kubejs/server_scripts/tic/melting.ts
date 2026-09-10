import {itemJson, fluidJson, ItemRef, FluidRef} from "../globalFunction"
export {}

type MeltingRecipe = {
    input: ItemRef
    result: FluidRef
    temperature: number
    time: number
}

function melting(event: any, recipe: MeltingRecipe) {
    event.custom({
        type: "tconstruct:melting",
        ingredient: itemJson(recipe.input),
        result: fluidJson(recipe.result),
        temperature: recipe.temperature,
        time: recipe.time
    })
}

const meltingRecipes: MeltingRecipe[] = [
    {
        input: "rootsclassic:fruit_salad",
        result: "100x kubejs:delicious_jam",
        temperature: 300,
        time: 100
    }
]

ServerEvents.recipes((event: any) => {
    meltingRecipes.forEach(recipe => {
        melting(event, recipe)
    })
})
