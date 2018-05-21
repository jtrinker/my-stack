import React, { Component } from 'react';
import Loading from './Loading';
import Gold from './Gold';
import Silver from './Silver';
import Platinum from './Platinum';
import Palladium from './Palladium';
import '../css/Ticker.css';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.priceClass='';
    this.updatePriceClass = this.updatePriceClass.bind(this);
  }

  updatePriceClass(isPriceUp) {
    if (isPriceUp === false) {
      return this.priceClass = 'price-down';
    } else if (isPriceUp) {
      return this.priceClass = 'price-up';
    }
  }

  //will check if price is up or down everytime price refreshes
  //update green/red classes with updatePriceClaess()
  // componentWillUpdate() {
  //   let isGoldUp = this.props.goldUp;
  //   this.updatePriceClass(isGoldUp);
  // }

  // if ajax request is not complete yet show nothing, else show price.
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l3">
            <h4 className="ticker-symbol">Gold</h4>
            <Gold goldUp={this.props.goldUp} goldPrice={this.props.goldPrice} updatePriceClass={this.updatePriceClass} />
          </div>

          <div className="col l3">
            <h4 className="ticker-symbol">Silver</h4>
            <Silver silverUp={this.props.silverUp} silverPrice={this.props.silverPrice} updatePriceClass={this.updatePriceClass} />
          </div>

          <div className="col l3">
            <h4 className="ticker-symbol">Platinum</h4>
            <Platinum platinumUp={this.props.platinumUp} platinumPrice={this.props.platinumPrice} updatePriceClass={this.updatePriceClass} />
          </div>

          <div className="col l3">
            <h4 className="ticker-symbol">Palladium</h4>
            <Palladium palladiumUp={this.props.palladiumUp} palladiumPrice={this.props.palladiumPrice} updatePriceClass={this.updatePriceClass} />
          </div>
        </div>
      </div>
    )
  }
}

export default Ticker;