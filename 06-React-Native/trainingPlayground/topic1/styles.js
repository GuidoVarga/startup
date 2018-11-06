/**
 * Created by Guido on 6/11/2018.
 */
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const viewHeight = 400;

const styles = StyleSheet.create({
  view1: {
    height: viewHeight,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  view2: {
    height: viewHeight,
    borderColor: 'violet',
    backgroundColor: 'orange',
    alignItems: 'center'
  },
  view3: {
    height: viewHeight,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'yellow',
    alignItems: 'center'
  },
  text: {
    fontSize: 17,
  },
  textTitle: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  img1: {
    width: 300,
    height: 300,
  },
  img2: {
    height: viewHeight,
    width: width
  }
});
export default  styles;