import { MovieItem } from "./MovieItem"
export const MoviesList=({movies, title})=>{
return (<div><h1>{title}</h1>
    <ul>{movies.map(movie=><MovieItem key={movie.id} movie={movie}/>)}
</ul></div>)
}