import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" size={23} color="black" />
          </TouchableOpacity>
          <View style={styles.headerContent2}>
            <Icon name="ios-notifications-outline" size={23} color="black" />
            <Icon name="ios-cart-outline" size={23} color="black" />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Sugar Free Gold Low Calorie</Text>
        <Text style={styles.title2}>Seller Firm Name</Text>
        <View style={styles.imageCarousel}>
        </View>
        <View style={styles.productDetails}>
          <View style={styles.productDetails1}>
            <Text style={styles.productText}>Rs.56</Text>
            <Text style={styles.productText2}>Percent off</Text>
          </View>
          <Text style={styles.addCart}>Add to cart</Text>
        </View>
        <View>
          <Text style={styles.productText}>Product Category</Text>
          <Text style={styles.productText2}>
            Lorem ipsum dolor sit amet. In dolor esse id dolores quae ab
            mollitia unde in consectetur iure aut omnis laudantium ut voluptas
            praesentium. Sed sint ullam non quisquam eius et ipsum placeat qui
            amet perspiciatis!
          </Text>
        </View>
        <View style={styles.productSpec}>
          <Text style={styles.productText}>Product Specification</Text>
          <View style={styles.productSpec2}>
            <Text style={styles.productText2}>Product type</Text>
            <Text style={styles.productText3}>Type 1</Text>
          </View>
          <View style={styles.productSpec2}>
            <Text style={styles.productText2}>Product Color</Text>
            <Text style={styles.productText3}>Blue</Text>
          </View>
          <View style={styles.productSpec2}>
            <Text style={styles.productText2}>Product size</Text>
            <Text style={styles.productText3}>200mg</Text>
          </View>
          <View style={styles.productSpec2}>
            <Text style={styles.productText2}>Quantity per Pack</Text>
            <Text style={styles.productText3}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.cartButton}>
        <TouchableOpacity>
            <Text style={styles.cartText}>Go to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },

  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerContent2: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'times',
  },
  title2: {
    fontSize: 15,
    color: 'gray',
    fontFamily: 'times',
  },
  imageCarousel: {
    height: 200,
    width: '100%',
    marginTop: 50,
  },
  productDetails: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 20,
  },
  productText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'times',
  },
  productText2: {
    fontSize: 15,
    color: 'gray',
    fontFamily: 'times',
  },
  addCart: {
    fontSize: 15,
    color: 'skyblue',
    fontFamily: 'times',
  },
  productSpec: {
    marginTop: 10,
  },
  productSpec2: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  productText3: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'times',
  },
    cartButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf:'center',
        marginTop:20,
        width:'80%',
        height:50,
        backgroundColor:'#6495ED',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    cartText:{
        fontSize:20,
        color:'white',
        fontFamily:'times',
    }
});
