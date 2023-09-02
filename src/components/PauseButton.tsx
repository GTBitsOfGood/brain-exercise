import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { GestureResponderEvent } from "react-native-modal";
import { RootStackParamList } from "../types";
import { pause } from "../redux/reducers/pauseReducer";

type Props = { 
  onPress?: (e: GestureResponderEvent) => void;
};

export default function PauseButton({ onPress }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const onPressButton = useCallback(async (e: GestureResponderEvent) => {
    if (onPress) {
      onPress(e);
    }
    dispatch(pause());
    navigation.navigate("Pause");
    
    // Need to implement: Change paused state with Redux
  }, [onPress, navigation, dispatch]);

  return (
    <Button
      onPress={onPressButton}
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