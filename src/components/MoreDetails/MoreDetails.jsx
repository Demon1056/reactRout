import { MovieDetailsLink } from './MoreDetails.styled';
export const MoreDetails = () => {
  return (
    <div>
      <MovieDetailsLink to="cast">Show Casts</MovieDetailsLink>
      <br />
      <MovieDetailsLink to="reviews">Show Reviews</MovieDetailsLink>
    </div>
  );
};
