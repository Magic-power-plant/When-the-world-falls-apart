export {}

const g = global as any

type ItemRef = string
type FluidRef = string
type StampingRecipe = {
    output: ItemRef
    stamp: ItemRef
    input?: ItemRef
    fluid?: FluidRef
    conditions?: any[]
}

const itemJson = (value: ItemRef) =>
    g.json.ItemObjectToJson(value)

const fluidJson = (value: FluidRef) =>
    g.json.FluidObjectToJson(value)

function stamping(event: any, recipe: StampingRecipe) {
    const json: any = {
        type: "embers:stamping",
        output: itemJson(recipe.output),
        stamp: itemJson(recipe.stamp)
    }

    if (recipe.input) {
        json.input = itemJson(recipe.input)
    }
    if (recipe.fluid) json.fluid = fluidJson(recipe.fluid)
    if (recipe.conditions) json.conditions = recipe.conditions

    event.custom(json)
}

const plateMaterials = [
    "aetherium",
    "bronze",
    "burn_sun",
    "calorite",
    "constantan",
    "dawnstone",
    "desh",
    "dwarven_mithril",
    "electrum",
    "ember_dawnstone",
    "enderium",
    "gold",
    "heavy",
    "invar",
    "lumium",
    "netherite",
    "nickel",
    "ostrum",
    "rose_gold",
    "signalum",
    "source_gem_steel",
    "spirit_silver",
    "steel",
    "stone_iron",
    "tin",
    "ultra_neodymium"
]

const notEmptyIronIngot = [
    {
        type: "forge:not",
        value: {
            type: "forge:tag_empty",
            tag: "forge:ingot/iron"
        }
    }
]

const moltenRecipes = [
    {fluid: "90x #forge:molten/high_carbon_iron", output: "#forge:ingots/high_carbon_iron", stamp: "embers:ingot_stamp"},
    {fluid: "90x #forge:molten_steel", output: "#kubejs:item/steel_billet", stamp: "kubejs:stone_iron_block"},
    {fluid: "90x #forge:molten/ember_dawnstone", output: "#forge:plates/ember_dawnstone", stamp: "embers:plate_stamp"},
    {fluid: "90x #forge:molten/ember_dawnstone", output: "#forge:ingots/ember_dawnstone", stamp: "embers:ingot_stamp"},
    {fluid: "90x #forge:molten/spirit_silver", output: "#forge:ingots/spirit_silver", stamp: "embers:ingot_stamp"},
    {fluid: "90x #forge:molten/spirit_silver", output: "#forge:plates/spirit_silver", stamp: "embers:plate_stamp"},
    {fluid: "90x #forge:molten/nightstone", output: "#forge:ingots/nightstone", stamp: "embers:ingot_stamp"},
    {fluid: "90x #forge:molten/duskstone", output: "#forge:ingots/duskstone", stamp: "embers:ingot_stamp"}
]

const itemRecipes = [
    {input: "minecraft:iron_ingot", output: "#thermal:iron_plate", stamp: "embers:plate_stamp"},
    {input: "minecraft:copper_ingot", output: "thermal:copper_plate", stamp: "embers:plate_stamp"},
    {input: "embers:raw_caminite_block", output: "embers:raw_caminite_plate", stamp: "embers:plate_stamp"},
    {input: "#forge:ingots/silver", output: "thermal:silver_plate", stamp: "embers:plate_stamp"},
    {input: "#forge:ingots/lead", output: "thermal:lead_plate", stamp: "embers:plate_stamp"},
    {input: "thermal:sulfur", output: "thermal:sulfur_dust", stamp: "embers:flat_stamp"},
    {input: "kubejs:root_wrapped_invar_ingot", output: "kubejs:root_wrapped_invar_plate", stamp: "embers:flat_stamp"},
    {input: "kubejs:drygmy_head", output: "kubejs:drygmy_brain", stamp: "embers:flat_stamp"}
]

ServerEvents.recipes((event: any) => {
    moltenRecipes.forEach(recipe => {
        stamping(event, {
            fluid: recipe.fluid,
            output: recipe.output,
            stamp: recipe.stamp,
            conditions: notEmptyIronIngot
        })
    })

    plateMaterials.forEach(material => {
        stamping(event, {
            input: `#forge:ingots/${material}`,
            output: `#forge:plates/${material}`,
            stamp: "embers:plate_stamp"
        })
    })

    itemRecipes.forEach(recipe => {
        stamping(event, recipe)
    })
})
