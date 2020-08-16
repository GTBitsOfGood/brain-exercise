import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 30,
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
  },
});

function GameMaterials({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>
        Before you start, make sure you have the required materials!
      </Text>
      <Button
        title="Reading!"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("ReadingIntro")}
      />
      <Button
        title="Math!"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("MathIntro")}
      />
      <Button
        title="Trivia!"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("TriviaScreen")}
      />
      <Button
        title="Prompts!"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("WritingIntro")}
      />
      <Button
        title="Complete!"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("ExercisesCompleted")}
      />
    </View>
  );
}

GameMaterials.propTypes = {
  navigation: PropTypes.object,
};

export default GameMaterials;
