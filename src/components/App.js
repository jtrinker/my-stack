import React, { Component } from 'react';
import Dashboard from './Dashboard';
import * as Constants from '../constants';
import jQuery from 'jquery/dist/jquery.js';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.updateGoldPrice = this.updateGoldPrice.bind(this);
    this.fetchGoldPrice = this.fetchGoldPrice.bind(this);
    this.state = {
      goldPrice: '',
      items: {}
    }
  }
  fetchGoldPrice() {
    jQuery.ajax({
      method: 'GET',
      cache: false,
      headers: {'Access-Control-Allow-Origin': '*'},
      url: Constants.API_URL,
      success: (gold) => {
        this.updateGoldPrice(gold.gold_bid_usd_toz);
      }
    });
  }
  updateGoldPrice(goldPrice) {
    console.log(goldPrice);
    this.setState({ goldPrice: goldPrice });
  }
  componentDidMount() {
    this.fetchGoldPrice();
    this.timer = setInterval(
      () => this.fetchGoldPrice(), 30000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
}
  render() {
    return (
        <div>
          <div className="header-wrapper z-depth-3">
            <div className="container">
              <header className="valign-wrapper">
                    <h1>inventory</h1>
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