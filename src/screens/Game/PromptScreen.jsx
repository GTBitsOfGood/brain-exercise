import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { useFocusEffect } from "@react-navigation/native";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 25,
    marginVertical: 60,
  },
  instructions: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  headInstruction: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  nextButton: {
    marginTop: 20,
    width: 320,
    height: 55,
    borderRadius: 5,
    backgroundColor: "#005AA3",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    height: 200,
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

function PromptScreen({ route, navigation }) {
  return (
    <View style={styles.root}>
      <Button
        title="Finish Writing"
        buttonStyle={styles.nextButton}
        onPress={() => navigation.navigate("ReadingIntro")} //Todo change to PromptScreen
      />
    </View>
  );
}
PromptScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
export default PromptScreen;
