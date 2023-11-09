import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';

import { AditionalDetails } from 'components/AditionalDetails/AditionalDetails';
import { MoreDetails } from 'components/MoreDetails/MoreDetails';
import { GoBack } from 'components/GoBack/GoBack';
import { ContainerMoviesDetails } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

import { getMovieById } from 'servise/moviesApi';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
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
        setIsLoading(true);
        const res = await getMovieById(params.movieId);
        const updateRes = createMovieForState(res);
        setMovie(updateRes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [params.movieId]);

  return (
    <ContainerMoviesDetails>
      <GoBack path={location.state?.from} />
      {movie && !isLoading && (
        <>
          <AditionalDetails movie={movie} />
          <MoreDetails />
        </>
      )}{' '}
      {isLoading && Loader}
      <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
    </ContainerMoviesDetails>
  );
};

export default MoviesDetails;
