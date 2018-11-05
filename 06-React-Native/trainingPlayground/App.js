/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const viewHeight = 400;

type
Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <ScrollView styles={styles.scrollView}>
       <View style={styles.view1}>
         <Text style={styles.textTitle}>Hello</Text>
         <Image style={styles.img1}
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/614R93DFDFL.jpg'}}
         />
       </View>
       <View style={styles.view2}>
         <Image style={styles.img2}
                resizeMode={'cover'}
                source={require('./public/images/gaara-vs-sasuke.png')}
         />
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
    height: viewHeight,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  view2: {
    height: viewHeight,
    borderColor: 'violet',
    backgroundColor: 'orange',
    alignItems: 'center'
  },
  view3: {
    height: viewHeight,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'yellow',
    alignItems: 'center'
  },
  text: {
    fontSize: 17,
  },
  textTitle: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  img1: {
    width: 300,
    height: 300,
  },
  img2: {
    height: viewHeight,
    width: width
  }
});
