export {}

const g = global as any

type ItemRef = string
type AetheriumAnvilRecipe = {
    input: ItemRef
    output: ItemRef
    difficulty?: number
    emberPerHit?: number
    numberOfHits?: number
    temperatureMin?: number
    temperatureMax?: number
    chance?: number
    count?: number
}

const itemJson = (value: ItemRef) => g.json.ItemObjectToJson(value)

function aetheriumAnvil(event: any, recipe: AetheriumAnvilRecipe) {
    const difficulty = recipe.difficulty != undefined ? recipe.difficulty : 5
    const emberPerHit = recipe.emberPerHit != undefined ? recipe.emberPerHit : 90
    const numberOfHits = recipe.numberOfHits != undefined ? recipe.numberOfHits : 25
    const temperatureMin = recipe.temperatureMin != undefined ? recipe.temperatureMin : 2200
    const temperatureMax = recipe.temperatureMax != undefined ? recipe.temperatureMax : 2500
    const chance = recipe.chance != undefined ? recipe.chance : 1.0
    const count = recipe.count != undefined ? recipe.count : 1

    event.custom({
        type: "aetherworks:aetherium_anvil",
        difficulty: difficulty,
        emberPerHit: emberPerHit,
        input: itemJson(recipe.input),
        numberOfHits: numberOfHits,
        result: [
            {
                chance: chance,
                count: count,
                item: recipe.output
            }
        ],
        temperatureMax: temperatureMax,
        temperatureMin: temperatureMin
    })
}

const anvilRecipes: AetheriumAnvilRecipe[] = [
    {
        input: "kubejs:refine_inferno_bulb",
        output: "kubejs:aetherwork_inferno_bulb",
        difficulty: 3,
        emberPerHit: 100,
        numberOfHits: 5,
        temperatureMax: 3000,
        temperatureMin: 2000
    }
]

ServerEvents.recipes((event: any) => {
    anvilRecipes.forEach(recipe => {
        aetheriumAnvil(event, recipe)
    })
})
