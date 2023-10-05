/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import { Chip } from '../Chip';
import { Tabs } from '../Tabs';
import { styles } from './styles';
import { getColorByType } from '../../utils/getColorByType';
import { capitalizer } from '../../utils/capitalizer';
import { About } from '../About';
import { Moves } from '../Moves';
import { Evolutions } from '../Evolutions';

export const DetailCard = ({ item }) => {
  const pokeball = require('../../assets/pokeball/pokeball.png');
  const { name, types, sprites, id } = item;
  const pokemonImage = sprites.other['official-artwork'].front_default;
  const color = getColorByType(types[0].type.name);
  const tabsContent = [
    { name: 'About', component: <About data={item} /> },
    { name: 'Moves', component: <Moves data={item} /> },
    { name: 'Evolutions', component: <Evolutions data={item} /> },
  ];
  return (
    <View style={{ ...styles.detailContent, backgroundColor: color }}>
      <Text style={styles.detailTitle}>{capitalizer(name)}</Text>
      <View style={styles.wrapperNum}>
        <Text style={styles.textNum}>{`#${String(id).padStart(3, '0')}`}</Text>
      </View>

      <View>
        {types && (
          <FlatList numColumns={2} data={types} renderItem={(type) => <Chip value={type} />} />
        )}
      </View>
      <Image source={pokeball} style={styles.pokeball} />
      <View style={styles.pokemonContainer}>
        <Image source={{ uri: pokemonImage }} style={styles.pokemonImage} />
      </View>
      <View style={styles.tabContainer}>
        <Tabs tabs={tabsContent} color={color} />
      </View>
    </View>
  );
};
