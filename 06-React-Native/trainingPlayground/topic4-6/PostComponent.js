/**
 * Created by Guido on 8/11/2018.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';


class PostComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <View style={styles.postContainer}>
       <Text style={styles.title}>{this.props.title}</Text>
       <View style={styles.textContainer}>
         <Text style={styles.body}>{this.props.body}</Text>
       </View>
     </View>
    );
  }
}
export default PostComponent;