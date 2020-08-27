import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "react-native-gesture-handler";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    padding: 30,
    paddingTop: 100,
    backgroundColor: "white"
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
        title="Begin"
        onPress={() =>
          navigation.navigate("MathIntro", { nextScreen: "TriviaIntro" })
        }
      />
    </View>
  );
}

GameOverview.propTypes = {
  navigation: PropTypes.object,
}

export default GameOverview;
