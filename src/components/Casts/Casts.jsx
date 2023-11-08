import { useEffect, useState } from 'react';
import { ContainerCast } from './Casts.styled';
import { OneCasts } from './OneCast';
import { getCasts } from 'servise/moviesApi';
import { useParams } from 'react-router-dom';
import { CastsList } from './Casts.styled';
export const Casts = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const normalizeCasts = casts =>
      casts.map(({ name, profile_path, id }) => ({ name, profile_path ,id}));
    const getMovieCasts = async id => {
      try {
        const res = await getCasts(id);
        const updateCasts = normalizeCasts(res);
        setCasts(updateCasts);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCasts(movieId);
  }, [movieId]);
  return (
    <ContainerCast>
      {casts ? (
        <CastsList>
          {casts.map(({ name, profile_path ,id})=><OneCasts key={id} cast={{name, profile_path}}/>)}
        </CastsList>
      ) : (
        <p>Didn't find</p>
      )}
    </ContainerCast>
  );
};
