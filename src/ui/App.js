// UI: App - Build the base layout, routes, navigation and load the other UI objects

import React from 'react';

import '../css/App.css';

import Recent from './Recent';
import Unread from './Unread';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function App() {
    return (
        <Router>
            <section>
                <header>
                    <Link to="/">
                        <img src="/logo.svg" alt="Bookmark" />
                    </Link>

                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active">Recent</NavLink>
                            </li>
                            <li>
                                <NavLink to="/unread" activeClassName="active">Unread</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Route exact path="/" component={Recent} />
                    <Route path="/unread" component={Unread} />
                </main>
            </section>
        </Router>
    );
}

export default App;
