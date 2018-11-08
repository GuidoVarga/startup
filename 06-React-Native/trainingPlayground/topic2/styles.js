/**
 * Created by Guido on 6/11/2018.
 */
import {StyleSheet, Platform} from 'react-native';

const backgroundColor = Platform.OS === 'android' ? 'green' : 'grey';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundColor,
    justifyContent: 'space-between',
  },
  box: {
    margin: 7,
    borderRadius: 10,
  },
  box1: {
    height: 100,
    width: 100,
    alignSelf: 'flex-start',
    backgroundColor: 'red',
  },
  box2: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  box3: {
    height: 100,
    width: 100,
    alignSelf: 'flex-end',
    backgroundColor: 'purple',
  },
});
export default styles;
