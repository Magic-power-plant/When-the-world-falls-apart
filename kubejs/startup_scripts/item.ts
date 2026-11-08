export{}

const metals = [
    {
        name: "root_wrapped_invar",
        localName: "根缠殷钢"
    }
]

const cells = ["1k", "4k", "16k", "64k", "256k", "1m", "4m", "16m", "64m", "256m"]

const genes = [
    {
        name: "white_gene",
        localName: "白色基因"
    },
    {
        name: "red_gene",
        localName: "红色基因"
    },
    {
        name: "orange_gene",
        localName: "橙色基因"
    },
    {
        name: "yellow_gene",
        localName: "黄色基因"
    },
    {
        name: "lime_gene",
        localName: "黄绿色基因"
    },
    {
        name: "green_gene",
        localName: "绿色基因"
    },
    {
        name: "cyan_gene",
        localName: "青色基因"
    },
    {
        name: "light_blue_gene",
        localName: "浅蓝色基因"
    },
    {
        name: "blue_gene",
        localName: "蓝色基因"
    },
    {
        name: "purple_gene",
        localName: "紫色基因"
    },
    {
        name: "magenta_gene",
        localName: "品红色基因"
    },
    {
        name: "gray_gene",
        localName: "灰色基因"
    },
    {
        name: "black_gene",
        localName: "黑色基因"
    },
    {
        name: "light_gray_gene",
        localName: "浅灰色基因"
    },
    {
        name: "brown_gene",
        localName: "棕色基因"
    },
    {
        name: "pink_gene",
        localName: "粉红色基因"
    }
]

type WTWFAItemType = 'basic' | 'sword' | 'botania:rune'

interface WTWFAItemRegistry {
    create(id: string, type?: WTWFAItemType): WTWFAItemBuilder
}

// ProbeJS generates conflicting fluent signatures for these runtime-supported KubeJS methods.
interface WTWFAItemBuilder {
    unstackable(): this
    texture(texture: string): this
    maxDamage(value: number): this
    attackDamageBonus(value: number): this
    tag(tag: string): this
    maxStackSize(value: number): this
    useAnimation(animation: Internal.UseAnim_): this
    useDuration(callback: Internal.ToIntFunction_<Internal.ItemStack>): this
    use(callback: Internal.ItemBuilder$UseCallback_): this
    finishUsing(callback: Internal.ItemBuilder$FinishUsingCallback_): this
    burnTime(ticks: number): this
}

StartupEvents.registry('item', registryEvent => {
    const event = registryEvent as unknown as WTWFAItemRegistry
    event.create('wtwfacore:fliny_hammer', 'sword').unstackable().texture('wtwfacore:item/fliny_hammer').maxDamage(40).attackDamageBonus(1).tag('forge:tools').tag('minecraft:tools')
    event.create('wtwfacore:stone_iron_dust', 'basic').texture('wtwfacore:item/stone_iron_dust').tag('forge:dusts').tag('forge:dusts/stone_iron')
    event.create('wtwfacore:stone_iron_ingot', 'basic').texture('wtwfacore:item/stone_iron_ingot').tag('forge:ingots').tag('forge:ingots/stone_iron')
    event.create('wtwfacore:amber_fragment', 'basic').texture('wtwfacore:item/amber_fragment').tag('forge:fragments/amber')
    event.create('wtwfacore:stone_iron_plate', 'basic').texture('wtwfacore:item/stone_iron_plate').tag('forge:plates/stone_iron')
    event.create('wtwfacore:caminite_stoneiron_combine_plate', 'basic').texture('wtwfacore:item/caminite_stoneiron_combine_plate').tag('forge:plates/caminite_stoneiron_combine')
    event.create('wtwfacore:simple_basic_component', 'basic').texture('wtwfacore:item/simple_basic_component').tag('wtwfacore:simple_basic_component')
    event.create('wtwfacore:stone_iron_rod', 'basic').texture('wtwfacore:item/stone_iron_rod').tag('forge:rods/stone_iron')
    event.create('wtwfacore:copper_rod', 'basic').texture('wtwfacore:item/copper_rod').tag('forge:rods/copper')
    event.create('wtwfacore:crush_god_ingot', 'basic').texture('wtwfacore:item/crush_god_ingot').tag('forge:ingots/crush_god')
    event.create('wtwfacore:high_carbon_iron_ingot', 'basic').texture('wtwfacore:item/high_carbon_iron_ingot').tag('forge:ingots/high_carbon_iron')
    event.create('wtwfacore:source_gem_dust', 'basic').texture('wtwfacore:item/source_gem_dust').tag('forge:dusts/source_gem')
    event.create('wtwfacore:raw_source_gem_steel', 'basic').texture('wtwfacore:item/raw_source_gem_steel')
    event.create('wtwfacore:source_gem_steel_ingot', 'basic').texture('wtwfacore:item/source_gem_steel_ingot').tag('forge:ingots/source_gem_steel')
    event.create('wtwfacore:source_gem_steel_plate', 'basic').texture('wtwfacore:item/source_gem_steel_plate').tag('forge:plates/source_gem_steel')
    event.create('wtwfacore:ember_dawnstone_ingot', 'basic').texture('wtwfacore:item/ember_dawnstone_ingot').tag('forge:ingots/ember_dawnstone')
    event.create('wtwfacore:ember_dawnstone_plate', 'basic').texture('wtwfacore:item/ember_dawnstone_plate').tag('forge:plates/ember_dawnstone')
    event.create('wtwfacore:raw_steel_billet', 'basic').texture('wtwfacore:item/raw_steel_billet').tag('wtwfacore:item/raw_steel_billet')
    event.create('wtwfacore:steel_billet', 'basic').texture('wtwfacore:item/steel_billet').tag('wtwfacore:item/steel_billet')
    event.create('wtwfacore:omni_aspectus', 'basic').texture('wtwfacore:item/omni_aspectus').tag("embers:aspectus").tag("embers:aspectus/iron").tag("embers:aspectus/copper").tag("embers:aspectus/lead").tag("embers:aspectus/silver").tag("embers:aspectus/dawnstone").tag("embers:aspectus/duskstone").tag("embers:aspectus/nightstone").tag("embers:aspectus/aetherium")
    event.create('wtwfacore:heavy_ingot', 'basic').texture('wtwfacore:item/heavy_ingot').tag('forge:ingots/heavy')
    event.create('wtwfacore:heavy_plate', 'basic').texture('wtwfacore:item/heavy_plate').tag('forge:plates/heavy')
    event.create('wtwfacore:spirit_silver_ingot', 'basic').texture('wtwfacore:item/spirit_silver_ingot').tag('forge:ingots/spirit_silver')
    event.create('wtwfacore:spirit_silver_plate', 'basic').texture('wtwfacore:item/spirit_silver_plate').tag('forge:plates/spirit_silver')
    event.create('wtwfacore:stone_iron_nugget', 'basic').texture('wtwfacore:item/stone_iron_nugget').tag("forge:nuggets/stone_iron")
    event.create('wtwfacore:ember_dawnstone_component', 'basic').texture('wtwfacore:item/ember_dawnstone_component').tag('wtwfacore:ember_dawnstone_component')
    event.create('wtwfacore:scarlet_neodymium_dust', 'basic').texture('wtwfacore:item/scarlet_neodymium_dust').tag('forge:dusts/scarlet_neodymium')
    event.create('wtwfacore:azure_neodymium_dust', 'basic').texture('wtwfacore:item/azure_neodymium_dust').tag('forge:dusts/azure_neodymium')
    event.create('wtwfacore:ultra_neodymium_ingot', 'basic').texture('wtwfacore:item/ultra_neodymium_ingot').tag('forge:ingots/ultra_neodymium')
    event.create('wtwfacore:ultra_neodymium_plate', 'basic').texture('wtwfacore:item/ultra_neodymium_plate').tag('forge:plates/ultra_neodymium')
    event.create('wtwfacore:source_matter_base', 'basic').texture('wtwfacore:item/source_matter_base').tag('wtwfacore:item/source_matter_base')
    event.create('wtwfacore:burn_sun_ingot', 'basic').texture('wtwfacore:item/burn_sun_ingot').tag('forge:ingots/burn_sun')
    event.create('wtwfacore:burn_sun_plate').texture('wtwfacore:item/burn_sun_plate').tag('forge:plates/burn_sun')
    event.create('wtwfacore:ancient_ingot', 'basic').texture('wtwfacore:item/ancient_ingot').tag('forge:ingots/ancient')
    event.create('wtwfacore:essence_base', 'basic').texture('wtwfacore:item/essence_base')
    event.create('wtwfacore:tree_essence', 'basic').texture('wtwfacore:item/tree_essence')
    event.create('wtwfacore:metal_essence', 'basic').texture('wtwfacore:item/metal_essence')
    event.create('wtwfacore:sky_essence', 'basic').texture('wtwfacore:item/sky_essence')
    event.create('wtwfacore:swords_essence', 'basic').texture('wtwfacore:item/swords_essence')
    event.create('wtwfacore:range_mountains_essence', 'basic').texture('wtwfacore:item/range_mountains_essence')
    event.create('wtwfacore:vast_ocean_essence', 'basic').texture('wtwfacore:item/vast_ocean_essence')
    event.create('wtwfacore:inferno_essence', 'basic').texture('wtwfacore:item/inferno_essence')
    event.create('wtwfacore:lush_forests_essence', 'basic').texture('wtwfacore:item/lush_forests_essence')
    event.create('wtwfacore:alien_meteors', 'basic').texture('wtwfacore:item/alien_meteors')
    event.create('wtwfacore:primitive_meteors', 'basic').texture('wtwfacore:item/primitive_meteors')
    event.create('wtwfacore:magnet_meteors', 'basic').texture('wtwfacore:item/magnet_meteors')
    event.create('wtwfacore:abyssal_meteors', 'basic').texture('wtwfacore:item/abyssal_meteors')
    event.create('wtwfacore:candy_meteors', 'basic').texture('wtwfacore:item/candy_meteors')
    metals.forEach(metal => {
        event.create(`wtwfacore:${metal.name}_ingot`)
            .texture(`wtwfacore:item/ingot_${metal.name}`)
            .tag('forge:ingots')
            .tag(`forge:ingots/${metal.name}`)
            .maxStackSize(64);

        event.create(`wtwfacore:${metal.name}_plate`)
            .texture(`wtwfacore:item/plate_${metal.name}`)
            .tag('forge:plates')
            .tag(`forge:plates/${metal.name}`)
            .maxStackSize(64);

        event.create(`wtwfacore:${metal.name}_nugget`)
            .texture(`wtwfacore:item/nugget_${metal.name}`)
            .tag('forge:nuggets')
            .tag(`forge:nuggets/${metal.name}`)
            .maxStackSize(64);

        event.create(`wtwfacore:${metal.name}_dust`)
            .texture(`wtwfacore:item/dust_${metal.name}`)
            .tag('forge:dusts')
            .tag(`forge:dusts/${metal.name}`)
            .maxStackSize(64);
    })
    event.create('wtwfacore:ancient_debris_fragment', 'basic').texture('wtwfacore:item/ancient_debris_fragment').tag('forge:fragments/ancient_debris')
    event.create('wtwfacore:enriched_debris_powder', 'basic').texture('wtwfacore:item/enriched_debris_powder').tag('forge:dusts/enriched_debris')
    event.create('wtwfacore:crude_nether_alloy_slag', 'basic').texture('wtwfacore:item/crude_nether_alloy_slag').tag('forge:slag/crude_nether_alloy')
    event.create('wtwfacore:purified_alloy_mass', 'basic').texture('wtwfacore:item/purified_alloy_mass').tag('forge:chunks/purified_alloy')
    event.create('wtwfacore:annealed_alloy_ingot_semi_stable', 'basic').texture('wtwfacore:item/annealed_alloy_ingot_semi_stable').tag('forge:ingots').tag('forge:ingots/annealed_alloy')
    event.create('wtwfacore:energized_nether_alloy_crystal', 'basic').texture('wtwfacore:item/energized_nether_alloy_crystal').tag('forge:gems').tag('wtwfacore:energized_nether_alloy_crystal')
    event.create('wtwfacore:stable_alloy_casting_block', 'basic').texture('wtwfacore:item/stable_alloy_casting_block').tag('forge:blocks').tag('forge:chunks/stable_alloy')
    event.create('wtwfacore:forged_nether_alloy_plate', 'basic').texture('wtwfacore:item/forged_nether_alloy_plate').tag('forge:plates').tag('forge:plates/forged_nether_alloy')
    event.create('wtwfacore:calibrated_alloy_core', 'basic').texture('wtwfacore:item/calibrated_alloy_core').tag('wtwfacore:cores').tag('forge:gems/calibrated_alloy_core')
    cells.forEach(cell => {
        event.create(`wtwfacore:${cell}_fluid_cell`, 'basic').texture(`wtwfacore:item/${cell}_fluid_cell`)
        event.create(`wtwfacore:${cell}_mana_cell`, 'basic').texture(`wtwfacore:item/${cell}_mana_cell`)
        event.create(`wtwfacore:${cell}_source_cell`, 'basic').texture(`wtwfacore:item/${cell}_source_cell`)
        event.create(`wtwfacore:${cell}_storage_circuits_etched_substrate`, 'basic').texture(`wtwfacore:item/${cell}_storage_circuits_etched_substrate`)
    })
    event.create("wtwfacore:fluid_digital_transducer", 'basic').texture("wtwfacore:item/fluid_digital_transducer")
    event.create("wtwfacore:mana_digital_transducer", 'basic').texture("wtwfacore:item/mana_digital_transducer")
    event.create("wtwfacore:energy_digital_transducer", 'basic').texture("wtwfacore:item/energy_digital_transducer")
    event.create("wtwfacore:source_digital_transducer", 'basic').texture("wtwfacore:item/source_digital_transducer")
    event.create("wtwfacore:item_digital_transducer", 'basic').texture("wtwfacore:item/item_digital_transducer")
    event.create("wtwfacore:complex_processing_computer", 'basic').texture("wtwfacore:item/complex_processing_computer")
    event.create("wtwfacore:super_ember_fuel", 'basic').texture("wtwfacore:item/super_ember_fuel").tag("embers:fuel_super").burnTime(360000)
    event.create("wtwfacore:nouveau_essence", 'basic').texture("wtwfacore:item/nouveau_essence")
    event.create("wtwfacore:ember_essence", 'basic').texture("wtwfacore:item/ember_essence")
    event.create("wtwfacore:source_netherite_component", 'basic').texture("wtwfacore:item/source_netherite_component").tag("wtwfacore:source_netherite_component")
    event.create('wtwfacore:common_metals_meteors', 'basic').texture('wtwfacore:item/common_metals_meteors')
    event.create('wtwfacore:nether_meteors', 'basic').texture('wtwfacore:item/nether_meteors')
    event.create('wtwfacore:aetherworks_meteors', 'basic').texture('wtwfacore:item/aetherworks_meteors')
    event.create('wtwfacore:ice_ball', "basic")
        .useAnimation('none')
        .useDuration(itemstack => 1)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            itemstack.shrink(1)
            const iceball = entity.level.createEntity("aether:ice_crystal")
            if (entity.player) {
                iceball.setPosition(entity.x, entity.y, entity.z)
                iceball.spawn()
            }
            return itemstack
        })
    event.create("wtwfacore:herb_residue", 'basic').texture("wtwfacore:item/herb_residue").tag("wtwfacore:herb_residue")
    event.create("wtwfacore:refine_inferno_bulb").texture("wtwfacore:item/refine_inferno_bulb").tag("wtwfacore:refine_inferno_bulb")
    event.create("wtwfacore:aetherwork_inferno_bulb").texture("wtwfacore:item/aetherwork_inferno_bulb").tag("wtwfacore:aetherwork_inferno_bulb")
    event.create("wtwfacore:entangle_aura_root").tag("wtwfacore:entangle_aura_root").texture("wtwfacore:item/entangle_aura_root")
    event.create("wtwfacore:root_component").tag("wtwfacore:root_component").texture("wtwfacore:item/root_component")
    event.create("wtwfacore:lp_maker").tag("wtwfacore:maker/lp").texture("wtwfacore:item/lp_maker")
    event.create("wtwfacore:raw_will_maker").tag("wtwfacore:maker/raw_will").texture("wtwfacore:item/raw_will_maker")
    event.create("wtwfacore:corrosive_will_maker").tag("wtwfacore:maker/corrosive_will").texture("wtwfacore:item/corrosive_will_maker")
    event.create("wtwfacore:destructive_will_maker").tag("wtwfacore:maker/destructive_will").texture("wtwfacore:item/destructive_will_maker")
    event.create("wtwfacore:steadfast_will_maker").tag("wtwfacore:maker/steadfast_will").texture("wtwfacore:item/steadfast_will_maker")
    event.create("wtwfacore:vengeful_will_maker").tag("wtwfacore:maker/vengeful_will").texture("wtwfacore:item/vengeful_will_maker")
    event.create("wtwfacore:living_ingot").tag("forge:ingots/living").texture("wtwfacore:item/living_ingot")
    event.create("wtwfacore:sylvan_ingot").tag("forge:ingots/sylvan").texture("wtwfacore:item/sylvan_ingot")
    event.create("wtwfacore:wildwood_ingot").tag("forge:ingots/wildwood").texture("wtwfacore:item/wildwood_ingot")
    event.create("wtwfacore:big_currant").tag("rootsclassic:berries").texture("wtwfacore:item/big_currant")
    event.create("wtwfacore:vitality_uranium").tag("forge:ingots/vitality_uranium").texture("wtwfacore:item/vitality_uranium")
    event.create("wtwfacore:craft_logoer").tag("wtwfacore:maker/craft_logoer").texture("wtwfacore:item/craft_logoer")
    event.create("wtwfacore:shattered_pages").tag("wtwfacore:shattered_pages").texture("wtwfacore:item/shattered_pages")
    event.create("wtwfacore:seasonal_rune", "botania:rune").texture("wtwfacore:item/seasonal_runes").tag("botania:runes/seasonal")
    event.create("wtwfacore:sin_rune", "botania:rune").texture("wtwfacore:item/sin_rune").tag("botania:runes/sin")
    event.create("wtwfacore:elemental_rune", "botania:rune").texture("wtwfacore:item/elemental_rune").tag("botania:runes/elemental")
    event.create("wtwfacore:weighty_lead_ingot").tag("forge:ingots/weighty_lead").texture("wtwfacore:item/weighty_lead_ingot")
    event.create("wtwfacore:fragrant_fat").tag("wtwfacore:item/fragrant_fat").texture("wtwfacore:item/fragrant_fat")
    event.create("wtwfacore:mixed_incense").tag("wtwfacore:item/mixed_incense").texture("wtwfacore:item/mixed_incense")
    event.create("wtwfacore:flow_stars").tag("wtwfacore:item/flow_stars").texture("wtwfacore:item/flow_stars")
    event.create("wtwfacore:life_sustaining_metal").tag("wtwfacore:item/life_sustaining_metal").texture("wtwfacore:item/life_sustaining_metal")
    event.create("wtwfacore:love_drug").tag("wtwfacore:item/love_drug").texture("wtwfacore:item/love_drug")
    genes.forEach(gene => {
        event.create(`wtwfacore:${gene.name}`).texture("wtwfacore:item/" + gene.name).tag("wtwfacore:gene")
    })
    event.create("wtwfacore:drygmy_head").tag("wtwfacore:item/drygmy_head").texture("wtwfacore:item/drygmy_head")
    event.create("wtwfacore:drygmy_brain").tag("wtwfacore:item/drygmy_rain").texture("wtwfacore:item/drygmy_rain")
    event.create("wtwfacore:bookwyrm_scale").tag("wtwfacore:item/bookwyrm_scale").texture("wtwfacore:item/bookwyrm_scale")
    event.create("wtwfacore:uninspired_computer").tag("wtwfacore:item/uninspired_computer").texture("wtwfacore:item/uninspired_computer")
    event.create("wtwfacore:dishwater").tag("wtwfacore:item/dishwater").texture("wtwfacore:item/dishwater")
    event.create("wtwfacore:dimensional_reath")
    event.create("wtwfacore:cinefilm")
    event.create("wtwfacore:dead_silence")
    event.create("wtwfacore:vertigo")
    event.create("wtwfacore:nothing_gold_can_stay")
})
