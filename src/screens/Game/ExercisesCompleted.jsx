import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-community/async-storage";
import { incrementStreak } from "../../scripts/progressbar-logic";
import Button from "../../components/Button";
import Text from "../../components/Text";

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

const getCount = async () => {
  const storedSettings = await AsyncStorage.getItem("SETTINGS")
  const settings = await JSON.parse(storedSettings)
  return settings.animationOn ? 200 : 0
}

function ExercisesCompleted({ navigation }) {
  useEffect(() => {
    incrementStreak();
  }, []);

  const [count, setCount] = React.useState(200)
  getCount().then(ct => {
    setCount(ct)
  })

  return (
    <View style={styles.root}>
      <ConfettiCannon
        count={count}
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
