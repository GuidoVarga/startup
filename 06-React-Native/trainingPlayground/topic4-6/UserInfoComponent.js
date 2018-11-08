/**
 * Created by Guido on 8/11/2018.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';


class UserInfoComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <View style={styles.userInfo}>
       <Text style={styles.infoTitle}> User info </Text>
       <View style={styles.personalInfo}>
         <View style={{flex: 0.6}}>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>User name: </Text>
             <Text style={styles.infoText}>{this.props.user.userName}</Text>
           </View>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>Name: </Text>
             <Text style={styles.infoText}>{this.props.user.name}</Text>
           </View>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>Email: </Text>
             <Text style={styles.infoText}>{this.props.user.email}</Text>
           </View>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>Phone: </Text>
             <Text style={styles.infoText}>{this.props.user.phone}</Text>
           </View>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>Website: </Text>
             <Text style={styles.infoText}>{this.props.user.website}</Text>
           </View>
         </View>
         <View style={{flex: 0.4}}>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>City: </Text>
             <Text style={styles.infoText}>{this.props.user.address.city}</Text>
           </View>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>Street: </Text>
             <Text style={styles.infoText}>{this.props.user.address.street}</Text>
           </View>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>Suite: </Text>
             <Text style={styles.infoText}>{this.props.user.address.suite}</Text>
           </View>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.infoTextTitle}>Zipcode: </Text>
             <Text style={styles.infoText}>{this.props.user.address.zipcode}</Text>
           </View>
         </View>
       </View>
       <View>
         <Text style={styles.infoTitle}>Company info</Text>
         <View style={{flexDirection: 'row'}}>
           <Text style={styles.infoTextTitle}>Name: </Text>
           <Text style={styles.infoText}>{this.props.user.company.name}</Text>
         </View>
         <View style={{flexDirection: 'row'}}>
           <Text style={styles.infoTextTitle}>Catch phrase: </Text>
           <Text style={styles.infoText}>{this.props.user.company.catchPhrase}</Text>
         </View>
         <View style={{flexDirection: 'row'}}>
           <Text style={styles.infoTextTitle}>Bs: </Text>
           <Text style={styles.infoText}>{this.props.user.company.bs}</Text>
         </View>
       </View>
     </View>
    );
  }
}
export default UserInfoComponent;