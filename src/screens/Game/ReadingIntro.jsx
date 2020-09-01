import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from '../../styles/intro';

const image = require("../../assets/books.png");

function ReadingIntro({ navigation, route }) {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.headInstruction}>
          Read the following passage aloud
        </Text>
        <Text style={styles.instructions}>Total time: 10 minutes</Text>
      </View>
      <Button
        title="Start Reading"
        onPress={() => navigation.navigate("ReadingMain", { shouldReturn: route.params ? route.params.shouldReturn : false })}
      />
    </View>
  );
}

ReadingIntro.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default ReadingIntro;
