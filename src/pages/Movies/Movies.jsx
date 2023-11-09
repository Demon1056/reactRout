import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { ContainerMovies } from './Movies.styled';

import { getMovieByName } from 'servise/moviesApi';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const makeUpdateData = movies =>
    movies.map(({ id, title, name }) => ({ id, title, name }));

  const value = searchParams.get('query');

  useEffect(() => {
    const getMovies = async name => {
      if (!name) {
        return;
      }
      try {
        setIsLoading(true);
        const res = await getMovieByName(name);
        const updateMovies = makeUpdateData(res);
        setMovies(updateMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies(value);
  }, [value]);

  return (
    <ContainerMovies>
      <form
        onSubmit={e => {
          e.preventDefault();
          const query = e.target[0].value;
          if (!query) {
            console.log('Input name of movie please');
            return setSearchParams({});
          }
          setSearchParams({ query });
          e.target.reset();
        }}
      >
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>
      {movies && !isLoading && (
        <MoviesList movies={movies} title={`Movies with ${value} letters`} />
      )}
      {isLoading && Loader}
    </ContainerMovies>
  );
};

export default Movies;
