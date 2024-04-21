import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import { ReusableBtn } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetails = ({ navigation, route }) => {
  const { product } = route.params;

  const handleAddToCart = async () => {
    try {
      const cart = await AsyncStorage.getItem("cart");
      const existingCart = cart ? JSON.parse(cart) : [];

      const isProductInCart = existingCart.some(
        (item) => item.id === product.id
      );

      if (!isProductInCart) {
        existingCart.push(product);

        await AsyncStorage.setItem("cart", JSON.stringify(existingCart));

        Alert.alert("Produit ajouté", "Le produit a été ajouté au panier.");
      } else {
        Alert.alert(
          "Produit déjà présent",
          "Le produit est déjà dans le panier."
        );
      }
    } catch (error) {
      console.log("Erreur lors de l'ajout au panier : ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={35} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="heart" size={35} color={COLORS.green} />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: product.thumbnail }} style={styles.image} />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{product.title}</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{product.price} $</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color={"gold"} />
            ))}
            <Text style={{ color: COLORS.gray }}> ({product.rating})</Text>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>{product.description}</Text>
        </View>
        <View style={{ margin: 30, alignItems: "center" }}>
          <ReusableBtn
            onPress={handleAddToCart}
            btnText={"  Ajouter au panier"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
            icon={"shopping-bag"}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
