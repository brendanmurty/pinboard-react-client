import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="App-nav">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
            <h1>Page Name</h1>

            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>              
        </main>
      </div>
    );
  }
}

export default App;
