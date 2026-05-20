ServerEvents.recipes(event =>{
    /**
     * 创建 Roots Classic 仪式配方
     * @param {string} effect - 仪式效果类型，如 "rootsclassic:crafting"（合成）、"rootsclassic:summoning"（召唤）
     * @param {number} level - 仪式等级（0-3），决定需要的德鲁伊等级
     * @param {string} color - 仪式颜色，十六进制字符串如 "#92d62b"（绿色）
     * @param {Array} ingredients - 祭坛上的材料数组，格式：[{ item: "minecraft:wooden_axe" }, ...]
     * @param {Array} [incenses] - 熏香材料数组（可选），格式：[{ item: "rootsclassic:oak_bark" }, ...]
     * @param {Object} [options] - 可选配置对象
     *   @param {Object} options.result - 合成仪式的输出物品，格式：{ item: "rootsclassic:living_axe" }
     *   @param {string} options.entity - 召唤仪式的实体ID，如 "minecraft:cow"
     * 
     * 使用示例：
     * // 合成仪式（有熏香）
     * createRitualRecipe(
     *     "rootsclassic:crafting",
     *     0,
     *     "#92d62b",
     *     [{ item: "minecraft:wooden_axe" }, { item: "rootsclassic:verdant_sprig" }],
     *     [{ item: "rootsclassic:oak_bark" }],
     *     { result: { item: "rootsclassic:living_axe" } }
     * )
     * 
     * // 召唤仪式（无熏香）
     * createRitualRecipe(
     *     "rootsclassic:summoning",
     *     1,
     *     "#c769c1",
     *     [{ item: "minecraft:beef" }, { item: "minecraft:leather" }],
     *     null,
     *     { entity: "minecraft:cow" }
     * )
     */
    function createRitualRecipe(effect, level, color, ingredients, incenses, options) {
        const opts = options || {}
        const recipe = {
            type: "rootsclassic:ritual",
            effect: effect,
            level: level,
            color: color,
            ingredients: ingredients
        }

        recipe.incenses = incenses || []
        if (opts.result) {
            recipe.result = opts.result
        }
        if (opts.entity) {
            recipe.entity = opts.entity
        }

        event.custom(recipe)
    }
    createRitualRecipe("rootsclassic:crafting",0,"#35f836",[{
        item:"kubejs:root_wrapped_invar_machine_frame"
    },{
        item:"minecraft:iron_bars"
    },{
        item:"minecraft:campfire"
    }],null,{result:{item:"rootsclassic:brazier"}})
    createRitualRecipe("rootsclassic:crafting",0,"#35f836",[{
        item:"kubejs:root_wrapped_invar_machine_frame"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"aether:sentry_stone"
    }],[{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"minecraft:stone_bricks"
    },{
        item:"aether:carved_stone"
    }],{result:{item:"rootsclassic:mundane_standing_stone"}})
    createRitualRecipe("rootsclassic:crafting",1,"#35f836",[{
        item:"rootsclassic:verdant_sprig"
    },{
        item:"kubejs:aubergine_seed"
    },{
        item:"kubejs:sky_essence"
    }],[{
        item:"kubejs:sky_essence"
    },{
        item:"kubejs:sky_essence"
    },{
        item:"kubejs:tree_essence"
    },{
        item:"kubejs:lush_forests_essence"
    },{
        item:"kubejs:range_mountains_essence"
    },{
        item:"aether:enchanted_gravitite"
    }],{result:{item:"kubejs:moonglow_seed"}})
    createRitualRecipe("rootsclassic:crafting",1,"#35f836",[{
        item:"rootsclassic:mundane_standing_stone"
    },{
        item:"rootsclassic:mundane_standing_stone"
    },{
        item:"twilightforest:castle_brick"
    }],[{
        item:"twilightforest:raw_ironwood"
    },{
        item:"twilightforest:trollsteinn"
    },{
        item:"aether:carved_stone"
    },{
        item:"aether:enchanted_gravitite"
    }],{result:{item:"rootsclassic:attuned_standing_stone"}})
    createRitualRecipe("rootsclassic:crafting",1,"#35f836",[{
        item:"kubejs:moonglow_seed"
    },{
        item:"minecraft:wheat_seeds"
    },{
        item:"aether:golden_amber"
    }],[{
        item:"aether:ambrosium_shard"
    },{
        item:"kubejs:swords_essence"
    },{
        item:"kubejs:metal_essence"
    },{
        item:"thermal:electrum_block"
    }],{result:{item:"kubejs:wildewheet_seed"}})
    createRitualRecipe("rootsclassic:crafting",2,"#35f836",[{
        item:"kubejs:wildewheet_seed"
    },{
        item:"kubejs:range_mountains_essence"
    },{
        item:"kubejs:inferno_essence"
    }],[{
        item:"kubejs:stone_iron_block"
    },{
        item:"twilightforest:ironwood_block"
    },{
        item:"twilightforest:knightmetal_block"
    },{
        item:"minecraft:netherite_block"
    }],{result:{item:"kubejs:stalicripe_seed"}})
    createRitualRecipe("rootsclassic:crafting",2,"#35f836",[{
        item:"kubejs:stalicripe_seed"
    },{
        item:"twilightforest:thorn_rose"
    },{
        item:"minecraft:beetroot"
    }],[{
        item:"kubejs:double_compression_liquid_source_bucket"
    },{
        item:"ars_nouveau:apprentice_spell_book"
    },{
        item:"kubejs:tree_essence"
    },{
        item:"kubejs:range_mountains_essence"
    }],{result:{item:"kubejs:pereskia_seed"}})
    createRitualRecipe("rootsclassic:crafting",2,"#35f836",[{
        item:"kubejs:pereskia_seed"
    },{
        item:"kubejs:nouveau_essence"
    },{
        item:"aetherworks:aether_amalgam"
    }],[{
        item:"twilightforest:aurora_block"
    },{
        item:"apotheosis:infused_seashelf"
    },{
        item:"starbunclemania:glyph_pickup_fluid"
    },{
        item:"ars_nouveau:glyph_conjure_water"
    }],{result:{item:"kubejs:dewgonia_seed"}})
    createRitualRecipe("rootsclassic:crafting",2,"#35f836",[{
        item:"aetherworks:crossbow_magma"
    },{
        item:"kubejs:dewgonia_seed"
    },{
        item:"aether:aerogel"
    }],[{
        item:"twilightforest:fluffy_cloud"
    },{
        item:"kubejs:nouveau_essence"
    },{
        item:"kubejs:sky_essence"
    },{
        item:"ars_nouveau:air_essence"
    }],{result:{item:"kubejs:cloud_berry_seed"}})
    createRitualRecipe("rootsclassic:crafting",2,"#35f836",[{
        item:"kubejs:cloud_berry_seed"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    }],[{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    },{
        item:"kubejs:entangle_aura_root"
    }],{result:{item:"kubejs:wildroot_seed"}})
    createRitualRecipe("rootsclassic:crafting",2,"#35f836",[{
        item:"kubejs:wildroot_seed"
    },{
        item:"minecraft:oak_leaves"
    },{
        item:"minecraft:spruce_leaves"
    }],[{
        item:"minecraft:birch_leaves"
    },{
        item:"minecraft:jungle_leaves"
    },{
        item:"minecraft:acacia_leaves"
    },{
        item:"minecraft:dark_oak_leaves"
    },{
        item:"minecraft:mangrove_leaves"
    },{
        item:"minecraft:cherry_leaves"
    },{
        item:"minecraft:azalea_leaves"
    }],{result:{item:"kubejs:spiritleaf_seed"}})

    const ritualRecipes = [
        [0,2,"#35f836",["kubejs:root_wrapped_invar_ingot","tconstruct:slimesteel_ingot"],["rootsclassic:sylvan_hood","rootsclassic:sylvan_robe","rootsclassic:sylvan_tunic","rootsclassic:sylvan_boots"],"kubejs:sylvan_ingot"],
        [
            0,
            2,
            "#35f836",
            ["kubejs:root_wrapped_invar_ingot","tconstruct:slimesteel_ingot"],
            ["rootsclassic:living_sword","rootsclassic:living_shovel","rootsclassic:living_pickaxe","rootsclassic:living_axe","rootsclassic:living_hoe"],
            "kubejs:living_ingot"
        ],
        [
            0,
            2,
            "#35f836",
            ["kubejs:root_wrapped_invar_ingot","tconstruct:slimesteel_ingot"],
            ["rootsclassic:wildwood_mask","rootsclassic:wildwood_plate","rootsclassic:wildwood_leggings","rootsclassic:wildwood_boots","kubejs:wildroot_seed"],
            "kubejs:wildwood_ingot"
        ],
        [
            0,
            2,
            "#35f836",
            ["rootsclassic:blackcurrant","rootsclassic:redcurrant","rootsclassic:whitecurrant"],
            [],
            "kubejs:big_currant"
        ],
        [
            0,
            2,
            "#35f836",
            ["kubejs:life_sustaining_metal","thermal:lead_block","minecraft:iron_block"],
            [],
            "eidolon:pewter_blend"
        ],
        [
            0,
            2,
            "#35f836",
            ["kubejs:life_sustaining_metal","thermal:lead_block","thermal:tin_block"],
            [],
            "kubejs:weighty_lead_ingot"
        ]
    ]

    ritualRecipes.forEach(recipe => {
        if (recipe[0] === 0) {
            let ingredients = []
            let incenses = []

            for (let i = 0; i < recipe[3].length; i++) {
                ingredients.push(ItemToJson(recipe[3][i]))
            }

            for (let j = 0; j < recipe[4].length; j++) {
                incenses.push(ItemToJson(recipe[4][j]))
            }

            createRitualRecipe("rootsclassic:crafting", recipe[1], recipe[2], ingredients, incenses, { result: ItemToJson(recipe[5]) })
        }
    })
})