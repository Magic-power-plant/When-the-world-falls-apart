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

    event
        .addEntityLootModifier("minecraft:iron_golem")
        .addLoot(LootEntry.of("minecraft:raw_iron").limitCount([3,5]))
        .removeLoot("minecraft:iron_ingot" as unknown as Internal.ItemFilter_)
    event
        .addEntityLootModifier("minecraft:zombie","minecraft:husk","minecraft:zombie_villager","divinerpg:miner")
        .addLoot(LootEntry.of("minecraft:raw_iron"))
        .removeLoot("minecraft:iron_ingot" as unknown as Internal.ItemFilter_)
    event
        .addEntityLootModifier("iceandfire:dread_knight","goety:piker","goety:crusher")
        .addLoot(LootEntry.of("minecraft:raw_iron").limitCount([0,1]))
        .removeLoot("minecraft:iron_ingot" as unknown as Internal.ItemFilter_)
    event
        .addEntityLootModifier("twilightforest:carminite_golem")
        .addLoot(LootEntry.of("minecraft:raw_iron").limitCount([0,2]))
        .removeLoot("minecraft:iron_ingot" as unknown as Internal.ItemFilter_)
    event
        .addEntityLootModifier("cataclysm:the_prowler")
        .addLoot(LootEntry.of("minecraft:raw_iron_block"))
        .removeLoot("minecraft:iron_ingot" as unknown as Internal.ItemFilter_)
    event
        .addEntityLootModifier("iceandfire:stymphalian_bird")
        .addLoot(LootEntry.of("minecraft:raw_iron").limitCount([0,4]))
        .removeLoot("minecraft:iron_ingot" as unknown as Internal.ItemFilter_)
    event
        .addEntityLootModifier("cataclysm:the_watcher")
        .addLoot(LootEntry.of("minecraft:raw_iron").limitCount([1,3]))
        .removeLoot("minecraft:iron_ingot" as unknown as Internal.ItemFilter_)
})