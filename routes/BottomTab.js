/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import DrawerMenu from './DrawerMenu'
import Home from '../components/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../components/Menu';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetails from '../components/ProductDetails';
import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeTab" component={DrawerMenu} />
        <Stack.Screen name="Details" component={ProductDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const TabBar = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            }
            else if(route.name==="Downloads"){
              iconName = focused ? 'ios-arrow-down' : 'ios-arrow-down-outline';
            }
            else if (route.name === 'Browse') {
              iconName = focused ? 'ios-grid' : 'ios-grid-outline';
            }
            else if(route.name==="Menu"){
              iconName = focused ? 'ios-menu' : 'ios-menu-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          backgroundColor: '#343434',
          
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#343434',
          },
          tabBarLabel: ({ focused }) => {
            const color = focused ? 'tomato' : 'gray';
            return <Text style={{ color,fontFamily:'Nunito-Regular',fontSize:12 }}>{route.name}</Text>;
          }
          
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Downloads" component={Home} />
        <Tab.Screen name="Browse" component={Home} />
        <Tab.Screen name="Menu" component={DrawerMenu} />
      </Tab.Navigator>
  );
};

 