import { SET_SELECTED_MOVIE, SET_SEARCH_KEYWORD } from "./actionTypes";

export const setSelectedMovie = movieId => ({
    type: SET_SELECTED_MOVIE,
    payload: { selectedMovie: movieId }
})

export const setSearchKeyword = searchKeyword => ({
    type: SET_SEARCH_KEYWORD,
    payload: { searchKeyword }
})
