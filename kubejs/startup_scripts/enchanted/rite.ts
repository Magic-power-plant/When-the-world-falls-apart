StartupEvents.registry('enchanted:circle_magic/rite',event => {
    event.create('wtwfacore:eid_crucible_rite','circle_rite')
        .shape("wtwfacore:shape_1","enchanted:ritual_chalk")
        .items("extendedcrafting:nether_star_block","extendedcrafting:nether_star_block","extendedcrafting:nether_star_block","wtwfacore:pewter_machine_frame",
            "eidolon:pewter_block","eidolon:pewter_block","wtwfacore:flow_stars"
        )
        .createItem("eidolon:crucible")
        .power(500)
        .tickPower(1)
    
    event.create("wtwfacore:distillery" , "circle_rite")
        .shape("wtwfacore:shape_3","enchanted:ritual_chalk")
        .shape("wtwfacore:shape_1","enchanted:nether_chalk")
        .shape("wtwfacore:shape_2","enchanted:otherwhere_chalk")
        .items("supplementaries:jar","supplementaries:jar","supplementaries:jar","enchanted:witch_oven","wtwfacore:weighty_lead_machine_frame",
            "enchanted:attuned_stone_charged","enchanted:tear_of_the_goddess"
        )
        .createItem("enchanted:distillery")
        .power(500)
        .tickPower(2)
    
    event.create("wtwfacore:magic_table","circle_rite")
        .shape("wtwfacore:shape_1","wtwfacore:light_blue_chalk")
        .shape("wtwfacore:shape_2","enchanted:otherwhere_chalk")
        .items("wtwfacore:treated_wood_plank","wtwfacore:treated_wood_plank","wtwfacore:treated_wood_plank","wtwfacore:treated_wood_plank","wtwfacore:pewter_machine_frame","wtwfacore:dishwater","extendedcrafting:advanced_table")
        .createItem("eidolon:worktable")
        .power(500).tickPower(1)
})