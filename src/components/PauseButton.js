import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function PauseButton() {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity>
        <Image
          source={{
            uri:
              "https://i7.pngguru.com/preview/101/918/437/brand-pattern-pause-button-png-image.jpg",
          }}
          style={{ width: 40, height: 40, marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}
