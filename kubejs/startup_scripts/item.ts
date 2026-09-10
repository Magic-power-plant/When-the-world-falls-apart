

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
    displayName(name: string): this
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
    event.create('fliny_hammer', 'sword').displayName('燧石锤').unstackable().texture('kubejs:item/fliny_hammer').maxDamage(40).attackDamageBonus(1).tag('forge:tools').tag('minecraft:tools')
    event.create('stone_iron_dust', 'basic').displayName('石铁混合粉').texture('kubejs:item/stone_iron_dust').tag('forge:dusts').tag('forge:dusts/stone_iron')
    event.create('stone_iron_ingot', 'basic').displayName('石铁锭').texture('kubejs:item/stone_iron_ingot').tag('forge:ingots').tag('forge:ingots/stone_iron')
    event.create('amber_fragment', 'basic').displayName('琥珀碎片').texture('kubejs:item/amber_fragment').tag('forge:fragments/amber')
    event.create('stone_iron_plate', 'basic').displayName('石铁板').texture('kubejs:item/stone_iron_plate').tag('forge:plates/stone_iron')
    event.create('caminite_stoneiron_combine_plate', 'basic').displayName('方镁矾-石铁复合板').texture('kubejs:item/caminite_stoneiron_combine_plate').tag('forge:plates/caminite_stoneiron_combine')
    event.create('simple_basic_component', 'basic').displayName('简易基本部件').texture('kubejs:item/simple_basic_component').tag('kubejs:simple_basic_component')
    event.create('stone_iron_rod', 'basic').displayName('石铁棒').texture('kubejs:item/stone_iron_rod').tag('forge:rods/stone_iron')
    event.create('copper_rod', 'basic').displayName('铜棒').texture('kubejs:item/copper_rod').tag('forge:rods/copper')
    event.create('crush_god_ingot', 'basic').displayName('崩天锭').texture('kubejs:item/crush_god_ingot').tag('forge:ingots/crush_god')
    event.create('high_carbon_iron_ingot', 'basic').displayName('高碳铁锭').texture('kubejs:item/high_carbon_iron_ingot').tag('forge:ingots/high_carbon_iron')
    event.create('source_gem_dust', 'basic').displayName('魔源宝石粉').texture('kubejs:item/source_gem_dust').tag('forge:dusts/source_gem')
    event.create('raw_source_gem_steel', 'basic').displayName('粗魔源钢').texture('kubejs:item/raw_source_gem_steel')
    event.create('source_gem_steel_ingot', 'basic').displayName('魔源钢锭').texture('kubejs:item/source_gem_steel_ingot').tag('forge:ingots/source_gem_steel')
    event.create('source_gem_steel_plate', 'basic').displayName('魔源钢板').texture('kubejs:item/source_gem_steel_plate').tag('forge:plates/source_gem_steel')
    event.create('ember_dawnstone_ingot', 'basic').displayName('余烬黎明石锭').texture('kubejs:item/ember_dawnstone_ingot').tag('forge:ingots/ember_dawnstone')
    event.create('ember_dawnstone_plate', 'basic').displayName('余烬黎明石板').texture('kubejs:item/ember_dawnstone_plate').tag('forge:plates/ember_dawnstone')
    event.create('raw_steel_billet', 'basic').displayName('粗钢胚').texture('kubejs:item/raw_steel_billet').tag('kubejs:item/raw_steel_billet')
    event.create('steel_billet', 'basic').displayName('钢坯').texture('kubejs:item/steel_billet').tag('kubejs:item/steel_billet')
    event.create('omni_aspectus', 'basic').displayName('万用之元素象征').texture('kubejs:item/omni_aspectus').tag("embers:aspectus").tag("embers:aspectus/iron").tag("embers:aspectus/copper").tag("embers:aspectus/lead").tag("embers:aspectus/silver").tag("embers:aspectus/dawnstone").tag("embers:aspectus/duskstone").tag("embers:aspectus/nightstone").tag("embers:aspectus/aetherium")
    event.create('heavy_ingot', 'basic').displayName('沉重锭').texture('kubejs:item/heavy_ingot').tag('forge:ingots/heavy')
    event.create('heavy_plate', 'basic').displayName('沉重板').texture('kubejs:item/heavy_plate').tag('forge:plates/heavy')
    event.create('spirit_silver_ingot', 'basic').displayName('灵银锭').texture('kubejs:item/spirit_silver_ingot').tag('forge:ingots/spirit_silver')
    event.create('spirit_silver_plate', 'basic').displayName('灵银板').texture('kubejs:item/spirit_silver_plate').tag('forge:plates/spirit_silver')
    event.create('stone_iron_nugget', 'basic').displayName('石铁粒').texture('kubejs:item/stone_iron_nugget').tag("forge:nuggets/stone_iron")
    event.create('ember_dawnstone_component', 'basic').displayName('余烬黎明部件').texture('kubejs:item/ember_dawnstone_component').tag('kubejs:ember_dawnstone_component')
    event.create('scarlet_neodymium_dust', 'basic').displayName('赤钕粉').texture('kubejs:item/scarlet_neodymium_dust').tag('forge:dusts/scarlet_neodymium')
    event.create('azure_neodymium_dust', 'basic').displayName('青钕粉').texture('kubejs:item/azure_neodymium_dust').tag('forge:dusts/azure_neodymium')
    event.create('ultra_neodymium_ingot', 'basic').displayName('超钕合金锭').texture('kubejs:item/ultra_neodymium_ingot').tag('forge:ingots/ultra_neodymium')
    event.create('ultra_neodymium_plate', 'basic').displayName('超钕合金板').texture('kubejs:item/ultra_neodymium_plate').tag('forge:plates/ultra_neodymium')
    event.create('source_matter_base', 'basic').displayName('魔源物质基底').texture('kubejs:item/source_matter_base').tag('kubejs:item/source_matter_base')
    event.create('burn_sun_ingot', 'basic').displayName('炎阳锭').texture('kubejs:item/burn_sun_ingot').tag('forge:ingots/burn_sun')
    event.create('burn_sun_plate').displayName('炎阳板').texture('kubejs:item/burn_sun_plate').tag('forge:plates/burn_sun')
    event.create('ancient_ingot', 'basic').displayName('远古锭').texture('kubejs:item/ancient_ingot').tag('forge:ingots/ancient')
    event.create('essence_base', 'basic').displayName('精华基底').texture('kubejs:item/essence_base')
    event.create('tree_essence', 'basic').displayName('木之精华').texture('kubejs:item/tree_essence')
    event.create('metal_essence', 'basic').displayName('金之精华').texture('kubejs:item/metal_essence')
    event.create('sky_essence', 'basic').displayName('天空之精华').texture('kubejs:item/sky_essence')
    event.create('swords_essence', 'basic').displayName('刀剑之精华').texture('kubejs:item/swords_essence')
    event.create('range_mountains_essence', 'basic').displayName('群峦之精华').texture('kubejs:item/range_mountains_essence')
    event.create('vast_ocean_essence', 'basic').displayName('渊海之精华').texture('kubejs:item/vast_ocean_essence')
    event.create('inferno_essence', 'basic').displayName('炼狱之精华').texture('kubejs:item/inferno_essence')
    event.create('lush_forests_essence', 'basic').displayName('繁森之精华').texture('kubejs:item/lush_forests_essence')
    event.create('alien_meteors', 'basic').displayName('外星陨石唤位器').texture('kubejs:item/alien_meteors')
    event.create('primitive_meteors', 'basic').displayName('原始陨石唤位器').texture('kubejs:item/primitive_meteors')
    event.create('magnet_meteors', 'basic').displayName('磁场陨石唤位器').texture('kubejs:item/magnet_meteors')
    event.create('abyssal_meteors', 'basic').displayName('渊海陨石唤位器').texture('kubejs:item/abyssal_meteors')
    event.create('candy_meteors', 'basic').displayName('糖果陨石唤位器').texture('kubejs:item/candy_meteors')
    metals.forEach(metal => {
        event.create(`${metal.name}_ingot`)
            .displayName(`${metal.localName}锭`)
            .texture(`kubejs:item/ingot_${metal.name}`)
            .tag('forge:ingots')
            .tag(`forge:ingots/${metal.name}`)
            .maxStackSize(64);

        event.create(`${metal.name}_plate`)
            .displayName(`${metal.localName}板`)
            .texture(`kubejs:item/plate_${metal.name}`)
            .tag('forge:plates')
            .tag(`forge:plates/${metal.name}`)
            .maxStackSize(64);

        event.create(`${metal.name}_nugget`)
            .displayName(`${metal.localName}粒`)
            .texture(`kubejs:item/nugget_${metal.name}`)
            .tag('forge:nuggets')
            .tag(`forge:nuggets/${metal.name}`)
            .maxStackSize(64);

        event.create(`${metal.name}_dust`)
            .displayName(`${metal.localName}粉`)
            .texture(`kubejs:item/dust_${metal.name}`)
            .tag('forge:dusts')
            .tag(`forge:dusts/${metal.name}`)
            .maxStackSize(64);
    })
    event.create('ancient_debris_fragment', 'basic').displayName('远古残骸碎片').texture('kubejs:item/ancient_debris_fragment').tag('forge:fragments/ancient_debris')
    event.create('enriched_debris_powder', 'basic').displayName('富集残骸粉').texture('kubejs:item/enriched_debris_powder').tag('forge:dusts/enriched_debris')
    event.create('crude_nether_alloy_slag', 'basic').displayName('粗制下界合金渣').texture('kubejs:item/crude_nether_alloy_slag').tag('forge:slag/crude_nether_alloy')
    event.create('purified_alloy_mass', 'basic').displayName('净化合金块').texture('kubejs:item/purified_alloy_mass').tag('forge:chunks/purified_alloy')
    event.create('annealed_alloy_ingot_semi_stable', 'basic').displayName('退火合金锭(半稳定)').texture('kubejs:item/annealed_alloy_ingot_semi_stable').tag('forge:ingots').tag('forge:ingots/annealed_alloy')
    event.create('energized_nether_alloy_crystal', 'basic').displayName('充能下界合金晶体').texture('kubejs:item/energized_nether_alloy_crystal').tag('forge:gems').tag('kubejs:energized_nether_alloy_crystal')
    event.create('stable_alloy_casting_block', 'basic').displayName('稳定合金铸块').texture('kubejs:item/stable_alloy_casting_block').tag('forge:blocks').tag('forge:chunks/stable_alloy')
    event.create('forged_nether_alloy_plate', 'basic').displayName('锻造下界合金板').texture('kubejs:item/forged_nether_alloy_plate').tag('forge:plates').tag('forge:plates/forged_nether_alloy')
    event.create('calibrated_alloy_core', 'basic').displayName('校准合金核心').texture('kubejs:item/calibrated_alloy_core').tag('kubejs:cores').tag('forge:gems/calibrated_alloy_core')
    cells.forEach(cell => {
        event.create(`${cell}_fluid_cell`, 'basic').displayName(`${cell}流体存储组件`).texture(`kubejs:item/${cell}_fluid_cell`)
        event.create(`${cell}_mana_cell`, 'basic').displayName(`${cell}魔力存储组件`).texture(`kubejs:item/${cell}_mana_cell`)
        event.create(`${cell}_source_cell`, 'basic').displayName(`${cell}魔源存储组件`).texture(`kubejs:item/${cell}_source_cell`)
        event.create(`${cell}_storage_circuits_etched_substrate`, 'basic').displayName(`${cell}存储电路蚀刻基板`).texture(`kubejs:item/${cell}_storage_circuits_etched_substrate`)
    })
    event.create("fluid_digital_transducer", 'basic').displayName("流体数字化适配器").texture("kubejs:item/fluid_digital_transducer")
    event.create("mana_digital_transducer", 'basic').displayName("魔力数字化适配器").texture("kubejs:item/mana_digital_transducer")
    event.create("energy_digital_transducer", 'basic').displayName("能量数字化适配器").texture("kubejs:item/energy_digital_transducer")
    event.create("source_digital_transducer", 'basic').displayName("魔源数字化适配器").texture("kubejs:item/source_digital_transducer")
    event.create("item_digital_transducer", 'basic').displayName("物品数字化适配器").texture("kubejs:item/item_digital_transducer")
    event.create("complex_processing_computer", 'basic').displayName("复杂处理计算机").texture("kubejs:item/complex_processing_computer")
    event.create("super_ember_fuel", 'basic').displayName("超级余烬燃料").texture("kubejs:item/super_ember_fuel").tag("embers:fuel_super").burnTime(360000)
    event.create("nouveau_essence", 'basic').displayName("新生之精粹").texture("kubejs:item/nouveau_essence")
    event.create("ember_essence", 'basic').displayName("余烬之精粹").texture("kubejs:item/ember_essence")
    event.create("source_netherite_component", 'basic').displayName("魔源-下界合金部件").texture("kubejs:item/source_netherite_component").tag("kubejs:source_netherite_component")
    event.create('common_metals_meteors', 'basic').displayName('常见金属陨石唤位器').texture('kubejs:item/common_metals_meteors')
    event.create('nether_meteors', 'basic').displayName('下界陨石唤位器').texture('kubejs:item/nether_meteors')
    event.create('aetherworks_meteors', 'basic').displayName('天华陨石唤位器').texture('kubejs:item/aetherworks_meteors')
    event.create('ice_ball', "basic")
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
        }).displayName('冰结球')
    event.create("herb_residue", 'basic').displayName("药渣").texture("kubejs:item/herb_residue").tag("kubejs:herb_residue")
    event.create("refine_inferno_bulb").displayName("炼地狱根茎").texture("kubejs:item/refine_inferno_bulb").tag("kubejs:refine_inferno_bulb")
    event.create("aetherwork_inferno_bulb").displayName("天华根茎").texture("kubejs:item/aetherwork_inferno_bulb").tag("kubejs:aetherwork_inferno_bulb")
    event.create("entangle_aura_root").displayName("缠灵根").tag("kubejs:entangle_aura_root").texture("kubejs:item/entangle_aura_root")
    event.create("root_component").displayName("源根部件").tag("kubejs:root_component").texture("kubejs:item/root_component")
    event.create("lp_maker").displayName("LP标识物").tag("kuebjs:maker/lp").texture("kubejs:item/lp_maker")
    event.create("raw_will_maker").displayName("原生意志标识物").tag("kuebjs:maker/raw_will").texture("kubejs:item/raw_will_maker")
    event.create("corrosive_will_maker").displayName("腐蚀意志标识物").tag("kuebjs:maker/corrosive_will").texture("kubejs:item/corrosive_will_maker")
    event.create("destructive_will_maker").displayName("破坏意志标识物").tag("kuebjs:maker/destructive_will").texture("kubejs:item/destructive_will_maker")
    event.create("steadfast_will_maker").displayName("坚毅意志标识物").tag("kuebjs:maker/steadfast_will").texture("kubejs:item/steadfast_will_maker")
    event.create("vengeful_will_maker").displayName("复仇意志标识物").tag("kuebjs:maker/vengeful_will").texture("kubejs:item/vengeful_will_maker")
    event.create("living_ingot").displayName("蕴生锭").tag("forge:ingots/living").texture("kubejs:item/living_ingot")
    event.create("sylvan_ingot").displayName("繁森锭").tag("forge:ingots/sylvan").texture("kubejs:item/sylvan_ingot")
    event.create("wildwood_ingot").displayName("野木锭").tag("forge:ingots/wildwood").texture("kubejs:item/wildwood_ingot")
    event.create("big_currant").displayName("大醋栗").tag("rootsclassic:berries").texture("kubejs:item/big_currant")
    event.create("vitality_uranium").displayName("血能铀").tag("forge:ingots/vitality_uranium").texture("kubejs:item/vitality_uranium")
    event.create("craft_logoer").displayName("合成器标识仪").tag("kubejs:maker/craft_logoer").texture("kubejs:item/craft_logoer")
    event.create("shattered_pages").displayName("破碎的书页").tag("kubejs:shattered_pages").texture("kubejs:item/shattered_pages")
    event.create("seasonal_rune", "botania:rune").displayName("四季符文").texture("kubejs:item/seasonal_runes").tag("botania:runes/seasonal")
    event.create("sin_rune", "botania:rune").displayName("罪恶符文").texture("kubejs:item/sin_rune").tag("botania:runes/sin")
    event.create("elemental_rune", "botania:rune").displayName("元素符文").texture("kubejs:item/elemental_rune").tag("botania:runes/elemental")
    event.create("weighty_lead_ingot").displayName("重铅锭").tag("forge:ingots/weighty_lead").texture("kubejs:item/weighty_lead_ingot")
    event.create("fragrant_fat").displayName("芳脂").tag("kubejs:item/fragrant_fat").texture("kubejs:item/fragrant_fat")
    event.create("mixed_incense").displayName("混合熏香").tag("kubejs:item/mixed_incense").texture("kubejs:item/mixed_incense")
    event.create("flow_stars").displayName("星之流").tag("kubejs:item/flow_stars").texture("kubejs:item/flow_stars")
    event.create("life_sustaining_metal").displayName("富生机金属").tag("kubejs:item/life_sustaining_metal").texture("kubejs:item/life_sustaining_metal")
    event.create("love_drug").displayName("迷魂药").tag("kubejs:item/love_drug").texture("kubejs:item/love_drug")
    genes.forEach(gene => {
        event.create(gene.name).displayName(gene.localName).texture("kubejs:item/" + gene.name).tag("kubejs:gene")
    })
    event.create("drygmy_head").displayName("德格米头颅").tag("kubejs:item/drygmy_head").texture("kubejs:item/drygmy_head")
    event.create("drygmy_brain").displayName("德格米大脑").tag("kubejs:item/drygmy_rain").texture("kubejs:item/drygmy_rain")
    event.create("bookwyrm_scale").displayName("书龙鳞").tag("kubejs:item/bookwyrm_scale").texture("kubejs:item/bookwyrm_scale")
    event.create("uninspired_computer").displayName("无灵气的计算机").tag("kubejs:item/uninspired_computer").texture("kubejs:item/uninspired_computer")
    event.create("dishwater").displayName("刷锅水").tag("kubejs:item/dishwater").texture("kubejs:item/dishwater")
})
