import React, { Component } from 'react';
import '../css/App.css';

class NotFound extends Component {
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
            <div className="row">
                <div className="col s12">
                    <h2>you're lost af</h2>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default NotFound;