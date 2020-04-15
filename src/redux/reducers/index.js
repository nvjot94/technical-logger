import { combineReducers } from "redux";
import logReducer from "./LogReducers";
import techReducer from "./TechReducers";
export default combineReducers({ log: logReducer, tech: techReducer });
