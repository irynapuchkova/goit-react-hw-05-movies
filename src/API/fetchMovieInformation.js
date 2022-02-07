import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '9cd9c5b7e8e826e5ef2c1aca08004ce5',
};

export const fetchTrendingMovieDay = async page => {
  const { data } = await axios.get('/trending/movie/day', {
    params: { page },
  });

  return data;
};

export const fetchMovieByTitle = async (page, query) => {
  const { data } = await axios.get('/search/movie', {
    params: { page, query },
  });

  return data;
};

export const fetchMovieDetails = async movie_id => {
  return await axios.get(`/movie/${movie_id}`);
};

export const fetchMovieCast = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);

  return data;
};

export const fetchMovieReview = async (movie_id, page) => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`, {
    params: { page },
  });

  return data;
};
