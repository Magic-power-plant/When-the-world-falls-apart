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
        id: "wtwfacore:nouveau_essence_singularity",
        displayName: "singularity.wtwfacore.nouveau_essence_singularity",
        overlayColor: 0xC0C0C0,
        underlayColor: 0xE0B0FF,
        count: 1000,
        timeCost: 200,
        ingredient: "wtwfacore:nouveau_essence",
        ingredientOf: true
    },
    {
        id: "wtwfacore:ember_essence_singularity",
        displayName: "singularity.wtwfacore.ember_essence_singularity",
        overlayColor: 0xC0C0C0,
        underlayColor: 0xFF4500,
        count: 1000,
        timeCost: 200,
        ingredient: "wtwfacore:ember_essence",
        ingredientOf: true
    },
    {
        id: "wtwfacore:bookshelf_singularity",
        displayName: "singularity.wtwfacore.bookshelf_singularity",
        overlayColor: 0xC0C0C0,
        underlayColor: 0xa24e12,
        count: 500,
        timeCost: 200,
        ingredient: "#forge:bookshelves"
    },
    {
        id: "wtwfacore:ender_pearl_singularity",
        displayName: "singularity.wtwfacore.ender_pearl_singularity",
        overlayColor: 0x0b744d,
        underlayColor: 0x175041,
        count: 1000,
        timeCost: 200,
        ingredient: "minecraft:ender_pearl"
    },
    {
        id: "wtwfacore:cobblestone_singularity",
        displayName: "singularity.wtwfacore.cobblestone_singularity",
        overlayColor: 0x666666,
        underlayColor: 0x969696,
        count: 1000,
        timeCost: 200,
        ingredient:"#forge:cobblestone"
    },
    {
        id: "wtwfacore:wooden_singularity",
        displayName: "singularity.wtwfacore.wooden_singularity",
        overlayColor:0xbc8300,
        underlayColor:0x915700,
        count:1000,
        timeCost:200,
        ingredient:"#minecraft:planks"
    },
    {
        id: "wtwfacore:treated_wood_singularity",
        displayName: "singularity.wtwfacore.treated_wood_singularity",
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
