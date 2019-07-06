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
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

export default store;
