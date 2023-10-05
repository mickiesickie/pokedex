import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants/';

export const styles = StyleSheet.create({
  textTitle: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginVertical: CONSTANTS.SIZES.s,
    fontSize: CONSTANTS.SIZES.xl,
    fontWeight: 'bold',
  },
  bgImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    opacity: 0.08,
    right: -80,
    top: -80,
    zIndex: -1,
  },
  wrapperGrid: {
    marginTop: CONSTANTS.SIZES.xl,
    justifyContent: 'space-between',
  },
});
