import { useEffect, useState } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { ContainerHome } from './Home.styled';

import { getTrending } from 'servise/moviesApi';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeUpdateData = movies =>
    movies.map(({ id, title, name }) => ({ id, title, name }));

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const res = await getTrending();
        const newData = makeUpdateData(res);
        setTrendingMovies(newData);
      } catch (erorr) {
        console.log(erorr);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <ContainerHome>
      {trendingMovies && !isLoading && (
        <MoviesList movies={trendingMovies} title={'Trending movies today'} />
      )}
      {isLoading && Loader}
    </ContainerHome>
  );
};

export default Home;
