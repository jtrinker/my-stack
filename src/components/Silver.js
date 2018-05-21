import React, { Component } from 'react';
import '../css/Ticker.css';

class Silver extends Component {
  constructor() {
    super();
    this.priceClass = '';
  }

  componentWillMount() {
    this.priceClass = this.props.updatePriceClass(this.props.silverUp);
  }

  componentWillUpdate() {
    this.priceClass = this.props.updatePriceClass(this.props.silverUp);
  }
  render() {
    return (
      <div>
      {this.props.classNames}
        <p className={this.priceClass}>{this.props.silverPrice}</p>
      </div>
    )
  }
}

export default Silver;