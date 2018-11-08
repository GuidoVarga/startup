/**
 * Created by Guido on 8/11/2018.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

class PictureScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <View style={styles.container}>
       <View style={styles.optionsView}>
       </View>
       <View style={styles.imageContainer}>
         <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: this.props.navigation.state.params.data.uri}}
         />
       </View>
       <View style={styles.optionsView}>
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
    flex: 8,
    width: 400,
  },
  image: {
    flex: 1
  },
  optionsView: {
    flex: 1,
    backgroundColor: 'black',
    width: 400
  }
});