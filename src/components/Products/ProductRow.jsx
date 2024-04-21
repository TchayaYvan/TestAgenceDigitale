import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";
import ProductCardView from "./ProductCardView";

const ProductRow = ({products}) => {
  
  return (
    <View style={{ marginTop: SIZES.medium, marginLeft: 12 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCardView product={item}/>}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
