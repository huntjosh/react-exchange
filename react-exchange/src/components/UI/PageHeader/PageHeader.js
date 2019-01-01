import React from 'react';
import PropTypes from 'prop-types';

export function Header({ title }) {
  return (
    <h3>{title}</h3>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Header);
