/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';
import ScreenT1 from './topic1/ScreenT1';
import ScreenT2 from './topic2/ScreenT2';
import Article from './topic2/Article';

type
Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <Article/>
    );
  }
}
