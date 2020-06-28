import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 30,
  },
});

function GameOverview({ navigation }) {
  return (
    <View style={styles.root}>
      <Text>Game Overview Screen</Text>
      <Button
        title="GameMaterials"
        style={styles.button}
        onPress={() => navigation.navigate("GameMaterials")}
      />
    </View>
  );
}

GameOverview.propTypes = {
  navigation: PropTypes.object,
};

export default GameOverview;
