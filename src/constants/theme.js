import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  bleu: "#4267B2",
  red: "#EB6A58",
  green: "#449282",
  white: "#FBFBFB",
  lightWhite: "#FFFFFF",
  lightBleu: "#6885C1",
  lightRed: "#EB9C98",
  lightGreen: "#73ADA1",
  black: "#121212",
  dark: "#3D3A45",
  gray: "#8C8896",
  lightGray: "#D1CFD5",
  purple: "#9683EC",
  secondary: "#DDF0FF"
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const TEXT = {
  xxSmall: 11,
  xSmall: 13,
  small: 15,
  medium: 17,
  large: 21,
  xLarge: 27,
  xxLarge: 32,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRaduis: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height:2,
    },
    shadowOpacity: 0.25,
    shadowRaduis: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS, TEXT };
