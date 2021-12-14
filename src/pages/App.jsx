import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import FallbackPage from './FallbackPage'
import Page404 from './404'
import DAOsGate from './DAOsGate'
const DAO = React.lazy(() => import('./DAO'))
const Search = React.lazy(() => import('./Search'))
const ProfilePage = React.lazy(() => import('./ProfilePage'))
const SignIn = React.lazy(() => import('./SignIn'))
const CreateProfile = React.lazy(() => import('./CreateProfile'))
const AboutDAOs = React.lazy(() => import('./AboutDAOs'))
const About = React.lazy(() => import('./About'))
const AddCommunity = React.lazy(() => import('./AddCommunity'))
const SubmitPage = React.lazy(() => import('./AddCommunity/submitPage'))
const KeyQuiz = React.lazy(() => import('./Quiz'))

const App = (props) => {
    return (
        <Router>
            <React.Suspense fallback={<FallbackPage />}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about-us">
                        <About />
                    </Route>
                    <Route path="/what-are-daos">
                        <AboutDAOs />
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
                    <Route path="/add-community">
                        <AddCommunity />
                    </Route>
                    <Route path="/new-community/:name">
                        <SubmitPage />
                    </Route>
                    <Route path="/dao-gate">
                        <DAOsGate />
                    </Route>
                    <Route path="/key-quiz">
                        <KeyQuiz />
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
