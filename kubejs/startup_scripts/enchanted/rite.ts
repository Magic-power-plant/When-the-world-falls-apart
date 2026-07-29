StartupEvents.registry('enchanted:circle_magic/rite',event => {
    event.create('wtwfacore:eid_crucible_rite','circle_rite')
        .shape("kubejs:shape_1","enchanted:ritual_chalk")
        .items("extendedcrafting:nether_star_block","extendedcrafting:nether_star_block","extendedcrafting:nether_star_block","kubejs:pewter_machine_frame",
            "eidolon:pewter_block","eidolon:pewter_block","kubejs:flow_stars"
        )
        .createItem("eidolon:crucible")
        .power(500)
        .tickPower(1)
})