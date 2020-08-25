import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
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

const image = require("../../assets/writing_icon.png");

// Each article has a readAlready field to check if it should be presented again
// The text is a text array where the text is split up by \n characters

function WritingIntro({ navigation }) {
  // Update stories when page is loaded

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.headInstruction}>
          Grab some paper and a pencil and write what you see
        </Text>
        <Text style={styles.instructions}>Total time: 5 minutes</Text>
      </View>
      <Button
        title="Start Writing"
        buttonStyle={styles.nextButton}
        onPress={() => navigation.navigate("PromptScreen")}
      />
    </View>
  );
}

WritingIntro.propTypes = {
  navigation: PropTypes.object,
};

export default WritingIntro;
