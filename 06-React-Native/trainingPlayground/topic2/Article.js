/**
 * Created by Guido on 6/11/2018.
 */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './articleStyles';

class Article extends Component {

  render() {
    return (
     <View style={styles.container}>
       <View style={styles.articleContainer}>
         <View style={styles.title}>
           <Text style={styles.textTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
         </View>
         <View>
           <Text style={styles.authorText}>
             {'By '}
             <Text style={{color: 'blue'}}>
               purus lacinia
             </Text>
           </Text>
         </View>
         <View style={styles.mainTextContainer}>
           <Text style={styles.mainText}>
             Vestibulum non sollicitudin quam, id cursus diam. Suspendisse posuere enim lacinia, pharetra felis
             venenatis,
             accumsan risus. Nam felis velit, auctor ut pellentesque et, dignissim quis mauris. Aliquam sed aliquam
             augue.
             Vestibulum eleifend orci ante, vel tincidunt ante imperdiet ultricies. Quisque tristique sapien vel velit
             rutrum rhoncus. Sed leo ex, lobortis in tempus non, venenatis quis nulla.
             Nam felis velit, auctor ut pellentesque et, dignissim quis mauris. Aliquam sed aliquam
             augue.
             Vestibulum eleifend orci ante, vel tincidunt ante imperdiet ultricies. Quisque tristique sapien vel velit
             rutrum rhoncus. Sed leo ex, lobortis in tempus non, venenatis quis nulla.
           </Text>
         </View>
         <View style={styles.iconsContainer}>
           <View style={styles.iconWrap}>
             <Image
              resizeMode={'stretch'}
              resizeMethod={'resize'}
              style={styles.img}
              source={require('./discuss-icon.png')}
             />
           </View>
           <View style={styles.iconWrap}>
             <Image
              resizeMode={'stretch'}
              resizeMethod={'resize'}
              style={styles.img}
              source={require('./facebook-icon.png')}
             />
           </View>
           <View style={styles.iconWrap}>
             <Image
              resizeMode={'stretch'}
              resizeMethod={'resize'}
              style={styles.img}
              source={require('./twitter-icon.png')}
             />
           </View>
           <View style={styles.iconWrap}>
             <Image
              resizeMode={'stretch'}
              resizeMethod={'resize'}
              style={styles.img}
              source={require('./linkedin-icon.png')}
             />
           </View>
           <View style={styles.iconWrap}>
             <Image
              resizeMode={'stretch'}
              resizeMethod={'resize'}
              style={styles.img}
              source={require('./pinterest-icon.png')}
             />
           </View>

         </View>
       </View>
       <View style={styles.imgContainer}>
         <Image
          resizeMode={'stretch'}
          resizeMethod={'resize'}
          style={styles.img}
          source={require('./article.png')}
         />
       </View>
     </View>
    );
  }

}
export default Article;