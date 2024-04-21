import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import reusable from "./reusable.style";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, TEXT } from "../../constants/theme";
import ReusableText from "./ReusableText";

// Composant AppBar pour afficher une barre d'application
const AppBar = ({
  color, // Couleur de la boîte à gauche
  title, // Titre au centre
  color1, // Couleur de la boîte à droite
  icon, // Icône de la boîte à droite
  onPress, // Fonction à exécuter lorsqu'on appuie sur la boîte à gauche
  onPress1, // Fonction à exécuter lorsqu'on appuie sur la boîte à droite
  top, // Position top de l'overlay
  left, // Position left de l'overlay
  right, // Position right de l'overlay
}) => {
  return (
    <View style={styles.overlay(top, left, right)}>
      <View style={reusable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={26} />
        </TouchableOpacity>

        <ReusableText
          text={title}
          size={TEXT.large}
          family={"medium"}
          color={COLORS.black}
        />

        <TouchableOpacity style={styles.box(color1)} onPress={onPress1}>
          <AntDesign name={icon} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: (top, left, right) => ({
    position: "absolute",
    top: top,
    left: left,
    right: right,
    justifyContent: "center",
  }),
  box: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
