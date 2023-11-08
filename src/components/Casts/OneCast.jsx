import { CastItem } from './Casts.styled';
export const OneCasts = ({ cast: { name, profile_path } }) => {
  return (
    <CastItem>
      <img
        alt={name}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : 'https://i.work.ua/career_guide/59_b.png'
        }
        width="100"
      />
      <p>{name}</p>
    </CastItem>
  );
};
