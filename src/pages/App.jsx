import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from './Home'
import DAO from './DAO'
import Search from './Search'
import ProfilePage from './ProfilePage'
import SignIn from './SignIn'

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
                <Route path="/search/:query">
                    <Search />
                </Route>
                <Route path="/profile/:searchTerm?">
                    <ProfilePage />
                </Route>
                <Route path="/signIn">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    )
}

export default App