/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from '../topic3/AppTouchableOpacity'
import { StackActions } from 'react-navigation';

class Forms3Screen extends Component {

  static navigationOptions = {
    title: 'Forms 3',
  };

  constructor(props){
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  render() {
    return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text>Forms 3!</Text>
       <AppTouchableOpacity
        onPress={this.onPressButton}
        text="Finish"
        type="secondary"
       />
     </View>
    );
  }
}
export default Forms3Screen;