/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import  HomeScreen from './topic4-6/HomeScreen';
import  SecondaryScreen from './topic4-6/SecondaryScreen';
import {createBottomTabNavigator, createTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = createBottomTabNavigator({
   Forms: HomeScreen,
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