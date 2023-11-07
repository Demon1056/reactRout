import { MovieItem } from "./MovieItem"
export const TrendingMoviesList=({movies})=>{
console.log(movies);
    return (<ul>{movies.map(movie=><MovieItem key={movie.id} movie={movie}/>)}
</ul>)
}