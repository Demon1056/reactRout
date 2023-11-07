import { useEffect, useState } from 'react';
import { ContainerHome } from "./Home.styled"
import { getTrending } from 'servise/moviesApi';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

export const Home=()=>{
    const [trendingMovies, setTrendingMovies]=useState(null)
const makeUpdateData = movies=>movies.map(({id, title, name})=>({id, title, name}))
    useEffect(()=>{
        const getMovies = async()=>{
            try{ const res= await getTrending()
                const newData= makeUpdateData(res)
                setTrendingMovies(newData)}
            catch(erorr){console.log(erorr);}}
      getMovies()
    },[])
    return(<ContainerHome>HOME page gren
        {trendingMovies&&<TrendingMoviesList movies={trendingMovies}/>}
    </ContainerHome>)
}