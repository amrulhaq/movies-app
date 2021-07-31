import axios from 'axios'

/**
 * @todo move to config
 */
const API_KEY = "faf7e5bb"

const omdbRequest = axios.create({
    baseURL: "http://www.omdbapi.com/",
    params: {
        apikey: API_KEY
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