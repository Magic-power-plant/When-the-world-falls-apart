export {}

const g = global as any

type ItemRef = string
type FluidRef = string
type MeltingRecipe = {
    input: ItemRef
    result: FluidRef
    temperature: number
    time: number
}

const itemJson = (value: ItemRef) => g.json.ItemObjectToJson(value)
const fluidJson = (value: FluidRef) => g.json.FluidObjectToJson(value)

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
