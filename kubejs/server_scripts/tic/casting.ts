import {g} from "../globalFunction"
export {}

type ItemRef = string
type FluidRef = string
type FluidJson = {
    amount: number
    fluid?: string
    tag?: string
}
type CastingRecipe = {
    cast?: ItemRef | (() => any)
    result: any
    fluid: FluidJson | FluidRef
    castConsumed?: boolean
    coolingTime?: number
}

function spellPowderCast() {
    return Item.of("rootsclassic:spell_powder")
        .withNBT('{"rootsclassic:effect":"rootsclassic:sunflower"}')
        .weakNBT()
        .toJson()
}

function castingBasin(event: Internal.RecipesEventJS, recipe: CastingRecipe) {
    const json: any = {
        type: "tconstruct:casting_basin",
        cast_consumed: recipe.castConsumed != undefined ? recipe.castConsumed : true,
        cooling_time: recipe.coolingTime != undefined ? recipe.coolingTime : 120,
        result: recipe.result
    }

    if (typeof recipe.fluid === "string") {
        json.fluid = g.json.FluidObjectToJson(recipe.fluid)
    } else {
        json.fluid = recipe.fluid
    }

    if (typeof recipe.cast == "string") {
        json.cast = {item: recipe.cast}
    } else if (typeof recipe.cast == "function") {
        json.cast = recipe.cast()
    }

    event.custom(json)
}

const basinRecipes: CastingRecipe[] = [
    {
        cast: "kubejs:entangle_aura_root",
        result: "kubejs:root_wrapped_invar_ingot",
        fluid: {amount: 180, tag: "forge:molten_invar"},
        castConsumed: true,
        coolingTime: 100
    },
    {
        cast: "rootsclassic:infernal_bulb",
        result: "kubejs:inferno_bulb_seed",
        fluid: {amount: 20000, fluid: "tconstruct:blazing_blood"},
        castConsumed: true,
        coolingTime: 2000
    },
    {
        cast: "kubejs:life_sustaining_metal",
        result: "extendedcrafting:black_iron_ingot",
        fluid: {amount: 1000, fluid: "tconstruct:molten_hepatizon"},
        castConsumed: true,
        coolingTime: 200
    },
    {
        cast: spellPowderCast,
        result: {item: "extendedcrafting:luminessence"},
        fluid: {amount: 10000, fluid: "thermal:glowstone"},
        castConsumed: true,
        coolingTime: 200
    },
    {
        cast: "kubejs:uninspired_computer",
        result: "kubejs:complex_processing_computer",
        fluid: "360x kubejs:mind_nectar",
        castConsumed: true,
        coolingTime:4000
    }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    basinRecipes.forEach(recipe => {
        castingBasin(event, recipe)
    })
})
