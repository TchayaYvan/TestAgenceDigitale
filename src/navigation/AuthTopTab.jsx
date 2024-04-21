import { Keyboard, Platform, StatusBar, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registration, Signin } from "../screens";
import { COLORS } from "../constants/theme";
import { HeightSpacer, ReusableImage } from "../components";
import { useTranslation } from "react-i18next";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  const { t } = useTranslation();

  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight + 20 || 50 : 0;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        marginTop: -statusBarHeight,
      }}
    >
      <HeightSpacer height={80} />

      <ReusableImage
        source={require("../../assets/images/auth.jpg")}
        mode={"contain"}
        width={"100%"}
        height={200}
      />
      <View style={{ height: 600 }}>
        <Tab.Navigator>
          <Tab.Screen name={"connexion"} component={Signin} />
          <Tab.Screen
            name={"inscription"}
            component={Registration}
          />
        </Tab.Navigator>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthTopTab;
