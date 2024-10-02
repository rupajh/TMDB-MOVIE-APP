import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCast } from '../actions/movieActions';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, cast, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id)); 
    dispatch(fetchMovieCast(id)); 
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className='text-white'>{movieDetails.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title} style={{width:"100%",height:"100%"}}/>
      <p className='text-white'>{movieDetails.overview}</p>
      <p className='text-white'>Release Date: {movieDetails.release_date}</p>
      <p className='text-white'>Rating: {movieDetails.vote_average}</p>

      <h2 className='text-white'>Cast</h2>
      <ul className=""style={{listStyle:"none"}}>
        {cast && cast.length > 0 ? (
          cast.slice(0, 5).map((member) => (
            <li className='text-white' key={member.id}>{member.name} as {member.character}</li>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </ul>
      {/* <div className="cast-list">
        {cast && cast.length > 0 ? (
          cast.slice(0, 9).map((member) => (
            <div key={member.cast_id} className="cast-member text-white">
              <img
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                    : 'https://via.placeholder.com/200'
                }
                alt={member.name}
              />
              <p>{member.name}</p>
              <p>as {member.character}</p>
            </div>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </div> */}
    </div>
  );
};

export default MovieDetails;
