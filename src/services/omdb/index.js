import axios from 'axios'

/**
 * @todo move to config
 */
 const OMDB_API_KEY = process.env.OMDB_API_KEY || "faf7e5bb"
 const OMDB_BASE_URL = process.env.OMDB_BASE_URL || "https://www.omdbapi.com/"
 
 const omdbRequest = axios.create({
     baseURL: OMDB_BASE_URL,
     params: {
         apikey: OMDB_API_KEY
     }
 })
 

export const getMovieDetail = (movieId) => {
    return omdbRequest.get('', {
        params: {
            i: movieId
        }
    })
}

export const searchMovies = (keyword, pagination = 1) => {
    return omdbRequest.get('', {
        params: {
            s: keyword,
            type: 'movie',
            page: pagination
        }
    })
}