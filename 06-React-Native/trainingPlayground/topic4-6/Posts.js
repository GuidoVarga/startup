/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableHighlight} from 'react-native';
import styles from './styles';


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
         <View style={styles.postContainer}>
           <Text style={styles.title}>{item.title}</Text>
           <View style={styles.textContainer}>
             <Text style={styles.body}>{item.body}</Text>
           </View>
         </View>
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
      posts: null
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
         isLoading: false
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
    console.log(item);
  };

  render() {
    const spinner = this.state.isLoading ?
     <ActivityIndicator size='large'/> : null;
    return (
     <View>
       {spinner}
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