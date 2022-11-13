import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
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
  Alert,
} from "react-native";
import PropTypes from "prop-types";
import StepIndicator from "react-native-step-indicator";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useFocusEffect } from "@react-navigation/native";
import { getStreak } from "../../scripts/progressbar-logic";
import { Input } from "react-native-elements";
import Text from "../../components/Text";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import axios from "axios";
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
    height: "10%",
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
  stepStrokeCurrentColor: "#0363f5",
  stepStrokeFinishedColor: "#0363f5",
  stepStrokeUnfinishedColor: "#0363f5",
  separatorFinishedColor: "#0363f5",
  separatorUnFinishedColor: "#dbdbdb",
  stepIndicatorFinishedColor: "#0363f5",
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
function SignUpOption1({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [secondContactName, setSecondContactName] = useState("");
  const [secondContactNumber, setSecondContactNumber] = useState("");

  const dispatch = useDispatch();
  const onboardingState = useSelector((state) => state.onboarding);

  const isFormValid = () => {
    if (fullName.length == 0) {
      return false;
    }

    if (!/^\(\d{3}\)\s\d{3}-\d{4}/.test(phoneNumber)) {
      return false;
    }

    if (!/^\d{2}-\d{2}-\d{4}/.test(dateofBirth)) {
      return false;
    }

    if (secondContactName.length == 0) {
      return false;
    }

    if (!/^\(\d{3}\)\s\d{3}-\d{4}/.test(secondContactNumber)) {
      return false;
    }

    return true;
  };

  return (
    <ScrollView
      contentContainerStyle={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
          Let's Get Started
        </Text>
      </View>

      <KeyboardAvoidingView
        style={{
          flex: 5,
          paddingVertical: "5%",
          paddingHorizontal: "3%",
          width: "100%",
        }}
      >
        <SafeAreaView>
          <Text style={styles.textInputTitle}>Full Name</Text>
          <TextInput
            placeholder="Full Name"
            style={styles.textInput}
            onChangeText={setFullName}
            value={fullName}
          />

          <Text style={styles.textInputTitle}>Phone Number: (XXX) XXX-XXXX</Text>
          <TextInput
            placeholder="(XXX) XXX-XXXX"
            onChangeText={setPhoneNumber}
            style={styles.textInput}
            value={phoneNumber}
          />

          <Text style={styles.textInputTitle}>Date of Birth: MM-DD-YYYY</Text>
          <TextInput
            placeholder="MM-DD-YYYY"
            onChangeText={setDateofBirth}
            style={styles.textInput}
            value={dateofBirth}
          />

          <Text style={styles.textInputTitle}>Secondary Contact Name</Text>
          <TextInput
            placeholder="Full Name"
            onChangeText={setSecondContactName}
            style={styles.textInput}
            value={secondContactName}
          />

          <Text style={styles.textInputTitle}>Secondary Contact Phone: (XXX) XXX-XXXX</Text>
          <TextInput
            placeholder="(XXX) XXX-XXXX"
            onChangeText={setSecondContactNumber}
            style={styles.textInput}
            value={secondContactNumber}
          />

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
            onPress={() => {
              axios.post('/signup', {
                name: fullName,
                email: "TODO WE HAVE TO SETUP A WAY TO COLLECT EMAIL OR REMOVE IT FROM USER MODEL ON BACKEND",
                phoneNumber: phoneNumber,
                auth0AccessToken: onboardingState.auth0AccessToken,
                username: onboardingState.name, // Probably should remove or come up with a better way of handling
                password: "TODO REMOVE BECAUSE WE DON'T STORE PASSWORDS (AUTH0 HANDLES IT)",
                birthdate: dateofBirth,
                // secondaryContactName: secondContactName, // Not implemented in backend yet
                // secondaryContactNumber: secondContactNumber, // Not implemented in backend yet
                accessToken: onboardingState.auth0AccessToken,
              }).then((res) => {
                const user = res.data;
                user.jwt = onboardingState.jwt;
                user.authenticated = true;
                dispatch(login(user));
                navigation.navigate("HomeScreen");
              }).catch((err) => {
                Alert.alert('Authentication error! Please try again at another time');
              });
            }}
          />

          <View
            style={{
              flex: 1,
              paddingHorizontal: "5%",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 14, color: "#4A4B57" }}>
              {"Already Have an Account? "}
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
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

SignUpOption1.propTypes = {
  navigation: PropTypes.object,
};

export default SignUpOption1;
