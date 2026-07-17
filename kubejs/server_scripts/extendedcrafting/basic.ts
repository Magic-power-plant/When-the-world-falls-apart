export {}

type ItemRef = string
type KeyValue = ItemRef | (() => any)
type KeyMap = {[key: string]: KeyValue | Internal.Ingredient}

function spellPowder(effect: ItemRef) {
    return function () {
        return Item.of(
            "rootsclassic:spell_powder",
            `{"rootsclassic:effect":"${effect}","rootsclassic:efficiency":1,"rootsclassic:potency":1,"rootsclassic:size":1}`
        ).weakNBT()
    }
}

function resolvedKey(key: KeyMap) {
    const out: any = {}

    Object.keys(key).forEach(name => {
        const value = key[name]
        out[name] = typeof value == "function" ? value() : value
    })

    return out
}

function shapedTable(event: Internal.RecipesEventJS, output: ItemRef, pattern: string[], key: KeyMap) {
    event.recipes.extendedcrafting.shaped_table(output as OutputItem_, pattern, resolvedKey(key))
}

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    shapedTable(event, "kubejs:pewter_machine_frame", ["abbba", "bcdcb", "befeb", "bcdcb", "abbba"], {
        a: "kubejs:weighty_lead_ingot",
        b: "eidolon:pewter_ingot",
        c: "eidolon:pewter_inlay",
        d: "eidolon:pewter_nugget",
        e: "rootsclassic:crystal_staff",
        f: "kubejs:root_wrapped_invar_machine_frame"
    })

    shapedTable(event, "kubejs:weighty_lead_machine_frame", ["abbba", "bcccb", "bcdcb", "bcccb", "abbba"], {
        a: "eidolon:pewter_inlay",
        b: "kubejs:weighty_lead_ingot",
        c: spellPowder("rootsclassic:orange_tulip"),
        d: "kubejs:root_wrapped_invar_machine_frame"
    })
    shapedTable(event, "enchanted:witch_oven" , ["abcba","addda","aeeea"],{
        a:Item.of('avaritia:singularity', '{Id:"avaritia:coal"}').weakNBT(),
        b:"kubejs:weighty_lead_machine_frame",
        c:"aether:sun_altar",
        d:"aether:light_hellfire_stone",
        e:Item.of('tconstruct:scorched_anvil', '{texture:"twilightforest:fiery_block",tic_persistent:{}}').weakNBT()
    })
    shapedTable(event, "enchanted:altar" ,["defeg","hijik","abbbc"],{
        a:"enchanted:hint_of_rebirth",
        b:"kubejs:flow_stars",
        c:"enchanted:whiff_of_magic",
        d:"enchanted:breath_of_the_goddess",
        e:"enchanted:foul_fume",
        f:"kubejs:weighty_lead_machine_frame",
        g:"enchanted:odour_of_purity",
        h:"enchanted:exhale_of_the_horned_one",
        i:"rootsclassic:attuned_standing_stone",
        j:"rootsclassic:altar",
        k:"enchanted:reek_of_misfortune"
    })
})
