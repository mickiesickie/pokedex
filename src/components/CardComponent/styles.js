import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants';

export const styles = StyleSheet.create({
  cardInside: {
    borderRadius: CONSTANTS.SIZES.m,
    padding: CONSTANTS.SIZES.m,
    marginVertical: CONSTANTS.SIZES.xs,
    height: 130,
    overflow: 'hidden',
  },
  textId: {
    fontSize: CONSTANTS.SIZES.m,
    fontWeight: 'bold',
    color: CONSTANTS.COLORS.white,
  },
  textName: {
    marginBottom: CONSTANTS.SIZES.xs / 2,
    color: CONSTANTS.COLORS.white,
    fontSize: CONSTANTS.SIZES.m,
    fontWeight: 'bold',
  },
  pokeball: {
    position: 'absolute',
    width: 150,
    height: 150,
    opacity: 0.2,
    right: -50,
    bottom: -30,
    tintColor: CONSTANTS.COLORS.white,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    position: 'absolute',
    right: -15,
    bottom: 0,
    zIndex: -1,
  },
});
