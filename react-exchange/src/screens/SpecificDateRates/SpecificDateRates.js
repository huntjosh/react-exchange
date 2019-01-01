import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Screens are just a composition of components, with minimal logic
class SpecificDateRates extends Component {
  render() {
    return (
      <div className="specific-date">
        SpecificDate
      </div>
    );
  }
}

SpecificDateRates.propTypes = {};

export default SpecificDateRates;
