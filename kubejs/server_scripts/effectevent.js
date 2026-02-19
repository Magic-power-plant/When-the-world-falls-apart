EntityEvents.hurt(event => {
    let player = event.source.actual//造成伤害的玩家
    let entity = event.entity//受伤实体
    let damage = event.damage//基础伤害
    let attack = player.getAttributeValue("minecraft:generic.attack_damage")//玩家攻击力
    let effect = player.potionEffects.getActive('kubejs:kill_hits')
    if (effect!=null){
    let amplifier = effect.amplifier//获取效果等级
    if (player!=null){
    if (player.mainHandItem!=null){
      let currentTime = Date.now()
      let actualattack = attack**(1+0.15*amplifier)
    entity.attack(actualattack)}
    }
    }}
  )