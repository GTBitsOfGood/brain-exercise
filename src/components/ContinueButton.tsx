import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useDispatch } from "react-redux";
import { RootStackParamList } from "../types";
import Button from "./Button";

type Props = {
  title: string;
  titleColor: string;
  backgroundColor: string;
};

export default function ContinueButton({
  title,
  titleColor,
  backgroundColor,
}: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // const dispatch = useDispatch();

  const onPressButton = () => navigation.navigate("HomeScreen");

  return (
    <Button
      onPress={onPressButton}
      title={title}
      titleStyle={{
        color: `${titleColor}`,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
      }}
      buttonStyle={{
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: `${backgroundColor}`,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}
