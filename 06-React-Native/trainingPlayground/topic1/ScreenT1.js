/**
 * Created by Guido on 6/11/2018.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import styles from './styles';

class ScreenT1 extends Component {
  render() {
    return (
     <ScrollView styles={styles.scrollView}>
       <View style={styles.view1}>
         <Text style={styles.textTitle}>Hello</Text>
         <Image style={styles.img1}
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/614R93DFDFL.jpg'}}
         />
       </View>
       <View style={styles.view2}>
         <Image style={styles.img2}
                resizeMode={'cover'}
                source={require('../public/images/gaara-vs-sasuke.png')}
         />
       </View>
       <View style={styles.view3}>
         <Text style={{fontWeight: 'bold'}}>
           Hello
           <Text style={{color: 'red'}}>
             there!
           </Text>
         </Text>
       </View>
     </ScrollView>
    );
  }
}
export default ScreenT1;