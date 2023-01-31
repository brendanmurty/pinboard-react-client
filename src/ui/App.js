// UI: App - Build the base layout, routes, navigation and load the other UI objects

import React from 'react';

import '../css/App.css';

import Recent from './Recent';
import Unread from './Unread';

import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";

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
                              <NavLink exact="true" to="/" activeclassname="active">Recent</NavLink>
                            </li>
                            <li>
                              <NavLink to="/unread" activeclassname="active">Unread</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                  <Routes>
                    <Route exact="true" path="/" element={<Recent />} />
                    <Route path="/unread" element={<Unread />} />
                  </Routes>
                </main>
            </section>
        </Router>
    );
}

export default App;
