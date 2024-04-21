import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProductList.style";
import ProductCardView from "./ProductCardView";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../redux/actions/products";
import { useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";

const ProductList = ({ navigation }) => {
  const route = useRoute();
  const { category } = route.params;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [products, setProducts] = useState();

  useEffect(() => {
    dispatch(
      fetchProductsByCategory({ category }, (products) => {
        setProducts(products);
      })
    ).then(() => setLoading(false));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: SIZES.height / 1.2,
          }}
        >
          <ActivityIndicator size="large" color={COLORS.green} />
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <View style={{ marginBottom: 16 }}>
                  <ProductCardView product={item} />
                </View>
              )}
              numColumns={2}
              contentContainerStyle={styles.container}
            />
          </View>
        </>
      )}
    </>
  );
};

export default ProductList;
