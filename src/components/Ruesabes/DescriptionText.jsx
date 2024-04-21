import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TEXT } from "../../constants/theme";

// Composant DescriptionText pour afficher du texte descriptif
const DescriptionText = ({ text, lines }) => {
  return <Text numberOfLines={lines} style={styles.description}>{text}</Text>;
};

// Styles pour le composant DescriptionText
export default DescriptionText;

const styles = StyleSheet.create({
    description: {
        paddingVertical: 10,
        fontFamily: "regular",
        textAlign: "justify",
        fontSize: TEXT.medium
    }
});
