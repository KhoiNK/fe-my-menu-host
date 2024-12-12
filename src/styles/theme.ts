const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};

const colors = {
  black: "#000000",
  grey1000: "#242424",
  grey800: "#4D4D4D",
  grey700: "#6B6B6B",
  grey400: "#C7C7C7",
  grey300: "#DCDCDC",
  grey200: "#EFEFEF",
  grey0: "#FFFFFF",
  primary1000: "#000F20",
  primary500: "#0172F4",
  primary200: "#E5EAFF",
  primary100: "#F2F7FC",
  red600: "#C52826",
};

const priorityColors = {
  black: "#000000",
  grey1000: "#242424",
  grey800: "#4D4D4D",
  grey700: "#6B6B6B",
  grey400: "#C7C7C7",
  grey300: "#DCDCDC",
  grey200: "#EFEFEF",
  grey0: "#FFFFFF",
  primary1000: "#000F20",
  primary500: "#b1ad41",
  primary200: "#fff3b3",
  primary100: "#F2F7FC",
  red600: "#C52826",
};

const fontWeights = {
  regular: 400,
  strong: 700,
};

const fontSize = {
  headlineH3: "24px",
  bodyB2Regular: "14px",
};

const borderRadius = {
  button: "1000px",
  card: "24px",
  input: "10px",
};

const boxShadow = {
  elevationL: "0px 4px 48px 0px rgba(163, 166, 189, 0.12)",
};

const heights = {
  input: "44px",
};

const main = {
  colors,
  fontSize,
  borderRadius,
  boxShadow,
  fontWeights,
  device,
  heights,
};

const priority = {
  colors: priorityColors,
  fontSize,
  borderRadius,
  boxShadow,
  fontWeights,
  device,
  heights,
};

export type Theme = typeof main;

const theme: { [key: string]: Theme } = {
  main,
  priority,
};

export default theme;
