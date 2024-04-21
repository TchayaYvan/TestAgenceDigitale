import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./cart.style";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductTile, ReusableBtn } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/actions/carts";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { user } = useSelector((state) => state.authUser);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem("cart");
        if (cart) {
          setCartItems(JSON.parse(cart));
        }
      } catch (error) {
        console.log("Erreur lors de la récupération du panier : ", error);
      }
    };

    getCartItems();
  }, []);

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  console.log(cartItems.id);

  const handleSaveCart = () => {
    // Afficher une alerte de confirmation
    Alert.alert(
      "Confirmation",
      "Voulez-vous vraiment enregistrer le panier ?",
      [
        {
          text: "Annuler",
          onPress: () =>
            console.log("Annulation de l'enregistrement du panier"),
          style: "cancel",
        },
        {
          text: "Confirmer",
          onPress: () => {
            setIsLoading(true);

            const products = cartItems.map((item) => ({
              id: item.id,
              quantity: item.quantity,
            }));

            dispatch(
              addCart(
                {
                  userId: user.id,
                  products: products,
                },
                (response) => {
                  if (response.success) {
                    alert("Panier enregistré avec succès !");
                  } else {
                    alert("Échec de l'enregistrement du panier.");
                  }
                  setIsLoading(false);
                }
              )
            );
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleDelete = async (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);

    try {
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCartItems));
      console.log("Produit retiré du panier avec succès.");
    } catch (error) {
      console.log(
        "Erreur lors de la suppression du produit du panier :",
        error
      );
    }
  };

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

          <Text style={styles.heading}>Panier</Text>
        </View>
        {cartItems.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Panier vide !</Text>
          </View>
        ) : (
          <>
            <View style={styles.cartlist}>
              <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                  <ProductTile
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onPressDelete={() => handleDelete(item.id)}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>

            <View style={{ margin: 30, alignItems: "center" }}>
              {isLoading ? (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    marginVertical: 20,
                  }}
                >
                  <ActivityIndicator size="large" color={COLORS.green} />
                </View>
              ) : (
                <ReusableBtn
                  onPress={handleSaveCart}
                  btnText={"Enregister le panier"}
                  width={SIZES.width - 40}
                  backgroundColor={COLORS.green}
                  borderColor={COLORS.green}
                  borderWidth={0}
                  textColor={COLORS.white}
                />
              )}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Cart;
