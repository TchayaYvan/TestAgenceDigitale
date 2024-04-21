import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants/theme";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Trouvez les 
        </Text>
        <Text style={styles.welcomeTxt(COLORS.green, 0)}>meilleurs produits</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            onPressIn={() => {}}
            placeholder="Qu'est ce que vous cherchez ?"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <AntDesign
            name="enter"
            size={SIZES.xLarge}
            style={styles.searchIcon2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
