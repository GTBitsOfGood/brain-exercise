import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import PropTypes from "prop-types";
import StepIndicator from "react-native-step-indicator";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useFocusEffect } from "@react-navigation/native";
import { getStreak } from "../../scripts/progressbar-logic";
import { Input } from "react-native-elements";
import Text from "../../components/Text";
import { Button } from "react-native-elements";
// import Button from "../../components/Button";

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
    height: Platform.isPad ? 200 : Dimensions.get("window").height * 0.1,
  },
  textInput: {
    height: "20%",
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
});

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 8,
  separatorStrokeUnfinishedWidth: 8,
  separatorStrokeFinishedWidth: 8,
  stepStrokeWidth: 0,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: "#005AA3",
  stepStrokeFinishedColor: "#005AA3",
  stepStrokeUnfinishedColor: "#005AA3",
  separatorFinishedColor: "#005AA3",
  separatorUnFinishedColor: "#dbdbdb",
  stepIndicatorFinishedColor: "#005AA3",
  stepIndicatorUnFinishedColor: "#dbdbdb",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnfinishedColor: "#000000",
};

const logo = require("../../assets/bei.jpg");

//  Home Screen Navigation
function SignUpOption2({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const isFormValid = () => {
    if (!/^\(\d{3}\)\s\d{3}-\d{4}/.test(phoneNumber)) {
      return false;
    }

    if (password.length == 0) {
      return false;
    }

    if (password !== repeatPassword) {
      return false;
    }

    return true;
  };

  return (
    <View style={styles.root}>
      <View style={{ flex: 1 }}>
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
        <SafeAreaView>
          <Text style={styles.textInputTitle}>Phone Number</Text>
          <TextInput
            placeholder="(XXX) XXX-XXXX"
            style={styles.textInput}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />

          <Text style={styles.textInputTitle}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
          />

          <Text style={styles.textInputTitle}>Repeat Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChangeText={setRepeatPassword}
            value={repeatPassword}
          />
        </SafeAreaView>
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
          title="Sign Up"
          onPress={() => navigation.navigate("PersonalInfo")}
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
          Already Have an Account?{" "}
        </Text>

        {/* TODO: change navigation to navigate to the login screen */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={{ fontSize: 14, color: "#005AA3", fontWeight: "bold" }}>
            Log In
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

SignUpOption2.propTypes = {
  navigation: PropTypes.object,
};

export default SignUpOption2;
