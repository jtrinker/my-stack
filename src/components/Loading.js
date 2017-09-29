import React, { Component } from 'react';
import '../css/Ticker.css';
import Loader from '../Ball.svg';

class Loading extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="center-align">
        <img src={Loader} alt="Loading" />
      </div>
    )
  }
}

export default Loading;