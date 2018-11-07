/**
 * Created by Guido on 7/11/2018.
 */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#1190FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  secondaryButton: {
    width: 150,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: undefined
  },
  disabledButton: {
    opacity: 0.5,
  },
  textInput: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  secondaryButtonText: {
    color: 'black'
  }
});
export default styles;