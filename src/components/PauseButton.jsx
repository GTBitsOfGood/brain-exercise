import React from "react";
import { Button } from "react-native-elements";

export default function PauseButton(props) {
  return (
    <Button
      {...props}
      title="Pause"
      titleStyle={{
        color: "black",
        fontSize: 16,
      }}
      buttonStyle={{
        backgroundColor: "transparent",
        marginRight: 10,
        borderColor: "#005AA3",
      }}
      type="clear"
    />
  );
}