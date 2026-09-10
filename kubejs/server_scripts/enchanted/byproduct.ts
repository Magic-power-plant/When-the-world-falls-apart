import {itemJson, ItemRef} from "../globalFunction"
export {}

type ByproductRecipe = {
    ingredients: ItemRef
    result: ItemRef
}

function byproduct (event: Internal.RecipesEventJS, recipe: ByproductRecipe) {
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
        byproduct(event, recipe)
    })
})