import { combineReducers } from "redux";
import logReducer from "./LogReducers";
export default combineReducers({ log: logReducer });
