ServerEvents.recipes(event => {
        event.custom({//定义安山合金在炉子里融化
        "type": "tconstruct:melting",
        "ingredient": {//所需物品
            "item": "kubejs:burn_sun_ingot"
        },
        "result": {//结果
            "amount": 900,//900mb
            "fluid": "kubejs:motlen_burn_sun"//你定义的流体
        },
        "temperature": 1450,//温度 800是常规燃料 1000是岩浆 1500是烈焰血
        "time": 100//时间 100是25秒
    })
    event.custom({
        "type": "tconstruct:material_fluid",//浇筑
        "fluid": {
            "amount": 90,// 每单位
            "fluid": "kubejs:motlen_burn_sun"//你定义的流体
        },
        "temperature": 800,//这边指冷却时间
        "output": "kubejs:burn_sun"//输出，材料类型，你创建的材料
    })
    event.custom({//浇筑为锭
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": "tconstruct:casts/multi_use/ingot"},
        "cast_consumed": false,
            "cooling_time": 200,
        "fluid": {
            "amount": 90,
            "fluid": "kubejs:motlen_burn_sun"
        },
        "result": "kubejs:burn_sun_ingot"
    })
    event.custom({//浇筑为锭 红沙
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": "tconstruct:casts/single_use/ingot"
        },
        "cast_consumed": true,
        "cooling_time": 200,
        "fluid": {
            "amount": 90,
            "fluid": "kubejs:motlen_burn_sun"
        },
        "result": "kubejs:burn_sun_ingot"
    })
    event.custom({//浇筑为块
            "type": "tconstruct:casting_basin",
            "cooling_time": 1800,
            "fluid": {
                "amount": 900,
                "fluid": "kubejs:motlen_burn_sun"
            },
            "result": "kubejs:burn_sun_block"
        })
    event.custom({//浇筑为锭 红沙
        "type": "tconstruct:casting_table",
        "cast": {
            "item": "tconstruct:seared_melter"
        },
        "cast_consumed": true,
        "cooling_time": 200,
        "fluid": {
            "amount": 900,
            "fluid": "kubejs:motlen_burn_sun"
        },
        "result": "tconstruct:smeltery_controller"
    })
    event.custom({
        "type": "tconstruct:casting_table",
        "cooling_time": 200,
        "fluid": {
            "amount": 180,
            "fluid": "kubejs:alloy_catalytic_intermediate"
        },
        "result": "kubejs:stable_alloy_casting_block"
    })
    event.custom({
        "type": "tconstruct:casting_table",
        "cooling_time": 200,
        "cast": {
            "item": "kubejs:calibrated_alloy_core"
        },
        "cast_consumed": true,
        "fluid": {
            "amount": 60,
            "fluid": "embers_extended:molten_debris"
        },
        "result": "minecraft:netherite_ingot"
    })
    event.custom({
        "type": "tconstruct:casting_table",
        "cooling_time": 200,
        "cast": {
            "item": "kubejs:calibrated_alloy_core"
        },
        "cast_consumed": true,
        "fluid": {
            "amount": 60,
            "fluid": "tconstruct:molten_debris"
        },
        "result": "minecraft:netherite_ingot"
    })
})