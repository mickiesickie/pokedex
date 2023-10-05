import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

export const Moves = ({ data }) => {
  console.log('data in moves', data);
  const { id } = data;

  return (
    <View>
      {data.moves.map((move, index) => (
        <View key={index}>
          <Text>{move.move.name}</Text>
        </View>
      ))}
    </View>
  );
};
