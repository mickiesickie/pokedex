import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants';
export const styles = StyleSheet.create({
  chipContainer: {
    borderRadius: CONSTANTS.SIZES.s,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: CONSTANTS.SIZES.xs,
    paddingVertical: CONSTANTS.SIZES.xs / 2,
    justifyContent: 'center',
    marginHorizontal: CONSTANTS.SIZES.xs / 2,
  },
  chipText: {
    color: CONSTANTS.COLORS.white,
  },
});
