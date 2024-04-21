import { View } from "react-native";
import React from "react";

// Composant HeightSpacer pour ajouter un espace vertical de hauteur spécifiée
const HeightSpacer = ({ height }) => {
  return <View style={{ height: height }}></View>;
};

export default HeightSpacer;
