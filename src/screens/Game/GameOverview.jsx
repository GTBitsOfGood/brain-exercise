import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
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
        title="GameMaterials"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("ReadingIntro")}
      />
    </View>
  );
}

GameOverview.propTypes = {
  navigation: PropTypes.object,
};

export default GameOverview;
