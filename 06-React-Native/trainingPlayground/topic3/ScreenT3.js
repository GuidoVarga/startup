/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

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
       <TextInput
        style={styles.textInput}
        placeholder={'Write something here!'}
        value={this.state.text}
        onChangeText={this.onChangeText}
       />
       <TouchableOpacity onPress={this.onPressTouchable}>
         <View style={styles.button}>
           <Text style={styles.buttonText}>
             Clear text
           </Text>
         </View>
       </TouchableOpacity>
     </View>
    );
  }
}
export default ScreenT3;