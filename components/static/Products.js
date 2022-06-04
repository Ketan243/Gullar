import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const Products = ({navigation}) => {
  const data = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 4,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 5,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Continue Watching</Text>
        <Text style={styles.more}>More</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        horizontal={true}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() =>navigation.navigate('Details')}>
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://picsum.photos/200/300?random=1'}}
                />
                
              </View>
            </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
  
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Award Winning Movies</Text>
        <Text style={styles.more}>More</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        horizontal={true}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://picsum.photos/200/300?random=1'}}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
  more: {
    fontSize: 15,
    color: 'skyblue',
    fontFamily: 'Nunito-Regular',
  },
  scroll: {
    flex: 1,
    marginTop: 5,
  },
  card: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 170,
    height: 230,
    borderRadius: 10,
  },
});
