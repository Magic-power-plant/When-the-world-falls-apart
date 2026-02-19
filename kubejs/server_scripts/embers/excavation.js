ServerEvents.recipes(event => {
event.custom({
  "type": "embers:excavation",
  "chance": 0.75,
  "max_height": 2147483647,
  "output": {
    "item": "minecraft:clay_ball"
  },
  "required_block": {
    "amount": 9,
    "block_tag": 'minecraft:block/clay'
  },
  "weight": 50
})
event.custom({
  "type": "embers:excavation",
  "chance": 0.25,
  "max_height": 2147483647,
  "output": {
    "item": "minecraft:clay"
  },
  "required_block": {
    "amount": 9,
    "block_tag": 'minecraft:block/clay'
  },
  "weight": 10
})
event.custom({
  "type": "embers:excavation",
  "chance": 0.25,
  "max_height": 2147483647,
  "output": {
    "item": "minecraft:sand"
  },
  "required_block": {
    "amount": 9,
    "block_tag": "minecraft:sand"
  },
  "weight": 100
})
})