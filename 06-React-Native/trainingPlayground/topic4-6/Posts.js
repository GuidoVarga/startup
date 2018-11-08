/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableHighlight} from 'react-native';
import styles from './styles';
import PostComponent from './PostComponent';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPressItem(this.props.index, this.props.item);
  };

  render() {
    const item = this.props.item;
    return (
     <TouchableHighlight
      onPress={this.onPress}
      underlayColor='#dddddd'>
       <View>
         <PostComponent title={item.title} body={item.body}/>
         <View style={styles.separator}/>
       </View>
     </TouchableHighlight>
    );
  }
}

class Posts extends Component {

  static navigationOptions = {
    title: 'Posts',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      posts: null,
      error: null
    };

    this.getPostsFromApi = this.getPostsFromApi.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
  }

  componentDidMount() {
    this.getPostsFromApi();
  }

  getPostsFromApi() {
    this.setState({
      isLoading: true
    });
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         posts: responseJson
       });

     })
     .catch((error) => {
       console.error(error);
       this.setState({
         isLoading: false,
         error: error
       });
     });
  }

  keyExtractor = (item, index) => {
    return item.id.toString();
  };

  renderItem = (data) => (
   <ListItem
    item={data.item}
    index={data.index}
    onPressItem={this.onPressItem}
   />
  );

  onPressItem = (index, item) => {
    this.props.navigation.navigate('Post', {post: item});
  };

  render() {
    const spinner = this.state.isLoading ?
     <ActivityIndicator size='large'/> : null;
    const error = this.state.error ? this.state.error : null;
    return (
     <View>
       {spinner}
       {error}
       <FlatList
        data={this.state.posts}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
       />
     </View>
    );
  }
}
export default Posts;