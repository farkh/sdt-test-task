import { combineReducers } from 'redux';

import requestReducer from './requestReducer';

export default combineReducers({
    requestsReducer: requestReducer,
});
