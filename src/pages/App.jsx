import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import DAO from './DAO'
import Search from './Search'
import About from './About';
import AboutDAOS from './AboutDAOs/aboutDAOs'

const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about-us">
                    <About />
                </Route>
                <Route exact path="/what-are-DAOs">
                    <AboutDAOS />
                </Route>
                <Route path="/dao/:id">
                    <DAO />
                </Route>
                <Route path="/search/:query">
                    <Search />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
