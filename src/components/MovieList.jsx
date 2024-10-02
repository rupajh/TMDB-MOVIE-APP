import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNowPlayingMovies, fetchTopRatedMovies, fetchPopularMovies, fetchUpcomingMovies } from '../actions/movieActions';

const Home = () => {
  const dispatch = useDispatch();
  const { nowPlaying, topRated, popular, upcoming } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  const renderMovies = (movies) => {
    return movies.map((movie) => (
      <div key={movie.id} className="movie-card">
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none"}}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <h3 className='text text-xl'>{movie.title}</h3>
          <p className='text text-sm'>Rating: {movie.vote_average}</p>
          <p className='text text-sm'>Release Date: {movie.release_date}</p>
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <h1 className='text-white'>Now Playing</h1>
      <div className="movie-grid">{renderMovies(nowPlaying)}</div>

      <h1 className='text-white'>Top Rated</h1>
      <div className="movie-grid">{renderMovies(topRated)}</div>

      <h1 className='text-white'>Popular</h1>
      <div className="movie-grid">{renderMovies(popular)}</div>

      <h1 className='text-white'>Upcoming</h1>
      <div className="movie-grid">{renderMovies(upcoming)}</div>
    </div>
  );
};

export default Home;
