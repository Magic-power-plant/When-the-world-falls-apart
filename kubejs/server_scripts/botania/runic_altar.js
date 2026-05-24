ServerEvents.recipes(event => {
    // 定义基础符文组
    const basicRunes = ["botania:rune_air", "botania:rune_mana", "botania:rune_fire", "botania:rune_earth", "botania:rune_water"]
    const seasonalRunes = ['botania:rune_spring', 'botania:rune_summer', 'botania:rune_autumn', 'botania:rune_winter']
    const sinRunes = ['botania:rune_pride', 'botania:rune_envy', 'botania:rune_lust', 'botania:rune_gluttony', 'botania:rune_greed', 'botania:rune_sloth', 'botania:rune_wrath']
    const mythicRunes = ['mythicbotany:asgard_rune', 'mythicbotany:vanaheim_rune', 'mythicbotany:alfheim_rune', 'mythicbotany:midgard_rune', 'mythicbotany:joetunheim_rune', 'mythicbotany:muspelheim_rune', 'mythicbotany:niflheim_rune', 'mythicbotany:nidavellir_rune', 'mythicbotany:helheim_rune']
    event.forEachRecipe({ type: "botania:runic_altar" }, recipe => {
        let inputs = recipe.inputValues()
        let mana = recipe.allValueMap.get("mana").getValue()
        let outputs = recipe.outputValues()[0].value.item.id
        if (outputs != /mythicbotany:.*_rune/) {
            inputs.forEach(input => {
                let ids = input.value
                let ins = []
                ids.forEach(id => {
                    let ds = id.ingredient.itemIds[0]
                    let tag = ds.toString()
                    if (basicRunes.includes(tag)) {
                        basicRunes.forEach(rune => {
                            ins.push({ item: rune })
                        })
                    } else if (seasonalRunes.includes(tag)) {
                        seasonalRunes.forEach(rune => {
                            ins.push({ item: rune })
                        })
                    } else if (sinRunes.includes(tag)) {
                        sinRunes.forEach(rune => {
                            ins.push({ item: rune })
                        })
                    } else {
                        ins.push(ds)
                    }
                })
                event.custom({
                    type: "botania:runic_altar",
                    ingredients: ins,
                    output: { item: outputs, count: 2 },
                    mana: mana
                })
            })
            event.remove({id:recipe.getId()})
        }
    })
})

