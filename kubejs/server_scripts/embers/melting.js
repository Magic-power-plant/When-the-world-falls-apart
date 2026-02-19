
function embermelting(event,item,amount,fluid){
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'item':item},
        'output': { 'amount': amount, 'fluid':fluid}
    })
}

ServerEvents.recipes(event => {
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:dusts/iron'
                }
            }
        ],
        'input': { 'tag': 'forge:dusts/iron' },
        'output': { 'amount': 90, 'tag': 'forge:molten_iron' }
    }).id('kubejs:embers/melting_iron')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:dusts/silver'
                }
            }
        ],
        'input': { 'tag': 'forge:dusts/silver' },
        'output': { 'amount': 90, 'tag': 'forge:molten_silver' }
    }).id('kubejs:embers/melting_silver')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:dusts/gold'
                }
            }
        ],
        'input': { 'tag': 'forge:dusts/gold' },
        'output': { 'amount': 90, 'tag': 'forge:molten_gold' }
    }).id('kubejs:embers/melting_gold')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:dusts/copper'
                }
            }
        ],
        'input': { 'tag': 'forge:dusts/copper' },
        'output': { 'amount': 90, 'tag': 'forge:molten_copper' }
    }).id('kubejs:embers/melting_copper')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'tag':'forge:fragments/amber'},
        'output': { 'amount': 100, 'tag':'forge:fluids/liquid_amber' }
    }).id('kubejs:embers/melting_amber')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'tag':"minecraft:coals"},
        'output': { 'amount': 100, 'tag':'forge:fluid/liquid_coal'}
    }).id('kubejs:embers/melting_coal')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'tag':"kubejs:item/raw_steel_billet"},
        'output': { 'amount': 90, 'tag':'forge:molten/raw_steel'}
    }).id('kubejs:embers/melting_raw_steel')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'tag':"forge:ingots/heavy"},
        'output': { 'amount': 90, 'tag':'forge:molten/heavy'}
    }).id('kubejs:embers/melting_heavy')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'tag':"forge:dusts/enriched_debris"},
        'output': { 'amount': 120, 'tag':"forge:molten/debris_solution"}
    }).id('kubejs:molten/debris_solution')
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'tag':"kubejs:energized_nether_alloy_crystal"},
        'output': { 'amount': 120, 'tag':'kubejs:molten/alloy_catalytic_intermediate'}
    })
    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'tag':"forge:ingots/ultra_neodymium"},
        'output': { 'amount': 90, 'tag':"forge:molten/ultra_neodymium"}
    })

    event.custom({
        'type': 'embers:melting',
        'conditions': [
            {
                'type': 'forge:not',
                'value': {
                    'type': 'forge:tag_empty',
                    'tag': 'forge:fragments/amber'
                }
            }
        ],
        'input': {'item':"kubejs:spirit_silver_ingot"},
        'output': { 'amount': 90, 'tag':"forge:molten/spirit_silver"}
    })
    embermelting(event,"malum:cthonic_gold_fragment",90,"embers:molten_gold")
})