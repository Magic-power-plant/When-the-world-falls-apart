export {}

type WeightedOre = {
    item: string
    weight: number
}

type OrechidTable = {
    input: string
    outputs: WeightedOre[]
}

const orechidTables: OrechidTable[] = [
    {
        input: "minecraft:stone",
        outputs: [
            { item: "minecraft:iron_ore", weight: 29371 },
            { item: "minecraft:gold_ore", weight: 2647 },
            { item: "minecraft:diamond_ore", weight: 883 },
            { item: "minecraft:emerald_ore", weight: 1239 },
            { item: "minecraft:lapis_ore", weight: 1079 },
            { item: "minecraft:redstone_ore", weight: 7654 },
            { item: "minecraft:copper_ore", weight: 7000 },
        ],
    },
    {
        input: "minecraft:deepslate",
        outputs: [
            { item: "minecraft:deepslate_iron_ore", weight: 250 },
            { item: "minecraft:deepslate_gold_ore", weight: 125 },
            { item: "minecraft:deepslate_diamond_ore", weight: 100 },
            { item: "minecraft:deepslate_emerald_ore", weight: 50 },
            { item: "minecraft:deepslate_lapis_ore", weight: 175 },
            { item: "minecraft:deepslate_redstone_ore", weight: 150 },
            { item: "minecraft:deepslate_copper_ore", weight: 75 },
        ],
    },
    {
        input: "minecraft:netherrack",
        outputs: [
            { item: "minecraft:nether_gold_ore", weight: 3635 },
            { item: "minecraft:nether_quartz_ore", weight: 19600 },
            { item: "minecraft:ancient_debris", weight: 148 },
        ],
    },
]

const legacyOrechidModifiedTableCount = orechidTables.length - 1

function legacyOreWeightTotal(oreList: WeightedOre[]) {
    let total = 0
    for (let i = 0; i < oreList.length - 1; i++) {
        total += oreList[i].weight
    }
    return total
}

function selectWeightedOre(oreList: WeightedOre[]) {
    let rand = Math.random() * legacyOreWeightTotal(oreList)
    for (let i = 0; i < oreList.length; i++) {
        rand -= oreList[i].weight
        if (rand < 0) {
            return oreList[i].item
        }
    }

    return undefined
}

function readRecipeInputItemId(recipe: any) {
    let rawInputItemId = ""
    let inputItem = recipe.inputs.values().toArray()

    inputItem[0].forEach((content:Internal.Content) => {
        let stacks = content.getContent().getInner().getStacks()
        stacks.forEach((stack:Internal.ItemStack) => {
            rawInputItemId = stack.getId()
        })
    })

    return rawInputItemId
}

ServerEvents.recipes(event => {
    orechidTables.forEach(table => {
        event.recipes.mbd2.orechid()
            .inputItems(table.input as InputItem_)
    })
})

MBDMachineEvents.onBeforeRecipeModify("mbd2:orechid", e => {
    const { recipe } = e.event
    const rawInputItemId = readRecipeInputItemId(recipe)

    let newRecipe = undefined
    for (let i = 0; i < legacyOrechidModifiedTableCount; i++) {
        let table = orechidTables[i]
        if (rawInputItemId === table.input) {
            let selectedItem = selectWeightedOre(table.outputs)
            let builder = recipe.toBuilder()
            builder.outputItems([selectedItem])
            newRecipe = builder.buildMBDRecipe()
        }
    }
    e.event.setRecipe(newRecipe)
})
