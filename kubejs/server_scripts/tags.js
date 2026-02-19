const tagsameid = [
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

ServerEvents.tags('item', event => {
    event.add('mbd2:bin',"mbd2:item_input_bin_dawnstone")
    event.add('mbd2:bin',"mbd2:item_output_bin_dawnstone")
    event.add('mbd2:bin',"mbd2:ember_input_bin")
    event.add('mbd2:bin',"mbd2:fluid_input_bin_dawnstone")
    event.add('mbd2:bin',"mbd2:fluid_output_bin_dawnstone")
    event.add('embers:wildfire_core',"embers:wildfire_core")
    event.add("forge:ingots/azure_neodymium","alexscaves:azure_neodymium_ingot")
    event.add("forge:ingots/scarlet_neodymium","alexscaves:scarlet_neodymium_ingot")
    event.add('minecraft:item/clay_ball')
    event.add("embers:ember/grit","embers:ember_grit")
    event.add("embers:ember/shard","embers:ember_shard")
    event.add("embers:ember/crystal","embers:ember_crystal")
    event.add("embers:ember/crystal_cluster","embers:ember_crystal_cluster")
    event.add("alexscaves:ferrouslime_ball","alexscaves:ferrouslime_ball")
    event.add("alexsmobs:banana_slug_slime","alexsmobs:banana_slug_slime")
    event.add("minecraft:magma_cream","minecraft:magma_cream")
    event.add("kubejs:metal_essence","kubejs:metal_essence")
    event.add("kubejs:dawnstone_machine_frame","kubejs:dawnstone_machine_frame")

    tagsameid.forEach(item =>(
        event.add(item,item)
    ))
})
ServerEvents.tags('block', event => {
    event.add('mbd2:bin',"mbd2:item_input_bin_dawnstone")
    event.add('mbd2:bin',"mbd2:item_output_bin_dawnstone")
    event.add('mbd2:bin',"mbd2:ember_input_bin")
    event.add('mbd2:bin',"mbd2:fluid_input_bin_dawnstone")
    event.add('mbd2:bin',"mbd2:fluid_output_bin_dawnstone")
    event.add('minecraft:block/clay',"minecraft:clay")
    event.add('mbd2:bin',[
        "mbd2:fluid_in_1",
        "mbd2:fluid_out_1",
        "mbd2:item_in_1",
        "mbd2:item_out_1",
        "mbd2:mob_in_bin"
    ])
})
ServerEvents.tags('fluid',event =>{
    event.add('forge:fluid/liquid_ember',"embers_extended:liquid_ember")
    event.add('forge:fluid/dwarven_oil',"embers:dwarven_oil")
    event.add('forge:molten/duskstone',"embers_extended:molten_duskstone")
    event.add('forge:molten/nightstone',"embers_extended:molten_nightstone")
})