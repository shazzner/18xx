const game = {
  // Generic Game Info
  info: {
    title: "1899",
    designer: "Dirk Clemens & Ingo Mayer",
    background: "gray",
    width: 150,
    color_10: "orange",
    titleX: 850,
    titleY: 1150,
    hexCoords: true,
    currency: "CNY"
  },

  tokens: [],
  ipo: false,
  bank: "$12,000",
  players: [],
  companies: [],
  trains: [],
  privates: [],
  phases: [],
  pools: [],
  rounds: [
    {name: "OR3", color: "train_brown",},
    {name: "OR2", color: "train_green",},
    {name: "OR1", color: "train_yellow",},
    {name: "SR", color: "train_gray",},
  ],

  turns: [],
  stock: {
    type: "2D",
    cell: {
      width: 0.75,
      height: 0.85,
    },
    paginated: true,
    orientation: "landscape",
    par: {
      values: [
        {
          label: 100,
	  height: "0.75in",
          width: "3.0in",
	  color: "plain",
        },
        {
          label: 90,
	  height: "0.75in",
          width: "3.0in",
	  color: "plain",
        },
        {
          label: 82,
	  height: "0.75in",
          width: "3.0in",
	  color: "plain",
        },
        {
          label: 76,
	  height: "0.75in",
          width: "3.0in",
	  color: "plain",
        },
        {
          label: 71,
	  height: "0.75in",
          width: "3.0in",
	  color: "plain",
        },
        {
          label: 67,
	  height: "0.75in",
          width: "3.0in",
	  color: "plain",
        }
      ]
    },
    movement: {},
    market: [
      [
        { value: 60, label: 60, color: "yellow", arrow: "down" },
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
        { value: 53, label: 53, color: "yellow", arrow: "down" },
        { value: 60, label: 60, color: "yellow" },
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
        { value: 46, label: 46, color: "yellow", arrow: "down" },
        { value: 55, label: 55, color: "yellow" },
        { value: 60, label: 60, color: "yellow" },
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
        { value: 39, label: 39, color: "orange", arrow: "down" },
        { value: 48, label: 48, color: "yellow" },
        { value: 54, label: 54, color: "yellow" },
        { value: 60, label: 60, color: "yellow" },
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
        { value: 32, label: 32, color: "orange", arrow: "down" },
        { value: 41, label: 41, color: "orange" },
        { value: 48, label: 48, color: "yellow" },
        { value: 55, label: 55, color: "yellow" },
        62,
        67,
        { value: 71, label: 71, par: true },
        76,
        82,
        90,
        { value: 100, label: 100, arrow: "up" }
      ],
      [
        { value: 25, label: 25, color: "brown", arrow: "down" },
        { value: 34, label: 34, color: "orange" },
        { value: 42, label: 42, color: "orange" },
        { value: 50, label: 50, color: "yellow" },
        { value: 58, label: 58, color: "yellow" },
        65,
        { value: 67, label: 67, par: true },
        71,
        75,
        { value: 80, label: 80, arrow: "up" }
      ],
      [
        { value: 18, label: 18, color: "brown", arrow: "down" },
        { value: 27, label: 27, color: "brown" },
        { value: 36, label: 36, color: "orange" },
        { value: 45, label: 45, color: "orange" },
        { value: 54, label: 54, color: "yellow" },
        63,
        67,
        69,
        { value: 70, label: 70, arrow: "up" }
      ],
      [
        { value: 10, label: 10, color: "brown" },
        { value: 12, label: 12, color: "brown" },
        { value: 30, label: 30, color: "brown" },
        { value: 40, label: 40, color: "orange" },
        { value: 50, label: 50, color: "yellow" },
        { value: 60, label: 60, color: "yellow" },
        67,
        { value: 68, label: 68, arrow: "up" }
      ],
      [
        null,
        { value: 10, label: 10, color: "brown" },
        { value: 20, label: 20, color: "brown" },
        { value: 30, label: 30, color: "brown" },
        { value: 40, label: 40, color: "orange" },
        { value: 50, label: 50, color: "yellow" },
        { value: 60, label: 60, color: "yellow", arrow: "up" }
      ],
      [
        null,
        null,
        { value: 10, label: 10, color: "brown" },
        { value: 20, label: 20, color: "brown" },
        { value: 30, label: 30, color: "brown" },
        { value: 40, label: 40, color: "orange" },
        { value: 50, label: 50, color: "yellow", arrow: "up" }
      ],
      [
        null,
        null,
        null,
        { value: 10, label: 10, color: "brown" },
        { value: 20, label: 20, color: "brown" },
        { value: 30, label: 30, color: "brown" },
        { value: 40, label: 40, color: "orange", arrow: "up" }
      ]
    ],
    legend: [],
  },

  tiles: {},

  map: {
    hexes: [
      {
        color: "offboard",
        offBoardTrack: [{side: 5,},],
        offBoardRevenue: {
          revenues: [
              {color: "train_green", cost: "+20",},
              {color: "train_brown", cost: "+50",},
          ],
        },
        hexes: ["A4"]
      },
      {
        color: "offboard",
        labels: [{label: "Inner Mongolia", angle: 180, percent: 0.50,},],
        offBoardRevenue: {
          revenues: [
              {color: "train_yellow", cost: "10",},
              {color: "train_yellow", cost: "30",},
              {color: "train_yellow", cost: "50",},
              {color: "train_yellow", cost: "80",},
              {color: "train_yellow", cost: "120",},
          ],
        },
        hexes: ["A2"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          angle: 90,
          percent: 0.25,
          revenues: [
              {color: "train_green", cost: "+20",},
              {color: "train_brown", cost: "+50",},
          ],
        },
        offBoardTrack: [{side: 4,},],
        hexes: ["B1"]
      },
      {
        color: "offboard",
        offBoardTrack: [{side: 3,},{side: 4,},{side: 5,},],
        offBoardRevenue: {
          angle: 90,
          percent: 0.25,
          revenues: [
              {color: "train_green", cost: "+20",},
              {color: "train_brown", cost: "+50",},
          ],
        },
        hexes: ["C2"]
      },
      {
        color: "gray",
        cities: [
            {name: {}, size: 2,},
        ],
        values: [
          {
            angle: 180,
            percent: 0.667,
            value: 20
          }
        ],
        track: [
          {start: 4,},
          {start: 6,},
        ],
        hexes: ["A12"]
      },
      {
        color: "gray",
        track: [
          {
            type: "gentle",
            side: 4
          },
          {
            type: "gentle",
            side: 5
          },
        ],
        hexes: ["A14"]
      },
      {
        color: "gray",
        cities: [
          {
           name: {},
           companies: [{label: "FsR", color: "white",},],
          },
        ],
        values: [
          {
            angle: 180,
            percent: 0.667,
            value: 40
          }
        ],
        track: [
          {start: 1,},
          {start: 6,},
        ],
        hexes: ["A16"]
      },
      {
        color: "offboard",
        labels: [{label: "North China", angle: 180, percent: 0.50,},],
        offBoardRevenue: {
          revenues: [
              {color: "train_yellow", cost: "30",},
              {color: "train_brown", cost: "40",},
          ],
        },
        offBoardTrack: [{side: 6,},{side: 5,},],
        hexes: ["A18"]
      },
      {
        color: "offboard",
        labels: [{label: "Russia", angle: 180, percent: 0.50,},],
        offBoardRevenue: {
          revenues: [
              {color: "train_yellow", cost: "20",},
              {color: "train_brown", cost: "30",},
          ],
        },
        offBoardTrack: [{side: 6,},{side: 5,},],
        hexes: ["A22"]
      },
      {
        color: "plain",
        mountain: {
          cost: "$120+$80",
          size: "large"
        },
          hexes: ["B3", "B5", "C4",]
      },
      {
        color: "plain",
        cities: [
          {
            angle: 120,
            percent: 0.4,
            name: {},
          }
        ],
        water: {
          angle: 300,
          percent: 0.5,
          cost: "$80",
          size: "small"
        },
        hexes: ["B7"]
      },
      {
        color: "plain",
        mountain: {
          cost: "$120",
          size: "medium"
        },
          hexes: ["B9", "B11", "B21", "C6", "E20",]
      },
      {
        color: "yellow",
        water: {
          angle: 180,
          percent: 0.40,
          cost: "$200",
          size: "large"
        },
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 65,
            percent: 0.6,
            name: {},
          },
          {
            angle: 295,
            percent: 0.6,
            name: {},
          }
        ],
        hexes: ["B13"]
      },
      {
        color: "plain",
          hexes: ["B15", "F3", "F17", "F19", "J9",],
      },
      {
        color: "plain",
          centerTowns: [
          { x: -30, name: {} },
        ],
        water: {
          angle: 310,
          percent: 0.6,
          cost: "$80",
          size: "small"
        },
        companies: [
          {
            label: "ASC",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["B17",]
      },
      {
        color: "plain",
        mountain: {
          angle: 120,
          percent: 0.5,
          cost: "$140",
          size: "medium"
        },
        water: {
          angle: 310,
          percent: 0.5,
          cost: "$140",
          size: "medium"
        },
        hexes: ["B19"]
      },
      {
        color: "gray",
        cities: [
            {name: {},},
        ],
        values: [
          {
            percent: 0.667,
              value: 30,
          }
        ],
        track: [
          {start: 1,},
          {start: 2,},
        ],
        hexes: ["B23"]
      },
      {
        color: "plain",
        water: {
          cost: "$80",
          size: "small"
        },
          hexes: ["C8", "D7", "E2", "F21", "H3", "I4", "J3", "J7",],
      },
      {
        color: "plain",
        cities: [{}],
          hexes: ["C10", "I6",]
      },
      {
        color: "gray",
        track: [
          {
            type: "sharp",
            side: 2
          },
        ],
        hexes: ["C12"]
      },
      {
        color: "plain",
          hexes: ["C14", "C18", "D5", "D9", "D13", "D17", "H9",
                  "I2", "I10", "I20", "J21", "J23", "K4",]
      },
      {
        color: "plain",
        centerTowns: [
            { x: -30, y: -20, name: {} },
            { x: 30, y: -20, name: {} }
        ],
        water: {
          angle: 0,
          percent: 0.50,
          cost: "$80",
          size: "small"
        },
        companies: [
          {
            label: "ASC",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["C16"]
      },
      {
        color: "yellow",
        mountain: {
          angle: 180,
          percent: 0.40,
          cost: "$120",
          size: "medium"
        },
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 65,
            percent: 0.6,
            name: {},
          },
          {
            angle: 295,
            percent: 0.6,
            name: {},
          }
        ],
        hexes: ["C20"]
      },
      {
        color: "plain",
        centerTowns: [
            { x: -30, y: -20, name: {} },
            { x: 30, y: -20, name: {} }
        ],
        mountain: {
          angle: 0,
          percent: 0.50,
          cost: "$120",
          size: "medium"
        },
        hexes: ["D3"]
      },
      {
        color: "gray",
        track: [
          {
            type: "sharp",
            side: 1
          },
          {
            type: "sharp",
            side: 2
          },
          {
            type: "gentle",
            side: 1
          },
        ],
        hexes: ["D15"]
      },
      {
        color: "plain",
        labels: [
          {
            label: "A",
            angle: 180,
            percent: 0.75,
          }
        ],
        cities: [
          {
            name: {},
          }
        ],
        hexes: ["D19"]
      },
      {
        color: "yellow",
        water: {
          cost: "$80",
          size: "small"
        },
        labels: [
          {
            label: "P",
            angle: 60,
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 0,
            percent: 0.6,
            name: {},
            companies: [{label: "CSb", color: "white",},],
          },
          {
            angle: 120,
            percent: 0.6,
            name: {},
          },
          {
            angle: 240,
            percent: 0.6,
            name: {},
          }
        ],
        companies: [
          {
            label: "VPR",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["E4"]
      },
      {
        color: "plain",
        centerTowns: [
            { x: -30, name: {} },
            { x: 30, name: {} }
        ],
        hexes: ["E6"]
      },
      {
        color: "gray",
        track: [
          {
            type: "sharp",
            side: 1
          },
        ],
          hexes: ["E8", "H13",]
      },
      {
        color: "gray",
        cities: [
            {name: {},},
        ],
        values: [
          {
            angle: 120,
            percent: 0.667,
            value: 30
          }
        ],
        track: [
          {start: 3,},
          {start: 6,},
        ],
        companies: [
          {
            label: "YSC",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["E12"]
      },
      {
        color: "plain",
        labels: [
          {
            label: "A",
            angle: 180,
            percent: 0.75,
          }
        ],
        cities: [
          {
            name: {},
            companies: [{label: "NRC", color: "white",},],
          }
        ],
        hexes: ["E18"]
      },
      {
        color: "offboard",
        labels: [{label: "Central China", angle: 180, percent: 0.50,},],
        offBoardRevenue: {
          revenues: [
            {color: "train_yellow", cost: "10",},
            {color: "train_brown", cost: "20",},
          ],
        },
        offBoardTrack: [{side: 5,},],
        hexes: ["F1"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "A",
            angle: 180,
            percent: 0.75,
          }
        ],
        cities: [
          {
            name: {},
            companies: [{},],
          }
        ],
        water: {
          angle: 320,
          percent: 0.70,
          cost: "$120",
          size: "small"
        },
        track: [
          {start: 1,},
          {start: 3,},
          {start: 6,},
        ],
        hexes: ["F5"]
      },
      {
        color: "blue",
        companies: [
          {
            label: "YSC",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["F11",],
      },
      {
        color: "gray",
        track: [
          {
            type: "sharp",
              side: 6,
          },
        ],
          hexes: ["F23", "G24",],
      },
      {
        color: "plain",
        cities: [
          {
            name: {},
            companies: [{label: "SjZ", color: "white",},],
          }
        ],
        hexes: ["G2"]
      },
      {
        color: "plain",
          centerTowns: [
              {name: {},},
        ],
        hexes: ["G4"]
      },
      {
        color: "plain",
        companies: [
          {
            label: "FGF",
            angle: 180,
            percent: 0.75,
          }
        ],
        water: {
          cost: "$120",
          size: "medium"
        },
          hexes: ["G6",],
      },
      {
        color: "gray",
        track: [
          {
            type: "gentle",
              side: 4,
          },
        ],
        hexes: ["G10"],
      },
      {
        color: "gray",
        track: [
          {
            type: "straight",
              side: 2,
          },
          {
            type: "sharp",
              side: 1,
          },
          {
            type: "gentle",
              side: 5,
          },
        ],
        values: [
          {
            value: 10,
            angle: 240,
            percent: 0.50,
          },
        ],
        towns: [
          {
            rotation: 120,
            angle: 70,
            percent: 0.375,
            name: {},
          },
        ],
        companies: [
          {
            label: "YSC",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["G12"],
      },
      {
        color: "gray",
        track: [
          {
            type: "gentle",
              side: 2,
          },
        ],
        hexes: ["G18"],
      },
      {
        color: "plain",
        centerTowns: [
            { x: -30, y: -20, name: {} },
            { x: 30, y: -20, name: {} }
        ],
        water: {
          angle: 0,
          percent: 0.50,
          cost: "$120",
          size: "medium"
        },
        hexes: ["G20"]
      },
      {
        color: "plain",
        water: {
          cost: "$60",
          size: "tiny"
        },
          hexes: ["G22",],
      },
      {
        color: "plain",
        water: {
          cost: "$120",
          size: "medium"
        },
          hexes: ["H5",],
      },
      {
        color: "green",
        labels: [
          {
            label: "OO",
            angle: 150,
            percent: 0.667,
          }
        ],
        cities: [
          {
            angle: 30,
            percent: 0.5,
            name: {},
          },
          {
            angle: 270,
            percent: 0.5,
            name: {},
          }
        ],
        values: [
          {
            value: 40,
            angle: 90,
            percent: 0.70,
          },
          {
            value: 40,
            angle: 210,
            percent: 0.70,
          },
        ],
        track: [
          {start: 4, type: "stop",},
          {start: 6, type: "stop",},
        ],
        hexes: ["H7"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {},
            companies: [{label: "Tt", color: "white",},],
          }
        ],
        labels: [
          {
            label: "T",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["H11"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "NY",
            angle: 90,
            percent: 0.50,
          }
        ],
        cities: [
          {
            angle: 210,
            percent: 0.5,
            name: {},
            companies: [{label: "1St", color: "white",},],
          },
          {
            angle: 330,
            percent: 0.5,
            name: {},
          }
        ],
        values: [
          {
            value: 40,
            angle: 30,
            percent: 0.70,
          },
          {
            value: 40,
            angle: 150,
            percent: 0.70,
          },
        ],
        track: [
          {start: 3, type: "stop",},
          {start: 5, type: "stop",},
        ],
        water: {
          angle: 270,
          percent: 0.75,
          cost: "$80",
          size: "small"
        },
        hexes: ["H19"]
      },
      {
        color: "plain",
        companies: [
          {
            label: "BMP",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["H21",],
      },
      {
        color: "yellow",
        labels: [
          {
            label: "B",
            angle: 180,
            percent: 0.75,
          }
        ],
        cities: [
          {
            name: {},
            companies: [{label: "B&M", color: "white",},],
          }
        ],
        values: [
          {
            value: 30,
            angle: 90,
            percent: 0.66,
          },
        ],
        track: [
          {start: 3,},
          {start: 5,},
        ],
        hexes: ["H23"]
      },
      {
        color: "plain",
        water: {
          cost: "$40",
          size: "tiny"
        },
          hexes: ["I8",],
      },
      {
        color: "gray",
        track: [
          {
            type: "sharp",
              side: 3,
          },
        ],
          hexes: ["I18",],
      },
      {
        color: "yellow",
        labels: [
          {
            label: "OO",
            angle: 180,
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 65,
            percent: 0.6,
            name: {},
          },
          {
            angle: 295,
            percent: 0.6,
            name: {},
          }
        ],
        hexes: ["I22"]
      },
      {
        color: "gray",
        towns: [
          {
            angle: 120,
            percent: 0.57735,
            rotation: 30,
            name: {},
          }
        ],
        track: [
          {
            type: "sharp",
            side: 1
          }
        ],
        values: [
          {
            value: 10,
            angle: 0,
            percent: 0.10,
          }
        ],
        hexes: ["I24"]
      },
      {
        color: "offboard",
        labels: [{label: "Zhengshou", angle: 0, percent: 0.50,},],
        offBoardTrack: [{side: 3,},{side: 4,},],
        offBoardRevenue: {
          revenues: [
            {color: "train_yellow", cost: "30",},
            {color: "train_brown", cost: "50",},
          ],
        },
        hexes: ["J1"]
      },
      {
        color: "plain",
        water: {
          cost: "$80",
          size: "small"
        },
        companies: [
          {
            label: "XsZ",
            angle: 180,
            percent: 0.75,
          }
        ],
        hexes: ["J5", ],
      },
      {
        color: "gray",
        towns: [
          {
            angle: 240,
            percent: 0.57735,
            rotation: 150,
            name: {},
          }
        ],
        track: [
          {
            type: "sharp",
              side: 3,
          }
        ],
        values: [
          {
            value: 10,
          }
        ],
        hexes: ["J19"]
      },
      {
        color: "offboard",
        offBoardTrack: [{side: 3,},{side: 4,},],
        offBoardRevenue: {
          revenues: [
            {color: "train_yellow", cost: "30",},
            {color: "train_brown", cost: "50",},
          ],
        },
        hexes: ["K2"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "X",
            angle: 180,
            percent: 0.75,
          }
        ],
        cities: [
          {
            name: {},
            companies: [{label: "XzS", color: "white",},],
          }
        ],
        values: [
          {
            value: 20,
            angle: 0,
            percent: 0.66,
          }
        ],
        track: [
          {start: 2,},
          {start: 4,},
        ],
        hexes: ["K6"]
      },
      {
        color: "plain",
          centerTowns: [
          { x: -30, name: {} },
        ],
        water: {
          angle: 310,
          percent: 0.6,
          cost: "$80",
          size: "small"
        },
        hexes: ["K8",]
      },
      {
        color: "offboard",
        labels: [{label: "Shanghai", angle: 180, percent: 0.50,},],
        offBoardTrack: [{side: 1,},],
        offBoardRevenue: {
          percent: 0.333,
          revenues: [
            {color: "train_yellow", cost: "40",},
            {color: "train_brown", cost: "60",},
          ],
        },
        hexes: ["K10"]
      }
    ]
  }
};

export default game;
