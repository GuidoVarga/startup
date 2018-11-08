/**
 * Created by Guido on 7/11/2018.
 */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  body: {
    fontSize: 13,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6
  },
  postContainer: {
    padding: 10
  },
  userInfo: {
    padding: 10,
  },
  infoTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10
  },
  personalInfo: {
    flexDirection: 'row',
    marginBottom: 10
  },
  infoText: {
    fontSize: 13
  },
  infoTextTitle: {
    fontSize: 13,
    fontWeight: 'bold'
  }
});
export default styles;