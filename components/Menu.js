import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Menu = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.userContainer}>
        <Image
          style={styles.image}
          source={{uri: 'https://picsum.photos/200/300?random=1'}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>GUEST</Text>
          <Text style={styles.desc}>Sign In</Text>
        </View>
        <Text style={styles.title}>GULLAR</Text>
      </View>
      <Text style={[styles.title2, {color: 'red'}]}>SUBSCRIBE TO WATCH</Text>
      <Text style={(styles.title2, {color: 'white'})}>Recommended</Text>
      <View style={styles.menuContainer}>
        <View style={styles.card}>
          <Text style={[styles.title2, {color: 'white'}]}>GENERAL PLAN</Text>
          <View style={styles.cardContent}>
            <View>
              <View style={styles.leftList}>
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={20}
                  color="white"
                />
                <Text style={styles.listText}>Unlimited Documentation</Text>
              </View>
              <View style={styles.leftList}>
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={20}
                  color="white"
                />
                <Text style={styles.listText}>Full HD</Text>
              </View>
              <View style={styles.leftList}>
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={20}
                  color="white"
                />
                <Text style={styles.listText}>Unlimited Downloads</Text>
              </View>
              <View style={styles.leftList}>
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={20}
                  color="white"
                />
                <Text style={styles.listText}>
                  2 Screens Streaming at a time
                </Text>
              </View>
            </View>
            <View style={styles.rightList}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.price, {fontSize: 35}]}>12</Text>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.priceText}>Months</Text>
                  <Text style={styles.priceText}>Access</Text>
                </View>
              </View>
              <Text style={styles.price}>999$</Text>
            </View>
            <View></View>
          </View>
          <Text style={styles.makePayment}>MAKE PAYMENT</Text>
          <Icon
            style={{marginTop: 10}}
            name="ios-arrow-down-circle-sharp"
            size={20}
            color="white"
          />
        </View>
        <View style={[styles.card, {backgroundColor: 'white', marginTop: 20}]}>
          <Text style={[styles.title2, {color: 'black'}]}>GENERAL PLAN</Text>
          <View style={[styles.cardContent, {borderBottomColor: 'black'}]}>
            <View>
              <View style={styles.leftList}>
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={20}
                  color="black"
                />
                <Text style={[styles.listText, {color: 'black'}]}>
                  Unlimited Documentation
                </Text>
              </View>
              <View style={styles.leftList}>
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={20}
                  color="black"
                />
                <Text style={[styles.listText, {color: 'black'}]}>Full HD</Text>
              </View>
              <View style={styles.leftList}>
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={20}
                  color="black"
                />
                <Text style={[styles.listText, {color: 'black'}]}>
                  Unlimited Downloads
                </Text>
              </View>
              <View style={styles.leftList}>
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={20}
                  color="black"
                />
                <Text style={[styles.listText, {color: 'black'}]}>
                  1 Screens Streaming at a time
                </Text>
              </View>
            </View>
            <View style={styles.rightList}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.price, {fontSize: 35, color: 'black'}]}>
                  12
                </Text>
                <View style={{justifyContent: 'center'}}>
                  <Text style={[styles.priceText, {color: 'black'}]}>
                    Months
                  </Text>
                  <Text style={[styles.priceText, {color: 'black'}]}>
                    Access
                  </Text>
                </View>
              </View>
              <Text style={[styles.price, {color: 'black'}]}>999$</Text>
            </View>
          </View>
          <Text style={[styles.makePayment, {color: 'black'}]}>
            MAKE PAYMENT
          </Text>
          <Icon
            style={{marginTop: 10}}
            name="ios-arrow-down-circle-sharp"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.iconContainer}>
          <View style={{alignItems:'center'}}>
            <View style={styles.icon}><Icon name="ios-heart-outline" size={25} color="white" /></View>
            <Text style={styles.iconText}>Home</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <View style={styles.icon}><Icon name="ios-bookmark-outline" size={25} color="white" /></View>
            <Text style={styles.iconText}>TV</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <View style={styles.icon}><Icon name="ios-heart" size={25} color="white" /></View>
            <Text style={styles.iconText}>Videos</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <View style={styles.icon}><Icon name="ios-person-outline" size={25} color="white" /></View>
            <Text style={styles.iconText}>Apps</Text>
          </View>
        </View>
        <View style={styles.listContainerBottom}>
            <Text style={styles.text}>Account</Text>
            <Text style={styles.text}>Settings</Text>
            <Text style={styles.text}>Help</Text>
            <Text style={styles.text}>Signup/login</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconContainer: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 12,
    color: 'white',
    marginTop: 10,
    fontFamily: 'Nunito-Regular',
  },
  title: {
    position: 'absolute',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Nunito-Bold',
    right: 0,
  },
  title2: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    marginBottom: 0,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 10,
  },
  leftList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
    marginLeft: 5,
    color: 'white',
  },
  rightList: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
  priceText: {
    fontSize: 10,
    fontFamily: 'Nunito-Bold',
    color: 'white',
    marginLeft: 5,
  },
  makePayment: {
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    color: 'white',
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 150,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Nunito-Bold',
  },
  desc: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Nunito-Regular',
  },
  list: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  list2: {
    height: 40,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  listContainerBottom: {
    width: '100%',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Nunito-Bold',
  },
});
