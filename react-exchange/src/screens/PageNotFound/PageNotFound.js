import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Screens are just a composition of components, with minimal logic
class PageNotFound extends Component {
  render() {
    return (
      <div className="not-found">
        Page Not Found
      </div>
    );
  }
}

PageNotFound.propTypes = {};

export default PageNotFound;
