/**
 * Created by Guido on 8/11/2018.
 */
import {StyleSheet} from 'react-native';

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
  buttonsContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  iconView: {
    flex: 1
  },
  icon: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
    alignSelf: 'center',
    margin: 10
  },
  galeryIcon: {
    padding: 6,
  },
});
export default styles;