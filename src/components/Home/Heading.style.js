import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium + 5,
    marginHorizontal: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: SIZES.xLarge - 2,
  },
  categorieWrapper: {
    marginVertical: 20,
  },
  categorieTile: {
    backgroundColor: COLORS.green,
    padding: 10,
    borderRadius: 18,
  },
  categorieTitle:{
    color: COLORS.white
  },
  
});

export default styles;
