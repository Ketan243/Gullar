import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Button from './static/Button';
import Categories from './static/categories';
import Icon from 'react-native-vector-icons/Ionicons';
import Products from './static/Products';
import axios from 'axios';

const {width, height} = Dimensions.get('window');
const Home = ({navigation}) => {
 
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#343434" />
      <ImageBackground source={require('../assets/images/joker.jpg')} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>GULLAR</Text>
          <Icon name="ios-search-outline" size={25} color="white" />
        </View>
        <View style={styles.controls}>
          <Button width={40} text="i" />
          <Button width={130} text="Play" icon={true}/>
          <Button width={40} text="+" />
      </View>
      <View style={styles.controls2}>
        <Text style={styles.subtitle}>info</Text>
        <Text style={styles.subtitle}>Watch now</Text>
        <Text style={styles.subtitle}>My List</Text>
      </View>
      </ImageBackground>
        
        <View style={styles.body}>
        <Products navigation={navigation}/>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  header: {
    height: height/2,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Nunito-Black',
  },
  controls: {
    position: 'absolute',
    bottom:2,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  controls2: {
    position: 'absolute',
    bottom:-15,
    width: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'times',
  },
  categories: {
    marginTop: 10,
    paddingLeft:15
  },
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Nunito-Regular',
  },
  
});
