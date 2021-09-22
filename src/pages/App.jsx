import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from './Home'

const App = props => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App