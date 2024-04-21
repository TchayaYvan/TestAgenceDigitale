import { ActivityIndicator, Alert, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { HeightSpacer, ReusableBtn, WidthSpacer } from "../../components";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/authUser";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Requis"),
  username: Yup.string().required("Requis"),
});

const Signin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [obsecureText, setObsecureText] = useState(true);

  const handleConnect = async (values) => {
    setSubmitting(true);
    dispatch(loginUser({ ...values }, handleConnectCallback));
  };

  const handleConnectCallback = ({ success, message }) => {
    setSubmitting(false);
    if (success) {
      navigation.replace("Bottom");
    } else {
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
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleConnect}
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

            <HeightSpacer height={20} />

            {submitting ? (
              <ActivityIndicator size="large" color={COLORS.green} />
            ) : (
              <ReusableBtn
                onPress={handleSubmit}
                btnText={"Connexion"}
                width={SIZES.width - 40}
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
              />
            )}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signin;
