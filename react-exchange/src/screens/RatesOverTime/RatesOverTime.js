import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import RatesOverTimeContent from '../../components/RatesOverTime/RatesOverTime';

const styles = () => ({
  header: {
    textAlign: 'center',
  },
});

// Screens are just a composition of components, with minimal logic
function RatesOverTime(props) {
  return (
    <React.Fragment>
      <PageHeader title="Exchange Rates" className={props.classes.header} />
      <RatesOverTimeContent />
    </React.Fragment>
  );
}

RatesOverTime.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(RatesOverTime);