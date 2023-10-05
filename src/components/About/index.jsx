import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getSpeciesById } from '../../services/getSpeciesById';
export const About = ({ data }) => {
  console.log('daaaaa about', data);
  const { id } = data;
  const [speciesData, setSpeciesData] = useState([]);

  useEffect(() => {
    const getSpecies = async () => {
      const species = await getSpeciesById(id);
      setSpeciesData(species);
    };

    getSpecies();
  }, [id]);

  console.log('speciesData', speciesData);
  return (
    <View>
      <Text>Shape: {speciesData.shape?.name}</Text>
      <Text>Habitat: {speciesData.habitat?.name}</Text>
      <Text>Color: {speciesData?.color?.name}</Text>
      <View>{}</View>
    </View>
  );
};
