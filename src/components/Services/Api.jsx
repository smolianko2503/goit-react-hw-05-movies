import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c507087864cb411db64415ec97acb434';

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
}

export async function getMovieById(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function getMovieCredits(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function getSearchMovie(query) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return response.data;
}
