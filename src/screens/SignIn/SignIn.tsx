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
  ImageRequireSource,
} from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { AuthError } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Text from "../../components/Text";
import { emailSignIn } from "../../firebase/email_signin";
import { Role, RootStackParamList } from "../../types";
import { AuthUser } from "../../redux/reducers/authReducer/types";
import { login } from "../../redux/reducers/authReducer";

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

const logo = require("../../assets/bei.jpg") as ImageRequireSource;

type Props = NativeStackScreenProps<RootStackParamList, "SignInScreen">;

//  Home Screen Navigation
function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const isFormValid = () => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email)) {
      return false;
    }

    if (password.length === 0) {
      return false;
    }
    return true;
  };

  return (
    <View style={styles.root}>
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
          Sign In
        </Text>
      </View>

      <View
        style={{
          flex: 3,
          paddingVertical: 5,
          paddingHorizontal: "3%",
          width: "100%",
        }}
      >
        <ScrollView>
          <SafeAreaView>
            <Text style={styles.textInputTitle}>Email</Text>
            <TextInput
              placeholder="username@email.com"
              style={styles.textInput}
              onChangeText={setEmail}
              value={email}
              accessibilityLabel="Input field for email of user"
              accessibilityHint="The text written in this input field will be saved as the user's email address"
            />

            <Text style={styles.textInputTitle}>Password</Text>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              accessibilityLabel="Input field for password of user's account"
              accessibilityHint="The text typed here is the password of the user's account"
            />
            <Text style={styles.errorTitle}>{error}</Text>
          </SafeAreaView>
        </ScrollView>
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
          title="Sign In"
          onPress={() => {
            setError("");
            emailSignIn(email, password)
              .then((res) => {
                // !! Should add call to backend to retrieve rest of the information !!
                const userObject: Partial<AuthUser> = {
                  email: res.email,
                  authenticated: true,
                  role: Role.NONPROFIT_USER,
                };
                dispatch(login(userObject));

                // navigation.navigate("HomeScreen");
              })
              .catch((err: AuthError) => {
                console.debug(err);
                if (err.code === "auth/wrong-password") {
                  setError("Incorrect password");
                } else if (err.code === "auth/user-not-found") {
                  setError("Email not found");
                } else {
                  setError("Unexpected error occured. Check your info");
                }
              });
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: "5%",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ fontSize: 14, color: "#4A4B57" }}>
          Don&apos;t Have an Account?&nbsp;
        </Text>

        {/* TODO: change navigation to navigate to the login screen */}
        <Pressable
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
          accessibilityRole="button"
        >
          <Text style={{ fontSize: 14, color: "#005AA3", fontWeight: "bold" }}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignInScreen;
