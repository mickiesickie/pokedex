/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';
// eslint-disable-next-line react/prop-types
import { styles } from './styles';
export const Chip = ({ value: { item } }) => {
  const {
    type: { name },
  } = item;

  return (
    <View style={styles.chipContainer}>
      <Text style={styles.chipText}>{name}</Text>
    </View>
  );
};

Chip.propTypes = {
  value: PropTypes.object,
};
