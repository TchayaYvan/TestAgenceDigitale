import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color, top) => ({
    fontWeight: "bold",
    fontSize: SIZES.xxLarge - 5,
    marginTop: top,
    color: color,
    marginHorizontal: 12,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.small,
    height: 50
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.black,
    marginTop: SIZES.small
  },
  searchIcon2: {
    marginHorizontal: 10,
    color: COLORS.white,
    marginTop: SIZES.small
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width : "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
    color: COLORS.white, 
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.green,
    alignItems: "center"
  }
});

export default styles;
