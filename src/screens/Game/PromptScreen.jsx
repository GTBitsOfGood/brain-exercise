import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    paddingVertical: 60,
    backgroundColor: "white"
  },
  instructions: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  headInstruction: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  nextButton: {
    marginTop: 20,
    width: 320,
    height: 55,
    borderRadius: 5,
    backgroundColor: "#005AA3",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    height: 200,
    borderRadius: 2,
    flexDirection: "column",
    padding: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});

function PromptScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Button
        title="Finish Writing"
        buttonStyle={styles.nextButton}
        onPress={() => navigation.navigate("ReadingIntro")}
      />
    </View>
  );
}
PromptScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
export default PromptScreen;
