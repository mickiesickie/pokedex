import React from 'react';
import { PropTypes } from 'prop-types';
import { TextInput } from 'react-native';
import { styles } from './styles';
import { CONSTANTS } from '../../constants';
export const SearchBar = ({ inputValue, setValue }) => {
  const handleOnChange = (e) => {
    setValue(e);
  };
  console.log('value', inputValue);
  return (
    <TextInput
      placeholderTextColor={CONSTANTS.COLORS.blue_logo}
      style={styles.searchWrapper}
      placeholder="Search Pokemon"
      keyboardType="default"
      value={inputValue}
      onChangeText={handleOnChange}
    />
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string,
  setValue: PropTypes.func,
};
