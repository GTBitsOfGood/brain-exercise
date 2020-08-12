import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "react-native-gesture-handler";

const styles = StyleSheet.create({
  root: {
    flex: .9,
    alignContent: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 100,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
})

function GameOverview({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>You will be completing a mixture of Math, Reading, and Writing exercises.</Text>
      <Button
        title="Game Materials" // change back to game materials
        onPress={() => navigation.navigate("GameMaterials")}
      />
    </View>
  );
}

GameOverview.propTypes = {
  navigation: PropTypes.object,
}

export default GameOverview;
