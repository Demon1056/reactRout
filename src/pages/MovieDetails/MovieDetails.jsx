import { Outlet, useParams } from 'react-router-dom';
import { AditionalDetails } from 'components/AditionalDetails/AditionalDetails';
import { MoreDetails } from 'components/MoreDetails/MoreDetails';
import { GoBack } from 'components/GoBack/GoBack';
import { ContainerMoviesDetails } from './MovieDetails.styled';
import { getMovieById } from 'servise/moviesApi';
import { useEffect, useState } from 'react';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  useEffect(() => {
    const createMovieForState = ({
      title,
      vote_average,
      overview,
      genres,
      name,
      poster_path,
    }) => ({ title, vote_average, overview, genres, name, poster_path });
    const getMovie = async () => {
      try {
        const res = await getMovieById(params.movieId);
       const updateRes = createMovieForState(res)
        setMovie(updateRes);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [params.movieId]);

  return (
    <ContainerMoviesDetails>
<GoBack/>
      {movie && (
        <>
          <AditionalDetails movie={movie} />
          <MoreDetails />
        </>
      )}
      <Outlet />
    </ContainerMoviesDetails>
  );
};
