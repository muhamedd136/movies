import { BASE_URL, API_KEY } from './shared';
import axios from 'axios';

export default {
  search: (query: string) => axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`),
  getDetails: (tvId: number) => axios.get(`${BASE_URL}/tv/${tvId}?api_key=${API_KEY}`),
  get: () => axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
};
