import * as types from '../constants';

export default function(state=false, action){
    switch (action.type) {
        case types.REVEIVING_DETAILS:
            return { isFetching : true }
        case types.RECEIEVED_DETAILS:
            return { isFetching : false }
        default:
            return state;
    }
}