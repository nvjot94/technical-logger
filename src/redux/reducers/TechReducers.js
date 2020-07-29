import { GET_TECHS, DELETE_TECH, ADD_TECH, TECHS_ERROR } from "../actions/types";

const initialState = {
  techs: [
    {
      "firstName": "Rahul",
      "lastName": "Dhiman",
      "id": 2
    },
    {
      "firstName": "Navjot",
      "lastName": "Singh",
      "id": 3
    }
  ],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload)
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
