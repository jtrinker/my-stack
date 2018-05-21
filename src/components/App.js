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
      platinumPrice: '',
      platinumUp: null,
      palladiumPrice: '',
      palladiumUp: null,
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
        this.destructureObject(metal);
      }
    });
  }

  // build a new object with only the properties I need
  // rename properties so that they are more readable 
  destructureObject(metal) {
    const types = ['gold', 'silver', 'platinum', 'palladium'];
    const props = ['ask_usd_toz', 'change_dollar_usd_toz', 'change_percent_usd_toz'];
    const namesMap = {
        ask_usd_toz: 'price',
        change_dollar_usd_toz: 'changeLastClose',
        change_percent_usd_toz: 'percentChange'
    };

    const metalObj = {};

    types.forEach(function(type) {
      for (let prop in namesMap) {
          let key = type + '_' + prop;
          if (metal.hasOwnProperty(key)) {
              metalObj[type] = metalObj[type] || {};
              metalObj[type][namesMap[prop]] = metal[key];
          }
      }
    });
    this.updatePrice(metalObj);
  }

  //setState/update state with latest metal prices
  //measure if price is up/down and set that in state to pass down to ticker
  updatePrice(metalPrice) {
    let goldUp = null;
    let silverUp = null; 
    let platinumUp = null;
    let palladiumUp = null;

    // refactor to create a function that takes any metal and calculates current and last
    const currentGold = Number.parseFloat(metalPrice.gold.price).toFixed(2);
    const lastCloseGold = currentGold - (Number.parseFloat(metalPrice.gold.changeLastClose));

    const currentSilver = Number.parseFloat(metalPrice.silver.price).toFixed(2);
    const lastCloseSilver = currentSilver - (Number.parseFloat(metalPrice.silver.changeLastClose));

    const currentPlatinum = Number.parseFloat(metalPrice.platinum.price).toFixed(2);
    const lastClosePlatinum = currentPlatinum - (Number.parseFloat(metalPrice.platinum.changeLastClose));

    const currentPalladium = Number.parseFloat(metalPrice.palladium.price).toFixed(2);
    const lastClosePalladium = currentPalladium - (Number.parseFloat(metalPrice.palladium.changeLastClose));

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

    if (lastClosePlatinum > currentPlatinum) {
      platinumUp = false;
    }else if (lastClosePlatinum < currentPlatinum) {
      platinumUp = true;
    }

    if (lastClosePalladium> currentPalladium) {
      palladiumUp = false;
    }else if (lastClosePalladium < currentPalladium) {
      palladiumUp = true;
    }

    this.setState({ 
      goldPrice: currentGold,
      goldUp: goldUp,
      silverPrice: currentSilver,
      silverUp: silverUp,
      platinumPrice: currentPlatinum,
      platinumUp: platinumUp,
      palladiumPrice: currentPalladium,
      palladiumUp: palladiumUp
    });
  }

  //recheck prices every 10 sec
  componentDidMount() {
    // get prices on initial load; es6 this goes here instead of componentWillMount()
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
                    <Dashboard price={this.state} />
              ) : (<Loading />)

            }
          </div>
        </div>
    );
  }
}

export default App;