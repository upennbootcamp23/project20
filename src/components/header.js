import React  from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AboutMe from '../components/about';
import MyPortfolio from '../components/portfolio';
import ContactMe from '../components/contact';
import Resume from '../components/resume';
import Navigation from '../components/navbar';

function Header() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <AboutMe />
                </Route>
                <Route path="/portfolio" component={MyPortfolio} />
                <Route path="/contact" component={ContactMe} />
                <Route path="/resume">
                    <Resume />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;