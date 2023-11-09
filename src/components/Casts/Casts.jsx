import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { OneCasts } from './OneCast';

import { ContainerCast } from './Casts.styled';
import { CastsList } from './Casts.styled';

import { getCasts } from 'servise/moviesApi';

const Casts = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const normalizeCasts = casts =>
      casts.map(({ name, profile_path, id }) => ({ name, profile_path, id }));

    const getMovieCasts = async id => {
      try {
        const res = await getCasts(id);
        const updateCasts = normalizeCasts(res);
        setCasts(updateCasts);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieCasts(movieId);
  }, [movieId]);

  return (
    <ContainerCast>
      {casts ? (
        <CastsList>
          {casts.map(({ name, profile_path, id }) => (
            <OneCasts key={id} cast={{ name, profile_path }} />
          ))}
        </CastsList>
      ) : (
        <p>Didn't find</p>
      )}
    </ContainerCast>
  );
};

export default Casts;
