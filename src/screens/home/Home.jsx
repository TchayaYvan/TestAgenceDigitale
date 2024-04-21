import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.style";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import {
  Carousel,
  Heading,
  HeightSpacer,
  ProductRow,
  Welcome,
} from "../../components";
import {
  fetchCategories,
  fetchProductsLaptops,
  fetchProductsTops,
} from "../../redux/actions/products";
import { COLORS, SIZES } from "../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const categories = useSelector((state) => state.products.categories);
  const productsTops = useSelector((state) => state.products.productsTops);
  const productsLaptops = useSelector(
    (state) => state.products.productsLaptops
  );
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(fetchCategories()),
          dispatch(fetchProductsTops()),
          dispatch(fetchProductsLaptops()),
        ]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        const cart = await AsyncStorage.getItem("cart");
        if (cart) {
          const cartItems = JSON.parse(cart);
          const itemIdSet = new Set(cartItems.map((item) => item.id));
          const itemCount = itemIdSet.size;
          setCartItemCount(itemCount);
        } else {
          setCartItemCount(0);
        }
      } catch (error) {
        console.log("Error getting cart items count:", error);
      }
    });
  
    return unsubscribe;
  }, [navigation]);;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Bali-Douala</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>{cartItemCount}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome />
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: SIZES.height / 1.5,
            }}
          >
            <ActivityIndicator size="large" color={COLORS.green} />
          </View>
        ) : (
          <>
            <Carousel productsTops={productsTops} />
            <Heading categories={categories} navigation={navigation} />
            <ProductRow products={productsLaptops} />
            <HeightSpacer height={120} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
