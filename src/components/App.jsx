import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

import Workspace from './Workspace/Workspace';

store.subscribe(() => {
    localStorage.setItem('SDTReduxState', JSON.stringify(store.getState()));
});

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Workspace>
                    <Switch>
                        <Route path="/" render={() => (<h1>Hello world!</h1>)} />
                    </Switch>
                </Workspace>
            </Router>
        </Provider>
    )
}

export default App
