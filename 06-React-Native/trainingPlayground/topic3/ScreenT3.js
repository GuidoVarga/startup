/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppTextInput from "./AppTextInput";
import AppTouchableOpacity from "./AppTouchableOpacity";

class ScreenT3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onPressTouchable = this.onPressTouchable.bind(this);
  }

  onChangeText(text) {
    this.setState({
      text: text
    });
  }

  onPressTouchable() {
    this.setState({
      text: ''
    });
  }

  render() {
    return (
     <View style={styles.container}>
       <AppTextInput
        style={styles.textInput}
        placeholder={'Write something here!'}
        value={this.state.text}
        onChangeText={this.onChangeText}
        type='password'
       />
       <AppTouchableOpacity
        type="primary"
        onPress={this.onPressTouchable}
        text='Primary'
       />
       <AppTouchableOpacity
        type="secondary"
        onPress={this.onPressTouchable}
        text='Secondary'
       />
       <AppTouchableOpacity
        type="primary"
        disabled={true}
        onPress={this.onPressTouchable}
        text='Primary disabled'
       />
       <AppTouchableOpacity
        type="secondary"
        disabled={true}
        onPress={this.onPressTouchable}
        text='Secondary disabled'
       />
     </View>
    );
  }
}
export default ScreenT3;