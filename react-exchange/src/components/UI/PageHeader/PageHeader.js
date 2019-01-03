import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
  header: {
    textAlign: 'center',
  },
});

// We use a functional component because we don't need state
// We could use React.memo or a PureComponent, except the render is very cheap
// and the shallow check may be more expensive
function Header({ title, classes }) {
  return (
    <h3 className={classes.header}>{title}</h3>
  );
}

Header.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
