import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Rate from '../../../models/Rate';
import CurrencyRow from '../CurrencyRow/CurrencyRow';

const styles = () => ({
  centered: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

// Here we will use PureComponent, as we don't have state,
// but we do want to avoid re-renders if the rates are the same
class CurrencyTable extends PureComponent {
  render() {
    const { rates, classes } = this.props;

    if (rates.length === 0) {
      return (
        <div className={classes.centered}>No Rates!</div>
      );
    }

    return (
      <React.Fragment>
        {rates.map(rate => (
          // We are relying on label + value being unique, we could set up a UUID
          <CurrencyRow rate={rate} key={`${rate.label}_${rate.value}`} />
        ))}
      </React.Fragment>
    );
  }
}

CurrencyTable.propTypes = {
  rates: PropTypes.arrayOf(Rate.propTypeStructure),
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

CurrencyTable.defaultProps = {
  rates: [],
};

export default withStyles(styles)(CurrencyTable);
