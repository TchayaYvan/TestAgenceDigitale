import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: { flex: 1, backgroundColor: COLORS.lightWhite },
  upperRow: {
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: SIZES.large,
    width: SIZES.width - 50,
    zIndex: 999,
    backgroundColor: COLORS.green,
    borderRadius: SIZES.large,
  },
  heading: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5,
  },
  separator: {
    height: 16,
  },
});

export default styles;
