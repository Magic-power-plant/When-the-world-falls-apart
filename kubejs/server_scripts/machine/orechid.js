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
let weights = []
for (let i = 0; i < outputs.length - 1; i++) {
    let total = 0
    for (let j = 0; j < outputs[i].length - 1; j++) {
        total += outputs[i][j][1]
    }
    weights.push(total)
}
function selectByWeight(outputList, totalWeight) {
    let rand = Math.random() * totalWeight
    let cumulative = 0
    for (let i = 0; i < outputList.length; i++) {
        cumulative += outputList[i][1]
        if (rand < cumulative) {
            return outputList[i][0]
        }
    }
    return outputList[outputList.length - 1][0]
}
MBDMachineEvents.onBeforeRecipeModify("mbd2:orechid", e => {
    for (let i = 0; i < inputs.length - 1; i++) {
        let selectedItem = selectByWeight(outputs[i], weights[i])
        let builder = recipe.toBuilder()
        builder.inputItems([inputs[i]])
        builder.outputItems([selectedItem])
        let newRecipe = builder.buildMBDRecipe()

        e.event.setRecipe(newRecipe)
    }
})
