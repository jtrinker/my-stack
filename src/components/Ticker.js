import React, { Component } from 'react';
import '../css/Ticker.css';

class Ticker extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <h4 className="ticker-symbol">Gold <span className="price">${this.props.goldPrice}</span></h4>
    )
  }
}

export default Ticker;