import { combineReducers } from 'redux';

import country from './country';
import details from './details';
import isFetching from './isFetching';

const rootReducer = combineReducers({
    country,
    details,
    isFetching
});

export default rootReducer;