import { SET_SELECTED_MOVIE } from "../actionTypes";

const initialState = ""

const selectedMovie = (state = initialState, action) => {
    switch(action.type) {
        case SET_SELECTED_MOVIE: {
            return action.payload.selectedMovie
        }
        default: {
            return state
        }
    }
}

export default selectedMovie