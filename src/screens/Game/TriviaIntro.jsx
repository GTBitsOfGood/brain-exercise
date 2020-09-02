import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from '../../styles/intro';

const image = require("../../assets/Trivia_Icon.png");

function TriviaIntro({ navigation, route }) {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.headInstruction}>Grab a pencil and some paper.</Text>
        <Text style={styles.subInstructions}>Writing is a great way to exercise your brain so please write each trivia question first before answering.</Text>
        <Text style={styles.instructions}>Total time: 5 minutes</Text>
      </View>
      <Button
        title="Start Writing"
        buttonStyle={styles.nextButton}
        onPress={() => navigation.navigate("TriviaScreen", { shouldReturn: route.params ? route.params.shouldReturn : false })}
      />
    </View>
  );
}

TriviaIntro.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default TriviaIntro;
