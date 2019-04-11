import React from 'react';

import Logo from './logo.svg';
import './App.css';

import Pinboard from "node-pinboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    const pinboard = new Pinboard(process.env.REACT_APP_PINBOARD_API_TOKEN);

    console.log(pinboard);

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
                            <Link to="/">All</Link>
                        </li>
                        <li>
                            <Link to="/unread">Unread</Link>
                        </li>
                    </ul>
                </nav>

                <section>
                    <Route exact path="/" component={All} />
                    <Route path="/unread" component={Unread} />
                </section>
            </main>
        </Router>
    );
}

function All() {
    return (
        <div>
            <h2>All</h2>
        </div>
    );
}

function Unread() {
    return (
        <div>
            <h2>Unread</h2>
        </div>
    );
}

export default App;
