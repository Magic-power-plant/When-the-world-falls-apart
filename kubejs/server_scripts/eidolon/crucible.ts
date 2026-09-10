import {g, ingredientJson, ItemRef, IngredientRef} from "../globalFunction"
export {}

type CrucibleItemStep = {
    items: IngredientRef[]
    stirs?: number
}
type CrucibleStirStep = {
    items?: never
    stirs: number
}
type CrucibleStep = CrucibleItemStep | CrucibleStirStep
type CrucibleRecipe = {
    id?: string
    steps: CrucibleStep[]
    result: ItemRef
}

function eidolonCrucible(event: Internal.RecipesEventJS, recipe: CrucibleRecipe) {
    const steps = recipe.steps.map(step => {
        const json: any = {}

        if (step.items) json.items = step.items.map(ingredientJson)
        if (step.stirs !== undefined) json.stirs = step.stirs

        return json
    })

    if (recipe.id) {
        event.custom({
            type: "eidolon:crucible",
            steps: steps,
            result: g.json.ItemObjectToJson(recipe.result)
        } as unknown as Internal.JsonObject).id(recipe.id)
    } else {
        event.custom({
            type: "eidolon:crucible",
            steps: steps,
            result: g.json.ItemObjectToJson(recipe.result)
        } as unknown as Internal.JsonObject)
    }
}

// Repeat an input entry to consume more than one item. Output supports "2x namespace:item".
const crucibleRecipes: CrucibleRecipe[] = [
    /*
    {
        id: "kubejs:eidolon/crucible/example",
        steps: [
            {
                items: [
                    "minecraft:coal",
                    "#forge:dusts/redstone",
                    "#forge:dusts/redstone"
                ]
            },
            {
                items: ["eidolon:soul_shard"],
                stirs: 1
            },
            {
                stirs: 2
            }
        ],
        result: "2x minecraft:diamond"
    }
    */
   {
    steps:[
        {
            items:[
                "eidolon:offering_incense",
                "eidolon:restoration_incense",
                "eidolon:gloom_incense"
            ],
            stirs:3
        },
        {
            items:[
                "eidolon:deathbane_incense",
                "eidolon:tough_incense",
                "eidolon:frail_incense"
            ],
            stirs:3
        },{
            items:["eidolon:frostbind_incense","eidolon:tether_incense","eidolon:purity_incense"],
            stirs:3
        },{
            items:["eidolon:quicken_incense","eidolon:bloodlust_incense","eidolon:soul_harvest_incense"],
            stirs:3
        },{
            items:["eidolon:undeath_incense"],
            stirs:1
        }
    ],
    result:"4x kubejs:mixed_incense"
   },
   {
    steps:[
        {
            items:["kubejs:mixed_incense"],
            stirs:2
        },{
            items:["eidolon:tallow","eidolon:tallow","eidolon:tallow"],
            stirs:2
        }
    ],
    result:"kubejs:fragrant_fat"
   },
   {
    steps:[
        {
            items:["eidolon:crucible"]
        },{
            items:["kubejs:weighty_lead_machine_frame","kubejs:weighty_lead_ingot","kubejs:weighty_lead_ingot","kubejs:weighty_lead_ingot","kubejs:weighty_lead_ingot"],
            stirs:4
        },{
            items:["kubejs:fragrant_fat","kubejs:fragrant_fat","kubejs:fragrant_fat","kubejs:fragrant_fat","kubejs:fragrant_fat","kubejs:fragrant_fat"],
            stirs:6
        }
    ],
    result:"enchanted:witch_cauldron"
   },
   {
    steps:[
        {
            items:["enchanted:breath_of_the_goddess","kubejs:flow_stars"],
            stirs:2
        },{
            items:[Item.of('avaritia:singularity', '{Id:"kubejs:ender_pearl_singularity"}').weakNBT()]
        },{
            items:[Item.of('avaritia:singularity', '{Id:"kubejs:ender_pearl_singularity"}').weakNBT()]
        },{
            items:["botania:purple_mystical_flower"],
            stirs:1
        }
    ],
    result:"enchanted:tear_of_the_goddess"
   }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    crucibleRecipes.forEach(recipe => {
        eidolonCrucible(event, recipe)
    })
})
