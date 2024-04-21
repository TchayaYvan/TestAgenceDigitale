import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import WidthSpacer from "../Ruesabes/WidthSpacer";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import reusable from "../Ruesabes/reusable.style";

// Composant réutilisable pour un bouton
const ReusableBtn = ({
  onPress, // Fonction à exécuter lorsqu'on appuie sur le bouton
  btnText, // Texte à afficher sur le bouton
  textColor, // Couleur du texte du bouton
  width, // Largeur du bouton
  backgroundColor, // Couleur de fond du bouton
  borderWidth, // Largeur de la bordure du bouton
  borderColor, // Couleur de la bordure du bouton
  icon, // icone du bouton
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
    >
      <View style={reusable.rowWithSpace("flex-start")}>
        {icon && <Fontisto name={icon} size={20} color={COLORS.white} />}
        {icon && <WidthSpacer width={5} />}
        <Text style={styles.btnText(textColor)}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

// Styles pour le composant AppBar
const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
    width: width,
    backgroundColor: backgroundColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: SIZES.small,
  }),
});
