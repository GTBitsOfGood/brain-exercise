import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#005AA3",
  },
  quit: {
    backgroundColor: "#EEE",
  },
});

function Pause({ navigation, setPaused }) {
  return (
    <View style={styles.root}>
      <Text
        style={styles.text}
      >{`You're just getting started. Keep going!`}</Text>
      <Button
        title="Resume"
        buttonStyle={styles.button}
        onPress={() => {
          setPaused(false);
          navigation.goBack();
        }}
      />
      <Button
        title="Quit"
        buttonStyle={styles.quit}
        titleStyle={{ color: "red" }}
        onPress={() =>
          Alert.alert(
            "Quit the Game",
            "Are you sure? This will delete ALL of your progress.",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Quit",
                onPress: () => navigation.navigate("HomeScreen"),
              },
            ],
            { cancelable: false }
          )
        }
      />
    </View>
  );
}

Pause.propTypes = {
  navigation: PropTypes.object,
};

export default Pause;
