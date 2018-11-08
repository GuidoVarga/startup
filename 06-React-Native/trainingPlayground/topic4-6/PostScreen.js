/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StackActions} from 'react-navigation';
import PostComponent from './PostComponent';

class PostScreen extends Component {

  static navigationOptions = {
    title: 'Post',
  };

  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  render() {
    const {post} = this.props.navigation.state.params;
    return (
     <View>
       <PostComponent title={post.title} body={post.body}/>
     </View>
    );
  }
}
export default PostScreen;