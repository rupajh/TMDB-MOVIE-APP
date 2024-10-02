import axios from 'axios';

// const API_KEY = 'Enter_Your_API_Key';
const API_KEY ='0de5bdca4db2e7f96c63ce17484c85af';
const BASE_URL = 'https://api.themoviedb.org/3';


// Fetch Now Playing Movies
export const fetchNowPlayingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    dispatch({ type: 'FETCH_NOW_PLAYING_SUCCESS', payload: response.data.results });
  } catch (error) {
    console.log('Error fetching now playing movies:', error);
  }
};

// Fetch Top Rated Movies
export const fetchTopRatedMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    dispatch({ type: 'FETCH_TOP_RATED_SUCCESS', payload: response.data.results });
  } catch (error) {
    console.log('Error fetching top-rated movies:', error);
  }
};

// Fetch Popular Movies
export const fetchPopularMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    dispatch({ type: 'FETCH_POPULAR_SUCCESS', payload: response.data.results });
  } catch (error) {
    console.log('Error fetching popular movies:', error);
  }
};

// Fetch Upcoming Movies
export const fetchUpcomingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    dispatch({ type: 'FETCH_UPCOMING_SUCCESS', payload: response.data.results });
  } catch (error) {
    console.log('Error fetching upcoming movies:', error);
  }
};

// Action to fetch movie details
export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    dispatch({ type: 'FETCH_MOVIE_DETAILS_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('Error fetching movie details:', error);
  }
};
// Action to fetch movie cast details
export const fetchMovieCast = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
    dispatch({ type: 'FETCH_MOVIE_CAST_SUCCESS', payload: response.data.cast });
  } catch (error) {
    console.log('Error fetching movie cast:', error);
  }
};
