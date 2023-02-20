import PropTypes from 'prop-types';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import Button from '../../components/Button';
import Text from '../../components/Text';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#005AA3',
  },
  quit: {
    backgroundColor: '#EEE',
  },
});

function Pause({ navigation, setPaused }) {
  return (
    <View style={styles.root}>
      <Text
        style={styles.text}
      >{`You're just getting started. Keep going!`}</Text>
      <Button
        title='Resume'
        buttonStyle={styles.button}
        onPress={() => {
          setPaused(false);
          navigation.goBack();
        }}
      />
      <Button
        title='Quit'
        buttonStyle={styles.quit}
        titleStyle={{ color: 'red' }}
        onPress={() =>
          Alert.alert(
            'Quit the Game',
            'Are you sure? This will delete ALL of your progress.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Quit',
                onPress: () => {
                  navigation.navigate('HomeScreen');
                  setPaused(false);
                },
              },
            ],
            { cancelable: false }
          )
        }
      />
    </View>
  );
}

Pause.propTypes = {
  navigation: PropTypes.object,
};

export default Pause;
