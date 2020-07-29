import { GET_TECHS, DELETE_TECH, ADD_TECH, TECHS_ERROR } from "./types";

export const deleteTech = id => async dispatch => {
  try {
    // const config = {
    //   method: "DELETE",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // };
    // const res = await fetch(`/techs/${id}`, config);
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

export const addTech = formData => async dispatch => {
  try {
    // const config = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ ...formData })
    // };
    // const res = await fetch("/techs", config);
    // console.log(await res.json());
    dispatch({
      type: ADD_TECH,
      payload: formData
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};
//get techs from server
export const getTechs = () => async dispatch => {
  try {
    // const res = await fetch("/techs");
    // const techs = await res.json();

    dispatch({
      type: GET_TECHS
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response
    });
  }
};
