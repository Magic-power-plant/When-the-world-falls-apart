ItemEvents.modification(event => {
    event.modify("minecraft:potion",item => {
        item.maxStackSize = 64
    })
    event.modify("minecraft:splash_potion",item => {
        item.maxStackSize = 64
    })
    event.modify("minecraft:lingering_potion",item => {
        item.maxStackSize = 64
    })
})