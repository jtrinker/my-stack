import React, { Component } from 'react';
import Home from './Home';
import '../css/App.css';

class App extends Component {
  render() {
    return (
        <div>
          <div className="header-wrapper">
            <div className="container">
              <header className="valign-wrapper">
                    <h1>track my stack</h1>
              </header>
            </div>
          </div>
          <div className="container">
            <Home />
          </div>
        </div>
    );
  }
}

export default App;