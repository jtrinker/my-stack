import React, { Component } from 'react';
import Dashboard from './Dashboard';
import * as Constants from '../constants';
import jQuery from 'jquery/dist/jquery.js';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.fetchGoldPrice = this.fetchGoldPrice.bind(this);
    this.state = {
      goldPrice: '',
      goldUp: false,
      items: {}
    }
  }

  //grab gold price on initial load and every 10 sec; pass
  //price to updateGoldPrice()
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

  //setState/update state with latest gold price
  //measure if price is up/down and set that in state to pass down to ticker
  updateGoldPrice(goldPrice) {
    const currentGold = Number.parseFloat(goldPrice.gold_bid_usd_toz);
    const lastCloseGold = this.currentGold - (Number.parseFloat(goldPrice.gold_change_dollar_usd_toz));
    this.goldUp;

    if (lastCloseGold > currentGold) {
      this.goldUp = false;
    }else if (lastCloseGold < currentGold) {
      this.goldUp = true;
    }

    this.setState({ 
      goldPrice: goldPrice,
      goldUp: this.goldUp
    });
  }

  // grab gold price before initial load
  componentWillMount() {
    this.fetchGoldPrice();
  }

  //recheck gold price every 10 sec
  componentDidMount() {
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
            <Dashboard addItem={this.addItem} goldPrice={this.state.goldPrice} goldUp={this.state.goldUp} />
          </div>
        </div>
    );
  }
}

export default App;