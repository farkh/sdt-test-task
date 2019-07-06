import { combineReducers } from 'redux';

import requestReducer from './requestReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    requestsReducer: requestReducer,
    projectsReducer: projectReducer,
});
