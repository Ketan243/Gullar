/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import {Text, View} from 'react-native';

import Home from '../components/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../components/Menu';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetails from '../components/ProductDetails';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (
        <View style={{flex: 1}}>
            <Menu />
            
        </View>
        
    );
};

export default function DrawerMenu() {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>} initialRouteName="Home" screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle:{
            width:'90%',
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                 },
    }
}
    useLegacyImplementation={true}
    overlayColor="transparent"
    >
        <Drawer.Screen name="Account" component={TabBar} />
        <Drawer.Screen name="App Settings" component={Menu} />
        <Drawer.Screen name="Help" component={Menu} />
        <Drawer.Screen name="Signup/Login" component={Menu} />
      </Drawer.Navigator>
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
          <Tab.Screen name="Menu" component={Menu} listeners={({ navigation }) => ({
                tabPress: e => {
                e.preventDefault();
                navigation.openDrawer();
                }
            })} />
        </Tab.Navigator>
    );
  };