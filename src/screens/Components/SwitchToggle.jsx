import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // padding: 30,
    flex: 0.3,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

function SwitchToggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#4169e1" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default SwitchToggle;
