import React, { Component } from 'react';
import '../css/Ticker.css';

class Palladium extends Component {
  constructor() {
    super();
    this.priceClass = '';
  }

  componentWillMount() {
    this.priceClass = this.props.updatePriceClass(this.props.palladiumUp);
  }

  componentWillUpdate() {
    this.priceClass = this.props.updatePriceClass(this.props.palladiumUp);
  }

  render() {
    return (
      <div>
        <p className={this.priceClass}>{this.props.palladiumPrice}</p>
      </div>
    )
  }
}

export default Palladium;