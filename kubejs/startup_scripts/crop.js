const FARMLAND = Java.loadClass( "net.minecraft.world.level.block.FarmBlock")
const BlockBehaviour$Properties = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties")
const BlockBehaviour = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour")

StartupEvents.registry("item",event =>{
    event.create("wtwfacore:aubergine","basic").texture("wtwfacore:item/crop/aubergine").tag("forge:crops").tag("forge:crops/aubergine")
    event.create("wtwfacore:moonglow","basic").texture("wtwfacore:item/crop/moonglow").tag("forge:crops").tag("forge:crops/moonglow")
    event.create("wtwfacore:pereskia","basic").texture("wtwfacore:item/crop/pereskia").tag("forge:crops").tag("forge:crops/pereskia")
    event.create("wtwfacore:wildewheet","basic").texture("wtwfacore:item/crop/wildewheet").tag("forge:crops").tag("forge:crops/wildewheet")
    event.create("wtwfacore:spiritleaf","basic").texture("wtwfacore:item/crop/spiritleaf").tag("forge:crops").tag("forge:crops/spiritleaf")
})
StartupEvents.registry("block",event =>{
    event.create("wtwfacore:aubergine","crop")
    .crop("wtwfacore:aubergine",1).crop("wtwfacore:aubergine",0.05)
    .age(7,builder => {
        builder.shape(0,0,0,0,16,2,16)
        builder.shape(1,0,0,0,16,2,16)
        builder.shape(2,0,0,0,16,4,16)
        builder.shape(3,0,0,0,16,6,16)
        builder.shape(4,0,0,0,16,8,16)
        builder.shape(5,0,0,0,16,10,16)
        builder.shape(6,0,0,0,16,12,16)
        builder.shape(7,0,0,0,16,14,16)
    })
    .survive((state,level,pos) => {
          let blockState = level.getBlockState(pos.below());
          let mcBlock = blockState.block;
          if (mcBlock instanceof FARMLAND) {
            return true;
          } else return false;
      })
    .growTick((tickevent) => 5)
    .texture(0,'wtwfacore:block/crop/aubergine_0')
    .texture(1,'wtwfacore:block/crop/aubergine_1')
    .texture(2,'wtwfacore:block/crop/aubergine_2')
    .texture(3,'wtwfacore:block/crop/aubergine_3')
    .texture(4,'wtwfacore:block/crop/aubergine_4')
    .texture(5,'wtwfacore:block/crop/aubergine_5')
    .texture(6,'wtwfacore:block/crop/aubergine_6')
    .texture(7,'wtwfacore:block/crop/aubergine_7')
    .item((seedItem) => {
        seedItem
        .texture('wtwfacore:item/crop/aubergine_seeds')
    })
    const crops7 = [
    {
      name: "moonglow",
      seedTexture: "moonglow_seeds",
      cropItem: "wtwfacore:moonglow",
      localName:"月萤",
      localSeedName:"月萤种子"
    },{
        name: "pereskia",
        seedTexture: "pereskia_bulb",
        cropItem: "wtwfacore:pereskia",
        localName:"木麒麟",
        localSeedName:"木麒麟根茎"
    },{
        name: "wildewheet",
        seedTexture: "wildewheet_seeds",
        cropItem: "wtwfacore:wildewheet",
        localName:"野麦",
        localSeedName:"野麦种子"
    }]
    crops7.forEach(crop => {
        event.create(`wtwfacore:${crop.name}`,"crop")
        .crop(crop.cropItem,1).crop(crop.cropItem,0.05)
        .age(7,builder => {
            builder.shape(0,0,0,0,16,2,16)
            builder.shape(1,0,0,0,16,2,16)
            builder.shape(2,0,0,0,16,4,16)
            builder.shape(3,0,0,0,16,6,16)
            builder.shape(4,0,0,0,16,8,16)
            builder.shape(5,0,0,0,16,10,16)
            builder.shape(6,0,0,0,16,12,16)
            builder.shape(7,0,0,0,16,14,16)
        })
        .survive((state,level,pos) => {
          let blockState = level.getBlockState(pos.below());
          let mcBlock = blockState.block;
          if (mcBlock instanceof FARMLAND) {
            return true;
          } else return false;
        })
        .growTick((tickevent) => 5)
        .texture(0,'wtwfacore:block/crop/'+crop.name+'_0')
        .texture(1,'wtwfacore:block/crop/'+crop.name+'_1')
        .texture(2,'wtwfacore:block/crop/'+crop.name+'_2')
        .texture(3,'wtwfacore:block/crop/'+crop.name+'_3')
        .texture(4,'wtwfacore:block/crop/'+crop.name+'_4')
        .texture(5,'wtwfacore:block/crop/'+crop.name+'_5')
        .texture(6,'wtwfacore:block/crop/'+crop.name+'_6')
        .texture(7,'wtwfacore:block/crop/'+crop.name+'_7')
        .item((seedItem) => {
            seedItem
            .texture('wtwfacore:item/crop/'+crop.seedTexture)
        })
    })
    const crop3 = [
        {
            name:"cloud_berry",
            localName:"云莓",
        },{
            name:"dewgonia",
            localName:"霞海棠",
        },{
            name:"wildroot",
            localName:"野根",
        },{
            name:"stalicripe",
            localName:"石笋",
        }
    ]
    crop3.forEach(crop => {
        event.create(`wtwfacore:${crop.name}`,"crop")
        .age(3,builder => {
            builder.shape(0,0,0,0,16,2,16)
            builder.shape(1,0,0,0,16,6,16)
            builder.shape(2,0,0,0,16,10,16)
            builder.shape(3,0,0,0,16,14,16)
        })
        .survive((state,level,pos) => {
          let blockState = level.getBlockState(pos.below());
          let mcBlock = blockState.block;
          if (mcBlock instanceof FARMLAND) {
            return true;
          } else return false;
        })
        .growTick((tickevent) => 5)
        .texture(0,'wtwfacore:block/crop/'+crop.name+'_0')
        .texture(1,'wtwfacore:block/crop/'+crop.name+'_1')
        .texture(2,'wtwfacore:block/crop/'+crop.name+'_2')
        .texture(3,'wtwfacore:block/crop/'+crop.name+'_3')
        .item(seedItem =>
            seedItem.texture(`wtwfacore:item/crop/${crop.name}`).tag("forge:crops").tag(`forge:crops/${crop.name}`).tag("forge:seeds").tag(`forge:seeds/${crop.name}`)
        )
    })
    event.create("wtwfacore:inferno_bulb","crop")
    .crop("rootsclassic:infernal_bulb",1).crop("rootsclassic:infernal_bulb",0.05)
    .age(3,builder => {
        builder.shape(0,0,0,0,16,2,16)
        builder.shape(1,0,0,0,16,6,16)
        builder.shape(2,0,0,0,16,10,16)
        builder.shape(3,0,0,0,16,14,16)
    })
    .survive((state,level,pos) => {
          let blockState = level.getBlockState(pos.below());
          let mcBlock = blockState.block.getId()
          if (mcBlock === "minecraft:soul_sand") {
            return true;
          } else return false;
    })
    .growTick((tickevent) => 5)
    .texture(0,'wtwfacore:block/crop/inferno_bulb_0')
    .texture(1,'wtwfacore:block/crop/inferno_bulb_1')
    .texture(2,'wtwfacore:block/crop/inferno_bulb_2')
    .texture(3,'wtwfacore:block/crop/inferno_bulb_3')
    .item((seedItem) => {
        seedItem
        .texture('wtwfacore:item/crop/inferno_bulb')
    })
    event.create("wtwfacore:spiritleaf","crop")
    .crop("wtwfacore:spiritleaf",1).crop("wtwfacore:spiritleaf",0.05).crop("rootsclassic:verdant_sprig",1).crop("rootsclassic:verdant_sprig",0.05)
    .age(4,builder => {
        builder.shape(0,0,0,0,16,2,16)
        builder.shape(1,0,0,0,16,6,16)
        builder.shape(2,0,0,0,16,10,16)
        builder.shape(3,0,0,0,16,12,16)
        builder.shape(4,0,0,0,16,14,16)
    })
    .survive((state,level,pos) => {
          let blockState = level.getBlockState(pos.below());
          let mcBlock = blockState.block;
          if (mcBlock instanceof FARMLAND) {
            return true;
          } else return false;
    })
    .growTick((tickevent) => 5)
    .texture(0,'wtwfacore:block/crop/spiritleaf_0')
    .texture(1,'wtwfacore:block/crop/spiritleaf_1')
    .texture(2,'wtwfacore:block/crop/spiritleaf_2')
    .texture(3,'wtwfacore:block/crop/spiritleaf_3')
    .texture(4,'wtwfacore:block/crop/spiritleaf_4')
    .item((seedItem) => {
        seedItem
        .texture('wtwfacore:item/crop/spiritleaf_seeds')
    })
})
ForgeEvents.onEvent