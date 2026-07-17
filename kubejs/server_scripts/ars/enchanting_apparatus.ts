export {}

type ApparatusRecipe = {
    inputs: InputItem_[]
    reagent: InputItem_[] | InputItem_
    output: OutputItem_
    source: number
}

function enchantingApparatus(event: Internal.RecipesEventJS, recipe: ApparatusRecipe) {
    event.recipes.ars_nouveau.enchanting_apparatus(
        recipe.inputs,
        recipe.reagent as InputItem_[],
        recipe.output,
        recipe.source
    )
}

const apparatusRecipes: ApparatusRecipe[] = [
    {
        inputs: ["iceandfire:stymphalian_bird_dagger", "alexscaves:limestone_spear", "embers:tyrfing", "cataclysm:black_steel_sword", "iceandfire:silver_sword"],
        reagent: "kubejs:metal_essence",
        output: "kubejs:swords_essence",
        source: 3000
    },
    {
        inputs: ["forbidden_arcanus:bat_wing", "minecraft:feather", "alexsmobs:emu_feather", "ars_nouveau:wilden_wing", "alexsmobs:cockroach_wing"],
        reagent: "ars_nouveau:air_essence",
        output: "kubejs:sky_essence",
        source: 3000
    },
    {
        inputs: ["minecraft:glow_berries", "iceandfire:lightning_lily", "biomeswevegone:cypress_sapling", "alexscaves:pewen_branch", "#botania:mystical_flowers"],
        reagent: "kubejs:tree_essence",
        output: "kubejs:lush_forests_essence",
        source: 3000
    },
    {
        inputs: ["tconstruct:blazing_bone", "minecraft:fire_charge", "cataclysm:dying_ember", "tconstruct:ichor_slime_crystal", "alexscaves:primal_magma"],
        reagent: "ars_nouveau:fire_essence",
        output: "kubejs:inferno_essence",
        source: 3000
    },
    {
        inputs: ["alexscaves:floater", "alexscaves:pearl", "alexscaves:sea_glass_shards", "minecraft:prismarine_crystals", "cataclysm:lionfish"],
        reagent: "ars_nouveau:water_essence",
        output: "kubejs:vast_ocean_essence",
        source: 3000
    },
    {
        inputs: ["cataclysm:ancient_metal_ingot", "embers:archaic_brick", "goety:snowy_highrock_bricks", "alexscaves:muck", "alexscaves:dough_block"],
        reagent: "ars_nouveau:earth_essence",
        output: "kubejs:range_mountains_essence",
        source: 3000
    },
    {
        inputs: ["minecraft:gold_ingot", "minecraft:gold_nugget", "minecraft:gold_nugget", "minecraft:gold_nugget", "minecraft:gold_nugget"],
        reagent: "kubejs:forged_nether_alloy_plate",
        output: "kubejs:calibrated_alloy_core",
        source: 500
    },
    {
        inputs: ["alexsmobs:cockroach_wing", "alexsmobs:cockroach_ootheca"],
        reagent: "minecraft:egg",
        output: "alexsmobs:spawn_egg_cockroach",
        source: 1000
    },
    {
        inputs: ["alexsmobs:emu_feather", "alexsmobs:emu_feather", "alexsmobs:emu_feather"],
        reagent: "minecraft:egg",
        output: "alexsmobs:spawn_egg_emu",
        source: 1000
    },
    {
        inputs: ["iceandfire:wither_shard", "iceandfire:wither_shard", "iceandfire:wither_shard", "minecraft:feather"],
        reagent: "minecraft:egg",
        output: "aether:cockatrice_spawn_egg",
        source: 1000
    },
    {
        inputs: ["cataclysm:dying_ember", "cataclysm:dying_ember", "cataclysm:dying_ember"],
        reagent: "minecraft:egg",
        output: "cataclysm:ignited_berserker_spawn_egg",
        source: 1000
    },
    {
        inputs: ["cataclysm:lionfish"],
        reagent: "minecraft:egg",
        output: "cataclysm:lionfish_spawn_egg",
        source: 1000
    },
    {
        inputs: ["alexscaves:floater", "alexscaves:floater", "alexscaves:floater"],
        reagent: "minecraft:egg",
        output: "alexscaves:spawn_egg_gossamer_worm",
        source: 1000
    },
    {
        inputs: ["cataclysm:ancient_metal_ingot", "minecraft:bone", "minecraft:bone"],
        reagent: "minecraft:egg",
        output: "cataclysm:koboleton_spawn_egg",
        source: 1000
    },
    {
        inputs: ["iceandfire:stymphalian_bird_feather", "iceandfire:stymphalian_bird_feather", "iceandfire:stymphalian_bird_feather"],
        reagent: "minecraft:egg",
        output: "iceandfire:spawn_egg_stymphalian_bird",
        source: 1000
    },
    {
        inputs: ["forbidden_arcanus:bat_wing", "forbidden_arcanus:bat_wing", "forbidden_arcanus:bat_wing"],
        reagent: "minecraft:egg",
        output: "minecraft:bat_spawn_egg",
        source: 1000
    },
    {
        inputs: ["ars_nouveau:wilden_wing", "ars_nouveau:wilden_wing", "ars_nouveau:wilden_wing"],
        reagent: "minecraft:egg",
        output: "ars_nouveau:wilden_stalker_se",
        source: 1000
    },
    {
        inputs: ["cataclysm:black_steel_ingot", "cataclysm:black_steel_ingot", "cataclysm:black_steel_ingot", "cataclysm:black_steel_sword"],
        reagent: "minecraft:egg",
        output: "cataclysm:draugr_spawn_egg",
        source: 1000
    },
    {
        inputs: ["thermal:gunpowder_block", "minecraft:gold_block", "thermal:electrum_block", "ars_nouveau:source_gem_block", "ars_nouveau:source_gem_block"],
        reagent: "kubejs:source_gem_steel_machine_frame",
        output: "ars_nouveau:basic_spell_turret",
        source: 10000
    },
    {
        inputs: ["kubejs:range_mountains_essence", "kubejs:range_mountains_essence", "kubejs:range_mountains_essence", "kubejs:range_mountains_essence"],
        reagent: "minecraft:netherite_ingot",
        output: "arsmeteorites:ritual_conjure_meteorites",
        source: 5000
    },
    {
        inputs: ["kubejs:sky_essence", "kubejs:sky_essence", "kubejs:sky_essence", "kubejs:sky_essence", "divinerpg:aqua_ball", "divinerpg:aqua_ball", "divinerpg:aqua_ball", "divinerpg:aqua_ball"],
        reagent: "kubejs:source_gem_steel_machine_frame",
        output: "kubejs:aetherworks_machine_frame",
        source: 10000
    },
    {
        inputs: ["kubejs:source_gem_steel_plate", "kubejs:source_gem_steel_plate", "kubejs:source_gem_steel_plate", "kubejs:source_gem_steel_plate", "thermal:netherite_gear", "thermal:netherite_gear"],
        reagent: "kubejs:calibrated_alloy_core",
        output: "kubejs:source_netherite_component",
        source: 10000
    },
    {
        inputs: ["kubejs:sky_essence", "kubejs:swords_essence", "kubejs:inferno_essence", "kubejs:vast_ocean_essence", "kubejs:lush_forests_essence", "kubejs:range_mountains_essence"],
        reagent: "ars_nouveau:source_gem",
        output: "kubejs:nouveau_essence",
        source: 10000
    },
    {
        inputs: [
            Item.of('avaritia:singularity', '{Id:"kubejs:nouveau_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:ember_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:nouveau_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:ember_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:nouveau_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:ember_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:nouveau_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:ember_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:nouveau_essence_singularity"}').weakNBT(),
            Item.of('avaritia:singularity', '{Id:"kubejs:ember_essence_singularity"}').weakNBT()
        ],
        reagent: Item.of('packagedauto:volume_package', '{Fluid:{Amount:50000,FluidName:"kubejs:molten_ultra_neodymium"},Type:"minecraft:fluid"}').weakNBT(),
        output: Item.of('packagedauto:volume_package', '{Fluid:{Amount:1000,FluidName:"kubejs:history_adhesive"},Type:"minecraft:fluid"}'),
        source: 10000
    },
    {
        inputs: ["kubejs:source_netherite_component", "kubejs:source_netherite_component", "kubejs:source_netherite_component", "kubejs:source_netherite_component"],
        reagent: "kubejs:4k_storage_circuits_etched_substrate",
        output: "kubejs:16k_storage_circuits_etched_substrate",
        source: 50000
    },
    {
        inputs: ["rootsclassic:infernal_bulb", "kubejs:inferno_bulb_seed"],
        reagent: "kubejs:inferno_essence",
        output: "2x kubejs:refine_inferno_bulb" as OutputItem_,
        source: 10000
    },
    {
        inputs: ["kubejs:wildroot_seed", "twilightforest:root_strand", "rootsclassic:old_root", "minecraft:rooted_dirt", "twilightforest:liveroot_block", "aether:skyroot_log"],
        reagent: "kubejs:aetherwork_inferno_bulb",
        output: "kubejs:entangle_aura_root",
        source: 10000
    },
    {
        inputs: ["kubejs:root_component", "kubejs:root_wrapped_invar_ingot", "kubejs:root_wrapped_invar_plate", "kubejs:root_wrapped_invar_plate", "kubejs:root_wrapped_invar_plate", "kubejs:root_wrapped_invar_plate"],
        reagent: "kubejs:aetherworks_machine_frame",
        output: "kubejs:root_wrapped_invar_machine_frame",
        source: 100000
    },
    {
        inputs: ["rootsclassic:old_root", "rootsclassic:old_root", "rootsclassic:verdant_sprig", "rootsclassic:verdant_sprig", "rootsclassic:infernal_bulb", "rootsclassic:infernal_bulb", "rootsclassic:dragons_eye", "rootsclassic:dragons_eye", "goety:highrock_bricks", "kubejs:range_mountains_essence", "kubejs:lush_forests_essence", "aether:sentry_stone"],
        reagent: "kubejs:root_wrapped_invar_machine_frame",
        output: "rootsclassic:altar",
        source: 100000
    },
    {
        inputs: ["kubejs:nouveau_essence", "kubejs:ember_essence", "thermal:steel_block", "thermal:steel_block", "thermal:steel_block", "thermal:steel_block", "thermal:steel_block", "thermal:steel_block"],
        reagent: "kubejs:aetherworks_machine_frame",
        output: "avaritia:neutron_compressor",
        source: 100000
    },
    {
        inputs: ["kubejs:lush_forests_essence", "kubejs:lush_forests_essence", "kubejs:lush_forests_essence", "biomeswevegone:blueberries", "biomeswevegone:oddion_bulb", "minecraft:beetroot"],
        reagent: "ars_nouveau:magebloom_crop",
        output: "kubejs:aubergine_seed",
        source: 5000
    },
    {
        inputs: [
            Item.of('tconstruct:seared_lantern', '{tank:{Amount:50,FluidName:"kubejs:delicious_jam"},tic_persistent:{}}').weakNBT(),
            "kubejs:big_currant",
            "kubejs:spiritleaf",
            "kubejs:wildroot_seed",
            "kubejs:wildwood_ingot",
            "kubejs:sylvan_ingot",
            "kubejs:living_ingot"
        ],
        reagent: "rootsclassic:crystal_staff",
        output: "3x kubejs:life_sustaining_metal" as OutputItem_,
        source: 10000
    },
    {
        inputs: ["kubejs:root_wrapped_invar_plate", "kubejs:root_wrapped_invar_plate", "kubejs:root_wrapped_invar_plate", "kubejs:root_wrapped_invar_plate"],
        reagent: "kubejs:source_netherite_component",
        output: "kubejs:root_component",
        source: 10000
    },
    {
        inputs: ["embers:raw_caminite_block","tconstruct:grout","tconstruct:nether_grout","eidolon:pewter_inlay","eidolon:pewter_inlay"],
        reagent: "minecraft:glass_bottle",
        output: "enchanted:soft_clay_jar",
        source: 100000
    },
    {
        inputs: ["kubejs:inferno_essence","kubejs:inferno_essence","kubejs:inferno_essence"],
        reagent: Item.of('avaritia:singularity', '{Id:"kubejs:ender_pearl_singularity"}').weakNBT(),
        output: "minecraft:ender_eye",
        source: 10000
    }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
    apparatusRecipes.forEach(recipe => {
        enchantingApparatus(event, recipe)
    })
})
