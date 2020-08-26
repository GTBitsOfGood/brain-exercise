import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import propTypes from "prop-types";
import ProgressBar from "../../components/ProgressBar";
import Text from "../../components/Text";
import getStoryArray from "../../assets/stories";
import Button from "../../components/Button";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 25,
        paddingHorizontal: 15,
        backgroundColor: "white"
    },
    instructions: {
        flex: 0.4,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
    },
    article: {
        flex: 1.8,
        fontSize: 20,
        textAlign: "center",
    },
});

export default function ReadingMain({ navigation }) {
  const [timeUp, setTimeUp] = useState(false);
  const [storyArray, setStoryArray] = useState(getStoryArray());
  const [paragraph, setParagraph] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    setParagraph(storyArray[0])
  }, [storyArray]);

  /**
   * If the 10 minutes alloted for reading are up, this will take the user to next section.
   * If not, this button will pull up the next paragraph of the current article or move on
   * to the next one once the user is finished.
   */
  const buttonFunction = () => {
    if (timeUp) {
      navigation.navigate("MathIntro", {
        nextScreen: "WritingIntro",
      });
    } else if (storyArray.length - 1 == page) {
      setStoryArray(getStoryArray());
      setPage(0);
    } else {
      setParagraph(storyArray[page + 1]);
      setPage(page + 1);
    }
  };

  return (
      <View style={styles.root}>
          <ProgressBar seconds={600} red={30} func={() => setTimeUp(true)} shouldNotRender/>
          <Text style={styles.instructions}>Read the passage aloud.</Text>
          <ScrollView>
              <Text style={styles.article}>{paragraph}</Text>
          </ScrollView>
          <Button
              title="Next"
              buttonStyle={styles.nextButton}
              onPress={() => buttonFunction()}
           />
      </View>
  )
}

ReadingMain.propTypes = {
  navigation: propTypes.object,
  route: propTypes.any,
};
