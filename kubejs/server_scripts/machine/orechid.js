let inputs = [
    "minecraft:stone",
    "minecraft:deepslate",
    "minecraft:netherrack"
]
let outputs = [
    [
        ["minecraft:iron_ore", 29371],
        ["minecraft:gold_ore", 2647],
        ["minecraft:diamond_ore", 883],
        ["minecraft:emerald_ore", 1239],
        ["minecraft:lapis_ore", 1079],
        ["minecraft:redstone_ore", 7654],
        ["minecraft:copper_ore", 7000]
    ],
    [
        ["minecraft:deepslate_iron_ore", 250],
        ["minecraft:deepslate_gold_ore", 125],
        ["minecraft:deepslate_diamond_ore", 100],
        ["minecraft:deepslate_emerald_ore", 50],
        ["minecraft:deepslate_lapis_ore", 175],
        ["minecraft:deepslate_redstone_ore", 150],
        ["minecraft:deepslate_copper_ore", 75]
    ],
    [
        ["minecraft:nether_gold_ore", 3635],
        ["minecraft:nether_quartz_ore", 19600],
        ["minecraft:ancient_debris", 148]
    ]
]
ServerEvents.recipes(event => {
    inputs.forEach(item => {
        event.recipes.mbd2.orechid()
        .inputItems(item)
    })
})
MBDMachineEvents.onBeforeRecipeModify("mbd2:orechid", e => {
    let event = e.event
    const {machine, recipe} = event

    function SumOreWeights(oreList) {
        let total = 0
        for (let i = 0; i < oreList.length - 1; i++) {
            total += oreList[i][1]
        }
        return total
    }

    function selectByWeight(List) {
        let totalWeight = SumOreWeights(List)
        let rand = Math.random() * totalWeight
        for (let i = 0; i < List.length; i++) {
            rand -= List[i][1]
            if (rand < 0) {
                return List[i][0]
            }
        }
    }

    let rawInputItemId = ""
    let inputItem = recipe.inputs.values().toArray()
    inputItem[0].forEach(content => {
        let stacks = content.getContent().getInner().getStacks()
        stacks.forEach(stack => {
            rawInputItemId = stack.getId()
        })
    })

    let newRecipe = undefined
    for (let i = 0; i < inputs.length - 1; i++) {
        if (rawInputItemId === inputs[i]) {
            let selectedItem = selectByWeight(outputs[i])
            console.log("Selected item: " + selectedItem)
            let builder = recipe.toBuilder()
            builder.outputItems([selectedItem])
            newRecipe = builder.buildMBDRecipe()
        }
    }
    e.event.setRecipe(newRecipe)
})
