/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {TextInput} from 'react-native';

class AppTextInput extends Component {

  render() {
    const secure = this.props.type === 'password';
    return (
     <TextInput
      style={this.props.style}
      onChangeText={this.props.onChangeText}
      placeholder={this.props.placeholder}
      value={this.props.value}
      secureTextEntry={secure}
     />
    );
  }
}
export default AppTextInput;