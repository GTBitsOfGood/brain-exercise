import React from "react";
import { View, Text } from "react-native";

interface Props {
  color: string;
  icon: JSX.Element;
  title: string;
  caption: string;
  stat: string;
  statColor: string;
}

export default function OneLineCaptionComponent({
  color,
  icon,
  title,
  caption,
  stat,
  statColor,
}: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "92%",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E3EAFC",
        backgroundColor: `${color}`,
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "4%",
        paddingRight: "4%",
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {icon}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "3%",
          }}
        >
          <Text
            style={{
              color: "#2B3674",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#2B3674",
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            {caption}
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: `${statColor}`,
          fontSize: 36,
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        {stat}
      </Text>
    </View>
  );
}
