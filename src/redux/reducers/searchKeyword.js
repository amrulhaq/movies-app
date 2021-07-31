import { SET_SEARCH_KEYWORD } from "../actionTypes";

const initialState = "Avengers"

const searchKeyword = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_KEYWORD: {
            return action.payload.searchKeyword
        }
        default: {
            return state
        }
    }
}

export default searchKeyword