import { View } from "react-native";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, GameTypes } from "../../../types";

type Props = NativeStackScreenProps<RootStackParamList, "ExercisesCompleted">;

export default function SectionSummary({ navigation, route }: Props) {
  return (
    <View>
      <Text>Section Summary</Text>
      <Button
        title="Return to Home"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />
    </View>
  );
}
