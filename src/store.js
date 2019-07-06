import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './redux/reducers';

const persistedState = localStorage.getItem('SDTReduxState')
	? JSON.parse(localStorage.getItem('SDTReduxState'))
    : {};
const middleware = [thunk];
    
const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middleware)
);

export default store;
