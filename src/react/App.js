import React from 'react';

import './App.css';
import Logo from './logo.svg';

import Recent from './Recent';
import Unread from './Unread';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <main>
                <nav>
                    <header>
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                            <span>Pinboard Client</span>
                        </Link>
                    </header>

                    <ul>
                        <li>
                            <Link to="/">Recent</Link>
                        </li>
                        <li>
                            <Link to="/unread">Unread</Link>
                        </li>
                    </ul>
                </nav>

                <section>
                    <Route exact path="/" component={Recent} />
                    <Route path="/unread" component={Unread} />
                </section>
            </main>
        </Router>
    );
}

export default App;
