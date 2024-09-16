import React from "react";
import { View, Text } from "react-native";

interface Props {
  icon: JSX.Element;
  title: string;
  stat: number;
  statColor: string;
}

export default function OneLineComponent({
  icon,
  title,
  stat,
  statColor,
}: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "92%",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E3EAFC",
        backgroundColor: "#FFF",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "4%",
        paddingRight: "4%",
        marginVertical: "2%",
        shadowColor: "#7090B0",
        shadowOffset: { width: 14, height: 17 },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 5,
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "#F4F7FE",
            borderRadius: 50,
          }}
        >
          {icon}
        </View>
        <Text
          style={{
            color: "#2B3674",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "600",
            paddingLeft: "3%",
          }}
        >
          {title}
        </Text>
      </View>
      <Text
        style={{
          color: `${statColor}`,
          fontSize: 36,
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        {stat}
      </Text>
    </View>
  );
}
