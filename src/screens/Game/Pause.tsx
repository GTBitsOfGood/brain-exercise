import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { unpause } from '../../redux/reducers/pauseReducer';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { RootStackParamList } from '../../types';


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
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#005AA3',
  },
  quit: {
    backgroundColor: '#EEE',
  },
});

function Pause() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  
  return (
    <View style={styles.root}>
      <Text
        style={styles.text}
      >{`You're just getting started. Keep going!`}</Text>
      <Button
        title='Resume'
        buttonStyle={styles.button}
        onPress={() => {
          dispatch(unpause());
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
                  dispatch(unpause());
                  navigation.navigate('HomeScreen');
                },
              },
            ],
            { cancelable: false },
          )
        }
      />
    </View>
  );
}

export default Pause;
