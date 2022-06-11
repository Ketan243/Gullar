import {StyleSheet, Text, View} from 'react-native';

import {RadioButton} from 'react-native-paper';
import React from 'react';

const AudioSub = () => {
  const [value, setValue] = React.useState('English');

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.title}>Audio</Text>
          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            <View style={styles.icons}>
            <RadioButton value="english" />
              <Text>English</Text>
            </View>

            <View style={styles.icons}>
              <RadioButton value="hindi" />
              <Text>Hindi</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View>
          <Text style={styles.title}>Subtitles</Text>
          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            <View style={styles.icons}>
                <RadioButton value="english" />
              <Text>English</Text>
            </View>

            <View style={styles.icons}>
            <RadioButton value="hindi" />
              <Text>Hindi</Text>
              
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </View>
  );
};

export default AudioSub;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  subContainer: {
    height:'100%',
    width:'100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
  icons:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  }
});
