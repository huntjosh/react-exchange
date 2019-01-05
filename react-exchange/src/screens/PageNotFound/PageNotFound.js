import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import PageHeader from '../../components/UI/PageHeader/PageHeader';

const styles = () => ({
  centered: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Screens are just a composition of components, with minimal logic
function RatesOverTime({ classes }) {
  return (
    // We can use React.Fragment when we don't have a wrapper and don't want a random dom element
    <React.Fragment>
      <PageHeader title="Exchange Rates" />
      <div className={classes.centered}>
        <span>Page Not Found</span>
      </div>
    </React.Fragment>
  );
}

RatesOverTime.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(RatesOverTime);
