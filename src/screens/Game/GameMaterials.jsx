import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: "white"
  },
});

function GameMaterials({ navigation }) {
  return (
    <View style={styles.root}>
      <Button
        title="Reading!"
        onPress={() => navigation.navigate("ReadingIntro")}
      />
      <Button
        title="Math!"
        onPress={() => navigation.navigate("MathIntro")}
      />
      <Button
        title="Trivia!"
        onPress={() => navigation.navigate("TriviaIntro")}
      />
      <Button
        title="Prompts!"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("WritingIntro")}
      />
      <Button
        title="Complete!"
        onPress={() => navigation.navigate("ExercisesCompleted")}
      />
      <Button
        title="Extra Practice"
        onPress={() => navigation.navigate("ExtraPractice")}
      />
    </View>
  );
}

GameMaterials.propTypes = {
  navigation: PropTypes.object,
};

export default GameMaterials;
