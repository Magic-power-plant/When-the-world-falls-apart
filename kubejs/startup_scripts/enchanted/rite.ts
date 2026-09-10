StartupEvents.registry('enchanted:circle_magic/rite',event => {
    event.create('wtwfacore:eid_crucible_rite','circle_rite')
        .shape("kubejs:shape_1","enchanted:ritual_chalk")
        .items("extendedcrafting:nether_star_block","extendedcrafting:nether_star_block","extendedcrafting:nether_star_block","kubejs:pewter_machine_frame",
            "eidolon:pewter_block","eidolon:pewter_block","kubejs:flow_stars"
        )
        .createItem("eidolon:crucible")
        .power(500)
        .tickPower(1)
    
    event.create("wtwfacore:distillery" , "circle_rite")
        .shape("kubejs:shape_3","enchanted:ritual_chalk")
        .shape("kubejs:shape_1","enchanted:nether_chalk")
        .shape("kubejs:shape_2","enchanted:otherwhere_chalk")
        .items("supplementaries:jar","supplementaries:jar","supplementaries:jar","enchanted:witch_oven","kubejs:weighty_lead_machine_frame",
            "enchanted:attuned_stone_charged","enchanted:tear_of_the_goddess"
        )
        .createItem("enchanted:distillery")
        .power(500)
        .tickPower(2)
})