import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { CONSTANTS } from '../../constants';
import { SearchBar } from '../../components/SearchBar';
import { Card } from '../../components/CardComponent';
import { styles } from './styles';
import { getPokemons } from '../../services/getPokemons';
import { Details } from '../Details/Details';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPokemon, setSelectedPokem] = useState();
  const limit = 10;
  const pokeball = require('../../assets/pokeball/pokeball.png');
  const {
    COLORS: { white },
  } = CONSTANTS;

  const getMorePokemons = async () => {
    setIsLoading(true);
    const pokemonsApi = await getPokemons({ limit, offset: pokemons.length });
    let newPokemons = [...pokemons, ...pokemonsApi];
    newPokemons = newPokemons.sort((a, b) => a.id - b.id);
    await AsyncStorage.setItem('pokedex/pokemons', JSON.stringify(newPokemons));
    setPokemons(newPokemons);
    setOffset(pokemons.length);
    setIsLoading(false);
  };
  const openModal = (item) => {
    setModalVisible(true);
    setSelectedPokem(item);
  };

  useEffect(() => {
    setIsLoading(true);
    const getPokes = async () => {
      const pokemons = await AsyncStorage.getItem('pokedex/pokemons');
      if (pokemons) {
        setPokemons(JSON.parse(pokemons));
        setIsLoading(false);
        return;
      }
      const pokemonsApi = await getPokemons({ limit: 10, offset });
      await AsyncStorage.setItem('pokedex/pokemons', JSON.stringify(pokemonsApi));
      setPokemons(pokemonsApi);
      setIsLoading(false);
    };
    getPokes();
  }, []);

  return (
    <View
      style={{
        padding: 32,
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: white,
        alignSelf: 'stretch',
      }}
    >
      <Image source={pokeball} style={styles.bgImage} />
      <Text style={styles.textTitle}>What Pokemon are looking for?</Text>
      <SearchBar inputValue={inputValue} setValue={setInputValue} />
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={pokemons}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.wrapperGrid}
          renderItem={({ item }) => <Card {...item} onPress={() => openModal(item)} />}
          onEndReached={getMorePokemons}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isLoading && <ActivityIndicator size="large" />}
        />
      </View>
      {modalVisible && (
        <Details item={selectedPokemon} modalVisible={modalVisible} setModal={setModalVisible} />
      )}
    </View>
  );
};

export default Home;
