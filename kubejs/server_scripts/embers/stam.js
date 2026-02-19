
const ingotToPlate = [
  "aetherium",
  "bronze",
  "burn_sun",
  "calorite",
  "constantan",
  "dawnstone",
  "desh",
  "dwarven_mithril",
  "electrum",
  "ember_dawnstone",
  "enderium",
  "gold",
  "heavy",
  "invar",
  "lumium",
  "netherite",
  "nickel",
  "ostrum",
  "rose_gold",
  "signalum",
  "source_gem_steel",
  "spirit_silver",
  "steel",
  "stone_iron",
  "tin",
  "ultra_neodymium"
]

ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "embers:stamping",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingot/iron"
      }
    }
  ],
  "fluid": {
    "amount": 90,
    "tag": "forge:molten/high_carbon_iron"
  },
  "output": {
    "tag": "forge:ingots/high_carbon_iron"
  },
  "stamp": {
    "item": "embers:ingot_stamp"
  }
}
    )
    event.custom(
        {
  "type": "embers:stamping",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingot/iron"
      }
    }
  ],
  "fluid": {
    "amount": 90,
    "tag": "forge:molten_steel"
  },
  "output": {
    "tag": "kubejs:item/steel_billet"
  },
  "stamp": {
    "item": "kubejs:stone_iron_block"
  }
}
    )
  event.custom(
        {
  "type": "embers:stamping",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingot/iron"
      }
    }
  ],
  "fluid": {
    "amount": 90,
    "tag": "forge:molten/ember_dawnstone"
  },
  "output": {
    "tag": "forge:plates/ember_dawnstone"
  },
  "stamp": {
    "item": "embers:plate_stamp"
  }
}
    )
  event.custom(
        {
  "type": "embers:stamping",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingot/iron"
      }
    }
  ],
  "fluid": {
    "amount": 90,
    "tag": "forge:molten/ember_dawnstone"
  },
  "output": {
    "tag": "forge:ingots/ember_dawnstone"
  },
  "stamp": {
    "item": "embers:ingot_stamp"
  }
}
    )
  event.custom(
        {
  "type": "embers:stamping",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingot/iron"
      }
    }
  ],
  "fluid": {
    "amount": 90,
    "tag": "forge:molten/spirit_silver"
  },
  "output": {
    "tag": "forge:ingots/spirit_silver"
  },
  "stamp": {
    "item": "embers:ingot_stamp"
  }
}
    )
  event.custom(
        {
  "type": "embers:stamping",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingot/iron"
      }
    }
  ],
  "fluid": {
    "amount": 90,
    "tag": "forge:molten/spirit_silver"
  },
  "output": {
    "tag": "forge:plates/spirit_silver"
  },
  "stamp": {
    "item": "embers:plate_stamp"
  }
}
    )
  event.custom(
        {
  "type": "embers:stamping",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingot/iron"
      }
    }
  ],
  "fluid": {
    "amount": 90,
    "tag": "forge:molten/nightstone"
  },
  "output": {
    "tag": "forge:ingots/nightstone"
  },
  "stamp": {
    "item": "embers:ingot_stamp"
  }
}
    )
  event.custom(
        {
  "type": "embers:stamping",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ingot/iron"
      }
    }
  ],
  "fluid": {
    "amount": 90,
    "tag": "forge:molten/duskstone"
  },
  "output": {
    "tag": "forge:ingots/duskstone"
  },
  "stamp": {
    "item": "embers:ingot_stamp"
  }
}
    )

    ingotToPlate.forEach(material => {
  event.custom(
        {
	"type": "embers:stamping",
	"input": {
		"tag": `forge:ingots/${material}`
	},
	"output": {
		"tag": `forge:plates/${material}`
	},
	"stamp": {
		"item": "embers:plate_stamp"
	}
    })
    })

      event.custom(
        {
	"type": "embers:stamping",
	"input": {
		"item": "minecraft:iron_ingot"
	},
	"output": {
		"tag": "thermal:iron_plate"
	},
	"stamp": {
		"item": "embers:plate_stamp"
	}
    })

  event.custom(
        {
	"type": "embers:stamping",
	"input": {
		"item": "minecraft:copper_ingot"
	},
	"output": {
		"item": "thermal:copper_plate"
	},
	"stamp": {
		"item": "embers:plate_stamp"
	}
    })

  event.custom(
        {
	"type": "embers:stamping",
	"input": {
		"item": "embers:raw_caminite_block"
	},
	"output": {
		"item": "embers:raw_caminite_plate"
	},
	"stamp": {
		"item": "embers:plate_stamp"
	}
    })
  event.custom(
        {
	"type": "embers:stamping",
	"input": {
		"tag": "forge:ingots/silver"
	},
	"output": {
		"item": "thermal:silver_plate"
	},
	"stamp": {
		"item": "embers:plate_stamp"
	}
    })
  event.custom(
        {
	"type": "embers:stamping",
	"input": {
		"tag": "forge:ingots/lead"
	},
	"output": {
		"item": "thermal:lead_plate"
	},
	"stamp": {
		"item": "embers:plate_stamp"
	}
    })
  event.custom(
        {
	"type": "embers:stamping",
	"input": {
		"item": "thermal:sulfur"
	},
	"output": {
		"item": "thermal:sulfur_dust"
	},
	"stamp": {
		"item": "embers:flat_stamp"
	}
    })
})