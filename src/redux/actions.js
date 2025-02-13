import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

const backendUrl = "https://pi-coutries-back.onrender.com";

export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios(`${backendUrl}/countries`);
      return dispatch({
        type: "GET_COUNTRIES",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching countries:", error);
      dispatch({
        type: "GET_COUNTRIES_ERROR",
        payload: error.message,
      });
    }
  };
}

export function getCountryByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`${backendUrl}/countries?name=${name}`);
      return dispatch({
        type: "GET_BY_NAME",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching country by name:", error);
      dispatch({
        type: "GET_BY_NAME_ERROR",
        payload: error.message,
      });
    }
  };
}

export function createActivity(input) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${backendUrl}/activities`, input);
      const createdActivity = response.data;
      dispatch({
        type: "CREATE_ACTIVITY",
        payload: createdActivity,
      });
      return createdActivity;
    } catch (error) {
      console.error("Error creating activity:", error);
      console.error("Error in request configuration:", error.message);
    }
  };
}

export function allActivities() {
  return async function (dispatch) {
    try {
      const response = await axios(`${backendUrl}/activities`);
      return dispatch({
        type: "GET_ACTIVITIES",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching activities:", error);
      dispatch({
        type: "GET_ACTIVITIES_ERROR",
        payload: error.message,
      });
    }
  };
}