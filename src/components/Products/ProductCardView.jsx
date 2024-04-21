import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./ProductCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductCardView = ({ product }) => {
  const navigation = useNavigation();

  const handleAddToCart = async () => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      const existingCart = cart ? JSON.parse(cart) : [];
  
      const isProductInCart = existingCart.some(item => item.id === product.id);
  
      if (!isProductInCart) {
        existingCart.push(product);
  
        await AsyncStorage.setItem('cart', JSON.stringify(existingCart));
  
        Alert.alert('Produit ajouté', 'Le produit a été ajouté au panier.');
      } else {
        Alert.alert('Produit déjà présent', 'Le produit est déjà dans le panier.');
      }
    } catch (error) {
      console.log('Erreur lors de l\'ajout au panier : ', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", { product: product })
      }
    >
      <View key={product.id} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {product.brand}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            {product.price} $
          </Text>
        </View>

        <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
          <Ionicons name="add-circle" size={35} color={COLORS.green} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
