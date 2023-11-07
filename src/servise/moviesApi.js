import axios from 'axios';
const BASEURL ='https://api.themoviedb.org/3'
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjY1YTNiN2Y5NWUyMjQyZmQwM2RlN2IzMzAyODhiNyIsInN1YiI6IjYzNmFhYTRlOWQ2ZTMzMDA3YTViNDYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PsLFsO9fG4eV0HqtD51yNs18xB47fHVSbOrLH4wGmQ'
axios.defaults.baseURL = BASEURL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
 
export const getTrending = async()=> {
 const res = await axios('trending/all/day')
return res.data.results;}

export const getMovieById = async (id)=>{
    const res = await axios(`movie/${id}`) 
    return res.data;
}