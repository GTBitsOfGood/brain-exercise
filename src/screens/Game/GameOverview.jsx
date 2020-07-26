import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

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
    borderRadius: 10,
  }
});

function GameOverview({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Game Overview Screen</Text>
      <Button
        title="GameMaterials" // change back to game materials
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("GameMaterials")}
      />
    </View>
  );
}

GameOverview.propTypes = {
  navigation: PropTypes.object,
};

export default GameOverview;
