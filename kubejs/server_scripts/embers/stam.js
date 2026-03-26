
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
    /**
     * 创建 Embers 冲压配方
     * @param {Object} output - 输出物品，格式：{ tag: "forge:plates/iron" } 或 { item: "thermal:iron_plate" }
     * @param {Object} stamp - 印章物品，格式：{ item: "embers:plate_stamp" }
     * @param {Object} options - 可选配置对象
     *   @param {Object} options.fluid - 流体输入，格式：{ amount: 90, tag: "forge:molten/iron" } 或 { amount: 90, fluid: "minecraft:lava" }
     *   @param {Object} options.input - 物品输入，格式：{ tag: "forge:ingots/iron" } 或 { item: "minecraft:iron_ingot" }
     *   @param {Array} options.conditions - 条件数组，用于条件判断
     * 
     * 使用说明：
     * - 可以同时使用 fluid 和 input，也可以单独使用其中一个
     * - 如果不传 options，则创建一个空配方
     * - 常用印章：embers:plate_stamp（板材）、embers:ingot_stamp（锭）、embers:flat_stamp（平板）
     */
    function createStampingRecipe(output, stamp, options) {
        const opts = options || {}
        const recipe = {
            type: "embers:stamping"
        }

        if (opts.fluid) {
            recipe.fluid = opts.fluid
        }
        if (opts.input) {
            recipe.input = opts.input
        }

        recipe.output = output
        recipe.stamp = stamp

        if (opts.conditions) {
            recipe.conditions = opts.conditions
        }

        event.custom(recipe)
    }

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
    createStampingRecipe({
      item:"kubejs:root_wrapped_invar_plate"
    },{item:"embers:flat_stamp"},{
      input:{item:"kubejs:root_wrapped_invar_ingot"}
    })
})