EntityEvents.hurt(event => {
    let player = event.source.actual//造成伤害的玩家
    let entity = event.entity//受伤实体
    let damage = event.damage//基础伤害
    let attack = player.getAttributeValue("minecraft:generic.attack_damage")//玩家攻击力
    if(attack != null){
    let effect = player.potionEffects.getActive('kubejs:kill_hits')
    if (effect!=null){
    let amplifier = effect.amplifier//获取效果等级
    if (player!=null){
    if (player.mainHandItem!=null){
      let currentTime = Date.now()
      let actualattack = attack**(1+0.15*amplifier)
      let actualattack1 = Math.min(actualattack,(entity.getHealth()-1))
    entity.health -= actualattack1
  }
    }
    }}
  }
  )

let $willChunk = Java.loadClass("wayoftime.bloodmagic.demonaura.WillChunk")
let $WorldDemonWillHandler = Java.loadClass("wayoftime.bloodmagic.demonaura.WorldDemonWillHandler")
let $SoulNetwork = Java.loadClass("wayoftime.bloodmagic.core.data.SoulNetwork")
let $SoulTicket = Java.loadClass("wayoftime.bloodmagic.core.data.SoulTicket")
let $BMWorldSavedData = Java.loadClass("wayoftime.bloodmagic.core.data.BMWorldSavedData")
let $NetworkHelper = Java.loadClass("wayoftime.bloodmagic.util.helper.NetworkHelper")
BlockEvents.rightClicked(event => {
  let block = event.getBlock()
  let test = block.getPos()
  let level = event.getLevel()
//  console.log($WorldDemonWillHandler.getWillChunk(level,test).getCurrentWill().willMap)
//获得恶魔意志
  let UUID = event.getPlayer().getUuid()
//  console.log($NetworkHelper["getSoulNetwork(java.util.UUID)"](UUID).currentEssence)
// LP网络
})