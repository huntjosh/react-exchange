import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Rate from '../../models/Rate';
import CurrencyRow from '../UI/CurrencyRow/CurrencyRow';

// Here we will use PureComponent, as we don't have state,
// but we do want to avoid re-renders if the rates are the same
class CurrencyTable extends PureComponent {
  render() {
    const { rates } = this.props;
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
};

CurrencyTable.defaultProps = {
  rates: [],
};

export default CurrencyTable;
