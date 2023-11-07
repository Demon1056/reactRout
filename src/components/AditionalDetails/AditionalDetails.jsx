export const AditionalDetails = ({
  movie: { title, vote_average, overview, genres, name, poster_path },
}) => {

    const genresString = genres.map(genr => genr.name).join(', ')
  return (
    <div>
      <img
        alt={title || name}
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        width="300"
      ></img>
      <h1>{title}</h1>
      <ul>
      <li>User Score:{vote_average}</li>
      <li>Overwiew : {overview}</li>
      <li>Geners {genresString}</li>
      </ul>
    </div>
  );
};
