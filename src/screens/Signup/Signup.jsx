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
  SafeAreaView
} from "react-native";
import PropTypes from "prop-types";
import StepIndicator from "react-native-step-indicator";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useFocusEffect } from "@react-navigation/native";
import { getStreak } from "../../scripts/progressbar-logic";
import { Input } from 'react-native-elements';
import Text from "../../components/Text";
import { Button } from "react-native-elements";
// import Button from "../../components/Button";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'flex-start',
    padding: '5%',
    backgroundColor: "white",
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    marginVertical: 8,
    color:"#4A4B57",
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
    height:  Platform.isPad ? 200 : Dimensions.get('window').height * 0.1,
  },
  textInput: {
    height: '20%',
    width: '100%',
    marginBottom: '5%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#4A4B57',
    padding: '2%'
  },
  textInputTitle: {
    color: '#4A4B57',
    fontSize: 14
  }
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
function SignUpScreen({ navigation }) {
  const [streak, setStreak] = useState(0);
  const [message, setMessage] = useState("");

  const onGetStreakComplete = (retrievedStreak) => {
    let m;
    if (retrievedStreak === 0) {
      m = "Let's Get Started!";
    } else if (retrievedStreak < 5) {
      m = "Keep Going!";
    } else if (retrievedStreak === 5) {
      m = "Well Done!";
    }
    setStreak(retrievedStreak);
    setMessage(m);
  };

  return (
    <View style={styles.root}>

      <View style={{ flex: 1 }}>
        <Image style={styles.image} source={logo} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4A4B57', paddingLeft: '3%', paddingTop: '2%' }}>Sign Up</Text>
      </View>

      <View style={{ flex: 3, paddingVertical: '5%', paddingHorizontal: '3%', width: '100%' }}>
        <SafeAreaView>

        <Text style={styles.textInputTitle}>Phone Number</Text>
        <TextInput
          style={styles.textInput}
          value={'hello'}
        />

        <Text style={styles.textInputTitle}>Password</Text>
        <TextInput
          style={styles.textInput}
          value={'t'}
        />

        <Text style={styles.textInputTitle}>Repeat Password</Text>
        <TextInput            
          style={styles.textInput}
          value={'yes'}
        />
        </SafeAreaView>
      </View>
      {/* Home Screen Navigation Buttons: */}

      <View style={{ flex: 2, alignSelf: 'center', paddingHorizontal: '3%', margin: 0 }}>
        <Button
          containerStyle={{ width: 0.85*(Dimensions.get('window').width), padding: '1%' }}
          buttonStyle={{ backgroundColor: '#005AA3', borderRadius: 4, height: 0.15*(Dimensions.get('window').width) }}
          titleStyle={styles.buttonTitle}
          title="Sign Up"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>

    </View>
  );
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignUpScreen;
