export {}
const g = global as any

type ItemRef = string
type ByproductRecipe = {
    ingredients: ItemRef,
    result: ItemRef
}

const itemJson = (value: ItemRef) => g.json.ItemObjectToJson(value) as Internal.JsonElement

function Byproduct (event: Internal.RecipesEventJS, recipe: ByproductRecipe) {
    const json: any = {
        type: "enchanted:byproduct",
        ingredient: itemJson(recipe.ingredients),
        result: itemJson(recipe.result)
    }
    event.custom(json)
}

const byproductRecipes: ByproductRecipe[] = [
    {
        ingredients: "minecraft:nether_star",
        result: "kubejs:flow_stars"
    }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    byproductRecipes.forEach(recipe => {
        Byproduct(event, recipe)
    })
})