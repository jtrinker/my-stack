import React, { Component } from 'react';
import '../css/Ticker.css';

class Gold extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      {this.props.classNames}
        <p className={this.props.priceClass}>{this.props.goldPrice}</p>
      </div>
    )
  }
}

export default Gold;