export {}

const $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag")
const $ListTag = Java.loadClass("net.minecraft.nbt.ListTag")
const $float = Java.loadClass("java.lang.Float")

//植物
LootJS.modifiers((event: Internal.LootModificationEventJS) => {
    event
        .addBlockLootModifier("kubejs:wildroot")
        .randomChance(0.95)
        .addLoot("rootsclassic:old_root" as unknown as Internal.LootEntry_)
        .createConditions({
            condition: "minecraft:block_state_property",
            block: "kubejs:wildroot",
            properties: {
                age: "3"
            }
        } as unknown as Internal.Consumer_<Internal.LootConditionsContainer<Internal.LootActionsBuilderJS>>)
})
//生物掉落物
LootJS.modifiers((event:Internal.LootModificationEventJS) => {

    event
        .addEntityLootModifier("ars_nouveau:bookwyrm")
        .randomChance(0.25)
        .addLoot("kubejs:bookwyrm_scale" as unknown as Internal.LootEntry_)

    event
        .addEntityLootModifier('ars_nouveau:drygmy')
        .randomChance(0.1)
        .addLoot("kubejs:drygmy_head" as unknown as Internal.LootEntry_)
})
