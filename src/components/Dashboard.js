import React, { Component } from 'react';
import '../css/App.css';
import AddItemForm from './AddItemForm';
import Ticker from './Ticker';

class Dashboard extends Component {
  constructor() {
      super();
  }
  render() {
    return (
        <div>
            <div className="row ticker-wrapper valign-wrapper">
                <div className="col s12">
                    <Ticker goldPrice={this.props.goldPrice} />
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