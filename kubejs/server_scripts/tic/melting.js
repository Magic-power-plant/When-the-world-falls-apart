ServerEvents.recipes(event => {

    function melting(input, fluid, tem, time) {
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": input,
            "result": fluid,
            "temperature": tem,
            "time": time
        });
    }

    const meltingArray = [
        ["rootsclassic:fruit_salad", "kubejs:delicious_jam", 100, 300, 100]
    ];

    meltingArray.forEach(recipe => {
        melting(ItemToJson(recipe[0]), FluidToJson(recipe[1], recipe[2]), recipe[3], recipe[4]);
    });
});