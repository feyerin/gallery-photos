import { combineReducers } from "redux";
import LoginReducers from "../login/LoginReducers";

export default combineReducers({
    login: LoginReducers
})