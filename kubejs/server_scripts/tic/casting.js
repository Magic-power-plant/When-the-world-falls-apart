ServerEvents.recipes(event =>{
    function createCastingRecipe(castItem, outputItem, fluid, options) {
        const opts = options || {}
        const castConsumed = opts.castConsumed != undefined ? opts.castConsumed : true
        const coolingTime = opts.coolingTime != undefined ? opts.coolingTime : 120

        const cast = castItem ? { item: castItem } : undefined

        event.custom({
            type: "tconstruct:casting_basin",
            cast: cast,
            cast_consumed: castConsumed,
            cooling_time: coolingTime,
            fluid: fluid,
            result: outputItem
        })
    }
    createCastingRecipe("kubejs:entangle_aura_root","kubejs:root_wrapped_invar_ingot",{
        amount:180,
        tag:"forge:molten_invar"
    },{
        castConsumed:true,
        coolingTime:100
    })
    createCastingRecipe("rootsclassic:infernal_bulb","kubejs:inferno_bulb_seed",{
        amount:20000,
        fluid:"tconstruct:blazing_blood"
    },{
        castConsumed:true,
        coolingTime:2000
    })
})