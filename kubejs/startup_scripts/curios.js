StartupEvents.registry("item",event=>{
    event.create("martial_way_of_heavenly_evolution").displayName("天之衍武").texture("kubejs:item/martial_way_of_heavenly_evolution").tag("curios:curio").attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => {
            slotContext.entity().potionEffects.add("minecraft:saturation",10,2,false,true)
            let potion = slotContext.entity().potionEffects
            potion.add("minecraft:resistance",10,4,false,true)
        })
        .onEquip((slotContext, oldStack, newStack) => { })
        .onUnequip((slotContext, oldStack, newStack) => { })
        .canEquip((slotContext, stack) => {
            return !slotContext.entity().isCuriosEquipped("kubejs:martial_way_of_heavenly_evolution")
        })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute("minecraft:generic.max_health",UUID,1024,"multiply_total").addAttribute("minecraft:generic.armor",UUID,1024,"multiply_total").addAttribute("minecraft:generic.armor_toughness",UUID,1024,"multiply_total").addAttribute("minecraft:generic.attack_damage",UUID,1024,"multiply_total")
    )
})
