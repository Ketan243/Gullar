import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Categories = ({text, color, style}) => {
  const array = [
    {
      name: 'Dental',
      color: '#DA70D6',
      icon: 'ios-home-outline',
    },
    {
      name: 'Wellness',
      color: '#81B622',
      icon: 'ios-notifications-outline',
    },
    {
      name: 'Homeo',
      color: '#FFAC1C',
      icon: 'ios-camera-outline',
    },
    {
      name: 'Eye care',
      color: '#6495ED',
      icon: 'ios-eye-outline',
    },
    {
      name: 'Skin & hair',
      color: '#483d8b',
      icon: 'ios-eye-outline',
    },
  ];
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Top Categories</Text>
      <ScrollView style={styles.scroll} horizontal={true}>
        {array.map((item, index) => (
          <View style={styles.container}>
            <View style={[styles.circle, {backgroundColor: item.color}]}>
              <Icon name={item.icon} size={25} color="white" />
            </View>
            <Text style={[styles.text, {color: 'gray'}]}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  container: {
    height: 100,
    width: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    marginHorizontal: 5,
    elevation: 3,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: 'times',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'times',
    color: 'black',
  },
  scroll: {
    flex: 1,
    height: 150,
    marginTop: 5,
  },
});
