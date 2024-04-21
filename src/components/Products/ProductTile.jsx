import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";

const ProductTile = ({ item, onPressDelete, onUpdateQuantity }) => {
  const [count, setCount] = useState(item.quantity || 1);

  const increment = () => {
    setCount(count + 1);
    onUpdateQuantity(item.id, count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      onUpdateQuantity(item.id, count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />

        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{item.price} $</Text>

            <View style={styles.rating}>
              <TouchableOpacity onPress={decrement}>
                <SimpleLineIcons name="minus" size={23} />
              </TouchableOpacity>

              <Text style={{ color: COLORS.gray }}>  {count}  </Text>

              <TouchableOpacity onPress={increment}>
                <SimpleLineIcons name="plus" size={23} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={onPressDelete}>
        <AntDesign name="delete" size={24} color={COLORS.red} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
    margin: 10,
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center", // Alignement vertical centré
    flex: 1, // Pour que cette vue occupe l'espace disponible
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: "medium",
    color: COLORS.black,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center", // Alignement vertical centré
  },
  price: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.green,
    marginRight: 10, // Ajout de marge à droite pour séparer le prix de la quantité
  },
  rating: {
    flexDirection: "row",
    alignItems: "center", // Alignement vertical centré
  },
  deleteButton: {
    padding: 10,
  },
});

export default ProductTile;
