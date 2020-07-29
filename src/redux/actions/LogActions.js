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
} from "./types";

// search logs
export const filterLogs = text => async dispatch => {
  try {
    dispatch({
      type: SEARCH_LOGS,
      payload: text
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};
//SET current
export const setCurrent = currentLog => async dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: currentLog
  });
};
// delete log
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    // const config = {
    //   method: "DELETE",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // };
    // const res = await fetch(`/logs/${id}`, config);
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};
// update log
export const updateLog = formData => async dispatch => {
  try {
    setLoading();
    // const config = {
    //   method: "PUT",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ ...formData })
    // };
    // const res = await fetch(`/logs/${formData.id}`, config);
    // formData = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: formData
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

//add log to DB
export const addLog = formData => async dispatch => {
  try {
    // const config = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ ...formData })
    // };
    // const res = await fetch("/logs", config);
    // console.log(await res.json());
    dispatch({
      type: ADD_LOG,
      payload: formData
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};
//get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    // const res = await fetch("/logs");
    // const logs = await res.json();

    dispatch({
      type: GET_LOGS
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// setloading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};
export const ClearFilteredLogs = () => {
  return {
    type: CLEAR_FILTERED
  };
};
