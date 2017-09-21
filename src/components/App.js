import React, { Component } from 'react';
import Dashboard from './Dashboard';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: {}
    }
  }
  render() {
    return (
        <div>
          <div className="header-wrapper z-depth-3">
            <div className="container">
              <header className="valign-wrapper">
                    <h1>track my stack</h1>
              </header>
            </div>
          </div>
          <div className="container">
            <Dashboard />
          </div>
        </div>
    );
  }
}

export default App;
