/**
 * Created by Guido on 6/11/2018.
 */
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

  container: {
    margin: 1,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
  },
  articleContainer: {
    paddingLeft: 7,
    flexDirection: 'column',
    flex: 2,
    marginRight: 5,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  imgContainer: {
    flex: 1,
    height: 250,
  },
  img: {
    width: undefined,
    height: undefined,
    flex: 1
  },
  author: {
    paddingTop: 5,
    backgroundColor: 'green',
  },
  authorText: {
    fontStyle: 'italic',
    fontSize: 11,
  },
  mainTextContainer: {
    paddingTop: 7,
    marginBottom: 5,

  },
  mainText: {
    fontSize: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    paddingTop: 10,
    paddingRight: 10,
    width: 180,
  },
  iconWrap: {
    width: 25,
    height: 25,
  }
});
export default styles;