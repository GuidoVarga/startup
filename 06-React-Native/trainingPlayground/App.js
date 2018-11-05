/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type
Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <ScrollView horizontal={true}>
       <View style={styles.view1}>
         <Text style={styles.textTitle}>Hello</Text>
       </View>
       <View style={styles.view2}>
         <Text style={styles.text}>Hello</Text>
       </View>
       <View style={styles.view3}>
         <Text style={{fontWeight: 'bold'}}>
           Hello
           <Text style={{color: 'red'}}>
             there!
           </Text>
         </Text>
       </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    width: 300,
    height: 400,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  view2: {
    width: 200,
    height: 300,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'orange'
  },
  view3: {
    width: 150,
    height: 250,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'yellow'
  },
  text: {
    fontSize: 17,
  },
  textTitle: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
