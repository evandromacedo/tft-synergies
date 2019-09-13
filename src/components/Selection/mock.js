export const champions = {
  "Aatrox": {
    "id": "266",
    "key": "Aatrox",
    "name": "Aatrox",
    "origin": [
      "Demon"
    ],
    "class": [
      "Blademaster"
    ],
    "cost": 3,
    "ability": {
      "name": "The Darkin Blade",
      "description": "Aatrox cleaves the area in front of him, dealing damage to enemies inside it.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "300 / 600 / 900"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 42,
        "range": 1
      },
      "defense": {
        "health": 700,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "guardianangel"
    ]
  },
  "Ahri": {
    "id": "103",
    "key": "Ahri",
    "name": "Ahri",
    "cost": 2,
    "origin": [
      "Wild"
    ],
    "class": [
      "Sorcerer"
    ],
    "ability": {
      "name": "Spirit Orb",
      "description": "Ahri fires an orb in a line that returns to her, damaging enemies it passes through.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "100 / 200 / 300"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.55,
        "dps": 28,
        "range": 3
      },
      "defense": {
        "health": 450,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "guinsoosrageblade",
      "rabadonsdeathcap"
    ]
  },
  "Akali": {
    "id": "84",
    "key": "Akali",
    "name": "Akali",
    "cost": 4,
    "origin": [
      "Ninja"
    ],
    "class": [
      "Assassin"
    ],
    "ability": {
      "name": "Five Point Strike",
      "description": "Akali throws shurikens in front of her, dealing damage.",
      "type": "Active",
      "manaCost": 25,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "200 / 350 / 500"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 80,
        "attackSpeed": 0.7,
        "dps": 53,
        "range": 1
      },
      "defense": {
        "health": 650,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "phantomdancer",
      "seraphsembrace",
      "rabadonsdeathcap"
    ]
  },
  "Anivia": {
    "id": "34",
    "key": "Anivia",
    "name": "Anivia",
    "origin": [
      "Glacial"
    ],
    "class": [
      "Elementalist"
    ],
    "cost": 5,
    "ability": {
      "name": "Glacial Storm",
      "description": "Anivia channels a large hailstorm, damaging enemies inside of it.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "800 / 950 / 1200"
        },
        {
          "type": "Attack Speed Slow",
          "value": "50 / 70 / 90"
        },
        {
          "type": "Storm Duration",
          "value": "6s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 24,
        "range": 3
      },
      "defense": {
        "health": 700,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "seraphsembrace",
      "rabadonsdeathcap",
      "morellonomicon"
    ]
  },
  "Ashe": {
    "id": "22",
    "key": "Ashe",
    "name": "Ashe",
    "origin": [
      "Glacial"
    ],
    "class": [
      "Ranger"
    ],
    "cost": 3,
    "ability": {
      "name": "Enchanted Crystal Arrow",
      "description": "Ashe fires an arrow that travels across the map, damages, and stuns (stun duration based on each hex traveled).",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "700 / 950 / 1200"
        },
        {
          "type": "Stun Duration (per hex traveled)",
          "value": "1s / 1.5s / 2s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.7,
        "dps": 42,
        "range": 4
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "statikkshiv",
      "runaanshurricane",
      "guinsoosrageblade"
    ]
  },
  "AurelionSol": {
    "id": "136",
    "key": "AurelionSol",
    "name": "Aurelion Sol",
    "origin": [
      "Dragon"
    ],
    "class": [
      "Sorcerer"
    ],
    "cost": 4,
    "ability": {
      "name": "Voice of Light",
      "description": "Aurelion Sol breathes a large blast of fire in a line, dealing damage to enemies.",
      "type": "Active",
      "manaCost": 125,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "250 / 500 / 750"
        },
        {
          "type": "Channel Duration",
          "value": "0.35s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 24,
        "range": 3
      },
      "defense": {
        "health": 650,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "rapidfirecannon",
      "rabadonsdeathcap",
      "morellonomicon"
    ]
  },
  "Blitzcrank": {
    "id": "53",
    "key": "Blitzcrank",
    "name": "Blitzcrank",
    "origin": [
      "Robot"
    ],
    "class": [
      "Brawler"
    ],
    "cost": 2,
    "ability": {
      "name": "Rocket Grab",
      "description": "Blitzcrank pulls the furthest enemy to him.",
      "type": "Active",
      "manaCost": 125,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "100 / 350 / 800"
        },
        {
          "type": "Stun Duration",
          "value": "2.5s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.5,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "warmogsarmor",
      "dragonsclaw"
    ]
  },
  "Brand": {
    "id": "63",
    "key": "Brand",
    "name": "Brand",
    "origin": [
      "Demon"
    ],
    "class": [
      "Elementalist"
    ],
    "cost": 4,
    "ability": {
      "name": "Pyroclasm",
      "description": "Brand launches a bouncing fireball, damaging enemies hit.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        {
          "type": "Damage",
          "value": "250 / 450 / 650"
        },
        {
          "type": "Bounces",
          "value": "4 / 4 / 6"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 0.6,
        "dps": 36,
        "range": 3
      },
      "defense": {
        "health": 700,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "guinsoosrageblade",
      "morellonomicon",
      "hextechgunblade"
    ]
  },
  "Braum": {
    "id": "201",
    "key": "Braum",
    "name": "Braum",
    "origin": [
      "Glacial"
    ],
    "class": [
      "Guardian"
    ],
    "cost": 2,
    "ability": {
      "name": "Unbreakable",
      "description": "Braum creates a barrier that blocks all incoming damage.",
      "type": "Active",
      "manaCost": 50,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage Reduction",
          "value": "70% / 80% / 90%"
        },
        {
          "type": "Duration",
          "value": "4s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 24,
        "range": 1
      },
      "defense": {
        "health": 650,
        "armor": 75,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "warmogsarmor",
      "dragonsclaw"
    ]
  },
  "Camille": {
    "id": "164",
    "key": "Camille",
    "name": "Camille",
    "origin": [
      "Hextech"
    ],
    "class": [
      "Blademaster"
    ],
    "cost": 1,
    "ability": {
      "name": "The Hextech Ultimatum",
      "description": "Camille singles out an enemy, dealing magic damage and rooting them for few seconds. Camille's allies in range will prioritize attacking that enemy.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "200 / 325 / 450"
        },
        {
          "type": "Root Duration",
          "value": "4s / 5s / 6s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "titanichydra",
      "guardianangel"
    ]
  },
  "Chogath": {
    "id": "31",
    "key": "Chogath",
    "name": "Cho'Gath",
    "origin": [
      "Void"
    ],
    "class": [
      "Brawler"
    ],
    "cost": 4,
    "ability": {
      "name": "Rupture",
      "description": "Cho'gath ruptures an area, stunning and damaging enemies inside of it.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        {
          "type": "Damage",
          "value": "175 / 350 / 525"
        },
        {
          "type": "Knockup Duration",
          "value": "1.5s / 1.75s / 2s"
        },
        {
          "type": "AoE Radius",
          "value": "3 hexes"
        },
        {
          "type": "Delay",
          "value": "1.5s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 70,
        "attackSpeed": 0.6,
        "dps": 39,
        "range": 1
      },
      "defense": {
        "health": 1000,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "rabadonsdeathcap",
      "morellonomicon",
      "seraphsembrace"
    ]
  },
  "Darius": {
    "id": "122",
    "key": "Darius",
    "name": "Darius",
    "origin": [
      "Imperial"
    ],
    "class": [
      "Knight"
    ],
    "cost": 1,
    "ability": {
      "name": "Decimate",
      "description": "Darius swings his axe, damaging nearby enemies and healing himself based off his missing health.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "150 / 225 / 300"
        },
        {
          "type": "Heal",
          "value": "100 / 150 / 200"
        },
        {
          "type": "Delay",
          "value": "1.5"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.5,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 40,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "warmogsarmor",
      "dragonsclaw"
    ]
  },
  "Draven": {
    "id": "119",
    "key": "Draven",
    "name": "Draven",
    "origin": [
      "Imperial"
    ],
    "class": [
      "Blademaster"
    ],
    "cost": 4,
    "ability": {
      "name": "Spinning Axes",
      "description": "Draven gains bonus on-hit damage and Attack Speed. Stacks up to two times.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [
        {
          "type": "Buff Duration",
          "value": "8s"
        },
        {
          "type": "Attack Damage Multiplier",
          "value": "150% / 200% / 250%"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 70,
        "attackSpeed": 0.75,
        "dps": 49,
        "range": 3
      },
      "defense": {
        "health": 650,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "bloodthirster",
      "rapidfirecannon",
      "guardianangel"
    ]
  },
  "Elise": {
    "id": "60",
    "key": "Elise",
    "name": "Elise",
    "origin": [
      "Demon"
    ],
    "class": [
      "Shapeshifter"
    ],
    "cost": 1,
    "ability": {
      "name": "Spider Form",
      "description": "Elise fires a cocoon stunning the nearest enemy and transforms, summoning 2 Spiderlings.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Life Steal",
          "value": "60% / 90% / 120%"
        },
        {
          "type": "Number of Spiderlings",
          "value": "1 / 2 / 4"
        },
        {
          "type": "Spiderling Attack Damage",
          "value": "60"
        },
        {
          "type": "Spiderling Attack Speed",
          "value": "0.7"
        },
        {
          "type": "Spiderling Health",
          "value": "500"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.6,
        "dps": 40,
        "range": 2
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "guinsoosrageblade",
      "thornmail",
      "warmogsarmor"
    ]
  },
  "Evelynn": {
    "id": "28",
    "key": "Evelynn",
    "name": "Evelynn",
    "origin": [
      "Demon"
    ],
    "class": [
      "Assassin"
    ],
    "cost": 3,
    "ability": {
      "name": "Last Caress",
      "description": "Evelynn deals damage to the 3 closest enemies and teleports away. Damage is increased against low health enemies.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "200 / 300 / 400"
        },
        {
          "type": "Crit Multiplier",
          "value": "3x / 4x / 5x"
        },
        {
          "type": "Crit Threshold",
          "value": "50% HP"
        },
        {
          "type": "Blink Distance",
          "value": "3"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 70,
        "attackSpeed": 0.6,
        "dps": 50,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "dragonsclaw",
      "guardianangel",
      "hextechgunblade"
    ]
  },
  "Fiora": {
    "id": "114",
    "key": "Fiora",
    "name": "Fiora",
    "origin": [
      "Noble"
    ],
    "class": [
      "Blademaster"
    ],
    "cost": 1,
    "ability": {
      "name": "Riposte",
      "description": "Fiora becomes immune to damage and spells. After a short delay, she stuns and damages the closest enemy.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "100 / 250 / 400"
        },
        {
          "type": "Stun Duration",
          "value": "1.5s"
        },
        {
          "type": "Block Duration",
          "value": "1.5s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 1,
        "dps": 28,
        "range": 1
      },
      "defense": {
        "health": 400,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "titanichydra",
      "spearofshojin",
      "phantomdancer"
    ]
  },
  "Gangplank": {
    "id": "41",
    "key": "Gangplank",
    "name": "Gangplank",
    "origin": [
      "Pirate"
    ],
    "class": [
      "Gunslinger",
      "Blademaster"
    ],
    "cost": 3,
    "ability": {
      "name": "Powder Kegs",
      "description": "Gangplank periodically creates barrels. On cast, Gangplank detonates the barrels, damaging nearby enemies.",
      "type": "Passive",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "150 / 250 / 350"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.65,
        "dps": 33,
        "range": 1
      },
      "defense": {
        "health": 700,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "redbuff",
      "seraphsembrace",
      "guardianangel"
    ]
  },
  "Garen": {
    "id": "86",
    "key": "Garen",
    "name": "Garen",
    "origin": [
      "Noble"
    ],
    "class": [
      "Knight"
    ],
    "cost": 1,
    "ability": {
      "name": "Judgement",
      "description": "Garen rapidly spins his sword around his body, becoming immune to magic damage and dealing damage to nearby enemies.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Total Damage",
          "value": "360 / 585 / 810"
        },
        {
          "type": "Damage per Tick",
          "value": "50 / 65 / 80"
        },
        {
          "type": "Total Ticks",
          "value": "9"
        },
        {
          "type": "Spin Duration",
          "value": "4s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 40,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "thornmail",
      "warmogsarmor"
    ]
  },
  "Gnar": {
    "id": "150",
    "key": "Gnar",
    "name": "Gnar",
    "origin": [
      "Wild",
      "Yordle"
    ],
    "class": [
      "Shapeshifter"
    ],
    "cost": 4,
    "ability": {
      "name": "GNAR!",
      "description": "Gnar transforms and jumps behind the furthest enemy, damaging and shoving enemies backwards.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "200 / 300 / 400"
        },
        {
          "type": "CC Duration",
          "value": "2s"
        },
        {
          "type": "Knockback Distance",
          "value": "2 hexes"
        },
        {
          "type": "Transform Duration",
          "value": "60s"
        },
        {
          "type": "Transform Bonus HP",
          "value": "300 / 600 / 900"
        },
        {
          "type": "Transform Bonus Attack Damage",
          "value": "50 / 100 / 150"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.7,
        "dps": 31,
        "range": 2
      },
      "defense": {
        "health": 750,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "guardianangel",
      "warmogsarmor",
      "dragonsclaw"
    ]
  },
  "Graves": {
    "id": "104",
    "key": "Graves",
    "name": "Graves",
    "origin": [
      "Pirate"
    ],
    "class": [
      "Gunslinger"
    ],
    "cost": 1,
    "ability": {
      "name": "Buckshot",
      "description": "Graves' attacks deal splash damage to nearby enemies.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [
        {
          "type": "Damage Multiplier",
          "value": "0.1 / 0.2 / 0.3"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.55,
        "dps": 28,
        "range": 1
      },
      "defense": {
        "health": 450,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "redbuff",
      "warmogsarmor",
      "infinityedge"
    ]
  },
  "Jayce": {
    "id": "126",
    "key": "Jayce",
    "name": "Jayce",
    "origin": [
      "Hextech"
    ],
    "class": [
      "Shapeshifter"
    ],
    "cost": 2,
    "ability": {
      "name": "Mercury Cannon",
      "description": "Jayce knocks away an emeny in melee range, dealing damage and stunning them for few seconds. He then transforms his hammer into a cannon, increasing his attack range by 3 hexes and gaining max attack speed for few attacks.",
      "type": "Active",
      "manaCost": 50,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "200 / 350 / 500"
        },
        {
          "type": "Stun Duration",
          "value": "2.5s / 4.25s / 6s"
        },
        {
          "type": "Attacks",
          "value": "3 / 5 / 7"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.7,
        "dps": 39,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "statikkshiv",
      "guinsoosrageblade",
      "hush"
    ]
  },
  "Jinx": {
    "id": "222",
    "key": "Jinx",
    "name": "Jinx",
    "origin": [
      "Hextech"
    ],
    "class": [
      "Gunslinger"
    ],
    "cost": 4,
    "ability": {
      "name": "Get Excited!",
      "description": "Jinx gets excited as she participates in kills. On her first takedown, she gains attack speed. On her second, she swaps to her rocket launcher causing her attacks to deal bonus area damage.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [
        {
          "type": "Attack Speed",
          "value": "60% / 80% / 100%"
        },
        {
          "type": "Damage",
          "value": "100 / 200 / 300"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 75,
        "attackSpeed": 0.65,
        "dps": 49,
        "range": 3
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "rapidfirecannon",
      "infinityedge",
      "guardianangel"
    ]
  },
  "Karthus": {
    "id": "30",
    "key": "Karthus",
    "name": "Karthus",
    "origin": [
      "Phantom"
    ],
    "class": [
      "Sorcerer"
    ],
    "cost": 5,
    "ability": {
      "name": "Requiem",
      "description": "Karthus deals damage to a number of random enemies after a long channel.",
      "type": "Active",
      "manaCost": 125,
      "manaStart": 40,
      "stats": [
        {
          "type": "Damage",
          "value": "350 / 600 / 850"
        },
        {
          "type": "Targets",
          "value": "5 / 7 / 9"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 42,
        "range": 3
      },
      "defense": {
        "health": 850,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "seraphsembrace"
    ]
  },
  "Kassadin": {
    "id": "38",
    "key": "Kassadin",
    "name": "Kassadin",
    "origin": [
      "Void"
    ],
    "class": [
      "Sorcerer"
    ],
    "cost": 1,
    "ability": {
      "name": "Nether Blade",
      "description": "Kassadin's attacks steal mana from enemies, converting it into a shield.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [
        {
          "type": "Shield Duration",
          "value": "4s"
        },
        {
          "type": "Mana Steal",
          "value": "20 / 40 / 60"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 29,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "guinsoosrageblade",
      "rapidfirecannon",
      "youmuusghostblade"
    ]
  },
  "Katarina": {
    "id": "55",
    "key": "Katarina",
    "name": "Katarina",
    "origin": [
      "Imperial"
    ],
    "class": [
      "Assassin"
    ],
    "cost": 3,
    "ability": {
      "name": "Death Lotus",
      "description": "Katarina channels and fires daggers at a number of nearby enemies, dealing damage and reducing healing.",
      "type": "Active",
      "manaCost": 85,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "600 / 900 / 1200"
        },
        {
          "type": "Channel Duration",
          "value": "2.5s"
        },
        {
          "type": "Grievous Wounds Duration",
          "value": "3s"
        },
        {
          "type": "Targets",
          "value": "4 / 6 / 8"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 450,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "seraphsembrace"
    ]
  },
  "Kayle": {
    "id": "10",
    "key": "Kayle",
    "name": "Kayle",
    "origin": [
      "Noble"
    ],
    "class": [
      "Knight"
    ],
    "cost": 5,
    "ability": {
      "name": "Divine Judgement",
      "description": "Kayle shields an ally, making them immune to damage.",
      "type": "Active",
      "manaCost": 125,
      "manaStart": 0,
      "stats": [
        {
          "type": "Shield Duration",
          "value": "2s / 2.5s / 3s"
        },
        {
          "type": "Extra Targets",
          "value": "0 / 1 / 2"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 1,
        "dps": 66,
        "range": 3
      },
      "defense": {
        "health": 750,
        "armor": 40,
        "magicResist": 20
      }
    },
    "items": [
      "bladeoftheruinedking",
      "guinsoosrageblade",
      "spearofshojin"
    ]
  },
  "Kennen": {
    "id": "85",
    "key": "Kennen",
    "name": "Kennen",
    "origin": [
      "Ninja",
      "Yordle"
    ],
    "class": [
      "Elementalist"
    ],
    "cost": 3,
    "ability": {
      "name": "Slicing Maelstrom",
      "description": "Kennen summons a storm around him, dealing damage and stunning enemies inside of it.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        {
          "type": "Damage",
          "value": "225 / 450 / 675"
        },
        {
          "type": "Stun Duration",
          "value": "1.5s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 36,
        "range": 2
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "guardianangel",
      "hextechgunblade"
    ]
  },
  "Khazix": {
    "id": "121",
    "key": "Khazix",
    "name": "Kha'Zix",
    "origin": [
      "Void"
    ],
    "class": [
      "Assassin"
    ],
    "cost": 1,
    "ability": {
      "name": "Taste their Fear",
      "description": "Kha'Zix slashes the closest enemy, dealing bonus damage to enemies that are alone.",
      "type": "Active",
      "manaCost": 65,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "150 / 250 / 350"
        },
        {
          "type": "Isolation Damage",
          "value": "400 / 600 / 800"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "rapidfirecannon",
      "infinityedge",
      "guardianangel"
    ]
  },
  "Kindred": {
    "id": "203",
    "key": "Kindred",
    "name": "Kindred",
    "origin": [
      "Phantom"
    ],
    "class": [
      "Ranger"
    ],
    "cost": 4,
    "ability": {
      "name": "Lamb's Respite",
      "description": "Kindred creates a zone around herself that prevents allies from dying.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        {
          "type": "Duration",
          "value": "4s / 5s / 6s"
        },
        {
          "type": "Minimum HP",
          "value": "300 / 600 / 900"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 0.65,
        "dps": 36,
        "range": 3
      },
      "defense": {
        "health": 600,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "dragonsclaw",
      "guardianangel"
    ]
  },
  "Leona": {
    "id": "89",
    "key": "Leona",
    "name": "Leona",
    "origin": [
      "Noble"
    ],
    "class": [
      "Guardian"
    ],
    "cost": 4,
    "ability": {
      "name": "Solar Flare",
      "description": "Leona calls down a solar ray, stunning enemies in the center and dealing damage to enemies inside it.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 50,
      "stats": [
        {
          "type": "Damage",
          "value": "175 / 250 / 325"
        },
        {
          "type": "Stun Duration",
          "value": "5s / 7s / 9s"
        },
        {
          "type": "Stun Delay",
          "value": "0.625s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.55,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 750,
        "armor": 100,
        "magicResist": 20
      }
    },
    "items": [
      "warmogsarmor",
      "thornmail",
      "dragonsclaw"
    ]
  },
  "Lissandra": {
    "id": "127",
    "key": "Lissandra",
    "name": "Lissandra",
    "origin": [
      "Glacial"
    ],
    "class": [
      "Elementalist"
    ],
    "cost": 2,
    "ability": {
      "name": "Frozen Tomb",
      "description": "Lissandra encases the target in ice, dealing damage to nearby enemies. Below half HP, Lissandra instead encases herself, becoming untargetable.",
      "type": "Active",
      "manaCost": 85,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "175 / 325 / 475"
        },
        {
          "type": "Enemy Stun Duration",
          "value": "1.5s"
        },
        {
          "type": "Untargetable Duration",
          "value": "2s"
        },
        {
          "type": "Slow Duration",
          "value": "3s"
        },
        {
          "type": "Slow Field Duration",
          "value": "3s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 24,
        "range": 3
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "redemption"
    ]
  },
  "Lucian": {
    "id": "236",
    "key": "Lucian",
    "name": "Lucian",
    "origin": [
      "Noble"
    ],
    "class": [
      "Gunslinger"
    ],
    "cost": 2,
    "ability": {
      "name": "Relentless Pursuit",
      "description": "Lucian dashes away to safety and attacks an enemy twice, once with Attack Damage and once with Spell Damage.",
      "type": "Active",
      "manaCost": 35,
      "manaStart": 0,
      "stats": [
        {
          "type": "Second Shot Damage",
          "value": "100 / 225 / 350"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 42,
        "range": 3
      },
      "defense": {
        "health": 600,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "guinsoosrageblade",
      "ludensecho",
      "redbuff"
    ]
  },
  "Lulu": {
    "id": "117",
    "key": "Lulu",
    "name": "Lulu",
    "origin": [
      "Yordle"
    ],
    "class": [
      "Sorcerer"
    ],
    "cost": 2,
    "ability": {
      "name": "Wild Growth",
      "description": "Lulu grants an ally bonus Health, knocking up enemies near them.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 0,
      "stats": [
        {
          "type": "Bonus HP",
          "value": "300 / 400 / 500"
        },
        {
          "type": "Extra Targets",
          "value": "0 / 1 / 2"
        },
        {
          "type": "Duration",
          "value": "6s"
        },
        {
          "type": "Knockup Duration",
          "value": "1.25s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 2
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "guinsoosrageblade",
      "locketoftheironsolari"
    ]
  },
  "MissFortune": {
    "id": "21",
    "key": "MissFortune",
    "name": "Miss Fortune",
    "origin": [
      "Pirate"
    ],
    "class": [
      "Gunslinger"
    ],
    "cost": 5,
    "ability": {
      "name": "Bullet Time",
      "description": "Miss Fortune channels and fires several waves of bullets in a cone.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Channel Duration",
          "value": "3s"
        },
        {
          "type": "Total Damage",
          "value": "900 / 1300 / 1700"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 75,
        "attackSpeed": 0.85,
        "dps": 64,
        "range": 3
      },
      "defense": {
        "health": 700,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "seraphsembrace",
      "rabadonsdeathcap",
      "morellonomicon"
    ]
  },
  "Mordekaiser": {
    "id": "82",
    "key": "Mordekaiser",
    "name": "Mordekaiser",
    "origin": [
      "Phantom"
    ],
    "class": [
      "Knight"
    ],
    "cost": 1,
    "ability": {
      "name": "Obliterate",
      "description": "Mordekaiser slams his mace in front him, dealing damage in a line.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "150 / 250 / 350"
        },
        {
          "type": "Start Distance",
          "value": "2"
        },
        {
          "type": "Length",
          "value": 3
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.5,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 40,
        "magicResist": 20
      }
    },
    "items": [
      "warmogsarmor",
      "thornmail",
      "dragonsclaw"
    ]
  },
  "Morgana": {
    "id": "25",
    "key": "Morgana",
    "name": "Morgana",
    "origin": [
      "Demon"
    ],
    "class": [
      "Sorcerer"
    ],
    "cost": 3,
    "ability": {
      "name": "Soul Shackles",
      "description": "Morgana fires chains to nearby enemies, dealing damage and stunning after a short delay if they are still nearby.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        {
          "type": "Damage",
          "value": "175 / 300 / 425"
        },
        {
          "type": "Chain Duration",
          "value": "3s"
        },
        {
          "type": "Stun Duration",
          "value": "2s / 4s / 6s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 2
      },
      "defense": {
        "health": 650,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "seraphsembrace"
    ]
  },
  "Nidalee": {
    "id": "76",
    "key": "Nidalee",
    "name": "Nidalee",
    "origin": [
      "Wild"
    ],
    "class": [
      "Shapeshifter"
    ],
    "cost": 1,
    "ability": {
      "name": "Primal Surge",
      "description": "Nidalee heals herself and two allies, then transforms.",
      "type": "Active",
      "manaCost": 85,
      "manaStart": 0,
      "stats": [
        {
          "type": "HoT total heal",
          "value": "150 / 225 / 600"
        },
        {
          "type": "HoT Duration",
          "value": "6s"
        },
        {
          "type": "Transform Damage",
          "value": "20 / 65 / 120"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.65,
        "dps": 33,
        "range": 3
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "rapidfirecannon",
      "bloodthirster",
      "guinsoosrageblade"
    ]
  },
  "Pantheon": {
    "id": "80",
    "key": "Pantheon",
    "name": "Pantheon",
    "origin": [
      "Dragon"
    ],
    "class": [
      "Guardian"
    ],
    "cost": 5,
    "ability": {
      "name": "Grand Starfall",
      "description": "Pantheon leaps in the air, becomes untargetable, and crashes down towards the farthest enemy stunning them. As he lands, Pantheon deals magic damage to all enemies in his path based of their Maximum Health. They then burn for an additional percentage of their Maximum Health as True Damage over a few seconds and applies Grievous Wounds.",
      "type": "Active",
      "manaCost": 200,
      "manaStart": 150,
      "stats": [
        {
          "type": "Damage",
          "value": "10% / 20% 30% Max HP"
        },
        {
          "type": "Stun Duration",
          "value": "2s / 2s / 2s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 75,
        "attackSpeed": 0.75,
        "dps": 60,
        "range": 1
      },
      "defense": {
        "health": 850,
        "armor": 80,
        "magicResist": 20
      }
    },
    "items": [

    ]
  },
  "Poppy": {
    "id": "78",
    "key": "Poppy",
    "name": "Poppy",
    "origin": [
      "Yordle"
    ],
    "class": [
      "Knight"
    ],
    "cost": 3,
    "ability": {
      "name": "Keeper's Verdict",
      "description": "Poppy brings down her hammer, knocking away nearby enemies.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "300 / 500 / 700"
        },
        {
          "type": "Knockup Duration",
          "value": "1s"
        },
        {
          "type": "Stun Duration",
          "value": "2s / 2s / 2s"
        },
        {
          "type": "Number of Targets Hit",
          "value": "1 / 2 / 3"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.5,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 800,
        "armor": 40,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "dragonsclaw",
      "warmogsarmor"
    ]
  },
  "Pyke": {
    "id": "555",
    "key": "Pyke",
    "name": "Pyke",
    "origin": [
      "Pirate"
    ],
    "class": [
      "Assassin"
    ],
    "cost": 2,
    "ability": {
      "name": "Phantom Undertow",
      "description": "Pyke dashes behind the furthest enemy, creating an afterimage that stuns enemies it passes through.",
      "type": "Active",
      "manaCost": 125,
      "manaStart": 50,
      "stats": [
        {
          "type": "Damage",
          "value": "150 / 200 / 250"
        },
        {
          "type": "Stun Duration",
          "value": "1.5s / 2s / 2.5s"
        },
        {
          "type": "Stun Delay",
          "value": "1"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 0.6,
        "dps": 36,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "morellonomicon",
      "frozenheart"
    ]
  },
  "RekSai": {
    "id": "421",
    "key": "RekSai",
    "name": "Rek'Sai",
    "origin": [
      "Void"
    ],
    "class": [
      "Brawler"
    ],
    "cost": 2,
    "ability": {
      "name": "Burrow",
      "description": "Rek'Sai burrows for a short duration becoming untargetable and healing. When Rek'Sai unburrows she deals damage and knocks up the closest enemy.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "200 / 350 / 500"
        },
        {
          "type": "Heal Amount",
          "value": "150 / 300 / 450"
        },
        {
          "type": "Burrow Duration",
          "value": "1s"
        },
        {
          "type": "Knockup Duration",
          "value": "1.75s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.65,
        "dps": 26,
        "range": 1
      },
      "defense": {
        "health": 650,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "warmogsarmor",
      "thornmail",
      "dragonsclaw"
    ]
  },
  "Rengar": {
    "id": "107",
    "key": "Rengar",
    "name": "Rengar",
    "origin": [
      "Wild"
    ],
    "class": [
      "Assassin"
    ],
    "cost": 3,
    "ability": {
      "name": "Savagery",
      "description": "Rengar leaps to the weakest enemy and stabs them.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage Multiplier",
          "value": "2.1 / 3.2 / 4.3"
        },
        {
          "type": "Attack Speed",
          "value": "30% / 50% / 70%"
        },
        {
          "type": "Crit Chance",
          "value": "25%"
        },
        {
          "type": "Buff Duration",
          "value": "6s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 70,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "bloodthirster",
      "rapidfirecannon",
      "guardianangel"
    ]
  },
  "Sejuani": {
    "id": "113",
    "key": "Sejuani",
    "name": "Sejuani",
    "origin": [
      "Glacial"
    ],
    "class": [
      "Knight"
    ],
    "cost": 4,
    "ability": {
      "name": "Glacial Prison",
      "description": "Sejuani creates a large glacial storm, stunning enemies within it after a short delay.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        {
          "type": "Damage",
          "value": "100 / 175 / 250"
        },
        {
          "type": "Stun Duration",
          "value": "2s / 4s / 6s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.55,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 850,
        "armor": 40,
        "magicResist": 25
      }
    },
    "items": [
      "guardianangel",
      "morellonomicon",
      "warmogsarmor"
    ]
  },
  "Shen": {
    "id": "98",
    "key": "Shen",
    "name": "Shen",
    "origin": [
      "Ninja"
    ],
    "class": [
      "Blademaster"
    ],
    "cost": 2,
    "ability": {
      "name": "Spirit's Refuge",
      "description": "Shen creates a zone around himself, allowing allies to dodge all attacks.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 100,
      "stats": [
        {
          "type": "Zone Duration",
          "value": "3s / 4s / 5s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.7,
        "dps": 39,
        "range": 1
      },
      "defense": {
        "health": 700,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "dragonsclaw",
      "warmogsarmor"
    ]
  },
  "Shyvana": {
    "id": "102",
    "key": "Shyvana",
    "name": "Shyvana",
    "origin": [
      "Dragon"
    ],
    "class": [
      "Shapeshifter"
    ],
    "cost": 3,
    "ability": {
      "name": "Dragon's Descent",
      "description": "Shyvana dashes away and transforms. While transformed, Shyvana's attacks become ranged and light the ground on fire.",
      "type": "Active",
      "manaCost": 85,
      "manaStart": 0,
      "stats": [
        {
          "type": "Bonus Attack Damage",
          "value": "100 / 150 / 200"
        },
        {
          "type": "Burn Damage",
          "value": "200 / 300 / 400"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.7,
        "dps": 33,
        "range": 4
      },
      "defense": {
        "health": 650,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "hextechgunblade",
      "warmogsarmor",
      "guardianangel"
    ]
  },
  "Swain": {
    "id": "50",
    "key": "Swain",
    "name": "Swain",
    "origin": [
      "Imperial",
      "Demon"
    ],
    "class": [
      "Shapeshifter"
    ],
    "cost": 5,
    "ability": {
      "name": "Demonflare",
      "description": "Swain transforms, draining health from all nearby enemies.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        {
          "type": "Soulflare Damage",
          "value": "300 / 600 / 900"
        },
        {
          "type": "Damage Per Tick",
          "value": "50 / 100 / 150"
        },
        {
          "type": "Heal Per Tick",
          "value": "50 / 90 / 130"
        },
        {
          "type": "Transform Duration",
          "value": "6s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 42,
        "range": 2
      },
      "defense": {
        "health": 850,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "guardianangel",
      "dragonsclaw"
    ]
  },
  "Tristana": {
    "id": "18",
    "key": "Tristana",
    "name": "Tristana",
    "origin": [
      "Yordle"
    ],
    "class": [
      "Gunslinger"
    ],
    "cost": 1,
    "ability": {
      "name": "Explosive Charge",
      "description": "Tristana places a bomb on her current target that detonates after 4 attacks, damaging nearby enemies.",
      "type": "Active",
      "manaCost": 50,
      "manaStart": 0,
      "stats": [
        {
          "type": "Charge Damage",
          "value": "150 / 225 / 300"
        },
        {
          "type": "Charge Duration",
          "value": "4s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.65,
        "dps": 35,
        "range": 4
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "cursedblade",
      "redbuff",
      "rapidfirecannon"
    ]
  },
  "TwistedFate": {
    "id": "4",
    "key": "TwistedFate",
    "name": "Twisted Fate",
    "origin": [
      "Pirate"
    ],
    "class": [
      "Sorcerer"
    ],
    "cost": 2,
    "ability": {
      "name": "Pick a Card",
      "description": "Twisted Fate throws a card that either stuns, deals damage around his target, or restores mana to himself and nearby allies.",
      "type": "Active",
      "manaCost": 50,
      "manaStart": 0,
      "stats": [
        {
          "type": "Red Card AoE Damage",
          "value": "150 / 250 / 350"
        },
        {
          "type": "Yellow Card Stun Duration",
          "value": "2s / 3s / 4s"
        },
        {
          "type": "Blue Card Mana Restore",
          "value": "30 / 50 / 70"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.7,
        "dps": 28,
        "range": 3
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "statikkshiv",
      "guinsoosrageblade"
    ]
  },
  "Varus": {
    "id": "110",
    "key": "Varus",
    "name": "Varus",
    "origin": [
      "Demon"
    ],
    "class": [
      "Ranger"
    ],
    "cost": 2,
    "ability": {
      "name": "Piercing Arrow",
      "description": "Varus charges and fires an arrow, dealing damage to all enemies in a line.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "300 / 550 / 800"
        },
        {
          "type": "Cast Time",
          "value": "1.5s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.7,
        "dps": 35,
        "range": 4
      },
      "defense": {
        "health": 500,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "guinsoosrageblade",
      "statikkshiv"
    ]
  },
  "Vayne": {
    "id": "67",
    "key": "Vayne",
    "name": "Vayne",
    "origin": [
      "Noble"
    ],
    "class": [
      "Ranger"
    ],
    "cost": 1,
    "ability": {
      "name": "Silver Bolts",
      "description": "Vayne deals bonus true damage every third attack based on the enemy's maximum health.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [
        {
          "type": "Max Health Damage",
          "value": "8% / 12% / 16%"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.7,
        "dps": 27,
        "range": 3
      },
      "defense": {
        "health": 550,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "rapidfirecannon",
      "guinsoosrageblade",
      "titanichydra"
    ]
  },
  "Veigar": {
    "id": "45",
    "key": "Veigar",
    "name": "Veigar",
    "origin": [
      "Yordle"
    ],
    "class": [
      "Sorcerer"
    ],
    "cost": 3,
    "ability": {
      "name": "Primordial Burst",
      "description": "Veigar blasts an enemy with magical energy. This spell instantly kills if the enemy is a lower star level than Veigar.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "300 / 550 / 800"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.55,
        "dps": 25,
        "range": 3
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "seraphsembrace",
      "ludensecho",
      "dragonsclaw"
    ]
  },
  "Vi": {
    "id": "254",
    "key": "Vi",
    "name": "Vi",
    "origin": [
      "Hextech"
    ],
    "class": [
      "Brawler"
    ],
    "cost": 3,
    "ability": {
      "name": "Assault and Battery",
      "description": "Vi charges down the furthest enemy, knocking aside anyone in her way. When she reaches her target she deals magic damage and knocks them up. Other enemies knocked aside take the same damage.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 75,
      "stats": [
        {
          "type": "Damage",
          "value": "250 / 450 / 650"
        },
        {
          "type": "Stun Duration",
          "value": "2s / 2.5s / 3s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.65,
        "dps": 36,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "warmogsarmor",
      "guardianangel"
    ]
  },
  "Volibear": {
    "id": "106",
    "key": "Volibear",
    "name": "Volibear",
    "origin": [
      "Glacial"
    ],
    "class": [
      "Brawler"
    ],
    "cost": 3,
    "ability": {
      "name": "Thunder Claws",
      "description": "Volibear's attacks bounce between enemies.",
      "type": "Passive",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Chain Damage Multiplier",
          "value": "80% / 90% / 100%"
        },
        {
          "type": "Bounces",
          "value": "3 / 4 / 5"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 75,
        "attackSpeed": 0.55,
        "dps": 38,
        "range": 1
      },
      "defense": {
        "health": 700,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "rapidfirecannon",
      "redbuff",
      "hush"
    ]
  },
  "Warwick": {
    "id": "19",
    "key": "Warwick",
    "name": "Warwick",
    "origin": [
      "Wild"
    ],
    "class": [
      "Brawler"
    ],
    "cost": 1,
    "ability": {
      "name": "Infinite Duress",
      "description": "Warwick pounces onto the lowest health enemy, stunning and damaging them.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        {
          "type": "Damage",
          "value": "150 / 225 / 300"
        },
        {
          "type": "Hits",
          "value": "3"
        },
        {
          "type": "Duration",
          "value": "1.5s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 650,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "frozenheart",
      "cursedblade",
      "warmogsarmor"
    ]
  },
  "Yasuo": {
    "id": "157",
    "key": "Yasuo",
    "name": "Yasuo",
    "origin": [
      "Exile"
    ],
    "class": [
      "Blademaster"
    ],
    "cost": 5,
    "ability": {
      "name": "Steel Tempest",
      "description": "Yasuo stabs forward dealing damage. On third cast, Yasuo launches a tornado dealing damage and knocking up enemies in a line.",
      "type": "Active",
      "manaCost": 25,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "150 / 350 / 550"
        },
        {
          "type": "Range",
          "value": "2"
        },
        {
          "type": "Empowered Range",
          "value": "4 hexes"
        },
        {
          "type": "Knockup Duration",
          "value": "1.55s"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 75,
        "attackSpeed": 1,
        "dps": 65,
        "range": 1
      },
      "defense": {
        "health": 700,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "redbuff",
      "hush",
      "guardianangel"
    ]
  },
  "Zed": {
    "id": "238",
    "key": "Zed",
    "name": "Zed",
    "origin": [
      "Ninja"
    ],
    "class": [
      "Assassin"
    ],
    "cost": 2,
    "ability": {
      "name": "Razor Shuriken",
      "description": "Zed fires a shuriken in a line, damaging enemies it passes through.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        {
          "type": "Damage",
          "value": "200 / 350 / 500"
        },
        {
          "type": "Range",
          "value": "4"
        }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.7,
        "dps": 39,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "bloodthirster",
      "rapidfirecannon",
      "guardianangel"
    ]
  }
};

export const items = {

};

