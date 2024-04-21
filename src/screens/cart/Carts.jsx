import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import styles from "./Carts.style";
import { fetchUserCarts } from "../../redux/actions/carts";

const Carts = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { userCarts } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.authUser);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        await dispatch(fetchUserCarts(user.id));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user carts:", error);
        setLoading(false);
      }
    };

    fetchCarts();
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cartItem}>
      <Text style={styles.cartTitle}>Cart ID: {item.id}</Text>
      <Text>Total: {item.total} $</Text>
      {/* Add more cart details here */}
    </TouchableOpacity>
  );

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
          <Text style={styles.heading}>Mes paniers</Text>
        </View>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.green} />
          </View>
        ) : (
          <View style={{ marginTop: 70 }}>
            {userCarts.length === 0 ? (
              <View>
                <Text style={styles.noCartText}>Aucun panier enregistré</Text>
              </View>
            ) : (
              <FlatList
                data={userCarts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Carts;
