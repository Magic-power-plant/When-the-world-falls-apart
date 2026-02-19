ServerEvents.recipes(event => {
    event.custom({
	"type": "ars_nouveau:imbuement",
	"count": 1,
	"input": {
		"tag": "embers:ember/grit"
	},
    "pedestalItems": [],
	"output": "embers:ember_shard",
	"source": 1000
})
    event.custom({
	"type": "ars_nouveau:imbuement",
	"count": 1,
	"input": {
		"tag": "embers:ember/shard"
	},
	"pedestalItems": [],
	"output": "embers:ember_crystal",
	"source": 2000
})
    event.custom({
	"type": "ars_nouveau:imbuement",
	"count": 1,
	"input": {
		"tag": "embers:ember/crystal"
	},
	"pedestalItems": [],
	"output": "embers:ember_crystal_cluster",
	"source": 3000
})
	event.recipes.ars_nouveau.imbuement(
        "kubejs:essence_base", // input item
        "kubejs:tree_essence", // output
        2000, // source cost
        ["#minecraft:saplings","#forge:seeds","#minecraft:flowers"])
	event.recipes.ars_nouveau.imbuement(
		"kubejs:essence_base",
		"kubejs:metal_essence",
		2000,
		["minecraft:gold_ingot","#forge:ingots/silver","#forge:ingots/copper"]
	)
	event.recipes.ars_nouveau.imbuement(
		"kubejs:source_gem_steel_machine_frame",
		"ars_nouveau:arcane_core",
		10000,
		["thermal:electrum_block","ars_nouveau:sourcestone","ars_nouveau:sourcestone","ars_nouveau:sourcestone","ars_nouveau:sourcestone"]
	)
	event.recipes.ars_nouveau.imbuement(
		"kubejs:source_gem_steel_machine_frame",
		"ars_nouveau:enchanting_apparatus",
		10000,
		["thermal:electrum_block","ars_nouveau:sourcestone","ars_nouveau:sourcestone","ars_nouveau:air_essence","kubejs:metal_essence","kubejs:tree_essence","ars_nouveau:earth_essence","ars_nouveau:water_essence","ars_nouveau:fire_essence"]
	)
	event.recipes.ars_nouveau.imbuement(
		"kubejs:purified_alloy_mass",
		"kubejs:annealed_alloy_ingot_semi_stable",
		1000,
		[]
	)
	event.recipes.ars_nouveau.imbuement(
		"kubejs:raw_source_gem_steel",
		"kubejs:source_gem_steel_ingot",
		1000,
		[]
	)
	event.recipes.ars_nouveau.imbuement(
		"kubejs:source_gem_steel_machine_frame",
		"ars_nouveau:relay",
		1000,
		["ars_nouveau:source_gem","ars_nouveau:source_gem","minecraft:gold_ingot","minecraft:gold_ingot"]
	)
	event.recipes.ars_nouveau.imbuement(
		"kubejs:1k_storage_circuits_etched_substrate",
		"kubejs:4k_storage_circuits_etched_substrate",
		10000,
		["kubejs:ember_dawnstone_component","kubejs:ember_dawnstone_component","kubejs:ember_dawnstone_component","kubejs:ember_dawnstone_component"]
	)
})