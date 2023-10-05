import axios from 'axios';
import api from './api';

export const getMoves = async (id) => {
  const uriMoves = `/move/${id}`;
  const result = await api
    .get(uriMoves)
    .then((response) => response)
    .catch((error) => console.log('Error', error));
  return result.data;
};
