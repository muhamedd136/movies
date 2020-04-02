import { BASE_URL, API_KEY } from './shared';
import axios from 'axios';

export default {
  search: (query: string) => axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`),
  getDetails: (movieId: number) => axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`),
  get: () => axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
};
