import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import PropTypes from "prop-types";
import StepIndicator from "react-native-step-indicator";
import FeatherIcon from "react-native-vector-icons/Feather";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    marginVertical: 8,
    color:"#4A4B57",
  },

  button: {
    alignContent: "space-between",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "100",
    fontSize: 30,
    backgroundColor: "#005AA3",
    margin: 20,
  },
  squareButton: {
    width: 99,
    height: 99,
    backgroundColor: "white",
    borderColor: "#005AA3",
    borderWidth: 5,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 2,
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
  },
  buttonTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  squareButtonTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    height: 150,
    borderRadius: 2,
    flexDirection: "column",
    padding: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
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

const logo = require("../../assets/bei_edited.png");

//  Home Screen Navigation
function HomeScreen({ navigation }) {
  const youtubeChannelURL = 'https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA'
  return (

    <View style={styles.root}>

      <Text style={styles.title}>X of X Days</Text>

      <StepIndicator customStyles={customStyles} currentPosition={2} />

      <Text style={styles.title}>Keep Going!</Text>
      {/* Home Screen Step Indicator */}

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={logo} />
      </View>

      {/* Home Screen Navigation Buttons: */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GameOverview")}
      >
        <Text style={styles.buttonTitle}>{"Start Exercises"}</Text>
      </TouchableOpacity>

      <View style={styles.buttonsContainer}>
        <View>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate("SettingsScreen")}
          >
            <FeatherIcon size={45} name="settings" />
          </TouchableOpacity>
          <Text style={styles.squareButtonTitle}>{"Settings"}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => Linking.openURL(youtubeChannelURL)}
          >
            <FeatherIcon size={45} name="youtube" />
          </TouchableOpacity>
          <Text style={styles.squareButtonTitle}>{"Video"}</Text>
        </View>
      </View>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
