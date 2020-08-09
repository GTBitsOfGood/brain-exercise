import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import ConfettiCannon from "react-native-confetti-cannon";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-community/async-storage";
import { incrementStreak } from "../../scripts/progressbar-logic";
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    marginVertical: 30,
  },
  goodWork: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 20,
  },
  message: {
    fontSize: 23,
    textAlign: "center",
    marginVertical: 15,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 10,
  },
});

function ExercisesCompleted({ navigation }) {
  useEffect(() => {
    incrementStreak();
  }, []);

  return (
    <View style={styles.root}>
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        autoStart={true}
        fadeOut={false}
      />
      <View>
        <Text style={styles.goodWork}>Good work!</Text>
        <Text style={styles.message}>
          You have completed all of today&apos;s exercises
        </Text>
        <Button
          title="Finish"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("FinishedScreen")}
        />
      </View>
    </View>
  );
}

ExercisesCompleted.propTypes = {
  navigation: PropTypes.object,
};

export default ExercisesCompleted;
