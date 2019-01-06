import React, { PureComponent } from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ExchangeRates from '../../../api/ExchangeRates';

const { Option } = Select;

const styles = theme => ({
  currencySelect: {
    width: 100,
    margin: theme.mediumSpacing,
  },
});

class CurrencyPicker extends PureComponent {
  render() {
    const {
      defaultValue, onChange, classes, excludedCurrency,
    } = this.props;

    return (
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        className={classes.currencySelect}
      >
        {Object.values(ExchangeRates.currencies)
          .filter(currency => currency !== excludedCurrency)
          .map(currency => <Option key={currency} value={currency}>{currency}</Option>)
        }
      </Select>
    );
  }
}

CurrencyPicker.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types,
  excludedCurrency: PropTypes.string,
};

CurrencyPicker.defaultProps = {
  defaultValue: ExchangeRates.currencies.USD,
  excludedCurrency: undefined,
};

export default withStyles(styles)(CurrencyPicker);
