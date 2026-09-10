import {ingredientJson, IngredientRef} from "../globalFunction"
export {}

type DistilleryRecipe = {
    id?: string
    ingredients: IngredientRef[]
    results: IngredientRef[]
    cookTime?: number
    power?: number
}

const DEFAULT_COOK_TIME = 300
const DEFAULT_POWER = 750
const MAX_INGREDIENTS = 3
const MAX_RESULTS = 4

function enchantedDistillery(event: Internal.RecipesEventJS, recipe: DistilleryRecipe) {
    if (recipe.ingredients.length === 0 || recipe.ingredients.length > MAX_INGREDIENTS) {
        throw new Error(`Enchanted distillery recipes require 1-${MAX_INGREDIENTS} ingredients`)
    }
    if (recipe.results.length === 0 || recipe.results.length > MAX_RESULTS) {
        throw new Error(`Enchanted distillery recipes require 1-${MAX_RESULTS} results`)
    }
    if (recipe.cookTime !== undefined && recipe.cookTime < 1) {
        throw new Error("Enchanted distillery cookTime must be at least 1")
    }
    if (recipe.power !== undefined && recipe.power < 0) {
        throw new Error("Enchanted distillery power cannot be negative")
    }

    const customRecipe = event.custom({
        type: "enchanted:distilling",
        cookTime: recipe.cookTime ?? DEFAULT_COOK_TIME,
        ingredients: recipe.ingredients.map(ingredientJson),
        power: recipe.power ?? DEFAULT_POWER,
        results: recipe.results.map(ingredientJson)
    } as unknown as Internal.JsonObject)

    if (recipe.id) {
        customRecipe.id(recipe.id)
    }
}

const distilleryRecipes: DistilleryRecipe[] = [
    /*
    // Repeat an item entry to consume it more than once. Item.of(...) is also supported for NBT.
    {
        id: "kubejs:enchanted/distillery/example",
        ingredients: [
            "enchanted:clay_jar",
            "enchanted:foul_fume",
            "enchanted:quicklime"
        ],
        results: [
            "enchanted:gypsum",
            "enchanted:oil_of_vitriol",
            "minecraft:slime_ball"
        ],
        cookTime: 300,
        power: 750
    }
    */
   {
    ingredients:["enchanted:clay_jar","enchanted:witch_cauldron","eidolon:crucible"],
    results: ["kubejs:dishwater"],
    cookTime:300,
    power:500
   }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    distilleryRecipes.forEach(recipe => {
        enchantedDistillery(event, recipe)
    })
})
