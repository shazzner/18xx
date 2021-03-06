const game = {
  // Generic Game Info
  info: {
    title: "1834",
    subtitle: "Belgium & Luxembourg",
    designer: "Eddie Robbins",
    background: "gray",
    orientation: "horizontal",
    width: 150,
    color_10: "orange",
    titleX: 50,
    hexCoords: true,
    currency: "EUR"
  },

  // Extra Tokens
  tokens: ["Round"],

  // Need an IPO sheet
  ipo: true,

  bank: "$7,500",

  players: [
    {
      number: 3,
      certLimit: 13,
      capital: "$700"
    },
    {
      number: 4,
      certLimit: 10,
      capital: "$550"
    },
    {
      number: 5,
      certLimit: 8,
      capital: "$440"
    }  ],

  // Railway Companies
  companies: [
    {
      name: "Luxembourg Railway",
      abbrev: "LUX",
      tokens: ["Free", "$40", "$70", "$100"],
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
      name: "Ostend Railway",
      abbrev: "OST",
      tokens: ["Home", "$40", "$100"],
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
      name: "Antwerp Railway",
      abbrev: "ANT",
      tokens: ["Home", "$100"],
      color: "yellow",
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
      name: "Liege Railway",
      abbrev: "LIE",
      tokens: ["Home", "$40", "$100"],
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
      name: "Mons Railway",
      abbrev: "MON",
      tokens: ["Home", "$40", "$100"],
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
      quantity: 5,
      price: "$80",
      color: "yellow",
      info: [
        {
          color: "blue",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "3",
      quantity: 4,
      price: "$180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 5"
        }
      ]
    },
    {
      name: "4",
      quantity: 3,
      price: "$300",
      color: "blue",
      info: [
        {
          color: "red",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "5",
      quantity: 2,
      price: "$450",
      color: "brown",
      info: [
        {
          color: "gray",
          note: "Permanent"
        }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "$630",
      color: "red",
      info: [
        {
          color: "gray",
          note: "Permanent"
        }
      ]
    },
    {
      name: "2T",
      quantity: 5,
      price: "$750",
      color: "gray",
      description: "Runs between 2 cities, counts all towns, doubles one city",
      info: [
        {
          color: "gray",
          note: "Permanent"
        }
      ]
    }
  ],

  privates: [
    {
      name: "Ostend Port Society",
      price: "$20",
      revenue: "$5",
      description: "Increase runs to Ostend port(blue offboard) by $20. Can be sold in YELLOW and GREEN."
    },
    {
      name: "De Kempen Coal Company",
      price: "$40",
      revenue: "$10",
      description:
        "Owning corporation may place a track tile on a mountain hex at half cost. Can be sold in YELLOW and GREEN."
    },
    {
      name: "Burbach Foundry",
      price: "$70",
      revenue: "$15",
      description:
        "Owning corporation may upgrade an additional track tile, the Luxembourg city tile(hexes N11 and M10), from YELLOW to GREEN. THis is in addition to it's normal placement. Can be sold in GREEN phase."
    },
    {
      name: "MNBS SNCF Electrification",
      price: "$100",
      revenue: "$0",
      description:
        "MAY NOT BE SOLD TO A RAILROAD. At the start of the silver phase after all 4 trains have been removed, the player holding this private must place a 2T train on a railraod's charter. This costs nothing and can be used immediately."
    },
    {
      name: "Cockerill Locomotive Company",
      price: "$120",
      revenue: "$20",
      description:
        "Allows owning railroad to purchase a train at half price, this closes the private. Can be sold during the Yellow and the GREEN phase."
    },
    {
      name: "Albert Canal Corporation",
      price: "$150",
      revenue: "$25",
      description:
        "May be sold in the GREEN phase. No other ability. Closes in BROWN or if track connects Antwerp to Liege by any route or manner regardless of tokens."
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "5",
      tiles: "yellow",
      notes: "Some Private companies may be purchased"
    },
    {
      name: "3",
      limit: "3",
      number: "4",
      tiles: "green",
      notes: "All Private companies may be purchased"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "3",
      tiles: "green"
    },
    {
      name: "5",
      rust: "3",
      limit: "2",
      number: "2",
      tiles: "brown",
      notes: "Private companies are closed"
    },
    {
      name: "6",
      limit: "1",
      number: "2",
      rust: "4",
      tiles: "gray",
      notes: "2Tmay be purchased after first 6T is purchased"
    },
    {
      name: "2T",
      limit: "1",
      number: "5",
      tiles: "gray"
    }
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Shares in the market pay dividends to the corporation"
        },
        {
          color: "brown",
          icon: "exclamation",
          note:
            "No more than 50% of a corporation's shares may be in the market at any time"
        },
        {
          color: "red",
          icon: "times",
          note: "Shares cannot be sold during the first stock round"
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
      ordered: true,
      optional: ["Purchase private companies"]
    }
  ],

  stock: {
    type: "2D",
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { value: 60, label: 60, legend: 0, arrow: "down" },
        67,
        71,
        76,
        82,
        90,
        { value: 100, label: 100, par: true },
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
        { value: 53, label: 53, legend: 0, arrow: "down" },
        { value: 60, label: 60, legend: 0 },
        66,
        70,
        76,
        82,
        { value: 90, label: 90, par: true },
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
        { value: 300, label: 300, arrow: "up" }
      ],
      [
        { value: 46, label: 46, legend: 0, arrow: "down" },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        65,
        70,
        76,
        { value: 82, label: 82, par: true },
        90,
        100,
        111,
        125,
        140,
        155,
        170,
        185,
        { value: 200, label: 200, arrow: "up" }
      ],
      [
        { value: 39, label: 39, legend: 1, arrow: "down" },
        { value: 48, label: 48, legend: 0 },
        { value: 54, label: 54, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        66,
        71,
        { value: 76, label: 76, par: true },
        82,
        90,
        100,
        110,
        120,
        { value: 130, label: 130, arrow: "up" }
      ],
      [
        { value: 32, label: 32, legend: 1, arrow: "down" },
        { value: 41, label: 41, legend: 1 },
        { value: 48, label: 48, legend: 0 },
        { value: 55, label: 55, legend: 0 },
        62,
        67,
        { value: 71, label: 71, par: true },
        76,
        82,
        90,
        { value: 100, label: 100, arrow: "up" }
      ],
      [
        { value: 25, label: 25, legend: 2, arrow: "down" },
        { value: 34, label: 34, legend: 1 },
        { value: 42, label: 42, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 58, label: 58, legend: 0 },
        65,
        { value: 67, label: 67, par: true },
        71,
        75,
        { value: 80, label: 80, arrow: "up" }
      ],
      [
        { value: 18, label: 18, legend: 2, arrow: "down" },
        { value: 27, label: 27, legend: 2 },
        { value: 36, label: 36, legend: 1 },
        { value: 45, label: 45, legend: 1 },
        { value: 54, label: 54, legend: 0 },
        63,
        66,
        69,
        { value: 70, label: 70, arrow: "up" }
      ],
      [
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        65,
        { value: 68, label: 68, arrow: "up" }
      ]
    ],
    legend: [
      {
        color: "yellow",
        description:
          "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate"
      },
      {
        color: "orange",
        description: "Players may own more than 60% of this corporation",
        icon: "percentage"
      },
      {
        color: "brown",
        description:
          "Players may purchase any number of shares of this corporation in one stock action",
        icon: "money-bill-wave"
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
    "39": 1,
    "40": 1,
    "41": 2,
    "42": 2,
    "43": 2,
    "44": 1,
    "45": 2,
    "46": 2,
    "47": 1,
    "53": 2,
    "55": 1,
    "56": 1,
    "57": 4,
    "58": 2,
    "59": 2,
    "61": 2,
    "63": 3,
    "64": 1,
    "65": 1,
    "66": 1,
    "67": 1,
    "68": 1,
    "69": 1,
    "70": 1,
    "18340": 1,
    "18341": 1,
    "18342": 1,
    "18343": 1,

  },

  map: {
    hexes: [
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Ostend"
            },
            companies: [{ label: "OST", color: "blue" }]
          }
        ],
        hexes: ["B9"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Mons" }, companies: [{ label: "MON", color: "green" }] } ],
        hexes: ["G12"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Liege"
            },
            companies: [{ label: "LIE", color: "red" }]
          }
        ],
        hexes: ["K6"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Brussels"
            },
          }
        ],
        hexes: ["G8"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Arlon"
            },
          }
        ],
        hexes: ["L13"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Diekirch"
            },
          }
        ],
        hexes: ["M10"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "OO",
            angle: 210,
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 120,
            percent: 0.5,
            name: {
              name: "Bruges",
              reverse: true
            }
          },
          {
            angle: -60,
            percent: 0.5,
          }
        ],
        hexes: ["C8"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "OO",
            angle: 210,
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 120,
            percent: 0.5,
            name: {
              name: "Hasselt",
              reverse: true
            }
          },
          {
            angle: -60,
            percent: 0.5,
          }
        ],
        hexes: ["I4"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "OO",
            angle: 210,
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 120,
            percent: 0.5,
            name: {
              name: "Namur",
              reverse: true
            }
          },
          {
            angle: -60,
            percent: 0.5,
          }
        ],
        hexes: ["J9"]
      },
      {
        color: "plain",
        labels: [
          {
            angle: 150,
            percent: 0.7,
            label: "B"
          }
        ],
        cities: [
          {
            name: {
              name: "Luxembourge",
              reverse: true,
              rotation: -90
            },
            companies: [{ label: "LUX", color: "purple" }]
          }
        ],
        hexes: ["N11"]
      },
      {
        color: "yellow",
        labels: [
          {
            angle: 150,
            percent: 0.7,
            label: "B"
          }
        ],
        cities: [
          {
            name: {
              name: "Ghent",
              reverse: true,
              rotation: -90
            },
          }
        ],
        values: [
          {
            value: 20,
            angle: 90,
            percent: 0.67
          }
        ],
        track: [
          {
            side: 1
          }
        ],
        hexes: ["E8"]
      },
      {
        color: "yellow",
        labels: [
          {
            angle: 150,
            percent: 0.7,
            label: "B"
          }
        ],
        cities: [
          {
            name: {
              name: "Antwerp",
              rotation: 40
            },
            companies: [ { label: "ANT", color: "yellow" } ]
          }
        ],
        values: [ { value: "20", angle: 90, percent: 0.67 }, { value: "30", angle: 20, percent: 0.67, color: "green" } ],
        track: [ { side: 6 } ],
        hexes: ["F5"]
      },
      {
        color: "plain",
        centerTowns: [
          {
          }
        ],
        hexes: ["I6", "N9"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port",
            bgColor: "water"
          },
          revenues: [
            {
              cost: "10",
              color: "yellow"
            },
            {
              cost: "30",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 6
          }
        ],
        icons: [{ type: "port", percent: 0.5 }],
        hexes: ["A8"]
      },
      {
        color: "water",
        icons: [{ type: "port", percent: 0.5 }],
        offBoardRevenue: {
          name: {
            name: "Port",
            bgColor: "water"
          },
          revenues: [
            {
              cost: "10",
              color: "yellow"
            },
            {
              cost: "30",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 5
          }
        ],
        hexes: ["A10"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Lille"
          },
          reverse: true,
          revenues: [
            {
              cost: "40",
              color: "yellow"
            },
            {
              cost: "50",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [{ side: 3 }, { side: 4 }, { side: 5 }],
        hexes: ["D13"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Tilburg"
          },
          revenues: [
            {
              cost: "10",
              color: "yellow"
            },
            {
              cost: "30",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [{ side: 1 }],
        hexes: ["H1"]
      },
      {
        color: "offboard",
        divides: [{ side: 3.25 }],
        offBoardRevenue: {
          x: -30,
          y: 10,
          name: {
            name: "Valenciennes"
          },
          reverse: true,
          revenues: [ { cost: "20", color: "yellow" }, { cost: "30", color: "brown" } ]
        },
        track: [
          {
            type: "sharp",
            side: 4
          }
        ],
        offBoardTrack: [{ side: 3 }],
        hexes: ["G14"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Maastricht"
          },
          revenues: [
            {
              cost: "30",
              color: "yellow"
            },
            {
              cost: "40",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [{ side: 1 }, { side: 2 }],
        hexes: ["K2"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Aachen"
          },
          revenues: [
            {
              cost: "20",
              color: "yellow"
            },
            {
              cost: "50",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [{ side: 1 }],
        hexes: ["L3"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Aachen"
          },
          revenues: [
            {
              cost: "20",
              color: "yellow"
            },
            {
              cost: "50",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [{ side: 2 }],
        hexes: ["M4"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Metz"
          },
          reverse: true,
          revenues: [
            {
              cost: "10",
              color: "yellow"
            },
            {
              cost: "40",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [{ side: 3 }, { side: 4 }, { side: 5 }],
        hexes: ["M14"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Koln"
          },
          revenues: [
            {
              cost: "30",
              color: "yellow"
            },
            {
              cost: "50",
              color: "brown"
            }
          ]
        },
        offBoardTrack: [{ side: 1 }, { side: 2 }],
        hexes: ["O8"]
      },
      {
        color: "gray",
        track: [
          {
            type: "sharp",
            side: 4
          }
        ],
        hexes: ["K14"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 90,
            percent: -0.4
          },
          {
            angle: 270,
            percent: -0.4
          }
        ],
        hexes: ["G6"]
      },
      {
        color: "plain",
        water: {
          cost: "$40",
        },
        hexes: ["F7", "K4", "K8"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            percent: -0.4,
          }
        ],
        water: {
          percent: 0.5,
          cost: "30",
          size: "small"
        },
        hexes: ["D9", "I10"]
      },
      {
        color: "plain",
        water: {
          cost: "$20",
        },
        hexes: ["D11", "H13"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 90,
            percent: -0.4
          },
          {
            angle: 270,
            percent: -0.4
          }
        ],
        water: {
          cost: "$20",
          percent: 0.6
        },
        hexes: ["H11"]
      },
      {
        color: "plain",
        mountain: {cost: "$120"},
        hexes: ["M8"]
      },
      {
        color: "plain",
        mountain: {cost: "$100"},
        hexes: ["L9"]
      },
      {
        color: "plain",
        mountain: {cost: "$80"},
        hexes: ["L7"]
      },
      {
        color: "plain",
        mountain: {
          cost: "$60"
        },
        hexes: ["K10", "L11"]
      },
      {
        color: "plain",
        mountain: {
          cost: "$50"
        },
        hexes: ["K12"]
      },
      {
        color: "plain",
        mountain: {
          cost: "$40"
        },
        hexes: ["L5"]
      },
      {
        color: "plain",
        hexes: [
          "B7",
          "B11",
          "C6",
          "C10",
          "C12",
          "D7",
          "E6",
          "E10",
          "F9",
          "F11",
          "F13",
          "G4",
          "G10",
          "H3",
          "H5",
          "H7",
          "H9",
          "I2",
          "I8",
          "I12",
          "J3",
          "J5",
          "J7",
          "J11",
          "J13",
          "M12",
          "N13",
          "O10",
          "O12",
        ]
      }
    ]
  }
};

export default game;
