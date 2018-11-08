/**
 * Created by Guido on 6/11/2018.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

class ScreenT2 extends Component {

  render() {
    return (
     <View style={styles.container}>
       <View style={[styles.box, styles.box1]}/>
       <View style={[styles.box, styles.box2]}/>
       <View style={[styles.box, styles.box3]}/>
     </View>
    );
  }

}
export default ScreenT2;