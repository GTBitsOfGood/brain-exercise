import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 30,
  },
  button: {
    alignContent: "space-between",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "100",
    fontSize: 40,
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
    flex: 3,
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
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  squareButtonTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
  },
  imageContainer: {
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

//  Home Screen Navigation
function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/bei_edited.png")}
        />
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
            onPress={() => navigation.navigate("Video")}
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
