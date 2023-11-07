import { useParams } from 'react-router-dom';
import { AditionalDetails } from 'components/AditionalDetails/AditionalDetails';
import { ContainerMoviesDetails } from './MovieDetails.styled';
import { getMovieById } from 'servise/moviesApi';
import { useEffect, useState } from 'react';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMovieById(params.movieId);
        console.log(res);
        setMovie(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);
  
  return (
    <ContainerMoviesDetails>
      <p>MOVIESDETAILS page bluer</p>
      {movie && <AditionalDetails movie={movie}/>}
      <a href="">Show Casts</a>
      <br />
      <a href="">Show Reviews</a>
    </ContainerMoviesDetails>
  );
};
