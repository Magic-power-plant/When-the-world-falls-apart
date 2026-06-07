export {}

LootJS.modifiers((event: any) => {
    event
        .addBlockLootModifier("kubejs:wildroot")
        .randomChance(0.95)
        .addLoot("rootsclassic:old_root")
        .createConditions({
            condition: "minecraft:block_state_property",
            block: "kubejs:wildroot",
            properties: {
                age: "3"
            }
        })
})
