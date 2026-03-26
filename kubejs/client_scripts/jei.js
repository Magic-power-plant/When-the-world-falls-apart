const item = [
    "trashcans:item_trash_can",
    "trashcans:liquid_trash_can",
    "trashcans:energy_trash_can",
    "trashcans:ultimate_trash_can",
    "minecraft:campfire",
    "aewireless:wireless_connect",
    "aewireless:wireless_transceiver",
    "aewireless:wireless_destroy"
]

JEIEvents.addItems(event => {
    event.add(Item.of("entangled:block"))
    event.add("minecraft:smithing_table")
    event.add("minecraft:anvil")
    item.forEach(item => event.add(item))
})