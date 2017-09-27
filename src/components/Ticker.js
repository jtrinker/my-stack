import React, { Component } from 'react';
import '../css/Ticker.css';

class Ticker extends Component {
  constructor() {
    super();
    this.priceClasses = ['price'];
    this.updatePriceClasses = this.updatePriceClasses.bind(this);
  }
  updatePriceClasses(){
    if (lastClose > current) {
      this.priceClasses.splice(-1).push('price-down');
    } else if (lastClose < current) {
      this.priceClasses.splice(-1).push('price-up');
    }
  }
  render() {
    return (
      <h4 className="ticker-symbol">Gold <span className={this.priceClasses.join(' ')}>${this.props.goldPrice.gold_bid_usd_toz}</span></h4>
    )
  }
}

export default Ticker;