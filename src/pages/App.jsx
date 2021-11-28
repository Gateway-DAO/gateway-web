import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from './Home'
import FallbackPage from './FallbackPage';
import Page404 from './404';
const DAO = React.lazy(() => import('./DAO'))
const Search = React.lazy(() => import('./Search'))
const ProfilePage = React.lazy(() => import('./ProfilePage'))
const SignIn = React.lazy(() => import('./SignIn'))
const CreateProfile = React.lazy(() => import('./CreateProfile'))

const App = props => {
    return (
        <Router>
            <React.Suspense fallback={<FallbackPage />}>
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
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route path="/create-profile">
                        <CreateProfile />
                    </Route>
                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>
            </React.Suspense>
        </Router>
    )
}

export default App