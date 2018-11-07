/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

class AppTouchableOpacity extends Component {

  render() {
    const viewStyle = this.props.type === 'primary' ? [styles.button] : [styles.button, styles.secondaryButton];
    const textStyle = this.props.type === 'primary' ? styles.buttonText : [styles.buttonText, styles.secondaryButtonText];
    this.props.disabled ? viewStyle.push(styles.disabledButton) : null;
    return (
     <TouchableOpacity onPress={this.props.onPress} disabled={this.props.disabled}>
       <View style={viewStyle}>
         <Text style={textStyle}>
           {this.props.text}
         </Text>
       </View>
     </TouchableOpacity>
    );
  }
}
export default AppTouchableOpacity;