const colors = {
  // Phases
  yellow: "#FDCB09",
  green: "#0AA99E",
  brown: "#CC6B2D",
  gray: "#C1C5C6",

  // Terrain
  plain: "#F2F4E8",
  offboard: "#DC8281",
  mountain: "#997749",
  water: "#4CB2D7",
  land: "#DFE2C7",

  // Market
  orange: "#F48221",

  // Text
  white: "#fefffe",
  black: "#37383A",

  halt: "rgb(102,102,102)",

  border: {
    plain: "#F2F4E8",
    yellow: "#FDCB09",
    green: "#0AA99E",
    brown: "#CC6B2D",
    gray: "#C1C5C6",
    offboard: "#DC8281",
    mountain: "#997749",
    water: "#4CB2D7"
  },

  // Overrides for tiles
  tile: {
    default: "#BABE81",
    yellow: "#F2F4E8",
    green: "#E4E8D1",
    brown: "#D9DDBA",
    gray: "#BABE81",

    border: {
      yellow: "#F2F4E8",
      green: "#E4E8D1",
      brown: "#D9DDBA",
      gray: "#BABE81"
    },
  },

  // Track is separated by phase
  track: {
    default: "#37383A",
    plain: "#B9BF81",
    yellow: "#BC9806",
    green: "#4A7522",
    brown: "#743C0A"
  },

  // Towns as well
  town: {
    default: "#B9BF81",
    yellow: "#BC9806",
    green: "#4A7522",
    brown: "#743C0A",
    gray: "#37383A",
    offboard: "#37383A"
  },
  centerTown: {
    plain: "#B9BF81",
    default: "#37383A"
  },

  // Cities are filled with a lighter version of the track color
  city: {
    default: "#DDE1E2",
    plain: "#fefffe",
    yellow: "#F9FAF4",
    green: "#F1F3E6",
    brown: "#EAEDDA"
  },

  // Companies
  companies: {
    black: "#37383A",
    blue: "#0189D1",
    cyan: "#00A99E",
    lightGreen: "#76A042",
    green: "#237333",
    brown: "#7B352A",
    orange: "#F48221",
    pink: "rgb(193,60,125)",
    purple: "#7F528B",
    red: "#D81E3E",
    yellow: "#F8C200"
  }
};

export default colors;
