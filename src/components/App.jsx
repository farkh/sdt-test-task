import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

store.subscribe(() => {
    localStorage.setItem('SDTReduxState', JSON.stringify(store.getState()));
});

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                {/* HOC here */}
                <Switch>
                    <Route path="/" render={() => (<h1>Hello world!</h1>)} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
