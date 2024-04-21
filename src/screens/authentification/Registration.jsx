import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { HeightSpacer, ReusableBtn, WidthSpacer } from "../../components";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/authUser";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Mot de passe doit être d'au moins 6 caractères")
    .required("Requis"),
  username: Yup.string()
    .min(3, "Le nom d'utilisateur doit comporter au moins 3 caractères")
    .required("Requis"),
  email: Yup.string().email("Fournir un email valide").required("Requis"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "les mots de passe doivent correspondrent"
    )
    .required("Requis"),
});

const Registration = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [obsecureText, setObsecureText] = useState(true);

  const handleRegister = async (registerData) => {
    Alert.alert(
      "Confirmation",
      `Vous souhaitez créer un compte avec pour nom d'utilisateur ${registerData.username}`,
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Confirmer",
          onPress: () => {
            setIsLoading(true);
            dispatch(createUser({ ...registerData }, handleRegisterCallback));
          },
        },
      ]
    );
  };

  const handleRegisterCallback = ({ success, message }) => {
    if (success) {
      setIsLoading(false);
      Alert.alert(
        "Succès",
        "compte crée avec succès! Vous pouvez à present vous connectez.",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "AuthTopTab" }],
                })
              );
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      setIsLoading(false);
      Alert.alert(
        "Echec",
        message,
        [
          {
            text: "OK",
          },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="always"
      extraScrollHeight={50}
      enableResetScrollToCoords={false}
    >
      <ScrollView style={styles.container2}>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(value) => {
            handleRegister({
              ...value,
            });
          }}
        >
          {({
            handleChange,
            touched,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched,
          }) => (
            <View style={{ paddingTop: 30 }}>
              <View style={styles.wrapper}>
                <View>
                  <View
                    style={styles.inputWrapper(
                      touched.username ? COLORS.lightBleu : COLORS.lightGray
                    )}
                  >
                    <MaterialCommunityIcons
                      name="face-man-profile"
                      size={20}
                      color={COLORS.gray}
                    />

                    <WidthSpacer width={10} />

                    <TextInput
                      placeholder="Nom d'utilisateur"
                      onFocus={() => {
                        setFieldTouched("username");
                      }}
                      onBlur={() => {
                        setFieldTouched("username", "");
                      }}
                      value={values.username}
                      onChangeText={handleChange("username")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {errors.username && (
                    <Text style={styles.errorMessage}>{errors.username}</Text>
                  )}
                </View>
              </View>

              <View style={styles.wrapper}>
                <View>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.lightBleu : COLORS.lightGray
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                    />

                    <WidthSpacer width={10} />

                    <TextInput
                      placeholder="Email"
                      onFocus={() => {
                        setFieldTouched("email");
                      }}
                      onBlur={() => {
                        setFieldTouched("email", "");
                      }}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>
              </View>

              <View style={styles.wrapper}>
                <View>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.lightBleu : COLORS.lightGray
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                    />

                    <WidthSpacer width={10} />

                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder="Mot de passe"
                      onFocus={() => {
                        setFieldTouched("password");
                      }}
                      onBlur={() => {
                        setFieldTouched("password", "");
                      }}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        setObsecureText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
              </View>

              <View style={styles.wrapper}>
                <View>
                  <View
                    style={styles.inputWrapper(
                      touched.confirmPassword
                        ? COLORS.lightBleu
                        : COLORS.lightGray
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                    />

                    <WidthSpacer width={10} />

                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder={"confirmer le mot de passe"}
                      onFocus={() => {
                        setFieldTouched("confirmPassword");
                      }}
                      onBlur={() => {
                        setFieldTouched("confirmPassword", "");
                      }}
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        setObsecureText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>

                  {errors.confirmPassword && (
                    <Text style={styles.errorMessage}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>
              </View>

              <HeightSpacer height={20} />

              <View style={{ alignItems: "center" }}>
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
                    onPress={handleSubmit}
                    btnText={"S'inscrire"}
                    width={SIZES.width - 40}
                    backgroundColor={COLORS.green}
                    borderColor={COLORS.green}
                    borderWidth={0}
                    textColor={COLORS.white}
                  />
                )}
              </View>
            </View>
          )}
        </Formik>
        <HeightSpacer height={150} />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Registration;
