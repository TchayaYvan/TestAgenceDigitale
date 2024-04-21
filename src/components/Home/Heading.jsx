import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Heading.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/actions/products";

const Heading = ({ navigation, categories }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Produits</Text>
        {/* <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} color={COLORS.green} />
        </TouchableOpacity> */}
      </View>
      <View style={styles.categorieWrapper}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categorieTile}
              onPress={() =>
                navigation.navigate("Products", { category: item })
              }
            >
              <Text style={styles.categorieTitle}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      </View>
    </View>
  );
};

export default Heading;
