import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, View , Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import getStoryArray from "../../assets/stories";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import Text from "../../components/Text";
import { RootStackParamList } from "../../types";
import gameDescriptions from "../Stacks/gameDescriptions";
import { unpause } from "../../redux/reducers/pauseReducer";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  instructions: {
    fontSize: 30,
    paddingTop: 75,
    fontWeight: "bold",
    textAlign: "center",
  },
  articleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  article: {
    fontSize: 20,
    textAlign: "center",
  },
});

const TOTAL_TIME = gameDescriptions.Reading.minutes * 60;
type Props = NativeStackScreenProps<RootStackParamList, "ReadingMain">;

export default function ReadingMain({ navigation, route }: Props) {
  const [storyArray, setStoryArray] = useState(getStoryArray());
  const [page, setPage] = useState(0);

  /**
   * This function will pull up the next paragraph of the current article or move on
   * to the next one once the user is finished with this article.
   */
  const nextParagraph = () => {
    if (storyArray.length - 1 === page) {
      setStoryArray(getStoryArray());
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const dispatch = useDispatch();

  const nextSection = () => {
    Alert.alert(
      "Skip Reading Section",
      "Are you sure you want to skip the Reading section?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(unpause());
            navigation.navigate("TriviaMain");
          },
        },
      ],
      { cancelable: false },
    );
  };

  const paragraph = storyArray[page];

  const onTimeComplete = useCallback(() => {
    navigation.navigate(...route.params.nextScreenArgs);
  }, [navigation, route.params.nextScreenArgs]);

  return (
    <View style={styles.root}>
      <ProgressBar
        maxSeconds={TOTAL_TIME}
        redThreshold={30}
        onTimeComplete={onTimeComplete}
      />
      <Text style={styles.instructions}>Read the passage aloud.</Text>
      <ScrollView contentContainerStyle={styles.articleWrapper}>
        <Text style={styles.article}>{paragraph}</Text>
      </ScrollView>
      <Button
        title="Next Paragraph"
        onPress={nextParagraph}
        buttonStyle={{ marginBottom: 10 }}
        shouldNotPlay
      />
      <Button
        title="Skip Section"
        onPress={nextSection}
        buttonStyle={{ marginBottom: 40 }}
      />
    </View>
  );
}
