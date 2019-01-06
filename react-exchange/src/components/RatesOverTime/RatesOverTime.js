import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Row, Col, Card, Select } from 'antd';
import { withStyles } from '@material-ui/styles';
import CurrencyTable from '../CurrencyTable/CurrencyTable';
import ExchangeRates from '../../api/ExchangeRates';
import CurrencyPicker from '../UI/CurrencyPicker/CurrencyPicker';

const { Option } = Select;

const orderOptions = [
  { value: 'desc', label: 'Descending' },
  { value: 'asc', label: 'Ascending' },
];

const styles = theme => ({
  header: {
    textAlign: 'center',
  },
  orderSelect: {
    width: 150,
    marginBottom: theme.mediumSpacing,
  },
});

class RatesOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We put ratesPerDate into state because this component set it's own value
      // We need to set a default, because the initial render occurs before
      // componentDidMount executes
      ratesPerDate: [],
      order: 'desc',
      baseCurrency: ExchangeRates.currencies.EUR,
      vsCurrency: ExchangeRates.currencies.USD,
      // todo add loading
    };
  }

  componentDidMount() {
    // We only want to fetch this data once, so we use componentDidMount
    this.updateRatesPerDate();
  }

  componentDidUpdate(prevProps, prevState) {
    // We leverage didUpdate, do see if we need to fetch new data
    if (prevState.baseCurrency !== this.state.baseCurrency
        || prevState.vsCurrency !== this.state.vsCurrency) {
      this.updateRatesPerDate();
    }
  }

  transformRatesPerDate(ratesPerDate) {
    return Object.keys(ratesPerDate)
      .map(date => ({
        label: date,
        value: ratesPerDate[date][this.state.vsCurrency],
      }));
  }

  updateRatesPerDate() {
    ExchangeRates.overTime(
      moment().subtract(6, 'days'),
      moment().subtract(2, 'days'),
      this.state.baseCurrency,
      this.state.vsCurrency,
    )
      .then((response) => {
        this.setState({
          ratesPerDate: this.transformRatesPerDate(response.rates),
        });
      });
  }

  sortDates = (firstDate, secondDate) => {
    const firstDateSeconds = moment(firstDate).valueOf();
    const secondDateSeconds = moment(secondDate).valueOf();

    return this.state.order === 'desc'
      ? secondDateSeconds - firstDateSeconds
      : firstDateSeconds - secondDateSeconds;
  };

  orderedRatesPerDate() {
    return this.state.ratesPerDate.sort((firstDateRate, secondDateRate) =>
      this.sortDates(firstDateRate.label, secondDateRate.label));
  }

  handleOrderChange = (value) => {
    this.setState({ order: value });
  };

  handleBaseCurrencyChange = (value) => {
    this.setState({ baseCurrency: value });
  };

  handleVsCurrencyChange = (value) => {
    this.setState({ vsCurrency: value });
  };

  currencySelect = (excludedCurrency, defaultValue, onChange) => (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      className={this.props.classes.currencySelect}
    >
      {Object.values(ExchangeRates.currencies)
        .filter(currency => currency !== excludedCurrency)
        .map(currency => <Option key={currency} value={currency}>{currency}</Option>)
      }
    </Select>
  );

  currencySelects() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        Currency:
        <CurrencyPicker
          defaultValue={this.state.baseCurrency}
          onChange={this.handleBaseCurrencyChange}
          excludedCurrency={this.state.vsCurrency}
        />
        v
        <CurrencyPicker
          defaultValue={this.state.vsCurrency}
          onChange={this.handleVsCurrencyChange}
          excludedCurrency={this.state.baseCurrency}
        />
      </div>
    );
  }

  orderSelect() {
    const { classes } = this.props;
    return (
      <Row>
        <Col span={3}>
          Order Date:
        </Col>
        <Col span={4}>
          <Select
            defaultValue={this.state.order}
            className={classes.orderSelect}
            onChange={this.handleOrderChange}
          >
            { orderOptions.map(option =>
              <Option value={option.value} key={option.value}>{option.label}</Option>)}
          </Select>
        </Col>
      </Row>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        {this.currencySelects()}
        <h3 className={classes.header}>{this.state.baseCurrency} $1</h3>
        {this.orderSelect()}
        <CurrencyTable rates={this.orderedRatesPerDate()} key={this.state.order} />
      </Card>
    );
  }
}

RatesOverTime.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(RatesOverTime);
