import { combineReducers } from "redux";
import selectedMovie from "./selectedMovie";
import searchKeyword from "./searchKeyword";

export default combineReducers({ selectedMovie, searchKeyword });