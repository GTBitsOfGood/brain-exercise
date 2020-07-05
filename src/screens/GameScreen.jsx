import React from "react";
import { View, Text } from "react-native";
import ProgressBar from "./../components/ProgressBar"

function GameScreen() {
  return (
    <View>
      <Text>Game Screen</Text>
      <ProgressBar
        seconds={120}
        red={30}
        func={2 == 1+1} // function here
      />
    </View>
  );
}

export default GameScreen;
