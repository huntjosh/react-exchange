import React from 'react';
import PropTypes from 'prop-types';

// We use a functional component because we don't need state
// We could use React.memo or a PureComponent, except the render is very cheap
// and the shallow check may be more expensive
function Header({ title }) {
  return (
    <h3>{title}</h3>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
