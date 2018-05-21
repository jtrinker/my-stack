import React, { Component } from 'react';
import '../css/Ticker.css';

class Gold extends Component {
  constructor() {
    super();
    this.priceClass = '';
  }

  componentWillMount() {
    this.priceClass = this.props.updatePriceClass(this.props.goldUp);
  }

  componentWillUpdate() {
    this.priceClass = this.props.updatePriceClass(this.props.goldUp);
  }

  render() {
    return (
      <div>
        <p className={this.priceClass}>{this.props.goldPrice}</p>
      </div>
    )
  }
}

export default Gold;