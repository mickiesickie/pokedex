import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants';
const { SIZES, COLORS } = CONSTANTS;
export const styles = StyleSheet.create({
  containerTab: {
    marginVertical: 50,
    position: 'relative',
    flexDirection: 'row',
  },
  tabItem: {
    //flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  wrapperTabComponent: {
    //flex: 1,
    marginVertical: 20,
  },
  titleSection: {
    fontSize: SIZES.xl,
    marginBottom: SIZES.s,
  },
});
