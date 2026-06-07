export {}

type SingularityRecipe = {
    id: string
    displayName: string
    overlayColor: number
    underlayColor: number
    count: number
    timeCost: number
    ingredient: string
    ingredientOf?: boolean
}

const singularities: SingularityRecipe[] = [
    {
        id: "kubejs:nouveau_essence_singularity",
        displayName: "singularity.kubejs.nouveau_essence_singularity",
        overlayColor: 0xC0C0C0,
        underlayColor: 0xE0B0FF,
        count: 1000,
        timeCost: 200,
        ingredient: "kubejs:nouveau_essence",
        ingredientOf: true
    },
    {
        id: "kubejs:ember_essence_singularity",
        displayName: "singularity.kubejs.ember_essence_singularity",
        overlayColor: 0xC0C0C0,
        underlayColor: 0xFF4500,
        count: 1000,
        timeCost: 200,
        ingredient: "kubejs:ember_essence",
        ingredientOf: true
    },
    {
        id: "kubejs:bookshelf_singularity",
        displayName: "singularity.kubejs.bookshelf_singularity",
        overlayColor: 0xC0C0C0,
        underlayColor: 0xa24e12,
        count: 500,
        timeCost: 200,
        ingredient: "#forge:bookshelves"
    }
]

AvaritiaEvents.singularity((event: any) => {
    singularities.forEach(recipe => {
        event.register(recipe.id, (singularity: any) => {
            singularity
                .setDisplayName(recipe.displayName)
                .setColors(recipe.overlayColor, recipe.underlayColor)
                .setCount(recipe.count)
                .setTimeCost(recipe.timeCost)
                .setIngredient(recipe.ingredientOf ? Ingredient.of(recipe.ingredient) : recipe.ingredient)
                .setEnabled(true)
                .setRecipeEnabled(false)
        })
    })
})
