import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import { Platform } from "react-native";
import Carts from "../screens/cart/Carts";

// Crée un objet Tab Navigator
const Tab = createBottomTabNavigator();

// Style personnalisé pour la barre de navigation inférieure
const tabBarStyle = {
  height: Platform.OS === "ios" ? 80 : 60,
  position: "absolute",
};

// Composant principal pour la navigation par onglets inférieurs
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRoutename="Home"
      activeColor="#EB6A58"
      tabBarHideKeyBoard={true}
      headerShown={false}
      inactiveColor="#3e2465"
      tabBarStyle={{ paddingBottom: 48 }}
    >
      <Tab.Screen
        name={"Accueil"}
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? COLORS.green : COLORS.gray}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Mes paniers"}
        component={Carts}
        options={{
          tabBarStyle: tabBarStyle,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              color={focused ? COLORS.green : COLORS.gray}
              size={30}
            />
          ),
        }}
      />

      
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
