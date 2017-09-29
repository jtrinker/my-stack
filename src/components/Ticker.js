import React, { Component } from 'react';
import Loading from './Loading';
import Gold from './Gold';
import '../css/Ticker.css';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.priceClass='';
    this.updatePriceClasses = this.updatePriceClasses.bind(this);
    let isGoldUp = this.props.goldUp;
    this.updatePriceClasses(isGoldUp);
  }

  updatePriceClasses(isGoldUp) {
    if (isGoldUp === false) {
      this.priceClass = 'price-down';
    } else if (isGoldUp) {
      this.priceClass = 'price-up';
    }
  }

  //will check if price is up or down everytime gold refreshes
  //update green/red classes with updatePriceClaess()
  componentWillUpdate() {
    let isGoldUp = this.props.goldUp;
    this.updatePriceClasses(isGoldUp);
  }

  // if ajax request is not complete yet show nothing, else show price.
  render() {
    return (
      <div>
        <h4 className="ticker-symbol">Gold</h4>
        <Gold goldUp={this.props.goldUp} goldPrice={this.props.goldPrice} priceClass={this.priceClass} />
      </div>
    )
  }
}

export default Ticker;