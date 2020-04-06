import { BASE_URL, API_KEY } from './shared';
import axios from 'axios';

export default {
  search: (query: string) => axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`),
  // getVideo: (movieId: number) => axios.get(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`),
  getDetails: (movieId: number) => axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`),
  get: () => axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`),
};
