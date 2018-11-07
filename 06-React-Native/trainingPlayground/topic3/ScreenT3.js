/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView, Image,TextInput} from 'react-native';

class ScreenT3 extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text){
    this.setState({
      text: text
    });
    console.log(this.state.text);
  }

  render() {
    return (
       <View>
        <TextInput
         placeholder={'Write something!'}
         value = {this.state.text}
         onChangeText={this.onChangeText}
        />
       </View>
    );
  }
}
export default ScreenT3;