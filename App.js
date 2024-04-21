import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as Splashscreen from "expo-splash-screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store";
import i18n from "./src/i18n/i18n";
import { useEffect } from "react";
import { Cart, Home, ProductDetails, Products } from "./src/screens";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
import AuthTopTab from "./src/navigation/AuthTopTab";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    light: require("./assets/fonts/light.otf"),
    medium: require("./assets/fonts/medium.otf"),
    bold: require("./assets/fonts/bold.otf"),
    xtrabold: require("./assets/fonts/xtrabold.otf"),
  });

  // Callback pour cacher l'écran de démarrage une fois que les polices sont chargées
  const onLayoutRootview = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      {/* PersistGate pour assurer la persistance des données Redux */}
      <PersistGate loading={null} persistor={persistor}>
        {/* I18nextProvider pour la gestion des langues */}
        <I18nextProvider i18n={i18n}>
          {/* NavigationContainer pour gérer la navigation */}
          <NavigationContainer onLayout={onLayoutRootview}>
            <AppContainer />
          </NavigationContainer>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

const AppContainer = () => {
  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator initialRouteName="AuthTopTab">
        <Stack.Screen name="AuthTopTab" component={AuthTopTab} options={{ headerShown: false}} />
        <Stack.Screen name="Bottom" component={BottomTabNavigation} options={{ headerShown: false}} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false}} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false}} />
        <Stack.Screen name="Products" component={Products} options={{ headerShown: false}} />
      </Stack.Navigator>
    </>
  );
};

export default App;
