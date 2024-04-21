import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "./reusable.style";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "./ReusableText";
import WidthSpacer from "./WidthSpacer";
import { COLORS, SIZES } from "../../constants/theme";

// Composant ProfileTile pour afficher une tuile de profil
const ProfileTile = ({ onPress, title, icon }) => {
  return (
    // Enveloppe TouchableOpacity pour rendre la tuile cliquable
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={10} />

          <ReusableText
            text={title}
            size={SIZES.medium}
            family={"regular"}
            color={COLORS.black}
          />
        </View>

        <AntDesign name="right" size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

// Styles pour le composant ProfileTile
const styles = StyleSheet.create({
  tile: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: COLORS.lightWhite,
    marginBottom: 10,
  },
});
