export {}
/*
type ItemRef = string

const runeGroups: ItemRef[][] = [
    ["botania:rune_air", "botania:rune_mana", "botania:rune_fire", "botania:rune_earth", "botania:rune_water"],
    ["botania:rune_spring", "botania:rune_summer", "botania:rune_autumn", "botania:rune_winter"],
    [
        "botania:rune_pride",
        "botania:rune_envy",
        "botania:rune_lust",
        "botania:rune_gluttony",
        "botania:rune_greed",
        "botania:rune_sloth",
        "botania:rune_wrath"
    ]
]

function expandedRuneIngredient(itemId: any): ItemRef[] {
    const id = itemId.toString()

    for (let i = 0; i < runeGroups.length; i++) {
        const group = runeGroups[i]
        if (group.includes(id)) {
            return group
        }
    }

    return [id]
}

function runicAltar(event: any, output: ItemRef, ingredients: any[], mana: number) {
    event.recipes.botania.runic_altar(`2x ${output}`, ingredients, mana)
}

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    event.forEachRecipe({type: "botania:runic_altar"}, (recipe: Internal.RecipeJS) => {
        const mana = recipe.allValueMap.get("mana").getValue()
        const output = recipe.outputValues()[0].value.item.id

        recipe.inputValues().forEach((input: any) => {
            const ingredients: Internal.Ingredient[] = []
            input.value.forEach((value: InputItem) => {
                ingredients.push(value.ingredient)
            })

            runicAltar(event, output, ingredients, mana)
        })

        event.remove({id: recipe.getId()} as Internal.RecipeFilter_)
    })
})
*/