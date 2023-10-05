import React from 'react';
import { Text, View } from 'react-native';
import { CONSTANTS } from '../../constants';

const Favorites = () => {
  const {
    COLORS: { white },
  } = CONSTANTS;
  return (
    <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center', backgroundColor: white }}>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;
