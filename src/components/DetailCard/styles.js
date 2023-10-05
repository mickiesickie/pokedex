import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants';

export const styles = StyleSheet.create({
  detailContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  detailTitle: {
    color: CONSTANTS.COLORS.white,
    alignSelf: 'flex-start',
    marginVertical: CONSTANTS.SIZES.m,
    //marginLeft: CONSTANTS.SIZES.m,
    fontSize: CONSTANTS.SIZES.xxl,
    fontWeight: 'bold',
  },
  pokeball: {
    position: 'absolute',
    width: 300,
    height: 300,
    opacity: 0.2,
    right: -150,
    top: 150,
    tintColor: CONSTANTS.COLORS.white,
  },
  pokemonContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  pokemonImage: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperNum: {
    position: 'absolute',
    right: CONSTANTS.SIZES.xl,
    top: 50,
  },
  textNum: {
    color: CONSTANTS.COLORS.white,
    fontWeight: 'bold',
    fontSize: CONSTANTS.SIZES.l,
  },
  tabContainer: {
    backgroundColor: CONSTANTS.COLORS.white,
    flex: 1,
    height: 500,
    position: 'absolute',
    left: 0,
    right: 0,
    //marginHorizontal: -20,
    //marginBottom: -20,
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    zIndex: -1,
    paddingHorizontal: 30,
    paddingVertical: 80,
    // borderTopStartRadius: 30,
  },
});
