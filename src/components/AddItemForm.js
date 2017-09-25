import React, { Component } from 'react';
import '../css/App.css';
import jQuery from 'jquery/dist/jquery.js';

class AddItemForm extends Component {
  constructor() {
    super();
    const price = {};
  }

  componentWillMount() {
    // better way?
    jQuery(document).ready(function() {
      jQuery('select').material_select();
    });
  }

  render() {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <form onSubmit="">
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