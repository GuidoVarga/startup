/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <View style={styles.view1}>


      <View style={styles.view2}>
     </View>
    <View style={styles.view3}>
    </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    flex:1,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  view2: {
    width: 100,
    height: 100,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'green',
  },
  view3: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'blue',
  }
});
