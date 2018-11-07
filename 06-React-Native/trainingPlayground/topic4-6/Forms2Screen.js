/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from '../topic3/AppTouchableOpacity'

class Forms2Screen extends Component {

  static navigationOptions = {
    title: 'Forms 2',
  };

  constructor(props){
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    this.props.navigation.navigate('Forms3');
  }

  render() {
    return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text>Forms 2!</Text>
       <AppTouchableOpacity
        onPress={this.onPressButton}
        text="Next"
        type="secondary"
       />
     </View>
    );
  }
}
export default Forms2Screen;