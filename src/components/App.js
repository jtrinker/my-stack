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
        this.updateGoldPrice(gold);
      }
    });
  }
  isPriceUp(current,lastClose){
    // send this data to ticker.js to add/remove classes from array
    if (lastClose > current) {
      return false;
    } else if (lastClose < current) {
      return true;
    }
  }
  updateGoldPrice(goldPrice) {
    this.setState({ goldPrice: goldPrice });
    const current = Number.parseFloat(this.state.goldPrice.gold_bid_usd_toz);
    const lastClose = current - Number.parsefloat(this.state.goldPrice.gold_change_dollar_usd_toz);
    priceUpOrDown(current,lastClose);
  }
  componentDidMount() {
    this.fetchGoldPrice();
    this.timer = setInterval(
      () => this.fetchGoldPrice(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
}
  render() {
    return (
        <div>
          <div className="header-wrapper z-depth-1">
            <div className="container">
              <header className="valign-wrapper">
                    <h1>inventory</h1>
              </header>
            </div>
          </div>
          <div className="container">
            <Dashboard addItem={this.addItem} goldPrice={this.state.goldPrice} />
          </div>
        </div>
    );
  }
}

export default App;