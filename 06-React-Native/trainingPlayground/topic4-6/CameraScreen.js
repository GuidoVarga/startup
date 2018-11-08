/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';

class CameraScreen extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
     <View style={styles.container}>
       <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes)
        }}
       />
       <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
         <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style={styles.capture}
         >
           <Ionicons name='ios-camera' size={40} color='black'/>
         </TouchableOpacity>
       </View>
     </View>
    );
  }

  takePicture = async function () {
    if (this.camera) {
      const options = {quality: 1, base64: true};
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
}
export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 10
  }
});
