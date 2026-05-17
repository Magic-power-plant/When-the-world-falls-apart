AvaritiaEvents.singularity(event => {
    event.register("kubejs:nouveau_essence_singularity", s => {
        s
            .setDisplayName("singularity.kubejs.nouveau_essence_singularity")
            .setColors(0xC0C0C0, 0xE0B0FF) // [覆盖色, 底层色]
            .setCount(1000)
            .setTimeCost(200)
            .setIngredient(Ingredient.of("kubejs:nouveau_essence"))
            .setEnabled(true)
    })
    event.register("kubejs:ember_essence_singularity", s => {
        s
            .setDisplayName("singularity.kubejs.ember_essence_singularity")
            .setColors(0xC0C0C0, 0xFF4500) // [覆盖色, 底层色]
            .setCount(1000)
            .setTimeCost(200)
            .setIngredient(Ingredient.of("kubejs:ember_essence"))
            .setEnabled(true)
    })
    event.register("kubejs:bookshelf_singularity", s => {
        s
            .setDisplayName("singularity.kubejs.bookshelf_singularity")
            .setColors(0xC0C0C0, 0xa24e12)
            .setCount(500)
            .setTimeCost(200)
            .setIngredient("#forge:bookshelves")
            .setEnabled(true)
    })
})