import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  LOGS_ERROR,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
  CLEAR_FILTERED
} from "../actions/types";

const initialState = {
  logs: [
    {
      "message": "Disk failure at workstation #002",
      "attention": true,
      "tech": "John Doe",
      "id": 2,
      "date": 1586956676164
    },
    {
      "message": "Network repaired at workstation #03",
      "tech": "John Doe",
      "attention": false,
      "date": 1586955153840,
      "id": 3
    },
    {
      "message": "Changed network card in server 008",
      "tech": "Rahul Dhiman",
      "attention": true,
      "date": 1586960431406,
      "id": 4
    },
    {
      "message": "qsdwqe",
      "tech": "Navjot Singh",
      "attention": true,
      "date": 1588569087541,
      "id": 5
    }
  ],
  loading: false,
  current: null,
  error: null,
  filtered: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_FILTERED:
      return {
        ...state,
        filtered: null
      };
    case SEARCH_LOGS:
      return {
        ...state,
        filtered: state.logs.filter(log => {
          let regex = new RegExp(`${action.payload}`, "gi");
          return log.message.match(regex) || log.tech.match(regex);
        })
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_CURRENT: {
      return {
        ...state,
        current: null
      };
    }
    case UPDATE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.map(log => {
          return log.id !== action.payload.id ? log : action.payload;
        })
      };
    case DELETE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.filter(log => {
          return log.id !== action.payload;
        })
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload]
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_LOGS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
