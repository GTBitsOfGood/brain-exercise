import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  TextInput,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { AVPlaybackSource } from "expo-av";
import { Button } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FirebaseError } from "firebase/app";

import Text from "../../components/Text";
import { emailSignUp } from "../../firebase/email_signin";
import { RootStackParamList } from "../../types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "flex-start",
    padding: "5%",
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    marginVertical: 8,
    color: "#4A4B57",
  },
  buttonTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  squareButtonTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  image: {
    width: 100,
    height:
      Platform.OS === "ios" && Platform.isPad
        ? 200
        : Dimensions.get("window").height * 0.1,
  },
  textInput: {
    height: 55,
    width: "100%",
    marginBottom: "5%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#4A4B57",
    padding: "2%",
    paddingTop: "2%",
  },
  textInputTitle: {
    color: "#4A4B57",
    fontSize: 14,
  },
  errorTitle: {
    color: "#ed0707",
    fontSize: 14,
  },
});

const logo = require("../../assets/bei.jpg") as AVPlaybackSource;

type Props = NativeStackScreenProps<RootStackParamList, "SignUpScreen">;

//  Home Screen Navigation
function SignUpScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const isFormValid = () => {
    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
      return false;
    }

    if (password.length === 0) {
      return false;
    }

    if (password !== repeatPassword) {
      return false;
    }

    return true;
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <SafeAreaView>
          <View style={{ height: 127 }}>
            <Image style={styles.image} source={logo} />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#4A4B57",
                paddingLeft: "3%",
                paddingTop: "2%",
              }}
            >
              Sign Up
            </Text>
          </View>

          <View
            style={{
              flex: 3,
              paddingVertical: "5%",
              paddingHorizontal: "3%",
              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={styles.textInputTitle}>Email Address*</Text>
            </View>

            <TextInput
              accessibilityRole="text"
              placeholder="username@email.com"
              style={styles.textInput}
              onChangeText={setEmail}
              value={email}
            />

            <Text style={styles.textInputTitle}>Password*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={setPassword}
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
            />

            <Text style={styles.textInputTitle}>Repeat Password*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={setRepeatPassword}
              value={repeatPassword}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
            <Text style={styles.errorTitle}>{error}</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignSelf: "center",
              paddingHorizontal: "3%",
              margin: 0,
            }}
          >
            <Button
              containerStyle={{
                width: 0.85 * Dimensions.get("window").width,
                padding: "1%",
              }}
              buttonStyle={{
                backgroundColor: "#005AA3",
                borderRadius: 4,
                height: 0.13 * Dimensions.get("window").width,
              }}
              titleStyle={styles.buttonTitle}
              disabled={!isFormValid()}
              title="Continue"
              onPress={() => {
                setError("");
                emailSignUp(email, password).catch((err: FirebaseError) => {
                  setError("Email is already in use");
                  if (err.code === "auth/email-already-in-use") {
                    setError("Email is already in use");
                  } else if (err.code === "auth/weak-password") {
                    setError("Password is too short");
                  } else {
                    setError("Unexpected error occured. Check your info");
                  }
                });
              }}
            />
          </View>

          <View
            style={{
              paddingHorizontal: "5%",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "5%",
            }}
          >
            <Text style={{ fontSize: 14, color: "#4A4B57" }}>
              Already Have an Account?&nbsp;
            </Text>

            {/* TODO: change navigation to navigate to the login screen */}
            <Pressable
              accessibilityRole="button"
              style={styles.buttonTitle}
              onPress={() => {
                navigation.navigate("SignInScreen");
              }}
            >
              <Text
                style={{ fontSize: 14, color: "#005AA3", fontWeight: "bold" }}
              >
                Log In
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export default SignUpScreen;
