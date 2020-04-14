import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  LOGS_ERROR,
  SET_LOADING,
  SET_CURRENT
} from "./types";
import { captureRejectionSymbol } from "events";

//SET current
export const setCurrent = currentLog => async dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: currentLog
  });
};

//add log to DB
export const addLog = formData => async dispatch => {
  try {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...formData })
    };
    const res = await fetch("/logs", config);
    console.log(await res.json());
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
    const res = await fetch("/logs");
    const logs = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: logs
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
