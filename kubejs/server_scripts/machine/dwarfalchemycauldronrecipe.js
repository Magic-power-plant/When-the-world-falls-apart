ServerEvents.recipes(event =>{

function registerlevel0(event,inputtiem1, inputItem, outputItem) {

    const recipeId = `mbd2:${inputItem.replace(':', '_').replace('#','')}_to_${outputItem.replace(':', '_').replace(' ','_')}`;
    
    event.recipes.mbd2.dwarf_alchemy_cauldron()
        .id(recipeId)
        .duration(100)
        .inputItems(inputItem)
        .outputItems(outputItem)
        .blocksInStructure(0, 0, "mbd2:liquid_ember_complete_combustion_unit")
        .perTick(builder => builder
            .inputEmber(10)) 
        .chance(0, builder => builder
            .inputItems(inputtiem1)
        )
}

    registerlevel0(event,"embers:iron_crystal_seed","#forge:cobblestone","2x minecraft:iron_ore")
    registerlevel0(event,"embers:copper_crystal_seed","#forge:cobblestone","2x minecraft:copper_ore")
    registerlevel0(event,"embers:lead_crystal_seed","#forge:cobblestone","2x thermal:lead_ore")
    registerlevel0(event,"embers:silver_crystal_seed","#forge:cobblestone","2x thermal:silver_ore")
    registerlevel0(event,"embers:gold_crystal_seed","#forge:cobblestone","2x minecraft:gold_ore")
    registerlevel0(event,"embers:nickel_crystal_seed","#forge:cobblestone","2x thermal:nickel_ore")
    registerlevel0(event,"embers:tin_crystal_seed","#forge:cobblestone","2x thermal:tin_ore")
})
