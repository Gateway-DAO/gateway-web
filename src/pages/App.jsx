import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from './Home'
import DAO from './DAO'

const App = props => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/dao/:id">
                    <DAO />
                </Route>
            </Switch>
        </Router>
    )
}

export default App