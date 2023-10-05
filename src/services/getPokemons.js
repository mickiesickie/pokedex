import axios from 'axios';
import api from './api';

export const getPokemons = async ({ limit = 20, offset }) => {
  const result = await api
    .get('/pokemon', { params: { limit, offset } })
    .then(async (response) => {
      let pokes = [];
      const pokemons = response.data.results;
      for (const pokemon of pokemons) {
        const { data } = (pokemon.data = await axios.get(pokemon.url));
        pokes.push(data);
      }
      return pokes;
    })
    .catch((error) => {
      console.log('error', error);
      return error;
    })
    .finally(() => console.log('finish api call'));
  return result;
};
