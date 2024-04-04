import { GestureResponderEvent } from "react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useDispatch } from "react-redux";

type Props = {
    titleColor: string;
    backgroundColor: string;
};

export default function ContinueButton({ titleColor, backgroundColor }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const onPressButton = () => (
    console.log("Continue Button Pressed")
  )

  return (
    <Button
      onPress={onPressButton}
      title="Continue"
      titleStyle={{
        color: `${titleColor}`,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",

      }}
      buttonStyle={{
        backgroundColor: `${backgroundColor}`,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}
