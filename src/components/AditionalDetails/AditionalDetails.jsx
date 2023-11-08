import { ContainerAditionalDetails, MoviesTitle, DetailsItem, ItemTitle } from "./AditionalDetails.styled";
export const AditionalDetails = ({
  movie: { title, vote_average, overview, genres, name, poster_path },
}) => {

    const genresString = genres.map(genr => genr.name).join(', ')
    const percentRating = (vote_average*10).toFixed(2)
  return (
    <ContainerAditionalDetails>
      <img
        alt={title || name}
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        width="300"
      />
      <div>
      <MoviesTitle>{title}</MoviesTitle>
      <ul>
      <DetailsItem><ItemTitle>User Score:</ItemTitle> {`${percentRating}%`} </DetailsItem>
      <DetailsItem><ItemTitle>Overwiew :</ItemTitle>  {overview} </DetailsItem>
      <DetailsItem><ItemTitle>Geners:</ItemTitle> {genresString} </DetailsItem>
      </ul>
      </div>
    </ContainerAditionalDetails>
  );
};
