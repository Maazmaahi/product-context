import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
    return (
        <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default Main;
