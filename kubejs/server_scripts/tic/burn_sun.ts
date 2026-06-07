export {}

type ItemRef = string
type FluidJson = {
    amount: number
    fluid?: string
    tag?: string
}
type CastingRecipe = {
    type: "tconstruct:casting_table" | "tconstruct:casting_basin"
    result: ItemRef
    fluid: FluidJson
    coolingTime: number
    cast?: any
    castConsumed?: boolean
}

const meltingRecipes = [
    {
        input: {item: "kubejs:burn_sun_ingot"},
        result: {amount: 900, fluid: "kubejs:motlen_burn_sun"},
        temperature: 1450,
        time: 100
    }
]

const materialFluidRecipes = [
    {
        fluid: {amount: 90, fluid: "kubejs:motlen_burn_sun"},
        temperature: 800,
        output: "kubejs:burn_sun"
    }
]

const castingRecipes: CastingRecipe[] = [
    {
        type: "tconstruct:casting_table",
        cast: {tag: "tconstruct:casts/multi_use/ingot"},
        castConsumed: false,
        coolingTime: 200,
        fluid: {amount: 90, fluid: "kubejs:motlen_burn_sun"},
        result: "kubejs:burn_sun_ingot"
    },
    {
        type: "tconstruct:casting_table",
        cast: {tag: "tconstruct:casts/single_use/ingot"},
        castConsumed: true,
        coolingTime: 200,
        fluid: {amount: 90, fluid: "kubejs:motlen_burn_sun"},
        result: "kubejs:burn_sun_ingot"
    },
    {
        type: "tconstruct:casting_basin",
        coolingTime: 1800,
        fluid: {amount: 900, fluid: "kubejs:motlen_burn_sun"},
        result: "kubejs:burn_sun_block"
    },
    {
        type: "tconstruct:casting_table",
        cast: {item: "tconstruct:seared_melter"},
        castConsumed: true,
        coolingTime: 200,
        fluid: {amount: 900, fluid: "kubejs:motlen_burn_sun"},
        result: "tconstruct:smeltery_controller"
    },
    {
        type: "tconstruct:casting_table",
        coolingTime: 200,
        fluid: {amount: 180, fluid: "kubejs:alloy_catalytic_intermediate"},
        result: "kubejs:stable_alloy_casting_block"
    },
    {
        type: "tconstruct:casting_table",
        cast: {item: "kubejs:calibrated_alloy_core"},
        castConsumed: true,
        coolingTime: 200,
        fluid: {amount: 60, fluid: "embers_extended:molten_debris"},
        result: "minecraft:netherite_ingot"
    },
    {
        type: "tconstruct:casting_table",
        cast: {item: "kubejs:calibrated_alloy_core"},
        castConsumed: true,
        coolingTime: 200,
        fluid: {amount: 60, fluid: "tconstruct:molten_debris"},
        result: "minecraft:netherite_ingot"
    }
]

function castingJson(recipe: CastingRecipe) {
    const json: any = {
        type: recipe.type,
        cooling_time: recipe.coolingTime,
        fluid: recipe.fluid,
        result: recipe.result
    }

    if (recipe.cast != undefined) json.cast = recipe.cast
    if (recipe.castConsumed != undefined) json.cast_consumed = recipe.castConsumed

    return json
}

ServerEvents.recipes((event: any) => {
    meltingRecipes.forEach(recipe => {
        event.custom({
            type: "tconstruct:melting",
            ingredient: recipe.input,
            result: recipe.result,
            temperature: recipe.temperature,
            time: recipe.time
        })
    })

    materialFluidRecipes.forEach(recipe => {
        event.custom({
            type: "tconstruct:material_fluid",
            fluid: recipe.fluid,
            temperature: recipe.temperature,
            output: recipe.output
        })
    })

    castingRecipes.forEach(recipe => {
        event.custom(castingJson(recipe))
    })
})
