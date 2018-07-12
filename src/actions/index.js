import * as types from '../constants';
import axios from 'axios';
const url ='https://restcountries.eu/rest/v2/name/';

export const setCountry = country => {
    return {
        type : types.SET_COUNTRY,
        payload : country
    }
};

export const getCountry = country => {
    return async dispatch => {
        dispatch({ type : types.REVEIVING_DETAILS })
        const response = await axios.get(url + country);
        const data = response.data[0]
        dispatch({ type : types.RECEIEVED_DETAILS });
        return dispatch({ 
            type : types.GET_COUNTRY,
            payload : data
        })
    }
}
