/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import  HomeScreen from './topic4-6/HomeScreen';
import  Posts from './topic4-6/Posts';
import  PostScreen from './topic4-6/PostScreen';
import  CameraScreen from './topic4-6/CameraScreen';
import  PictureScreen from './topic4-6/PictureScreen';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const forms = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    }),
  },
  Posts: Posts,
  Post: PostScreen
});

const cameraStack = createStackNavigator({
  Camera: CameraScreen,
  Picture: PictureScreen
});

const App = createBottomTabNavigator({
   Forms: forms,
   Camera: cameraStack,
 },
 {
   navigationOptions: ({navigation}) => ({
     tabBarIcon: ({tintColor}) => {
       const {routeName} = navigation.state;
       let iconName;
       if (routeName === 'Forms') {
         iconName = 'ios-home';
       } else if (routeName === 'Camera') {
         iconName = 'ios-camera';
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