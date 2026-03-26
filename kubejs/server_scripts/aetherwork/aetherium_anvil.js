ServerEvents.recipes(event =>{
    function createAetheriumAnvilRecipe(input, output, options) {
        const opts = options || {}
        const difficulty = opts.difficulty != undefined ? opts.difficulty : 5
        const emberPerHit = opts.emberPerHit != undefined ? opts.emberPerHit : 90
        const numberOfHits = opts.numberOfHits != undefined ? opts.numberOfHits : 25
        const temperatureMin = opts.temperatureMin != undefined ? opts.temperatureMin : 2200
        const temperatureMax = opts.temperatureMax != undefined ? opts.temperatureMax : 2500
        const chance = opts.chance != undefined ? opts.chance : 1.0
        const count = opts.count != undefined ? opts.count : 1

        event.custom({
            type: "aetherworks:aetherium_anvil",
            difficulty: difficulty,
            emberPerHit: emberPerHit,
            input: input,
            numberOfHits: numberOfHits,
            result: [{
                chance: chance,
                count: count,
                item: output
            }],
            temperatureMax: temperatureMax,
            temperatureMin: temperatureMin
        })
    }
    createAetheriumAnvilRecipe({
        item:"kubejs:refine_inferno_bulb"
    },"kubejs:aetherwork_inferno_bulb",{
        difficulty:3,
        emberPerHit:100,
        numberOfHits:5,
        temperatureMax:3000,
        temperatureMin:2000
    })
})