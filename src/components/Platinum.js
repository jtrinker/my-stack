import React, { Component } from 'react';
import '../css/Ticker.css';

class Platinum extends Component {
  constructor() {
    super();
    this.priceClass = '';
  }

  componentWillMount() {
    this.priceClass = this.props.updatePriceClass(this.props.platinumUp);
  }

  componentWillUpdate() {
    this.priceClass = this.props.updatePriceClass(this.props.platinumUp);
  }

  render() {
    return (
      <div>
        <p className={this.priceClass}>{this.props.platinumPrice}</p>
      </div>
    )
  }
}

export default Platinum;