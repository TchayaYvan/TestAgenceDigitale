import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./products.style";
import { COLORS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { ProductList } from "../../components";

const Products = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={35}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>

          <Text style={styles.heading}>Produits</Text>
        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  );
};

export default Products;
