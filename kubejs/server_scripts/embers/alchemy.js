function toIngredient(entry) {
    if (typeof entry === 'string') {
        // 以 '#' 开头表示标签，否则视为物品
        if (entry.startsWith('#')) {
            return { tag: entry.substring(1) };
        } else {
            return { item: entry };
        }
    }
    // 如果是对象，直接使用（假设已符合配方格式）
    return entry;
}

function alchemyRecipe(event, output, aspects, inputs, tablet) {
    // 处理 aspects：字符串直接转为 {tag: ...}
    const processedAspects = aspects.map(aspect => 
        typeof aspect === 'string' ? { tag: aspect } : aspect
    );

    // 处理 inputs：支持字符串（物品或标签）或对象
    const processedInputs = inputs.map(input => toIngredient(input));

    // 处理 output 和 tablet：字符串转为 {item: ...}
    const processedOutput = typeof output === 'string' ? { item: output } : output;
    const processedTablet = typeof tablet === 'string' ? { item: tablet } : tablet;

    // 构建基础配方
    const recipe = {
        type: "embers:alchemy",
        aspects: processedAspects,
        inputs: processedInputs,
        output: processedOutput,
        tablet: processedTablet
    };

    // 直接注册
    event.custom(recipe);
}

ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/silver"
    },
    {
      "tag": "embers:aspectus/dawnstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:plates/steel"
    },
    {
      "tag": "forge:plates/ember_dawnstone"
    },
    {
      "tag": "forge:plates/spirit_silver"
    },
    {
        'tag':"embers:wildfire_core"
    }
  ],
  "output": {
    "item": "kubejs:ember_dawnstone_component"
  },
  "tablet": {
    "tag": "kubejs:simple_basic_component"
  }
}
    )
    event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/iron"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:ingots/iron"
    },
    {
      "tag": "forge:ingots/iron"
    },
    {
      "tag": "forge:ingots/iron"
    },
    {
        'tag':"forge:normal_stone"
    }
  ],
  "output": {
    "item": "kubejs:stone_iron_block"
  },
  "tablet": {
    "tag": "forge:deepslate"
  }
}
    )
    event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:dusts/azure_neodymium"
    },
    {
      "tag": "forge:dusts/azure_neodymium"
    },
    {
      "tag": "forge:dusts/azure_neodymium"
    },
    {
      'tag':"forge:ingots/nightstone"
    }
  ],
  "output": {
    "item": "alexscaves:azure_neodymium_ingot"
  },
  "tablet": {
    "tag": "forge:ingots/steel"
  }
}
    )
    event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:dusts/scarlet_neodymium"
    },
    {
      "tag": "forge:dusts/scarlet_neodymium"
    },
    {
      "tag": "forge:dusts/scarlet_neodymium"
    },
    {
      'tag':"forge:ingots/duskstone"
    }
  ],
  "output": {
    "item": "alexscaves:scarlet_neodymium_ingot"
  },
  "tablet": {
    "tag": "forge:ingots/steel"
  }
}
    )
    event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:ingots/dawnstone"
    },
    {
      "tag": "forge:ingots/duskstone"
    },
    {
      "tag": "forge:ingots/nightstone"
    }
  ],
  "output": {
    "item": "kubejs:burn_sun_ingot"
  },
  "tablet": {
    "tag": "forge:ingots/ember_dawnstone"
  }
}
    )
    event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:ingots/azure_neodymium"
    },
    {
      "tag": "forge:ingots/scarlet_neodymium"
    }
  ],
  "output": {
    "item": "kubejs:ultra_neodymium_ingot"
  },
  "tablet": {
    "tag": "forge:ingots/stone_iron"
  }
}
    )
    event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:ingots/dawnstone"
    },
    {
      "tag": "forge:ingots/duskstone"
    },
    {
      "tag": "forge:ingots/nightstone"
    }
  ],
  "output": {
    "item": "kubejs:burn_sun_ingot"
  },
  "tablet": {
    "tag": "forge:ingots/ember_dawnstone"
  }
}
    )
    event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:dusts/source_gem"
    }
  ],
  "output": {
    "item": "kubejs:raw_source_gem_steel"
  },
  "tablet": {
    "tag": "forge:ingots/steel"
  }
}
    )
  event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "alexscaves:ferrouslime_ball"
    },
    {
      "tag": "alexsmobs:banana_slug_slime"
    },
    {      "tag": "minecraft:magma_cream"
    },
    {
      "tag":"forge:dusts/gold"
    }
  ],
  "output": {
    "item": "kubejs:purified_alloy_mass"
  },
  "tablet": {
    "tag": 'forge:slag/crude_nether_alloy'
  }
}
    )
  event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "kubejs:metal_essence"
    }
  ],
  "output": {
    "item": "kubejs:energized_nether_alloy_crystal"
  },
  "tablet": {
    "tag": 'forge:ingots/annealed_alloy'
  }
}
    )
  event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "tag": "forge:plates/source_gem_steel"
    },
    {
      "tag": "forge:plates/source_gem_steel"
    },
    {
      "tag": "forge:plates/source_gem_steel"
    },
    {
      "tag": "forge:plates/source_gem_steel"
    }
  ],
  "output": {
    "item": "kubejs:source_gem_steel_machine_frame"
  },
  "tablet": {
    "tag": "kubejs:dawnstone_machine_frame"
  }
}
    )
  event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    },
    {
      'tag':"embers:aspectus/copper"
    },
    {
      'tag':"embers:aspectus/dawnstone"
    },
    {
      'tag':"embers:aspectus/lead"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "item": "embers_extended:duskstone_ingot"
    },
    {
      "item": "embers_extended:nightstone_ingot"
    },
    {
      "item": "embers:dawnstone_ingot"
    },
    {
      "item": "kubejs:burn_sun_ingot"
    },
    {
      'item':"aetherworks:ingot_aether"
    }
  ],
  "output": {
    "item": "kubejs:ember_essence"
  },
  "tablet": {
    "item": "aetherworks:aether_pearl"
  }
}
    )
  event.custom(
        {
  "type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/nightstone"
    },
    {
      'tag':"embers:aspectus/duskstone"
    },
    {
      'tag':"embers:aspectus/dawnstone"
    }
  ],
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:ingots/iron"
          }
        },
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:nuggets/iron"
          }
        }
      ]
    }
  ],
  "inputs": [
    {
      "item": "ae2:logic_processor"
    },
    {
      "item": "ae2:logic_processor"
    },
    {
      "item": "ae2:calculation_processor"
    },
    {
      "item": "ae2:calculation_processor"
    },
    {
      'item':"ae2:engineering_processor"
    },
    {
      'item':"ae2:engineering_processor"
    }
  ],
  "output": {
    "item": "kubejs:1k_storage_circuits_etched_substrate"
  },
  "tablet": {
    "item": "kubejs:complex_processing_computer"
  }
}
    )

    alchemyRecipe(
      event,
      "appbot:creative_mana_cell",
      [
        "bloodmagic:reagentwater",
        "bloodmagic:reagentlava",
        "bloodmagic:reagentvoid",
        "bloodmagic:reagentgrowth",
        "bloodmagic:reagentfastminer",
        "bloodmagic:reagentmagnetism",
        "bloodmagic:reagentair",
        "bloodmagic:reagentbloodlight",
        "bloodmagic:reagentsight",
        "bloodmagic:reagentholding",
        "animus:reagentbuilder",
        "animus:reagentchains",
        "animus:reagentconsumption",
        "animus:reagentleach",
        "animus:reagentstorm",
        "animus:reagenttransposition",
        "animus:reagentboundlessnature",
        "animus:reagentequivalency",
        "animus:reagentfreesoul",
        "animus:reagentheavelywrath",
        "animus:reagentremendium",
        "animus:reagentreparare",
        "animus:reagenttemporaldominance",
        "animus:reagentfist",
        "animus:reagentcrimsonwill"
      ],
      [
        "botania:rune_water",
        "botania:rune_fire",
        "botania:rune_earth",
        "botania:rune_air",
        "botania:rune_spring",
        "botania:rune_summer",
        "botania:rune_autumn",
        "botania:rune_winter",
        "botania:rune_mana",
        "botania:rune_lust",
        "botania:rune_gluttony",
        "botania:rune_greed",
        "botania:rune_sloth",
        "botania:rune_wrath",
        "botania:rune_envy",
        "botania:rune_pride",
        "mythicbotany:asgard_rune",
        "mythicbotany:vanaheim_rune",
        "mythicbotany:alfheim_rune",
        "mythicbotany:midgard_rune",
        "mythicbotany:joetunheim_rune",
        "mythicbotany:muspelheim_rune",
        "mythicbotany:niflheim_rune",
        "mythicbotany:nidavellir_rune",
        "mythicbotany:helheim_rune"
      ],
      "botania:creative_pool"
    )
    alchemyRecipe(
      event,
      "arseng:creative_source_cell",
      [
        "ars_nouveau:air_essence",
        "ars_nouveau:earth_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:water_essence",
        "kubejs:tree_essence",
        "kubejs:metal_essence"
      ],
      [
        "kubejs:sky_essence",
        "kubejs:swords_essence",
        "kubejs:range_mountains_essence",
        "kubejs:vast_ocean_essence",
        "kubejs:inferno_essence",
        "kubejs:lush_forests_essence"
      ],
      "ars_nouveau:creative_source_jar"
    )
})