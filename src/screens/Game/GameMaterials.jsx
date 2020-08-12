import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 30,
  },
});

function GameMaterials({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Before you start, make sure you have the required materials!</Text>
      <Button
        title="Reading!"
        onPress={() => navigation.navigate("ReadingIntro")}
      />
      <Button
        title="Math!"
        onPress={() => navigation.navigate("Gameplay")}
      />
      <Button
        title="Trivia!"
        onPress={() => navigation.navigate("TriviaScreen")}
      />
      <Button
        title="Prompts!"
        onPress={() => navigation.navigate("PromptScreen")}
      />
      <Button
        title="Complete!"
        onPress={() => navigation.navigate("ExercisesCompleted")}
      />
    </View>
  );
}

GameMaterials.propTypes = {
  navigation: PropTypes.object,
};

export default GameMaterials;
