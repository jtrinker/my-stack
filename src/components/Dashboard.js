import React, { Component } from 'react';
import '../css/App.css';
import AddItemForm from './AddItemForm';
import Ticker from './Ticker';

class Dashboard extends Component {
  constructor() {
      super();
  }
  render() {
    return (
        <div>
            <div className="row valign-wrapper">
                <div className="col s12">
                    <Ticker 
                        goldPrice={this.props.price.goldPrice} 
                        goldUp={this.props.price.goldUp}
                        silverPrice={this.props.price.silverPrice} 
                        silverUp={this.props.price.silverUp}
                        platinumPrice={this.props.price.platinumPrice} 
                        platinumUp={this.props.price.platinumUp}
                        palladiumPrice={this.props.price.palladiumPrice} 
                        palladiumUp={this.props.price.palladiumUp} 
                    />
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    {/* <addItem /> */}
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;