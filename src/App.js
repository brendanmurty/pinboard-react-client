import React from 'react';
import Logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <header>
          <img src={Logo} alt="Pinboard Client" />
        </header>

        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/unread">Unread</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={All} />
        <Route path="/unread" component={Unread} />
        <Route path="/tags" component={Tags} />
      </nav>
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

function Tags({ match }) {
  return (
    <div>
      <h2>Tags</h2>
      <ul>
        <li>
          <Link to={`${match.url}/example1`}>Example 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/example2`}>Example 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/example3`}>Example 3</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Tag} />
      <Route
        exact
        path={match.path}
        render={() => ''}
      />
    </div>
  );
}

function Tag({ match }) {
  return (
    <div>
      <h3>Tag: {match.params.topicId}</h3>
    </div>
  );
}

export default App;
