const game = {
  // Generic Game Info
  info: {
    title: "Fourth Age",
    subtitle: "Railroading in Middle Earth",
    designer: "Rick Dutton",
    background: "purple",
    width: 150,
    color_10: "orange",
    titleX: 54,
    titleY: 1440,
    titleSize: 100,
    orientation: "horizontal",
    hexCoords: true,
    currency: "XAU"
  },

  // Extra Tokens
  tokens: ["Round", "+20", "+20"],

  // Need an IPO sheet
  ipo: true,

  bank: "$12,000",

  players: [
    {
      number: 2,
      certLimit: 28,
      capital: "$1050"
    },
    {
      number: 3,
      certLimit: 20,
      capital: "$700"
    },
    {
      number: 4,
      certLimit: 16,
      capital: "$525"
    },
    {
      number: 5,
      certLimit: 13,
      capital: "$420"
    },
    {
      number: 6,
      certLimit: 11,
      capital: "$350"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Bree and Points South",
      abbrev: "BPS",
      tokens: ["Free", "40g", "100g", "100g"],
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
      name: "Shire and Westlands",
      abbrev: "SWR",
      tokens: ["Free", "$40"],
      color: "water",
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
      name: "Rivendell and Grey Havens",
      abbrev: "RGH",
      tokens: ["Free", "$40", "Bonus"],
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
      name: "Dwarvish Mountain Express",
      abbrev: "DMH",
      tokens: ["Free", "$40", "$100"],
      color: "mountain",
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
      name: "Elvish",
      abbrev: "E",
      tokens: ["Free", "$40", "$100"],
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
      name: "Laketown and Lonely Mountain",
      abbrev: "LLM",
      tokens: ["Free", "$40", "$100"],
      color: "black",
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
      name: "Minas Tirith Railway",
      abbrev: "MTR",
      tokens: ["Free", "$40", "$100", "Bonus"],
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
      name: "Orcish",
      abbrev: "O",
      tokens: ["Free", "$40", "$100"],
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
    },
    {
      name: "Southern Excursion Railway",
      abbrev: "SER",
      tokens: ["Free", "$40"],
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
      name: "Far Harad Railway",
      abbrev: "FHR",
      tokens: ["Free", "$40", "Southlands"],
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
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 4,
      price: "$100",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "2+2",
      quantity: 2,
      price: "$125",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4+4"
        }
      ]
    },
    {
      name: "3",
      quantity: 3,
      price: "$200",
      color: "green",
      info: [
        {
          color: "gray",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "3+3",
      quantity: 3,
      price: "$250",
      color: "green",
      info: [
        {
          color: "gray",
          note: "Rusted by 7"
        }
      ]
    },
    {
      name: "4",
      quantity: 3,
      price: "$300",
      color: "green",
      info: [
        {
          color: "gray",
          note: "Rusted by 8"
        }
      ]
    },
    {
      name: "4+4",
      quantity: 2,
      price: "$400",
      color: "green",
      info: [
        {
          color: "gray",
          note: "Rusted by D"
        }
      ]
    },
    {
      name: "5",
      quantity: 2,
      price: "$550",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "5+5",
      quantity: 2,
      price: "$650",
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
      quantity: 1,
      price: "$750",
      color: "gray",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "7",
      quantity: 1,
      price: "$800",
      color: "gray",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "8",
      quantity: 1,
      price: "$900",
      color: "gray",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "9",
      quantity: 1,
      price: "$1000",
      color: "gray",
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
      price: "$1200",
      color: "gray",
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
      name: "The Hobbiton Teakettle",
      price: "$20",
      revenue: "$5",
      description: ""
    },
    {
      name: "The Great River Bridge Company",
      price: "$50",
      revenue: "$10",
      description: "Owning railroad pays nothing for one tile lay across the Anduin; may be bought in during Phase 2 for up to face value."
    },
    {
      name: "Mountain Guides, Inc",
      price: "$80",
      revenue: "$15",
      description: "Owning railroad pays nothing for one tile lay in a mountain hex; may be bought in during Phase 2 for up to face value."
    },
    {
      name: "Trollheim",
      price: "$120",
      revenue: "$20",
      description: "Owning railroad may play a permanent +20 marker in any city or town. Bonus applies only to the owning railroad."
    },
    {
      name: "Moria Mining Company",
      price: "$140",
      description: "This is the President's certificate of the Moria Mining Company. The purchaser sets the par value of the railway. Unlike other companies, this company may operate with just 20% sold. It may not be purchased by another public company."
    },
    {
      name: "Lorien Border Railway",
      price: "$170",
      revenue: "$25",
      description: "Comes with a 10% share of the Elvish."
    }
  ],

  phases: [
    {
      phase: "2",
      train: "2 / 2+2",
      limit: "4",
      number: "4 / 2",
      tiles: "yellow",
      notes: "Bridge and Mountain private companies may be purchased"
    },
    {
      phase: "3",
      train: "3 / 3+3",
      limit: "4",
      number: "3 / 3",
      tiles: "green",
      notes: "Other private companies may be purchased"
    },
    {
      phase: "4",
      rust: "2",
      train: "4 / 4+4",
      limit: "3",
      number: "3 / 2",
      tiles: "green"
    },
    {
      phase: "5",
      train: "5 / 5+5",
      limit: "2",
      number: "2 / 2",
      tiles: "brown"
    },
    {
      phase: "6",
      train: "6",
      limit: "2",
      number: "1",
      rust: "3",
      tiles: "gray"
    },
    {
      phase: "7",
      train: "7",
      limit: "2",
      number: "1",
      rust: "3+3",
      tiles: "gray"
    },
    {
      phase: "8",
      train: "8",
      limit: "2",
      number: "1",
      rust: "4",
      tiles: "gray"
    },
    {
      phase: "9",
      train: "9",
      limit: "2",
      number: "2",
      tiles: "gray"
    },
    {
      phase: "D",
      train: "D",
      limit: "2",
      number: "∞",
      rust: "4+4",
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
        "Buy one share",
        "Sell any number of shares"
      ],
      ordered: false
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
    paginated: true,
    orientation: "landscape",
    cell: {
      width: 0.75,
      height: 0.85,
    },
    type: "2D",
    par: {
      width: "3in",
      values: [100,90,82,76,72,68]
    },
    movement: {
      up: ["Sold out"],
      down: ["Every unprotected share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { value: 64, label: 64, legend: 0, arrow: "down" },
        68,72,76,82,90,
        { value: 100, label: 100, par: true },
        110,120,140,160,180,200,225,250,275,300,325,350,375,400 ],
      [
        { value: 60, label: 60, legend: 0, arrow: "down" },
        { value: 64, label: 64, legend: 0 },
        68,72,76,82,
        { value: 90, label: 90, par: true },
        100,110,120,140,160,180,200,225,250,
        { value: 275, label: 275, borders: [{color: "red", side: "bottom" }]},
        { value: 300, label: 300, borders: [{color: "red", side: "bottom" }]},
        { value: 325, label: 325, borders: [{color: "red", side: "bottom" }]},
        { value: 350, label: 350, borders: [{color: "red", side: "bottom" }]},
        { value: 375, label: 375, arrow: "up", borders: [{color: "red", side: "bottom"}]} ],
      [
        { value: 55, label: 55, legend: 0, arrow: "down" },
        { value: 60, label: 60, legend: 0 },
        { value: 64, label: 64, legend: 0 },
        68,72,76,
        { value: 82, label: 82, par: true },
        90,100,110,120,140,160,
        { value: 180, label: 180, borders: [{color: "red", side: "bottom" }]},
        { value: 200, label: 200, borders: [{color: "red", side: "bottom" }]},
        { value: 225, label: 225, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        250,275,300,325,
        { value: 350, label: 350, arrow: "up"} ],
      [
        { value: 50, label: 50, legend: 1, arrow: "down" },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        { value: 64, label: 64, legend: 0 },
        68,72,
        { value: 76, label: 76, par: true },
        82,90,100,110,
        { value: 120, label: 120, borders: [{color: "red", side: "bottom" }]},
        { value: 140, label: 140, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        160,180,200,225,250,275,300,
        { value: 325, label: 325, arrow: "up"} ],
      [
        { value: 40, label: 40, legend: 2, arrow: "down" },
        { value: 50, label: 50, legend: 1 },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        64,68,
        { value: 72, label: 72, par: true },
        76,82,90,
        { value: 100, label: 100, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        110,120,140,160,
        { value: 180, label: 180, arrow: "up"} ],
      [
        { value: 30, label: 30, legend: 2, arrow: "down" },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 1 },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        64,
        { value: 68, label: 68, par: true },
        72,76,
        { value: 82, label: 82, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        90,100,
        { value: 110, label: 110, arrow: "up"} ],
      [
        { value: 20, label: 20, legend: 2, arrow: "down" },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 1 },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        64,68,
        { value: 72, label: 72, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        76,
        { value: 82, label: 82, arrow: "up"} ],
      [
        { value: 10, label: 10, legend: 2, arrow: "down" },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        { value: 64, label: 64, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        68,
        { value: 72, label: 72, arrow: "up"} ],
      [
        { color: "black" },
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 55, label: 55, legend: 0, arrow: "up", borders: [
          {color: "red", side: "right" }]},
        60,
        { value: 64, label: 64, arrow: "up" }],
      [
        { color: "black" },
        { color: "black" },
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0, arrow: "up" } ],
      [
        { label: "Closed", verticalAlign: "bottom", color: "black" },
        { color: "black" },
        { color: "black" },
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1, arrow: "up" } ]
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
        "Players may purchase any number of shares of this corporation from the open market in one stock action",
        icon: "money-bill-wave"
      }
    ]
  },

  tiles: {
    "1": 1,
    "2": 1,
    "3": 3,
    "4": 6,
    "5": 2,
    "6": 2,
    "7": 9,
    "8": 22,
    "9": 23,
    "55": 1,
    "56": 1,
    "57": 5,
    "58": 4,
    "69": 1,
    "14": 4,
    "15": 4,
    "16": 2,
    "17": 2,
    "18": 2,
    "19": 2,
    "20": 2,
    "23": 4,
    "24": 4,
    "25": 3,
    "26": 2,
    "27": 2,
    "28": 2,
    "29": 2,
    "141": 2,
    "142": 2,
    "143": 1,
    "144": 1,
    "39": 1,
    "40": 2,
    "41": 3,
    "42": 3,
    "43": 2,
    "44": 1,
    "45": 2,
    "46": 2,
    "47": 2,
    "63": 5,
    "70": 2,
    "145": 2,
    "146": 2,
    "147": 2,
    "170": 4,
    "171": 1,
    "172": 1
  },

  map: {
    print: "landscape",
    hexes: [
      {
        color: "plain",
        water: {cost:"100g"},
        borders: {side:1,color:"water"},
        hexes:["A3"]
      },
      {
        color: "plain",
        water: {cost:"100g"},
        borders: {side:4,color:"water"},
        hexes:["A5"]
      },
      { // 120g Mountain
        color: "plain",
        mountain: {cost:"120g"},
        hexes:["B2","B6","I3","J4","J6","J10","M3","M15","M17","N2","N14","N18","O3","O13","P14","P18"]
      },
      { // 60g Water
        color: "plain",
        water: {cost:"60g"},
        hexes:["B4", "C7", "D2","E11", "F10","H22","I21","J22","K7","P10"]
      },
      {
        color: "plain",
        water: {cost:"120g"},
        hexes:["B8"]
      },
      { // 80g Water
        color: "plain",
        water: {cost:"80g"},
        hexes:["C1","C9","D10","E15","K11","K13"]
      },
      {
        color: "plain",
        cities: [{
          name: {
            name: "Grey Havens"
          }
        }],
        tokens: [{
          label: "RGH",
          width: 15,
          color: "purple",
          angle: 30,
          percent: 0.75
        },{
          label: "E",
          width: 15,
          color: "pink",
          angle: 330,
          percent: 0.75
        }],
        hexes:["C3"]
      },
      {
        color: "plain",
        centerTowns: [{ angle: 90, percent: 0.5 },
                      { angle: 270, percent: 0.5 }],
        hexes:["D4","L16"]
      },
      { // 40g Water
        color: "plain",
        water: {cost:"40g"},
        hexes:["D6","E7","F14","G9","H8","K21","L20","P8"]
      },
      {
        color: "plain",
        water: {cost:"100g"},
        borders: [{side:6,color:"water"}],
        hexes:["D12"]
      },
      { // 100g Water
        color: "plain",
        water: {cost:"100g"},
        hexes:["D18","E17","F22","J18"]
      },
      {
        color: "plain",
        companies: [{label:"THT",angle: 180,percent: 0.6}],
        cities: [{
          companies: [{
            label: "SWR",
            color: "water"
          }],
          name: {
            name: "Hobbitown",
            reverse: true
          }
        }],
        hexes:["E5"]
      },
      {
        color: "plain",
        water: {cost:"80g"},
        borders: [{side:3,color:"water"}],
        hexes:["E13"]
      },
      {
        color: "plain",
        cities: [{
          name: {
            name: "Fornost"
          }
        }],
        hexes:["F2"]
      },
      {
        color: "plain",
        labels: [{percent: 0.67,angle:180,label:"P"}],
        cities: [{
          companies: [{
            label: "BPS",
            color: "orange"
          }],
          name: {
            name: "Bree",
            reverse: true
          }
        }],
        hexes:["F6"]
      },
      {
        color: "plain",
        borders: [{side:6,color:"water"}],
        water: {cost:"100g"},
        hexes:["F18"]
      },
      {
        color: "offboard",
        track: [{type:"offboard",side:5}],
        hexes: ["F24"]
      },
      {
        color: "plain",
        cities: [{
          name: {
            name: "Tharbad"
          }
        }],
        hexes:["G11"]
      },
      { // Center Town
        color: "plain",
        centerTowns: [{}],
        hexes:["G13","I17","J12","L8"]
      },
      {
        color: "plain",
        water: {cost: "80g", size: "small", angle: 270, percent: 0.4},
        centerTowns: [{ angle: 90, percent: 0.4 }],
        hexes: ["G17"]
      },
      {
        color: "plain",
        borders: [{side:1,color:"water"},
                  {side:3,color:"water"}],
        water: {cost:"100g"},
        hexes:["G19"]
      },
      {
        color: "plain",
        borders: [{side:4,color:"water"}],
        water: {cost:"100g"},
        hexes:["G21"]
      },
      {
        color: "plain",
        labels: [{percent: 0.67,angle:180,label:"P"}],
        cities: [{
          name: {
            name: "Umbar",
            reverse: true
          }
        }],
        hexes:["G23"]
      },
      {
        color: "offboard",
        track: [{type:"offboard",side:4}],
        offBoardRevenue: {
          name: {name: "Southlands"},
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "brown", cost: "40"},
            {color: "gray", cost: "60", phase: 8}
          ]
        },
        tokens: [{
          label: "SER",
          width: 15,
          color: "brown",
          angle: 150,
          percent: 0.7
        },{
          label: "FHR",
          width: 15,
          color: "red",
          angle: 210,
          percent: 0.7
        }],
        hexes: ["G25"]
      },
      {
        color: "plain",
        water: {percent: 0.67,cost:"80g"},
        labels: [{percent: 0.67,angle:180,label:"P"}],
        token: [{
          label: "E",
          width: 15,
          color: "pink",
          percent: 0.75
        }],
        cities: [{
          name: {
            offset: 25,
            name: "Dol Amoroth"
          }
        }],
        hexes:["H18"]
      },
      {
        color: "offboard",
        track: [{type:"offboard",side: 3},
                {type:"offboard",side: 4},
                {type:"offboard",side: 5}],
        hexes: ["H24"]
      },
      {
        color: "plain",
        cities: [{
          companies: [{
            label: "RGH",
            color: "purple"
          }],
          name: {
            name: "Rivendell"
          }
        }],
        tokens: [{
          label: "SWR",
          width: 15,
          color: "water",
          percent: 0.65
        }],
        hexes:["I5"]
      },
      {
        color: "plain",
        mountain: {cost: "120g", size: "small", angle: 270, percent: 0.4},
        centerTowns: [{ angle: 90, percent: 0.4 }],
        hexes: ["I11","K3","M13"]
      },
      {
        color: "plain",
        cities: [{
          name: {
            name: "Edoras"
          }
        }],
        hexes:["I13"]
      },
      { // 120g Water
        color: "plain",
        water: {cost:"120g"},
        hexes:["I19"]
      },
      {
        color: "plain",
        labels: [{percent: 0.67,angle:180,label:"P"}],
        water: [{percent: 0.67,cost:"120g"}],
        cities: [{
          companies: [{
            label: "DMH",
            color: "mountain"
          }],
          name: {
            name: "Moria",
            offset: 75,
            reverse: true
          }
        }],
        hexes:["J8"]
      },
      {
        color: "plain",
        cities: [{
          companies: [{
            label: "SER",
            color: "brown"
          }],
          name: {
            name: "Harondor"
          }
        }],
        hexes:["J20"]
      },
      {
        color: "plain",
        water: {percent: 0.7,angle: 30,cost:"60g"},
        cities: [{
          companies: [{
            label: "E",
            color: "pink"
          }],
          name: {
            name: "Lorien"
          }
        }],
        tokens: [{
          label: "LLM",
          width: 15,
          color: "black",
          angle: 330,
          percent: 0.7
        }],
        hexes:["K9"]
      },
      {
        color: "plain",
        labels: [{percent: 0.67,angle:180,label:"P"}],
        water: [{percent: 0.7,angle:30,cost:"80g"}],
        cities: [{
          companies: [{
            label: "MTR",
            color: "blue"
          }],
          name: {
            name: "Minas Tirith",
            offset: 75,
            reverse: true
          }
        }],
        tokens: [{
          label: "BPS",
          width: 15,
          color: "orange",
          angle: 330,
          percent: 0.75
        }],
        hexes:["K15"]
      },
      {
        color: "plain",
        water: {size:"small",cost:"$80",percent:0.5},
        centerTowns: [{ angle: 120, percent: 0.5 },
                      { angle: 240, percent: 0.5 }],
        hexes: ["K17"]
      },
      {
        color: "plain",
        cities: [{
          companies: [{
            label: "FHR",
            color: "red"
          }],
          name: {
            name: "Harad"
          }
        }],
        hexes:["M23"]
      },
      {
        color: "plain",
        cities: [{
          name: {
            name: "Edoras"
          }
        }],
        tokens: [{
          label: "MTR",
          width: 15,
          color: "blue",
          percent: 0.65
        }],
        hexes:["N4"]
      },
      {
        color: "plain",
        labels: [{percent: 0.67,angle:180,label:"P"}],
        cities: [{
          companies: [{
            label: "LLM",
            color: "black"
          }],
          name: {
            name: "Laketown",
            reverse: true
          }
        }],
        hexes:["N6"]
      },
      {
        color: "offboard",
        track: [{type:"offboard",side: 3},
                {type:"offboard",side: 4},
                {type:"offboard",side: 5}],
        offBoardRevenue: {
          name: {name: "Far Harad"},
          revenues: [
            {color: "yellow", cost: "20"},
            {color: "brown", cost: "30"},
            {color: "gray", cost: "50", phase: 8}
          ]
        },
        hexes:["N24"]
      },
      {
        color: "plain",
        cities: [{
          companies: [{
            label: "O",
            color: "green"
          }],
          name: {
            name: "Barad-Dur"
          }
        }],
        hexes:["O15"]
      },
      {
        color: "plain",
        centerTowns: [{}],
        borders: [{side:1,color:"water"}],
        hexes:["O17"]
      },
      {
        color: "plain",
        mountain: {cost:"120g"},
        borders: [{side:4,color:"water"}],
        hexes:["O19"]
      },
      {
        color: "plain",
        cities: [{
          name: {
            name: "Khand"
          }
        }],
        hexes:["P20"]
      },
      {
        color: "offboard",
        track: [{type:"offboard",side: 1},
                {type:"offboard",side: 2}],
        offBoardRevenue: {
          name: {name: "Iron Hills"},
          angle: 270,
          percent: 0.25,
          reverse: true,
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "brown", cost: "40"},
            {color: "gray", cost: "60", phase: 8}
          ]
        },
        tokens: [{
          label: "DMH",
          width: 15,
          color: "mountain",
          angle: 90,
          percent: 0.75
        }],
        hexes:["Q3"]
      },
      {
        color: "offboard",
        track: [{type:"offboard",side: 1},
                {type:"offboard",side: 2},
                {type:"offboard",side: 3}],
        offBoardRevenue: {
          name: {name: "East Lands"},
          angle: 270,
          percent: 0.25,
          reverse: true,
          revenues: [
            {color: "yellow", cost: "20"},
            {color: "brown", cost: "30"},
            {color: "gray", cost: "40", phase: 8}
          ]
        },
        hexes:["Q11"]
      },
      {
        color: "plain",
        hexes: ["C5","D8","E3","E9","F4","F8","F12","F16",
                "G1","G3","G5","G7","G15",
                "H2","H4","H6","H10","H12","H14","H16","H20",
                "I7","I9","I15","I23",
                "J2","J14","J16",
                "K5","K19","K23",
                "L2","L4","L6","L10","L12","L14","L18","L22",
                "M5","M7","M9","M11","M19","M21",
                "N8","N10","N12","N16","N20","N22",
                "O5","O7","O9","O11","O21","O23",
                "P4","P6","P12","P16","P22",
                "Q5","Q7","Q13","Q15","Q17","Q19","Q21"]
      }
    ]
  }
};

export default game;
