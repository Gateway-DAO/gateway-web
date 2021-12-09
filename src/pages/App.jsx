import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import FallbackPage from './FallbackPage';
import Page404 from './404';
import DaoGate from '../components/BigCard/components/Onboarding/DaoGate';
import DaoGateWithKeys from '../components/BigCard/components/Onboarding/DaoGateWithKeys';
const DAO = React.lazy(() => import('./DAO'))
const Search = React.lazy(() => import('./Search'))
const ProfilePage = React.lazy(() => import('./ProfilePage'))
const SignIn = React.lazy(() => import('./SignIn'))
const CreateProfile = React.lazy(() => import('./CreateProfile'))
const AboutDAOs = React.lazy(() => import('./AboutDAOs'))
const About = React.lazy(() => import('./About'))

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
                    <Route path="/dao/forefront/gate">
                        <DaoGate />
                    </Route>
                    <Route path="/dao/forefront/gatewithkeys">
                        <DaoGateWithKeys />
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
