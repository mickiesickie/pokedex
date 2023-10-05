import axios from 'axios';
import api from './api';

export const getSpeciesById = async (id) => {
  const uriSpecies = `/pokemon-species/${id}`;
  const result = await api
    .get(uriSpecies)
    .then(async (response) => await response)
    .catch((error) => console.log('error', error));
  return result.data;
};
