import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { useFocusEffect } from "@react-navigation/native";
import { sampleArticle, otherInterestingText } from "../../assets/stories";
import Text from "../../components/Text";
import Button from "../../components/Button";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    paddingVertical: 60,
    backgroundColor: "white"
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

const image = require("../../assets/books.png");

// Each article has a readAlready field to check if it should be presented again
// The text is a text array where the text is split up by \n characters
export const defaultStories = {
  article1: {
    text: otherInterestingText,
    readAlready: false,
  },
  article2: {
    text: sampleArticle,
    readAlready: false,
  },
};

const pullStories = async () => {
  const jsonStories = await AsyncStorage.getItem("STORIES");
  if (jsonStories !== null) {
    const parsedStories = await JSON.parse(jsonStories);
    return parsedStories;
  }
  return defaultStories;
};

function ReadingIntro({ navigation }) {
  const [stories, setStories] = useState(defaultStories);
  // Update stories when page is loaded
  useFocusEffect(
    React.useCallback(() => {
      pullStories().then((item) => setStories(item));
    })
  );
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.headInstruction}>
          Read the following passage aloud
        </Text>
        <Text style={styles.instructions}>Total time: 10 minutes</Text>
      </View>
      <Button
        title="Start Reading"
        buttonStyle={styles.nextButton}
        onPress={() => navigation.navigate("ReadingMain", stories)}
      />
    </View>
  );
}

ReadingIntro.propTypes = {
  navigation: PropTypes.object,
};

export default ReadingIntro;
