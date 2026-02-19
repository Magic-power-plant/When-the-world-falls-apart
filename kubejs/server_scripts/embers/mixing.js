ServerEvents.recipes(event => {
    event.custom({
  "type": "embers:mixing",
  "inputs": [
    {
      "amount": 18,
      "tag": "forge:molten_copper"
    },
    {
      "amount": 9,
      "tag": "forge:molten_gold"
    },
    {
        'amount':10,
        'tag':'forge:fluids/liquid_amber'
    }
  ],
  "output": {
    "amount": 18,
    "tag": "forge:molten_dawnstone"
  }
    })
    event.custom({
  "type": "embers:mixing",
  "inputs": [
    {
      "amount": 9,
      "tag": "forge:molten_iron"
    },
    {
      "amount": 9,
      "tag": "forge:fluid/liquid_coal"
    },
  ],
  "output": {
    "amount": 9,
    "tag": "forge:molten/high_carbon_iron"
  }
    })
    event.custom({
  "type": "embers:mixing",
  "inputs": [
    {
      "amount": 9,
      "tag": "forge:molten_iron"
    },
    {
      "amount": 9,
      "tag": "forge:molten/raw_steel"
    },
  ],
  "output": {
    "amount": 18,
    "tag": "forge:molten_steel"
  }
    })
  event.custom({
  "type": "embers:mixing",
  "inputs": [
    {
      "amount": 9,
      "tag": "forge:molten_silver"
    },
    {
      "amount": 9,
      "tag": "forge:molten/heavy"
    },
  ],
  "output": {
    "amount": 18,
    "tag": "forge:molten/spirit_silver"
  }
    })
  event.custom({
  "type": "embers:mixing",
  "inputs": [
    {
      "amount": 9,
      "tag": "forge:molten_dawnstone"
    },
    {
      "amount": 10,
      "tag": 'forge:fluid/liquid_ember'
    },
    {
      'amount':10,
      "tag":"forge:fluid/dwarven_oil"
    }
  ],
  "output": {
    "amount": 9,
    "tag": "forge:molten/ember_dawnstone"
  }
    })
  event.custom({
  "type": "embers:mixing",
  "inputs": [
    {
      "amount": 9,
      "tag": "forge:molten/ember_dawnstone"
    },
    {
      "amount": 9,
      "tag": "forge:molten/spirit_silver"
    }
  ],
  "output": {
    "amount": 18,
    "tag": 'forge:molten/duskstone'
  }
    })
  event.custom({
  "type": "embers:mixing",
  "inputs": [
    {
      "amount": 9,
      "tag": "forge:molten/ember_dawnstone"
    },
    {
      "amount": 9,
      "tag": "forge:molten_steel"
    }
  ],
  "output": {
    "amount": 18,
    "tag": 'forge:molten/nightstone'
  }
    })
  event.custom({
  "type": "embers:mixing",
  "inputs": [
    {
      "amount": 3,
      "fluid": "aetherworks:alchemic_precursor"
    },
    {
      "amount": 3,
      "fluid": "aetherworks:aether_gas_impure"
    },
    {
      "amount": 3,
      "tag": "forge:molten_netherite"
    }
  ],
  "output": {
    "amount": 6,
    "fluid": "aetherworks:aether_gas"
  }
    })
}
)