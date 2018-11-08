/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from '../topic3/AppTouchableOpacity'

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    this.props.navigation.navigate('Posts');
  }

  render() {
    return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text>Forms!</Text>
       <AppTouchableOpacity
        onPress={this.onPressButton}
        text="Posts"
        type="secondary"
       />
     </View>
    );
  }
}
export default HomeScreen;