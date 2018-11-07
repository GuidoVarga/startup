/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import  HomeScreen from './topic4-6/HomeScreen';
import  Forms2Screen from './topic4-6/Posts';
import  Forms3Screen from './topic4-6/Forms3Screen';
import  SecondaryScreen from './topic4-6/SecondaryScreen';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


const forms = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    }),
  },
  Forms2: Forms2Screen,
  Forms3: Forms3Screen
});

const App = createBottomTabNavigator({
   Forms: forms,
   Other: SecondaryScreen,
 },
 {
   navigationOptions: ({navigation}) => ({
     tabBarIcon: ({tintColor}) => {
       const {routeName} = navigation.state;
       let iconName;
       if (routeName === 'Forms') {
         iconName = 'ios-home';
       } else if (routeName === 'Other') {
         iconName = 'ios-apps';
       }
       return <Ionicons name={iconName} size={27} color={tintColor}/>;
     },
   }),
   tabBarOptions: {
     activeTintColor: 'red',
     inactiveTintColor: 'gray',
   },
 });
export default App;