/**
 * Created by Guido on 7/11/2018.
 */
import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './cameraStyles';

class CameraScreen extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isTakenPicture: false,
      flash: RNCamera.Constants.FlashMode.off
    };
  }

  render() {
    let flash = <Ionicons name='ios-flash' size={37} color='grey'/>;
    if (this.state.flash === RNCamera.Constants.FlashMode.on) {
      flash = <Ionicons name='ios-flash' size={37} color='black'/>
    }

    return (
     <View style={styles.container}>
       <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        autoFocus={false}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={this.state.flash}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
       />
       <View style={styles.buttonsContainer}>
         <View style={styles.iconView}>
           <TouchableOpacity
            onPress={this.toggleFlash.bind(this)}
            style={[styles.icon, {paddingHorizontal: 15}]}
            disabled={this.state.isTakenPicture}
           >
             {flash}
           </TouchableOpacity>
         </View>
         <View style={styles.iconView}>
           <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={[styles.icon, {paddingHorizontal: 20}]}
            disabled={this.state.isTakenPicture}
           >
             <Ionicons name='ios-camera' size={40} color='black'/>
           </TouchableOpacity>
         </View>
         <View style={styles.iconView}>
           <TouchableOpacity
            onPress={() => {
              console.log('Galery!')
            }}
            style={[styles.icon, {paddingHorizontal: 15}]}
            disabled={this.state.isTakenPicture}
           >
             <Ionicons name='ios-photos' size={37} color='black'/>
           </TouchableOpacity>
         </View>
       </View>
     </View>
    );
  }

  takePicture = async function () {
    if (this.camera) {
      const options = {quality: 1};
      this.setState({
        isTakenPicture: true
      });
      this.camera.takePictureAsync(options).then(data => {
        this.props.navigation.navigate('Picture', {data: data});
      });
    }
  };

  toggleFlash() {
    let flash = RNCamera.Constants.FlashMode.off;
    if (this.state.flash === RNCamera.Constants.FlashMode.off) {
      flash = RNCamera.Constants.FlashMode.on;
    }
    this.setState({
      flash: flash
    });
  }

}
export default CameraScreen;
