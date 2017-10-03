import React, { Component } from 'react';
import Loading from './Loading';
import Dashboard from './Dashboard';
import * as Constants from '../constants';
import '../helpers.js';
import jQuery from 'jquery/dist/jquery.js';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.fetchPrice = this.fetchPrice.bind(this);
    this.state = {
      goldPrice: '',
      goldUp: null,
      silverPrice: '',
      silverUp: null,
      items: {}
    }
  }

  //grab metal prices on initial load and every 10 sec; pass
  //price to updatePrice()
  fetchPrice() {
    jQuery.ajax({
      method: 'GET',
      cache: false,
      headers: {'Access-Control-Allow-Origin': '*'},
      url: Constants.API_URL,
      success: (metal) => {
        this.updatePrice(metal);
      }
    });
  }

  //setState/update state with latest metal prices
  //measure if price is up/down and set that in state to pass down to ticker
  updatePrice(metalPrice) {
    // refactor to create a function that takes any metal and calulates current and last
    const currentGold = Number.parseFloat(metalPrice.gold_ask_usd_toz);
    const lastCloseGold = currentGold - (Number.parseFloat(metalPrice.gold_change_dollar_usd_toz));

    const currentSilver = Number.parseFloat(metalPrice.silver_ask_usd_toz);
    const lastCloseSilver = currentSilver - (Number.parseFloat(metalPrice.silver_change_dollar_usd_toz));

    let goldUp = null;
    let silverUp = null; 

    if (lastCloseGold > currentGold) {
      goldUp = false;
    }else if (lastCloseGold < currentGold) {
      goldUp = true;
    }

    if (lastCloseSilver > currentSilver) {
      silverUp = false;
    }else if (lastCloseSilver < currentSilver) {
      silverUp = true;
    }

    this.setState({ 
      goldPrice: currentGold,
      goldUp: goldUp,
      silverPrice: currentSilver,
      silverUp: silverUp
    });
  }

  //recheck gold price every 10 sec
  componentDidMount() {
    // get gold price on initial load; es6 this goes here instead of componentWillMount()
    this.fetchPrice();
    this.timer = setInterval(
      () => this.fetchPrice(), 10000);
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
            {
              this.state.goldUp !== null ? (
                    <Dashboard goldPrice={this.state.goldPrice} goldUp={this.state.goldUp} />
              ) : (<Loading />)

            }
          </div>
        </div>
    );
  }
}

export default App;