ServerEvents.recipes(
    event => {
        event.shaped(Item.of('minecraft:crafting_table',1),[
            'pp ',
            'll ',
            '   '
        ],{p:'#minecraft:planks',l:'#minecraft:logs'})
        event.shapeless(Item.of('thermal:iron_dust',1),['kubejs:fliny_hammer','2x minecraft:iron_ore']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('thermal:iron_dust',1),['kubejs:fliny_hammer','2x minecraft:raw_iron']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('biomancy:stone_powder',1),['kubejs:fliny_hammer','2x #minecraft:stone_tool_materials']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('kubejs:stone_iron_dust',1),['thermal:iron_dust','biomancy:stone_powder'])
        event.campfireCooking('kubejs:stone_iron_ingot','kubejs:stone_iron_dust',0.35,100)
        event.campfireCooking('embers:caminite_brick','embers:caminite_blend',0.35,100)
        event.shapeless(Item.of('embers:caminite_blend',6),['4x minecraft:clay_ball','kubejs:stone_iron_dust','#forge:sand'])
        event.shapeless(Item.of('kubejs:stone_iron_block',1),['9x kubejs:stone_iron_ingot'])
        event.shapeless(Item.of('9x kubejs:stone_iron_ingot',9),['kubejs:stone_iron_block'])
        event.shaped(Item.of('kubejs:fliny_hammer',1),[
            ' fs',
            ' sf',
            's  '
        ],{f:'minecraft:flint',s:"#forge:rods/wooden"})
        event.campfireCooking('embers:caminite_plate','embers:raw_caminite_plate',0.35,100)
        event.campfireCooking("embers:ingot_stamp","embers:raw_ingot_stamp",0.35,100)
        event.shapeless(Item.of('thermal:silver_dust',1),['kubejs:fliny_hammer','2x #forge:ores/silver']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('thermal:silver_dust',1),['kubejs:fliny_hammer','2x #forge:raw_materials/silver']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('thermal:copper_dust',1),['kubejs:fliny_hammer','2x minecraft:copper_ore']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('thermal:copper_dust',1),['kubejs:fliny_hammer','2x minecraft:raw_copper']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('thermal:lead_dust',1),['kubejs:fliny_hammer','2x #forge:ores/lead']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('thermal:lead_dust',1),['kubejs:fliny_hammer','2x #forge:raw_materials/lead']).damageIngredient('kubejs:fliny_hammer', 1)
        event.shapeless(Item.of('kubejs:stone_iron_plate',1),['2x kubejs:stone_iron_ingot','embers:tinker_hammer']).keepIngredient({item:'embers:tinker_hammer'})
        event.shapeless(Item.of('kubejs:caminite_stoneiron_combine_plate',1),['kubejs:stone_iron_plate','embers:caminite_plate','embers:tinker_hammer']).keepIngredient({item:'embers:tinker_hammer'})
        event.shaped(Item.of('kubejs:stone_iron_rod',2),[
            '  s',
            ' ts',
            '  s'
        ],{s:'kubejs:stone_iron_ingot',t:'embers:tinker_hammer'}).keepIngredient({item:'embers:tinker_hammer'})
        event.shaped(Item.of('kubejs:simple_basic_component',2),[
            'srs',
            'rpr',
            'srs'
        ],{r:'kubejs:stone_iron_rod',p:'kubejs:caminite_stoneiron_combine_plate',s:'kubejs:stone_iron_plate'})
        event.shaped(Item.of('kubejs:caminite_machine_frame',1),[
            'qcq',
            'bfb',
            'ada'
        ],{c:'kubejs:caminite_stoneiron_combine_plate',b:'kubejs:stone_iron_rod',f:'kubejs:simple_basic_component',q:'minecraft:cobblestone',a:'embers:caminite_bricks',d:'kubejs:stone_iron_plate'})
        event.shaped(Item.of('embers:mechanical_core',1),[
            'sgs',
            'lfl',
            's s'
        ],{g:'kubejs:caminite_machine_frame',s:'kubejs:stone_iron_plate',l:'thermal:lead_plate',f:'kubejs:caminite_stoneiron_combine_plate'})
        event.shaped(Item.of('embers:ember_bore',1),[
            'eme',
            'fcf',
            'bsb'
        ],{e:'thermal:copper_plate',m:'embers:mechanical_core',f:'kubejs:stone_iron_plate',c:'kubejs:simple_basic_component',s:'kubejs:stone_iron_rod',b:'embers:caminite_bricks'})
        event.shaped(Item.of('kubejs:copper_rod',2),[
            '  s',
            ' ts',
            '  s'
        ],{s:'minecraft:copper_ingot',t:'embers:tinker_hammer'}).keepIngredient({item:'embers:tinker_hammer'})
        event.shaped(Item.of('embers:ember_activator',1),[
            'ece',
            'fmf',
            ' b '
        ],{e:'thermal:copper_plate',c:'kubejs:copper_rod',f:'kubejs:stone_iron_plate',m:'kubejs:caminite_machine_frame',b:'kubejs:simple_basic_component'})
        event.shaped(Item.of('minecraft:hopper',1),[
            'bpb',
            'ici',
            ' i '
        ],{i:'kubejs:stone_iron_ingot',p:'kubejs:stone_iron_plate',c:'kubejs:simple_basic_component',b:'kubejs:stone_iron_block'})
        event.shaped(Item.of('embers:melter',1),[
            'eme',
            'cfc',
            'aba'
        ],{e:'thermal:copper_plate',m:'kubejs:caminite_stoneiron_combine_plate',c:'embers:caminite_bricks',f:'kubejs:caminite_machine_frame',a:'kubejs:stone_iron_plate',b:'kubejs:simple_basic_component'})
        event.shaped(Item.of('embers:fluid_pipe',8),[
            ' c ',
            'aba',
            ' c '
        ],{a:'kubejs:stone_iron_ingot',c:'kubejs:stone_iron_plate',b:'kubejs:simple_basic_component'})
        event.shaped(Item.of('embers:item_pipe',8),[
            ' c ',
            'aba',
            ' c '
        ],{a:'minecraft:copper_ingot',c:'thermal:copper_plate',b:'kubejs:simple_basic_component'})
        event.shaped(Item.of('embers:fluid_extractor',1),[
            ' a ',
            'cfc',
            ' a '
        ],{a:'minecraft:redstone',c:'embers:fluid_pipe',f:'kubejs:simple_basic_component'})
        event.shaped(Item.of('embers:item_extractor',1),[
            ' a ',
            'cfc',
            ' a '
        ],{a:'minecraft:redstone',c:'embers:item_pipe',f:'kubejs:simple_basic_component'})
        event.shaped(Item.of('embers:fluid_vessel',2),[
            'a a',
            'bcb',
            'ada'],{a:'embers:caminite_brick',b:'kubejs:stone_iron_plate',c:"kubejs:caminite_machine_frame",d:"kubejs:stone_iron_ingot"})
        event.shaped(Item.of('embers:stamper',1),[
            'aba',
            'aca',
            ' c '],{a:"embers:caminite_brick",b:"kubejs:caminite_machine_frame",c:"kubejs:stone_iron_block"})
        event.shaped(Item.of('embers:tinker_hammer',1),[
            'aba',
            ' c ',
            ' c '],{a:"kubejs:stone_iron_ingot",b:"thermal:lead_ingot",c:"#forge:rods/wooden"})
        event.shaped(Item.of('embers:tinker_lens',1),[
            'abc',
            'deb',
            'abc'],{a:"kubejs:stone_iron_ingot",b:"thermal:lead_nugget",c:"#forge:glass",d:"thermal:lead_plate",e:"kubejs:simple_basic_component"})
        event.shaped(Item.of('embers:atmospheric_gauge',1),[
            ' a ',
            'bcb',
            'bdb'],{a:"minecraft:redstone",b:"thermal:copper_plate",c:"kubejs:simple_basic_component",d:"kubejs:stone_iron_ingot"})
        event.shaped(Item.of('embers:ember_dial',1),[
            ' a ',
            ' b ',
            '   '],{a:"kubejs:simple_basic_component",b:"thermal:copper_plate"})
        event.shaped(Item.of('embers:item_dial',1),[
            ' a ',
            ' b ',
            '   '],{a:"kubejs:simple_basic_component",b:"thermal:lead_plate"})
        event.shaped(Item.of('embers:fluid_dial',1),[
            ' a ',
            ' b ',
            '   '],{a:"kubejs:simple_basic_component",b:"kubejs:stone_iron_plate"})
        event.shaped(Item.of('embers:stamp_base',1),[
            '   ',
            'aba',
            'cdc'],{a:"kubejs:stone_iron_plate",b:"kubejs:caminite_machine_frame",c:"embers:caminite_brick",d:"kubejs:stone_iron_block"})
        event.shaped(Item.of('embers:ember_emitter',5),[
            ' a ',
            ' b ',
            'cdc'],{a:"minecraft:lightning_rod",b:"kubejs:caminite_machine_frame",c:"kubejs:stone_iron_plate",d:"kubejs:simple_basic_component"})
        event.shaped(Item.of('embers:ember_receiver',5),[
            '   ',
            'aba',
            'cdc'],{a:"kubejs:stone_iron_plate",b:"kubejs:caminite_machine_frame",c:"thermal:copper_plate",d:"kubejs:simple_basic_component"})
        event.shapeless(Item.of('minecraft:lever',1),["#forge:rods/wooden",'kubejs:stone_iron_ingot'])
        event.shaped(Item.of('embers:bin',2),[
            'a a',
            'aba',
            'ccc'],{a:"thermal:lead_ingot",b:"kubejs:caminite_machine_frame",c:"thermal:lead_plate"})
        event.shaped(Item.of('embers:clockwork_attenuator',1),[
            ' a ',
            ' b ',
            '   '],{a:"kubejs:simple_basic_component",b:"thermal:silver_plate"})
        event.shaped(Item.of('embers:ember_siphon',1),[
            'aba',
            ' c ',
            'ddd'],{a:"embers:caminite_brick",b:"thermal:copper_plate",c:"kubejs:caminite_machine_frame",d:"embers:caminite_plate"})
        event.shaped(Item.of('embers:mechanical_pump',1),[
            'aba',
            'cdc',
            'e e'],{a:"embers:fluid_pipe",b:"embers:fluid_extractor",c:"kubejs:stone_iron_plate",d:"kubejs:caminite_machine_frame",e:"embers:caminite_plate"})
        event.shaped(Item.of('embers:mini_boiler',1),[
            'aba',
            'cdb',
            'aba'],{a:"kubejs:stone_iron_plate",b:"kubejs:stone_iron_block",c:"thermal:steel_block",d:"kubejs:caminite_machine_frame"})
        event.shaped(Item.of('minecraft:furnace',1),[
            'aba',
            'cdc',
            'aba'],{a:"minecraft:cobblestone",b:"thermal:iron_plate",c:"#forge:rods/iron",d:"kubejs:caminite_machine_frame"})
        event.shaped(Item.of('minecraft:chest',1),[
            'aaa',
            'bcb',
            'aaa'],{a:"#minecraft:planks",b:"#forge:rods/wooden",c:"embers:bin"})
        event.shaped(Item.of("minecraft:barrel",2),[
            'aba',
            'aca',
            'aba'
        ],{a:"#minecraft:planks",b:"#minecraft:wooden_slabs",c:"minecraft:chest"})
        event.shaped(Item.of("embers:hearth_coil",1),[
            'aaa',
            'bcb',
            'ded'
        ],{a:"thermal:copper_plate",b:"thermal:iron_plate",c:"minecraft:copper_block",d:"minecraft:furnace",e:"embers:mechanical_core"})
        event.shaped(Item.of("kubejs:dawnstone_machine_frame",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"embers:dawnstone_ingot",b:"embers:dawnstone_plate",c:"kubejs:caminite_machine_frame"})
        event.shapeless(Item.of("kubejs:raw_steel_billet",1),["thermal:iron_dust","kubejs:high_carbon_iron_ingot",'embers:tinker_hammer']).keepIngredient({item:'embers:tinker_hammer'})
        event.shapeless(Item.of("thermal:steel_ingot",1),["kubejs:steel_billet",'embers:tinker_hammer']).keepIngredient({item:'embers:tinker_hammer'})
        event.shapeless(Item.of("kubejs:amber_fragment",4),["4x alexscaves:amber","embers:tinker_hammer"]).keepIngredient({item:"embers:tinker_hammer"})
        event.smelting("kubejs:stone_iron_ingot","kubejs:stone_iron_dust")
        event.shaped(Item.of("embers:alchemy_pedestal",1),[
            'a a',
            'bcb',
            'ded'
        ],{a:"embers:dawnstone_plate",b:"embers:dawnstone_ingot",c:"embers:ember_crystal",d:"embers:caminite_bricks",e:"kubejs:dawnstone_machine_frame"})
        event.shaped(Item.of("embers:alchemy_tablet",1),[
            ' a ',
            'bcb',
            'bdb'
        ],{a:"embers:dawnstone_plate",b:"embers:caminite_bricks",c:"kubejs:dawnstone_machine_frame",d:"embers:dawnstone_ingot"})
        event.shaped(Item.of("embers:beam_cannon",1),[
            'aba',
            'aba',
            'cdc'
        ],{a:"thermal:copper_plate",b:"embers:ember_crystal",c:"embers:dawnstone_ingot",d:"kubejs:dawnstone_machine_frame"})
        event.shaped(Item.of("embers:ancient_golem_spawn_egg",1),[
            ' a ',
            'aba',
            ' a '
        ],{a:"embers:caminite_brick",b:"kubejs:stone_iron_ingot"})
        event.shaped(Item.of("embers_extended:liquifier",1),[
            ' a ',
            'bcb',
            'ded'
        ],{a:"embers:intelligent_apparatus",b:"thermal:steel_ingot",c:"embers:wildfire_core",d:"embers:dawnstone_plate",e:"kubejs:dawnstone_machine_frame"})
        event.shaped(Item.of("embers_extended:ember_infuser",1),[
            ' a ',
            'bcb',
            'ded'
        ],{a:"embers:fluid_vessel",b:"embers:dawnstone_plate",c:"embers:focal_lens",d:"embers:caminite_bricks",e:"kubejs:dawnstone_machine_frame"})
        event.shapeless(Item.of("kubejs:heavy_ingot",4),["embers:solidified_metal","embers:tinker_hammer"]).keepIngredient({item:"embers:tinker_hammer"})
        event.shapeless(Item.of("minecraft:flint_and_steel",1),["thermal:steel_ingot","minecraft:flint"])
        event.shapeless(Item.of("thermal:steel_plate",1),["2x thermal:steel_ingot","embers:tinker_hammer"]).keepIngredient({item:"embers:tinker_hammer"})
        event.shapeless(Item.of("tconstruct:grout",4),["minecraft:clay_ball","#minecraft:sand","embers:caminite_blend","minecraft:gravel"])
        event.shapeless(Item.of("tconstruct:grout",16),["minecraft:clay","3x #minecraft:sand","embers:raw_caminite_block","4x minecraft:gravel"])
        event.shaped(Item.of("tconstruct:seared_melter"),[
            '   ',
            'aba',
            'aca'
        ],{a:"tconstruct:seared_brick",b:"kubejs:ember_dawnstone_component",c:"embers:melter"})
        event.shaped(Item.of("tconstruct:seared_table",1),[
            'aaa',
            'aba',
            'a a'
        ],{a:"tconstruct:seared_brick",b:"kubejs:ember_dawnstone_component"})
        event.shaped(Item.of("tconstruct:seared_basin",1),[
            'a a',
            'aba',
            'aaa'
        ],{a:"tconstruct:seared_brick",b:"kubejs:ember_dawnstone_component"})
        event.shaped(Item.of("tconstruct:scorched_table",1),[
            'aaa',
            'aba',
            'a a'
        ],{a:"tconstruct:scorched_brick",b:"kubejs:ember_dawnstone_component"})
        event.shaped(Item.of("tconstruct:scorched_basin",1),[
            'a a',
            'aba',
            'aaa'
        ],{a:"tconstruct:scorched_brick",b:"kubejs:ember_dawnstone_component"})
        event.shaped(Item.of('alexscaves:cave_map', '{BiomeTargetResourceKey:"alexscaves:primordial_caves"}'),[
            ' a ',
            'aba',
            ' a '
        ],{a:"embers:archaic_brick",b:"minecraft:paper"})
        event.shaped(Item.of("kubejs:stoneiron_machine_shell",1),[
            ' a ',
            'aba',
            ' a '
        ],{a:"kubejs:stone_iron_plate",b:"kubejs:caminite_machine_frame"})
        event.shaped(Item.of("kubejs:dawnstone_machine_shell",1),[
            ' a ',
            'aba',
            ' a '
        ],{a:"embers:dawnstone_plate",b:"kubejs:dawnstone_machine_frame"})
        event.shaped(Item.of("mbd2:dawnstone_crusher_controller",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"kubejs:dawnstone_machine_frame",b:"embers:dawnstone_block",c:"kubejs:ember_dawnstone_component"})
        event.shaped(Item.of("mbd2:item_input_bin_dawnstone",1),[
            ' a ',
            'aba',
            ' a '
        ],{a:"embers:dawnstone_plate",b:"embers:bin"})
        event.shaped(Item.of("mbd2:item_output_bin_dawnstone",1),[
            'a a',
            ' b ',
            'a a'
        ],{a:"embers:dawnstone_plate",b:"embers:bin"})
        event.shaped(Item.of("mbd2:fluid_input_bin_dawnstone",1),[
            ' a ',
            'aba',
            ' a '
        ],{a:"embers:dawnstone_plate",b:"embers:fluid_vessel"})
        event.shaped(Item.of("mbd2:ember_input_bin",1),[
            ' a ',
            ' b ',
            ' c '
        ],{a:"embers:copper_cell",b:"kubejs:ember_dawnstone_component",c:"kubejs:dawnstone_machine_frame"})
        event.shaped(Item.of("kubejs:reinforced_archwood_planks",1),[
            ' a ',
            'aba',
            ' a '
        ],{a:"kubejs:burn_sun_plate",b:"ars_nouveau:archwood_planks"})
        event.shapeless(Item.of("kubejs:burn_sun_plate",1),["2x kubejs:burn_sun_ingot","embers:tinker_hammer"]).keepIngredient({item:"embers:tinker_hammer"})
        event.shaped(Item.of("kubejs:burn_sun_ingot",3),[
            ' a ',
            'b c',
            ' d '
        ],{a:"kubejs:burn_sun_ingot",b:"embers_extended:duskstone_ingot",c:"embers_extended:nightstone_ingot",d:"kubejs:ember_dawnstone_ingot"})
        event.shapeless(Item.of("embers_extended:ember_crystal_block",1),["9x embers:ember_crystal"])
        event.shaped(Item.of("mob_grinding_utils:tank",1),[
            'aba',
            'bbb',
            'aba'
        ],{a:"embers:fluid_vessel",b:"#forge:glass"})
        event.shaped(Item.of("portabletanks:basic_portable_tank",4),[
            'aba',
            'bcb',
            'aba'
        ],{a:"minecraft:iron_ingot",b:"#forge:glass",c:"mob_grinding_utils:tank"})
        event.shaped(Item.of("ars_nouveau:arcane_pedestal",1),[
            'aaa',
            ' b ',
            'ccc'
        ],{a:"#forge:ingots/electrum",b:"kubejs:source_gem_steel_machine_frame",c:"ars_nouveau:sourcestone"})
        event.shapeless(Item.of("kubejs:forged_nether_alloy_plate",4),["embers:tinker_hammer","kubejs:stable_alloy_casting_block"]).keepIngredient({item:"embers:tinker_hammer"})
        event.shaped(Item.of("alexscaves:depth_glass",16),[
            'aaa',
            'aba',
            'aaa'
        ],{a:"minecraft:glass",b:"ars_nouveau:water_essence"})
        event.shapeless(Item.of("kubejs:source_gem_steel_plate",1),["2x kubejs:source_gem_steel_ingot","embers:tinker_hammer"]).keepIngredient({item:"embers:tinker_hammer"})
        event.shaped(Item.of("ars_nouveau:source_jar",1),[
            'aaa',
            'bcb',
            'aaa'
        ],{a:"ars_nouveau:archwood_slab",b:"#forge:glass",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("ars_nouveau:alchemical_sourcelink",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"minecraft:brewing_stand",b:"ars_nouveau:source_gem",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("ars_nouveau:vitalic_sourcelink",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"#forge:bones/wither",b:"ars_nouveau:source_gem",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("ars_nouveau:mycelial_sourcelink",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"minecraft:mycelium",b:"ars_nouveau:source_gem",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("ars_nouveau:agronomic_sourcelink",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"tconstruct:mattock",b:"ars_nouveau:source_gem",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("ars_nouveau:volcanic_sourcelink",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"kubejs:super_ember_fuel",b:"ars_nouveau:source_gem",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("starbunclemania:fluid_sourcelink",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"starbunclemania:source_condenser",b:"ars_nouveau:source_gem",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("aetherworks:forge_vent",2),[
            'aba',
            'ccc',
            'ada'
        ],{a:"kubejs:ember_dawnstone_ingot",b:"kubejs:source_netherite_component",c:"tconstruct:gold_bars",d:"kubejs:aetherworks_machine_frame"})
        event.shaped(Item.of("aetherworks:forge_tool_station",1),[
            ' a ',
            'bcb',
            'ded'
        ],{a:"aetherworks:gem_aether",b:"kubejs:ember_dawnstone_plate",c:"kubejs:source_netherite_component",d:"#forge:storage_blocks/silver",e:"kubejs:aetherworks_machine_frame"})
        event.shaped(Item.of("aetherworks:moonlight_amplifier",1),[
            'aba',
            'abb',
            'cdc'
        ],{a:"kubejs:ember_dawnstone_plate",b:"aetherworks:aetherium_lens",c:"embers:dawnstone_block",d:"kubejs:aetherworks_machine_frame"})
        event.shaped(Item.of("ae2:charger",1),[
            'aba',
            'c  ',
            'aba'
        ],{a:"minecraft:iron_ingot",b:"kubejs:source_netherite_component",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("kubejs:complex_processing_computer",1),[
            'aba',
            'cdc',
            'ebe'
        ],{a:"ae2:logic_processor",b:"kubejs:ultra_neodymium_plate",c:"ae2:calculation_processor",d:"kubejs:source_gem_steel_machine_frame",e:"ae2:engineering_processor"})
        event.shaped(Item.of("ae2:drive",1),[
            'aba',
            'cd ',
            'aba'
        ],{a:"minecraft:iron_ingot",b:"kubejs:source_netherite_component",c:"kubejs:source_gem_steel_machine_frame",d:"kubejs:complex_processing_computer"})
        event.shaped(Item.of("ae2:pattern_provider",1),[
            'aba',
            'dcb',
            'ada'
        ],{a:"minecraft:crafting_table",b:"ae2:formation_core",d:"ae2:annihilation_core",c:"ae2:interface"})
        event.shaped(Item.of("ae2:interface",1),[
            'eba',
            'cdb',
            'ace'
        ],{a:"kubejs:source_netherite_component",e:"ae2:fluix_glass_cable",b:"ae2:formation_core",c:"ae2:annihilation_core",d:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("ae2:annihilation_core",8),[
            ' a ',
            'bcb',
            ' b '
        ],{a:"kubejs:source_netherite_component",b:"pipez:universal_pipe",c:"kubejs:complex_processing_computer"})
        event.shaped(Item.of("ae2:formation_core",8),[
            ' a ',
            'aba',
            ' c '
        ],{a:"pipez:universal_pipe",b:"kubejs:complex_processing_computer",c:"kubejs:source_netherite_component"})
        event.shaped(Item.of("ae2:crafting_unit",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"kubejs:source_gem_steel_plate",b:"ae2:fluix_glass_cable",c:"kubejs:complex_processing_computer"})
        event.shaped(Item.of("ae2:semi_dark_monitor",1),[
            'aba',
            'aca',
            'ada'
        ],{a:"ae2:quartz_glass",c:"kubejs:complex_processing_computer",b:"ae2:formation_core",d:"ae2:annihilation_core"})
        event.shaped(Item.of("ae2:crafting_accelerator",1),[
            'aba',
            'bcb',
            'aba'
        ],{a:"kubejs:source_gem_steel_plate",b:"ae2:crafting_unit",c:"kubejs:source_gem_steel_machine_frame"})
        event.shaped(Item.of("ae2:blank_pattern",4),[
            'aab',
            'acb',
            'abb'
        ],{a:"ae2:quartz_block",b:"ae2:quartz_glass",c:"kubejs:complex_processing_computer"})
        event.shaped(Item.of("embers:codebreaking_slate",1),[
            'aba',
            'cdc',
            'aca'
        ],{a:"embers:dawnstone_plate",b:"embers:alchemical_waste",c:"minecraft:paper",d:"embers:ancient_codex"}).keepIngredient({item:"embers:ancient_codex"})
        event.shaped(Item.of("explorerscompass:explorerscompass",1),[
            ' a ',
            'bcb',
            ' d '
        ],{a:"embers:resonating_bell",b:"embers:archaic_circuit",c:"naturescompass:naturescompass",d:"embers:wildfire_core"})
    }
    )