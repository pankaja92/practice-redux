import * as types from '../constants';

export default function(state='', action){
    switch (action.type) {
        case types.SET_COUNTRY:
            return action.payload;
        default:
            return state;
    }
}