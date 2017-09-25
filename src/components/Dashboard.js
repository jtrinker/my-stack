import React, { Component } from 'react';
import '../css/App.css';
import AddItemForm from './AddItemForm';

class Dashboard extends Component {
  constructor() {
      super();
  }
  render() {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    {/* <PriceTicker /> */}
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    {/* <addItem /> */}
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;