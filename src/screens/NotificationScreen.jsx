import React from "react";
import { View, Text } from "react-native";
import SwitchToggle from "./Components/SwitchToggle.jsx";

function NotificationScreen() {
  return (
    <View>
      <Text>Notifications</Text>
      <SwitchToggle></SwitchToggle>
    </View>
  );
}

export default NotificationScreen;
