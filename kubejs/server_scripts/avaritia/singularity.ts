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
    },
    {
        id: "kubejs:ender_pearl_singularity",
        displayName: "singularity.kubejs.ender_pearl_singularity",
        overlayColor: 0x0b744d,
        underlayColor: 0x175041,
        count: 1000,
        timeCost: 200,
        ingredient: "minecraft:ender_pearl"
    },
    {
        id: "kubejs:cobblestone_singularity",
        displayName: "singularity.kubejs.cobblestone_singularity",
        overlayColor: 0x666666,
        underlayColor: 0x969696,
        count: 1000,
        timeCost: 200,
        ingredient:"#forge:cobblestone"
    },
    {
        id: "kubejs:wooden_singularity",
        displayName: "singularity.kubejs.wooden_singularity",
        overlayColor:0xbc8300,
        underlayColor:0x915700,
        count:1000,
        timeCost:200,
        ingredient:"#minecraft:planks"
    },
    {
        id: "kubejs:treated_wood_singularity",
        displayName: "singularity.kubejs.treated_wood_singularity",
        overlayColor:0xe67301,
        underlayColor:0xc36800,
        count:1000,
        timeCost:200,
        ingredient:"minecraft:acacia_boat",
        ingredientOf:false
    }
]

function IDtoIngredient (singularities:SingularityRecipe) {
    return Ingredient.of(singularities.ingredient as Internal.Ingredient_)
}

AvaritiaEvents.singularity((event: Internal.SingularityRegisterEventJS) => {
    singularities.forEach(recipe => {
        event.register(recipe.id, (singularity: (Singularity)) => {
            singularity
                .setDisplayName(recipe.displayName)
                .setColors(recipe.overlayColor, recipe.underlayColor)
                .setCount(recipe.count)
                .setTimeCost(recipe.timeCost)
                .setIngredient(IDtoIngredient(recipe))
                .setEnabled(true)
                .setRecipeEnabled((recipe.ingredientOf === false) ? false : true)
        })
    })
})
