import React, { Component } from 'react';
import Dashboard from './Dashboard';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);

    this.state = {
      items: {}
    }
  }
  addItem(item) {
    const items = {...this.state.items};
    items[item] = item;
    // why cant I click multiple times and keep adding to state obkect?
    this.setState({ items: items });
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
            <Dashboard addItem={this.addItem} />
          </div>
        </div>
    );
  }
}

export default App;
