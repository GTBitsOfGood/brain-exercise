import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from '../../styles/intro';

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
