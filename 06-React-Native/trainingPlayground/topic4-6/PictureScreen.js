/**
 * Created by Guido on 8/11/2018.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class PictureScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <View style={styles.container}>
       <View style={[{flex:1},{backgroundColor: 'black'},{width: 400}]}>
       </View>
       <View style={styles.imageContainer}>
         <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: this.props.navigation.state.params.data.uri}}
           />
       </View>
       <View style={[{flex:1},{backgroundColor: 'black'},{width: 400}]}>
       </View>
     </View>
    );
  }
}
export default PictureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex:8,
    width: 400,
  },
  image: {
    flex:1
  }
});