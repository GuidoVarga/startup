/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {StackActions} from 'react-navigation';
import PostComponent from './PostComponent';
import UserInfoComponent from './UserInfoComponent';
import styles from './styles';

class PostScreen extends Component {

  static navigationOptions = {
    title: 'Post',
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      user: null,
      error: null
    };

    this.onPressButton = this.onPressButton.bind(this);
    this.getUserFromApi = this.getUserFromApi.bind(this);
  }

  componentDidMount() {
    this.getUserFromApi();
  }

  getUserFromApi() {
    const {userId} = this.props.navigation.state.params.post;
    this.setState({
      isLoading: true
    });
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    fetch(url)
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         user: responseJson
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

  onPressButton() {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  render() {
    const {post} = this.props.navigation.state.params;
    const {user} = this.state;
    let userInfo = null;
    const error = this.state.error ? this.state.error : null;
    if (this.state.isLoading) {
      userInfo = <ActivityIndicator size='large'/>
    }
    else if (user) {
      userInfo = <UserInfoComponent user={user}/>;
    }
    return (
     <View>
       {error}
       {userInfo}
       <View style={styles.separator}/>
       <PostComponent title={post.title} body={post.body}/>
     </View>
    );
  }
}
export default PostScreen;