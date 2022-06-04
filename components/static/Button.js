import { StyleSheet, Text, View } from 'react-native'

import Icons from 'react-native-vector-icons/Ionicons';
import React from 'react'

const Button = ({text,width,icon}) => {
  return (
    <View style={[styles.buttonContainer,{width: width}]}>
      {icon?<Icons style={styles.icon} name="play" size={20} color="white" />:null}
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        height:40,
        flexDirection: 'row',
        backgroundColor: '#242526',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Nunito-Black',
      },
      icon: {
        marginLeft: 5,
      }
})