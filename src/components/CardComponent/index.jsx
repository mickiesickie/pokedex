import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Chip } from '../Chip';
import { getColorByType } from '../../utils/getColorByType';
import { capitalizer } from '../../utils/capitalizer';

export const Card = ({ onPress, ...item }) => {
  const pokeball = require('../../assets/pokeball/pokeball.png');
  const { name, id, sprites, types } = item;
  const pokemonImage = sprites?.front_default;

  return (
    <View>
      <TouchableOpacity onPress={() => onPress()}>
        <View style={{ ...styles.cardInside, backgroundColor: getColorByType(types[0].type.name) }}>
          <Text style={styles.textId}>{`#${String(id).padStart(3, '0')}`}</Text>
          <Text style={styles.textName}>{capitalizer(name)}</Text>
          <Image source={pokeball} style={styles.pokeball} />
          <Image source={{ uri: pokemonImage }} style={styles.pokemonImage} />
          <View>
            {types && (
              <FlatList numColumns={2} data={types} renderItem={(type) => <Chip value={type} />} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
