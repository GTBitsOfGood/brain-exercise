import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useDispatch } from "react-redux";
import { RootStackParamList } from "../types";
import Button from "./Button";

type Props = {
  title: string;
  titleColor: string;
  backgroundColor: string;
  onPressFn?: () => void;
};

export default function ContinueButton({
  title,
  titleColor,
  backgroundColor,
  onPressFn,
}: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // const dispatch = useDispatch();

  const onPressButton = () => {
    if (onPressFn) {
      onPressFn(); // Call the passed in function if it exists
    } else {
      navigation.navigate("HomeScreen"); // Default behavior
    }
  };

  return (
    <Button
      onPress={onPressButton}
      title={title}
      titleStyle={{
        color: `${titleColor}`,
        fontSize: 24,
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
        // marginTop: "2.5%",
        width: "92%",
      }}
    />
  );
}
