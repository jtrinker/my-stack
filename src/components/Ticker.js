import React, { Component } from 'react';
import '../css/Ticker.css';

class Ticker extends Component {
  constructor() {
    super();
    this.priceClasses = ['price'];
    this.updatePriceClasses = this.updatePriceClasses.bind(this);
  }

  updatePriceClasses() {
    const up = this.props.goldUp;
    if (!up) {
      this.priceClasses.splice(-1);
      this.priceClasses.push('price-down');
    } else {
      this.priceClasses.splice(-1);
      this.priceClasses.push('price-up');
    }
  }

  //will check if gold is up or down on initial load? Check on this and willUpdate()
  //update green/red classes with updatePriceClaess()
  componentWillMount() {
    this.updatePriceClasses(this.lastCloseGold,this.currentGold);
  }

  //will check if price is up or down everytime gold refreshes
  //update green/red classes with updatePriceClaess()
  componentWillUpdate() {
    this.updatePriceClasses();
  }

  render() {
    return (
      <h4 className="ticker-symbol">Gold <span className={this.priceClasses.join(' ')}>${this.props.goldPrice.gold_bid_usd_toz}</span></h4>
    )
  }
}

export default Ticker;