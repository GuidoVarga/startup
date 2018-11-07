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

const App = createBottomTabNavigator({
   Home: HomeScreen,
   Secondary: SecondaryScreen,
 },
 {
   tabBarOptions: {
     activeTintColor: 'red',
     inactiveTintColor: 'gray',
   },
 });
export default App;