import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  LOGS_ERROR,
  SET_LOADING
} from "../actions/types";

const initialState = {
  logs: null,
  loading: false,
  current: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
