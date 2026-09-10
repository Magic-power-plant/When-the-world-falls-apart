import {itemJson, ItemRef} from "../globalFunction"
export {}

type ExcavationRecipe = {
    output: ItemRef
    blockTag: string
    blockAmount: number
    chance: number
    weight: number
    maxHeight: number
}

function excavation(event: any, recipe: ExcavationRecipe) {
    event.custom({
        type: "embers:excavation",
        chance: recipe.chance,
        max_height: recipe.maxHeight,
        output: itemJson(recipe.output),
        required_block: {
            amount: recipe.blockAmount,
            block_tag: recipe.blockTag
        },
        weight: recipe.weight
    })
}

const excavationRecipes: ExcavationRecipe[] = [
    {
        output: "minecraft:clay_ball",
        blockTag: "minecraft:block/clay",
        blockAmount: 9,
        chance: 0.75,
        weight: 50,
        maxHeight: 2147483647
    },
    {
        output: "minecraft:clay",
        blockTag: "minecraft:block/clay",
        blockAmount: 9,
        chance: 0.25,
        weight: 10,
        maxHeight: 2147483647
    },
    {
        output: "minecraft:sand",
        blockTag: "minecraft:sand",
        blockAmount: 9,
        chance: 0.25,
        weight: 100,
        maxHeight: 2147483647
    }
]

ServerEvents.recipes((event: any) => {
    excavationRecipes.forEach(recipe => {
        excavation(event, recipe)
    })
})
