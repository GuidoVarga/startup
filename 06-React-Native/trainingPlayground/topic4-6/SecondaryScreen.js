/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class SecondaryScreen extends Component {
  render() {
    return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text>Secondary screen!</Text>
     </View>
    );
  }
}
export default SecondaryScreen;