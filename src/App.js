import React from 'react';

import Logo from './logo.svg';
import './App.css';

import Pinboard from "node-pinboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PinboardClient = new Pinboard(process.env.REACT_APP_PINBOARD_API_TOKEN);

function App() {
    return (
        <Router>
            <main>
                <nav>
                    <header>
                        <img src={Logo} alt="Logo" />
                        <span>Pinboard Client</span>
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

function Recent() {
    PinboardClient.recent({}, function(error, response) {
        console.log(error, response);
    });
    
    return (
        <div>
            <h2>Recent</h2>
        </div>
    );
}

function Unread() {
    PinboardClient.get({tag: 'toread'}, function(error, response) {
        console.log(error, response);
    });
    
    return (
        <div>
            <h2>Unread</h2>
        </div>
    );
}

export default App;
