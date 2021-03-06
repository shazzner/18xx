const game = {
  // Generic Game Info
  info: {
    title: "1890",
    designer: "Shin-ichi Takasaki",
    background: "water",
    width: 150,
    rotation: 90,
    color_10: "orange",
    titleY: 830,
    titleX: 148,
    currency: "JPY"
  },

  // Tokens
  tokens: ["Round"],

  // Need an IPO sheet
  ipo: true,

  bank: "¥12,000",

  players: [
    {
      number: 2,
      certLimit: 26,
      capital: "¥1260"
    },
    {
      number: 3,
      certLimit: 18,
      capital: "¥840"
    },
    {
      number: 4,
      certLimit: 15,
      capital: "¥630"
    },
    {
      number: 5,
      certLimit: 13,
      capital: "¥504"
    },
    {
      number: 6,
      certLimit: 11,
      capital: "¥420"
    },
    {
      number: 7,
      certLimit: 10,
      capital: "¥360"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Japan Railways",
      abbrev: "JR",
      tokens: ["Ôsaka Kita", "Kyôto", "Kôbe", "Nara", "¥40", "¥100"],
      color: "purple",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Ôsaka Municipal Subway",
      abbrev: "ÔM",
      tokens: ["Ôsaka Nishi"],
      color: "orange",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Nankai Electric Railway",
      abbrev: "NE",
      tokens: ["Ôsaka Minami", "¥40", "¥100"],
      color: "cyan",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Sanyô Electric Railway",
      abbrev: "SE",
      tokens: ["Akashi", "¥40"],
      color: "red",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Kinki Nippon Railways",
      abbrev: "KN",
      tokens: ["Ôsaka Higashi", "Kyôto", "Nara", "Kashiwara", "¥40", "¥100"],
      color: "pink",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Keihan Electric Railways",
      abbrev: "KE",
      tokens: ["Hirakata", "¥40", "¥100"],
      color: "blue",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Hankyû Railways",
      abbrev: "H",
      tokens: ["Toyonaka", "¥40", "¥100", "¥100"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Hanshin Electric Railroad",
      abbrev: "HE",
      tokens: ["Nishinomiya", "¥40", "¥100"],
      color: "green",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 9,
      price: "$80",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "2-2",
      quantity: 3,
      price: "$80",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "3",
      quantity: 5,
      price: "$180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "3-3",
      quantity: 2,
      price: "$180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "4",
      quantity: 4,
      price: "$300",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by D"
        }
      ]
    },
    {
      name: "5",
      quantity: 3,
      price: "$450",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "$630",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "D",
      quantity: 6,
      price: "$1100",
      color: "brown",
      description: "Cost $800 when trading in a 4T, 5T or 6T",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    }
  ],

  privates: [
    {
      name: "Arima Railway",
      price: "¥20",
      revenue: "¥5",
      description: ""
    },
    {
      name: "Kobe Tramway",
      price: "¥40",
      revenue: "¥10",
      description: ""
    },
    {
      name: "Hankai Tramway",
      price: "¥70",
      revenue: "¥15",
      description: ""
    },
    {
      name: "Hanshin Tramway",
      price: "¥110",
      revenue: "¥20",
      description: ""
    },
    {
      name: "Kaishin Railway",
      price: "¥160",
      revenue: "¥25",
      description: ""
    },
    {
      name: "Osaka Municipal Eletric Railway",
      price: "¥220",
      revenue: "¥40",
      description: ""
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "6",
      tiles: "yellow"
    },
    {
      name: "3",
      limit: "4",
      number: "5",
      tiles: "green",
      notes: "Private companies may be purchased"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Private companies are closed"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "D Trains may be purchased"
    },
    {
      name: "D",
      limit: "2",
      number: "6",
      rust: "4",
      tiles: "brown"
    }
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Shares in the market pay dividends to the company"
        },
        {
          color: "brown",
          icon: "exclamation",
          note: "No more than 50% of a company may be in the market"
        },
        {
          color: "red",
          icon: "times",
          note: "No stock sales during first stock round"
        }
      ]
    }
  ],

  rounds: [
    {
      name: "OR3",
      color: "brown"
    },
    {
      name: "OR2",
      color: "green"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    }
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares",
        "Buy one share",
        "Sell any number of shares"
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Purchase a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains"
      ],
      ordered: true
    }
  ],

  stock: {
    type: "2D",
    par: {
      values: [100, 90, 82, 76, 71, 67],
      cells: [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6]]
    },
    market: [
      [
        60,
        67,
        71,
        76,
        82,
        90,
        100,
        112,
        126,
        142,
        160,
        180,
        200,
        225,
        250,
        275,
        300,
        325,
        350
      ],
      [
        53,
        60,
        66,
        70,
        76,
        82,
        90,
        100,
        112,
        126,
        142,
        160,
        180,
        200,
        220,
        240,
        260,
        280,
        300
      ],
      [46, 55, 60, 65, 70, 76, 82, 90, 100, 111, 125, 140, 155, 170, 185, 200],
      [39, 48, 54, 60, 66, 71, 76, 82, 90, 100, 110, 120, 130],
      [32, 41, 48, 55, 62, 67, 71, 76, 82, 90, 100],
      [25, 34, 42, 50, 58, 65, 67, 71, 75, 80],
      [18, 27, 36, 45, 54, 63, 67, 69, 70],
      [10, 12, 30, 40, 50, 60, 67, 68],
      [null, 10, 20, 30, 40, 50, 60],
      [null, null, 10, 20, 30, 40, 50],
      [null, null, null, 10, 20, 30, 40]
    ],
    limits: [
      {
        color: "yellow",
        description: "Certificates no longer count towards the share limit",
        value: 60
      },
      {
        color: "orange",
        description: "Players may own more than 60% of the company",
        value: 45
      },
      {
        color: "brown",
        description: "Multiple certificates may be bought in the same turn",
        value: 30
      }
    ]
  },

  tiles: {
    "1": 1,
    "2": 1,
    "3": 2,
    "4": 2,
    "7": 4,
    "8": 8,
    "9": 7,
    "55": 1,
    "56": 1,
    "57": 4,
    "58": 2,
    "69": 1,
    "14": 3,
    "15": 2,
    "16": 1,
    "18": 1,
    "19": 1,
    "20": 1,
    "23": 3,
    "24": 3,
    "25": 1,
    "26": 1,
    "27": 1,
    "28": 1,
    "29": 1,
    "53": 2,
    "54": 1,
    "59": 2,
    "39": 1,
    "40": 1,
    "41": 2,
    "42": 2,
    "43": 2,
    "44": 1,
    "45": 2,
    "46": 2,
    "47": 1,
    "61": 2,
    "62": 1,
    "63": 3,
    "64": 1,
    "65": 1,
    "66": 1,
    "67": 1,
    "68": 1,
    "70": 1
  },

  map: {
    print: "landscape",
    hexes: [
      {
        color: "plain",
        hexes: [
          "E2",
          "D11",
          "D13",
          "I14",
          "J13",
          "K12",
          "K14",
          "L11",
          "L13",
          "L17"
        ]
      },
      {
        color: "plain",
        mountain: {
          size: "medium",
          cost: "¥120"
        },
        hexes: [
          "B9",
          "B11",
          "B13",
          "C4",
          "C6",
          "C10",
          "C12",
          "C14",
          "E4",
          "E6",
          "G18",
          "H17",
          "I16",
          "J17",
          "K16",
          "L15",
          "M10",
          "M12"
        ]
      },
      {
        color: "plain",
        water: {
          size: "small",
          cost: "¥80"
        },
        hexes: ["C8", "A16", "B15", "F19"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "40"
            }
          ]
        },
        offBoardTrack: [{ side: 6 }],
        hexes: ["A20"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 40,
            angle: 140,
            percent: 0.7
          }
        ],
        water: {
          cost: "80",
          size: "tiny",
          border: true,
          angle: 180,
          percent: 0.8
        },
        cities: [
          {
            angle: 240,
            percent: 0.5
          },
          {
            angle: 330,
            percent: 0.55
          },
          {
            angle: 60,
            percent: 0.5,
            name: {
              name: "Kyoto"
            }
          }
        ],
        track: [
          {
            side: 4,
            type: "sharpStopRev"
          },
          {
            side: 5,
            type: "stop"
          },
          {
            side: 6,
            type: "sharpStop"
          }
        ],
        hexes: ["B17"]
      },
      {
        color: "yellow",
        companies: [
          {
            angle: 72,
            percent: 1.22,
            label: "KR",
            right: 22
          }
        ],
        track: [{ side: 6, type: "sharp" }],
        hexes: ["B19"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "40"
            }
          ]
        },
        offBoardTrack: [{ side: 1 }],
        hexes: ["B21"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "10"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            }
          ]
        },
        offBoardTrack: [{ side: 4 }, { side: 5 }],
        hexes: ["A14"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "10"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            }
          ]
        },
        offBoardTrack: [{ side: 4 }, { side: 5 }, { side: 6 }],
        hexes: ["B7"]
      },
      {
        color: "plain",
        water: {
          cost: "¥80",
          size: "small"
        },
        borders: [
          {
            color: "water",
            side: 4
          },
          {
            color: "water",
            side: 5
          }
        ],
        hexes: ["C16"]
      },
      {
        color: "plain",
        water: {
          cost: "¥80",
          size: "small",
          percent: 0.5
        },
        cities: [
          {
            angle: 180,
            percent: 0.3,
            name: {
              name: "Fishimi"
            }
          }
        ],
        borders: [
          {
            color: "water",
            side: 1
          }
        ],
        hexes: ["C18"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Miki"
            }
          }
        ],
        hexes: ["D3"]
      },
      {
        color: "gray",
        cities: [
          {
            name: {
              name: "Tanigami"
            }
          }
        ],
        track: [{ side: 1 }, { side: 4 }, { side: 6 }],
        values: [{ value: 20, angle: 330, percent: 0.667 }],
        hexes: ["D5"]
      },
      {
        color: "plain",
        companies: [
          {
            label: "AR",
            angle: 180,
            percent: 0.35
          }
        ],
        centerTowns: [
          {
            percent: 0.4,
            name: {
              name: "Arima"
            }
          }
        ],
        hexes: ["D7"]
      },
      {
        color: "plain",
        cities: [
          {
            angle: 180,
            percent: 0.3,
            name: { name: "Takarazuka" }
          }
        ],
        water: {
          percent: 0.5,
          cost: "¥80",
          size: "small"
        },
        hexes: ["D9"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Takatsuki"
            }
          }
        ],
        borders: [{ side: 4, color: "water" }, { side: 5, color: "water" }],
        hexes: ["D15"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "water" },
          { side: 2, color: "water" },
          { side: 4, color: "water" }
        ],
        hexes: ["D17"]
      },
      {
        color: "gray",
        borders: [{ side: 1, color: "water" }],
        values: [
          {
            value: 20,
            angle: 195,
            percent: 0.667
          }
        ],
        track: [{ side: 2, type: "gentleStop" }, { side: 6, type: "gentle" }],
        cities: [
          {
            angle: 270,
            percent: 0.5,
            name: { name: "Uji", reverse: true }
          }
        ],
        hexes: ["D19"]
      },
      {
        color: "plain",
        mountain: {
          size: "medium",
          cost: "¥120"
        },
        borders: [{ side: 4, color: "water" }],
        hexes: ["E8"]
      },
      {
        color: "plain",
        borders: [{ side: 1, color: "water" }],
        cities: [
          {
            name: { name: "Itami" }
          }
        ],
        hexes: ["E10"]
      },
      {
        color: "plain",
        cities: [
          {
            companies: [
              {
                color: "brown",
                label: "H"
              }
            ],
            name: { name: "Toyonaka" }
          }
        ],
        hexes: ["E12"]
      },
      {
        color: "yellow",
        cities: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Ibaraki",
              offset: 60
            }
          },
          {
            angle: 270,
            percent: 0.5,
            name: {
              name: "Settsu",
              reverse: true,
              offset: 40
            }
          }
        ],
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        borders: [{ side: 4, color: "water" }, { side: 5, color: "water" }],
        hexes: ["E14"]
      },
      {
        color: "yellow",
        borders: [
          { side: 1, color: "water" },
          { side: 2, color: "water" },
          { side: 4, color: "water" }
        ],
        track: [{ side: 3, type: "straight" }],
        cities: [
          {
            name: {
              name: "Hirakata",
              offset: 33.33
            },
            companies: [
              {
                label: "KE",
                color: "blue"
              }
            ]
          }
        ],
        values: [
          {
            value: 20,
            angle: 300,
            percent: 0.667
          }
        ],
        hexes: ["E16"]
      },
      {
        color: "plain",
        water: {
          size: "small",
          cost: "¥80"
        },
        borders: [{ side: 1, color: "water" }, { side: 6, color: "water" }],
        hexes: ["E18"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "40"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "50"
            },
            {
              color: "black",
              textColor: "white",
              cost: "70"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 3
          },
          {
            side: 4
          }
        ],
        hexes: ["F1"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Akashi"
            },
            companies: [
              {
                color: "red",
                label: "SE"
              }
            ]
          }
        ],
        hexes: ["F3"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 30,
            angle: 210,
            percent: 0.667
          }
        ],
        cities: [
          {
            name: { name: "Kôbe", reverse: true },
            companies: [
              {
                label: "JR",
                color: "purple"
              }
            ]
          }
        ],
        track: [{ side: 1 }, { side: 2 }, { side: 4 }],
        companies: [
          {
            label: "KT",
            angle: 60,
            percent: 0.75
          }
        ],
        hexes: ["F5"]
      },
      {
        color: "plain",
        cities: [
          {
            name: { name: "Ashiya" }
          }
        ],
        hexes: ["F7"]
      },
      {
        color: "plain",
        cities: [
          {
            angle: 180,
            percent: 0.3,
            companies: [
              {
                label: "HE",
                color: "green"
              }
            ],
            name: { name: "Nishinomiya" }
          }
        ],
        water: {
          percent: 0.5,
          cost: "¥80",
          size: "small"
        },
        hexes: ["F9"]
      },
      {
        color: "plain",
        labels: [
          {
            label: "Y",
            percent: 0.667
          }
        ],
        cities: [
          {
            name: { name: "Amagasaki" }
          }
        ],
        hexes: ["F11"]
      },
      {
        color: "plain",
        cities: [
          {
            name: { name: "Suita" }
          }
        ],
        borders: [{ side: 4, color: "water" }, { side: 5, color: "water" }],
        hexes: ["F13"]
      },
      {
        color: "plain",
        cities: [
          {
            name: { name: "Neyagawa" }
          }
        ],
        borders: [{ side: 1, color: "water" }, { side: 2, color: "water" }],
        hexes: ["F15"]
      },
      {
        color: "plain",
        mountain: {
          size: "medium",
          cost: "¥120"
        },
        borders: [{ side: 3, color: "water" }],
        hexes: ["F17"]
      },
      {
        color: "yellow",
        cities: [
          {
            size: 2,
            companies: [
              {
                label: "JR",
                color: "purple"
              }
            ],
            name: { reverse: true, name: "Ôsaka Kita" }
          }
        ],
        track: [{ side: 2 }, { side: 3 }],
        values: [
          {
            value: 40,
            angle: 180,
            percent: 0.75
          }
        ],
        water: [
          {
            size: "tiny",
            border: true,
            cost: "¥80",
            angle: 60,
            percent: 0.85
          }
        ],
        hexes: ["G12"]
      },
      {
        color: "yellow",
        borders: [{ side: 2, color: "water" }],
        cities: [
          {
            angle: 90,
            percent: 0.5,
            name: { name: "Moriguchi", reverse: true }
          },
          { angle: 270, percent: 0.5, name: { name: "Kadoma" } }
        ],
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        hexes: ["G14"]
      },
      {
        color: "plain",
        mountain: {
          size: "medium",
          cost: "¥80",
          angle: 180,
          percent: 0.667
        },
        centerTowns: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Daitô",
              reverse: true
            }
          },
          {
            angle: 270,
            percent: 0.5,
            name: {
              name: "Shijonawate"
            }
          }
        ],
        hexes: ["G16"]
      },
      {
        color: "gray",
        track: [{ type: "gentle", side: 6 }],
        hexes: ["G20"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 30,
            angle: 180,
            percent: 0.75
          }
        ],
        cities: [
          {
            name: { name: "Ôsaka Nishi", reverse: true },
            companies: [
              {
                color: "orange",
                label: "ÔM"
              }
            ]
          }
        ],
        track: [{ side: 3 }, { side: 4 }],
        water: {
          size: "tiny",
          border: true,
          cost: "¥80",
          angle: 60,
          percent: 0.85
        },
        hexes: ["H11"]
      },
      {
        color: "yellow",
        cities: [
          {
            angle: 180,
            percent: 0.5
          },
          {
            angle: 300,
            percent: 0.5,
            name: { name: "Ôsaka Higashi", reverse: true, offset: 40 }
          }
        ],
        values: [
          {
            angle: 90,
            percent: 0.4,
            value: 40
          }
        ],
        track: [
          { type: "sharpStopRev", side: 3 },
          { type: "sharpStop", side: 4 }
        ],
        water: {
          size: "tiny",
          border: true,
          cost: "¥80",
          angle: 60,
          percent: 0.85
        },
        companies: [
          {
            label: "OR",
            left: 50,
            angle: 130,
            percent: 0.8
          }
        ],
        hexes: ["H13"]
      },
      {
        color: "plain",
        cities: [
          {
            name: { name: "Higashi Ôsaka" }
          }
        ],
        hexes: ["H15"]
      },
      {
        color: "yellow",
        track: [{ side: 1, type: "gentle" }, { type: "stop", side: 6 }],
        values: [
          {
            value: 40,
            angle: 150,
            percent: 0.7
          }
        ],
        water: {
          size: "tiny",
          cost: "¥80",
          border: "true",
          angle: 300,
          percent: 0.8
        },
        cities: [
          {
            angle: 210,
            percent: 0.5,
            companies: [
              {
                color: "cyan",
                label: "N"
              }
            ]
          },
          {
            angle: 30,
            percent: 0.5,
            name: { name: "Nara", offset: 66.67 },
            companies: [
              {
                color: "purple",
                label: "K"
              }
            ]
          }
        ],
        hexes: ["H19"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 40,
            angle: 180,
            percent: 0.75
          }
        ],
        cities: [
          {
            name: { name: "Ôsaka Minami" },
            companies: [
              {
                label: "Ô",
                color: "green"
              }
            ]
          }
        ],
        track: [{ side: 5 }, { side: 6 }],
        labels: [
          {
            label: "Y",
            angle: 300,
            percent: 0.8
          }
        ],
        water: {
          cost: "¥80",
          size: "tiny",
          border: true,
          angle: 60,
          percent: 0.85
        },
        hexes: ["I12"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: { name: "Kôriyama" }
          }
        ],
        hexes: ["I18"]
      },
      {
        color: "yellow",
        companies: [
          {
            label: "HR",
            angle: 180,
            percent: 0.75,
            right: 60
          }
        ],
        cities: [
          {
            angle: 90,
            percent: 0.5,
            name: { name: "Sakai", reverse: true }
          },
          { angle: 270, percent: 0.5 }
        ],
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        hexes: ["J11"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 20,
            percent: 0.667
          }
        ],
        cities: [
          {
            name: { name: "Kashiwara" },
            companies: [
              {
                color: "black",
                label: "K"
              }
            ]
          }
        ],
        track: [{ side: 1 }, { side: 4 }],
        hexes: ["J15"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: { name: "Tenri" }
          }
        ],
        hexes: ["J19"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: { name: "Izumiôtsu" }
          }
        ],
        hexes: ["K10"]
      },
      {
        color: "plain",
        cities: [
          {
            name: { name: "Sakurai" }
          }
        ],
        hexes: ["K18"]
      },
      {
        color: "offboard",
        offBoardTrack: [
          {
            side: 1
          },
          {
            side: 2
          }
        ],
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "40"
            }
          ]
        },
        hexes: ["K20"]
      },
      {
        color: "plain",
        cities: [
          {
            name: { name: "Kishiwada" }
          }
        ],
        hexes: ["L9"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 4 }],
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "0"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "0"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            }
          ]
        },
        hexes: ["M6"]
      },
      {
        color: "plain",
        cities: [
          {
            name: { name: "Izumisano" }
          }
        ],
        hexes: ["M8"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 1 }, { side: 2 }],
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            }
          ]
        },
        hexes: ["M14"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 3 }],
        offBoardRevenue: {
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "40"
            }
          ]
        },
        hexes: ["N7"]
      }
    ]
  }
};

export default game;
