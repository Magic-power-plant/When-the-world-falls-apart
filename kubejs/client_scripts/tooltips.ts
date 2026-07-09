import {banitsList} from "../shared_scripts/list"


function banit(event : Internal.ItemTooltipEventJS,item : Internal.Ingredient_) {
    event.addAdvanced(item,(item,advanced,text)=>{
        text.add(0,Text.of("该物品已被禁用").red())
        text.add(1,Text.of("该物品已被禁用").red())
        text.remove(2)
    })
}

const banits = banitsList as Internal.Ingredient_[]
ItemEvents.modelProperties
ItemEvents.tooltip(event => {
event.addAdvanced("embers:mechanical_core", (item, advanced, text) => {
    text.add(1,Text.of('可以承接余烬部分机器的功能,来达到拓展机器可使用空间的目的').green())
    text.add(2,Text.of('推荐使用铁匠单片眼镜来查看').red())
}
)
event.addAdvanced("embers:tinker_lens",(item,advanced,text)=>{
    text.add(1,Text.of('能够查看余烬机器的大部分信息').green())
})
event.addAdvanced("embers:ember_emitter",(item,advanced,text)=>{
    text.add(1,Text.of('用铁匠锤来连接输入与输出端').red())
    text.add(2,Text.of('需要红石信号来激活').red())
})
event.addAdvanced("embers:pressure_refinery",(item,advanced,text)=>{
    text.add(1,Text.of('在底部放置金属块，在金属块的周围放置岩浆以获得产出倍率加成'))
    text.add(2,Text.of('放置四桶岩浆时获得最大倍率, 倍率为JEI中显示数值'))
})
event.addAdvanced("minecraft:crafting_table",(item,advanced,text)=>{
    text.add(1,Text.of("匠魂的工作站更好,推荐你用那个").green())
})
event.addAdvanced("kubejs:stone_iron_ingot",(item,advanced,text)=>{
    text.add(1,Text.of("感谢tian_fan为物品纹理做出的贡献").red())
})

banits.forEach((item : Internal.Ingredient_)=>{
    banit(event,item)})

event.addAdvanced("embers:beam_splitter",(item,advanced,text)=>{
    text.add(1,Text.of('本身自带接收和输出余烬能量的功能').green())
    text.add(2,Text.of('顶部或底部中的非链接面接受余烬能量，水平方向上的大凸起面输出能量').green())
    text.add(3,Text.of('使用铁匠锤来配置').green())
})
event.addAdvanced("embers:fluid_vessel",(item,advanced,text)=>{
    text.add(1,Text.of('无法存储蒸汽').green())
})
event.addAdvanced("embers_extended:ember_infuser",(item,advanced,text)=>{
    text.add(1,Text.of('输入物品为配方要求时才能工作,过多或过少时无法工作').green())
})
event.add(["embers:ancient_motive_core","embers:archaic_brick"],Text.of('太古魔像的刷怪蛋可以合成').red())
event.addAdvanced("mbd2:dawnstone_crusher_controller",(item,advanced,text)=>{
    text.add(1,Text.of('注意:多方块结构中的硬化玻璃可替换为仓室').red())
    text.add(2,Text.of('默认结构下').green())
    text.add(3,Text.of('    每tick消耗10点余烬能量, 2最大并行, 执行无等级配方'))
    text.add(4,[Text.green('安装'),Text.red('液态余烬充分燃烧单元'),Text.green('后')])
    text.add(5,Text.of('    每tick消耗10mB液态余烬, 8最大并行, 耗时x0.75, 执行无等级配方'))
})
event.addAdvanced("minecraft:potion", (item, advanced, text) => {
    try {
        let nbt = item.nbt; 
        if (nbt && typeof nbt.getString === 'function') {
            let potionTooltips = nbt.getString("tooltips");
            if (potionTooltips && potionTooltips !== "") {
                text.add(1, Text.of(potionTooltips).color(0xc516ab as unknown as dev.latvian.mods.rhino.mod.util.color.Color_));
            }
        }
    } catch (e) {
        console.error("Error in potion tooltip:", e as Internal.Throwable_);
    }
});

event.addAdvanced("minecraft:splash_potion", (item, advanced, text) => {
    try {
        let nbt = item.nbt;
        if (nbt && typeof nbt.getString === 'function') {
            let potionTooltips = nbt.getString("tooltips");
            if (potionTooltips && potionTooltips !== "") {
                text.add(1, Text.of(potionTooltips).color(0xc516ab as unknown as dev.latvian.mods.rhino.mod.util.color.Color_));
            }
        }
    } catch (e) {
        console.error("Error in splash_potion tooltip:", e as Internal.Throwable_);
    }
});

event.addAdvanced("minecraft:lingering_potion", (item, advanced, text) => {
    try {
        let nbt = item.nbt;
        if (nbt && typeof nbt.getString === 'function') {
            let potionTooltips = nbt.getString("tooltips");
            if (potionTooltips && potionTooltips !== "") {
                text.add(1, Text.of(potionTooltips).color(0xc516ab as unknown as dev.latvian.mods.rhino.mod.util.color.Color_));
            }
        }
    } catch (e) {
        console.error("Error in lingering_potion tooltip:", e as Internal.Throwable_);
    }
});
event.addAdvanced("kubejs:aubergine_seed",(item,addAdvanced,text) => {
    text.add(1,Text.of("注意:用于复刻根源魔法的物品的纹理均来自原模组").red())
    text.add(2,Text.of("纹理所有权属于原模组作者Noobanidus").red())
})
    event.addAdvanced("kubejs:aetherworks_machine_frame",(item,addAdvanced,text) => {
        text.add(1,Text.red("非常感谢feiniao_plus7为物品纹理,脚本,机器做出的贡献"))
    })
})
console.log("banitsList",banitsList)