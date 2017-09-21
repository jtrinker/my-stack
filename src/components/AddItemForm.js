import React, { Component } from 'react';
import '../css/App.css';
import jQuery from 'jquery/dist/jquery.js';

class AddItemForm extends Component {
  constructor() {
    super();
    const price = {};

    this.fetchPrice = this.fetchPrice.bind(this);
  }

  componentWillMount() {
    // better way?
    jQuery(document).ready(function() {
      jQuery('select').material_select();
    });
  }

  fetchPrice(e) {
    e.preventDefault();
    const apiUrl = 'https://globalmetals.xignite.com/xGlobalMetals.json/GetRealTimeMetalQuote?Symbol=XAU&Currency=USD&_token=3A7B98F3EB3846DE9EC1FE7C73A279D3';
    // on form submit we'll stick all form data into object, call fetchPrice, and pass in object.
    jQuery.ajax({
      method: 'GET',
      url: apiUrl,
      success: (price) => {
        this.price = price;
        console.log(this.price);
      }
    });
  }

  render() {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <form onSubmit={(e) => this.fetchPrice(e)}>
                      <div className="input-field col s3">
                        <select>
                            <option value="Select Metal">Select</option>
                            <option value="1">Gold</option>
                            <option value="2">Silver</option>
                            <option value="3">Platinum</option>
                            <option value="3">Palladium</option>
                          </select>
                          <label>Metal Type</label>
                      </div>
                      <button type="submit">+ Add Item</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default AddItemForm;