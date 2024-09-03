import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useDispatch } from "react-redux";
import { RootStackParamList } from "../types";
import Button from "./Button";

type Props = {
  titleColor: string;
  backgroundColor: string;
};

export default function ContinueButton({ titleColor, backgroundColor }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // const dispatch = useDispatch();

  const onPressButton = () => navigation.navigate("HomeScreen");

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
