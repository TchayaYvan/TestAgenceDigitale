import { View } from "react-native";
import React from "react";

// Composant WidthSpacer pour ajouter un espace horizontal de largeur spécifiée
const WidthSpacer = ({width}) => {
  return <View style={{ width: width }}></View>;
};

export default WidthSpacer;
