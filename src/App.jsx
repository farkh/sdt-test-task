import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Workspace from './components/Workspace/Workspace';
import RequestsPage from './pages/Requests/RequestsPage';

store.subscribe(() => {
    localStorage.setItem('SDTReduxState', JSON.stringify(store.getState()));
});

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Workspace>
                    <Switch>
                        <Route exact path="/requests" component={RequestsPage} />
                        <Route exact path="/new" render={() => <h1>Add new request</h1>} />

                        <Redirect to="/requests" />
                    </Switch>
                </Workspace>
            </Router>
        </Provider>
    )
}

export default App
