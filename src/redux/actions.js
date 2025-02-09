import axios from 'axios'

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_BY_NAME = "GET_BY_NAME"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const GET_ACTIVITIES = "GET_ACTIVITIES"

//const baseURL = 'http://localhost:3001';
const baseURL = 'https://pi-coutries-back-production.up.railway.app/    ';

export function  getCountries(){
    return async function(dispatch){
        const response = await axios(`${baseURL}/countries`)
        return dispatch({
            type:"GET_COUNTRIES",
            payload:response.data
        })
    }
}

export function  getCountryByName(name){
    return async function(dispatch){
        const response = await axios(`${baseURL}/countries?name=${name}`)
        return dispatch({
            type:"GET_BY_NAME",
            payload:response.data
        })
    }
}

export function createActivity(input){
    return async function(dispatch){
        try {
            
        const response = await axios.post(`${baseURL}/activities`, input)
        const createdActivity = response.data;
       dispatch({
            type:"CREATE_ACTIVITY",
            payload: createdActivity
        })
        return createdActivity
    
    } catch (error) {
        console.error('Error al crear la actividad:', error);
        console.error('Error en la configuración de la solicitud:', error.message);
        }
      }
         }

export function allActivities(){
return async function(dispatch){
    const response = await axios(`${baseURL}/activities`)
    return dispatch({
        type:"GET_ACTIVITIES",
        payload:response.data
    })

}
}