import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants/';

export const styles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    borderRadius: CONSTANTS.SIZES.xs,
    backgroundColor: CONSTANTS.COLORS.yellow,
    padding: CONSTANTS.SIZES.m,
    color: CONSTANTS.COLORS.blue_logo,
    borderColor: CONSTANTS.COLORS.yellow,
    borderWidth: 2,
  },
});
