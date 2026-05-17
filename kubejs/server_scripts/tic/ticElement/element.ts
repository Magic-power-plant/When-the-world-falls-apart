ElementalEvents.elementAttack(event => { 
    if (event.hasElement("tinkers_elemental:buff")) { 
        event.target.addEffect("ars_elemental:frozen",100,5)
    }
})