import React from 'react';
import PropTypes from 'prop-types';

// We use a functional component because we don't need state
// We could use React.memo or a PureComponent, except the render is very cheap
// and the shallow check may be more expensive
function Header({ title, className }) {
  // We deconstruct the className into the header, as it may be undefined,
  // and don't want to add it if so
  const props = { className };
  return (
    <h3 {...props}>{title}</h3>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: undefined,
};

export default Header;
