StartupEvents.registry('mob_effect', event => {
  event.create('kill_hits')
    .color(0xFF6B35) // 橙色效果粒子
    .beneficial()
    .displayName('杀伐征讨');
});