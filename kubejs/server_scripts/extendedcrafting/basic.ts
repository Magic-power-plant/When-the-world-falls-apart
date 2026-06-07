export {}

type ItemRef = string
type KeyValue = ItemRef | (() => any)
type KeyMap = {[key: string]: KeyValue}

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

function shapedTable(event: any, output: ItemRef, pattern: string[], key: KeyMap) {
    event.recipes.extendedcrafting.shaped_table(output, pattern, resolvedKey(key))
}

ServerEvents.recipes((event: any) => {
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
})
