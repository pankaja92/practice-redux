import * as types from '../constants';

export default function(state={}, action){
    switch (action.type) {
        case types.GET_COUNTRY :
            console.log(action.payload);
            return action.payload
        default:
            return state;
    }
};