import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  buttonClose: {
    backgroundColor: CONSTANTS.COLORS.red,
  },
  button: {
    //borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
  },
  titleButton: {
    fontWeight: 'bold',
    color: CONSTANTS.COLORS.white,
  },
  wrapperButtonIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
