export {}

type TagEntry = {
    tag: string
    values?: any
}

const sameIdItemTags = [
    "bloodmagic:reagentwater",
    "bloodmagic:reagentlava",
    "bloodmagic:reagentvoid",
    "bloodmagic:reagentgrowth",
    "bloodmagic:reagentfastminer",
    "mythicbotany:asgard_rune",
    "mythicbotany:vanaheim_rune",
    "mythicbotany:alfheim_rune",
    "mythicbotany:midgard_rune",
    "mythicbotany:joetunheim_rune",
    "mythicbotany:muspelheim_rune",
    "mythicbotany:niflheim_rune",
    "mythicbotany:nidavellir_rune",
    "mythicbotany:helheim_rune",
    "animus:reagentbuilder",
    "animus:reagentchains",
    "animus:reagentconsumption",
    "animus:reagentleach",
    "animus:reagentstorm",
    "animus:reagenttransposition",
    "animus:reagentboundlessnature",
    "animus:reagentequivalency",
    "animus:reagentfreesoul",
    "animus:reagentheavelywrath",
    "animus:reagentremendium",
    "animus:reagentreparare",
    "animus:reagenttemporaldominance",
    "animus:reagentfist",
    "animus:reagentcrimsonwill",
    "botania:rune_mana",
    "botania:rune_lust",
    "botania:rune_gluttony",
    "botania:rune_greed",
    "botania:rune_sloth",
    "botania:rune_wrath",
    "botania:rune_envy",
    "botania:rune_pride",
    "botania:rune_spring",
    "botania:rune_summer",
    "botania:rune_autumn",
    "botania:rune_winter",
    "bloodmagic:reagentmagnetism",
    "bloodmagic:reagentair",
    "bloodmagic:reagentbloodlight",
    "bloodmagic:reagentsight",
    "bloodmagic:reagentholding",
    "botania:rune_water",
    "botania:rune_fire",
    "botania:rune_earth",
    "botania:rune_air",
    "ars_nouveau:air_essence",
    "ars_nouveau:earth_essence",
    "ars_nouveau:fire_essence",
    "ars_nouveau:water_essence",
    "kubejs:tree_essence",
    "kubejs:metal_essence"
]

const itemTags: TagEntry[] = [
    {tag: "mbd2:bin", values: "mbd2:item_input_bin_dawnstone"},
    {tag: "mbd2:bin", values: "mbd2:item_output_bin_dawnstone"},
    {tag: "mbd2:bin", values: "mbd2:ember_input_bin"},
    {tag: "mbd2:bin", values: "mbd2:fluid_input_bin_dawnstone"},
    {tag: "mbd2:bin", values: "mbd2:fluid_output_bin_dawnstone"},
    {tag: "embers:wildfire_core", values: "embers:wildfire_core"},
    {tag: "forge:ingots/azure_neodymium", values: "alexscaves:azure_neodymium_ingot"},
    {tag: "forge:ingots/scarlet_neodymium", values: "alexscaves:scarlet_neodymium_ingot"},
    {tag: "minecraft:item/clay_ball"},
    {tag: "embers:ember/grit", values: "embers:ember_grit"},
    {tag: "embers:ember/shard", values: "embers:ember_shard"},
    {tag: "embers:ember/crystal", values: "embers:ember_crystal"},
    {tag: "embers:ember/crystal_cluster", values: "embers:ember_crystal_cluster"},
    {tag: "alexscaves:ferrouslime_ball", values: "alexscaves:ferrouslime_ball"},
    {tag: "alexsmobs:banana_slug_slime", values: "alexsmobs:banana_slug_slime"},
    {tag: "minecraft:magma_cream", values: "minecraft:magma_cream"},
    {tag: "kubejs:metal_essence", values: "kubejs:metal_essence"},
    {tag: "kubejs:dawnstone_machine_frame", values: "kubejs:dawnstone_machine_frame"}
]

const bloodOrbs = [
    "bloodmagic:weakbloodorb",
    "bloodmagic:apprenticebloodorb",
    "bloodmagic:magicianbloodorb",
    "bloodmagic:masterbloodorb",
    "bloodmagic:archmagebloodorb",
    "animus:blood_orb_transcendent"
]

const blockTags: TagEntry[] = [
    {tag: "mbd2:bin", values: "mbd2:item_input_bin_dawnstone"},
    {tag: "mbd2:bin", values: "mbd2:item_output_bin_dawnstone"},
    {tag: "mbd2:bin", values: "mbd2:ember_input_bin"},
    {tag: "mbd2:bin", values: "mbd2:fluid_input_bin_dawnstone"},
    {tag: "mbd2:bin", values: "mbd2:fluid_output_bin_dawnstone"},
    {tag: "minecraft:block/clay", values: "minecraft:clay"},
    {
        tag: "mbd2:bin",
        values: [
            "mbd2:fluid_in_1",
            "mbd2:fluid_out_1",
            "mbd2:item_in_1",
            "mbd2:item_out_1",
            "mbd2:mob_in_bin",
            "mbd2:me_out",
            "mbd2:item_out_2",
            "mbd2:item_out_3",
            "mbd2:item_out_2",
            "mbd2:item_out_3",
            "mbd2:item_out_3_plus",
            "mbd2:item_in_2",
            "mbd2:item_in_3"
        ]
    },
    {tag: "aether:portal_fluids", values: "aetherworks:aether_gas_painful_block"}
]

const fluidTags: TagEntry[] = [
    {tag: "forge:fluid/liquid_ember", values: "embers_extended:liquid_ember"},
    {tag: "forge:fluid/dwarven_oil", values: "embers:dwarven_oil"},
    {tag: "forge:molten/duskstone", values: "embers_extended:molten_duskstone"},
    {tag: "forge:molten/nightstone", values: "embers_extended:molten_nightstone"},
    {tag: "aether:portal_fluids", values: "aetherworks:aether_gas_painful"}
]

function addTags(event: any, entries: TagEntry[]) {
    entries.forEach(entry => {
        if (entry.values == undefined) {
            event.add(entry.tag)
        } else {
            event.add(entry.tag, entry.values)
        }
    })
}

ServerEvents.tags("item", (event: any) => {
    addTags(event, itemTags)

    sameIdItemTags.forEach(item => {
        event.add(item, item)
    })

    event.add("forge:bloodorbs", bloodOrbs)
})

ServerEvents.tags("block", (event: any) => {
    addTags(event, blockTags)
})

ServerEvents.tags("fluid", (event: any) => {
    addTags(event, fluidTags)
})
