import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Row, Col, Card, Select, Spin } from 'antd';
import { withStyles } from '@material-ui/styles';
import CurrencyTable from '../UI/CurrencyTable/CurrencyTable';
import ExchangeRates from '../../api/ExchangeRates';
import CurrencyPicker from '../UI/CurrencyPicker/CurrencyPicker';
import Theme from '../../Theme';

const { Option } = Select;

const orderOptions = [
  { value: 'desc', label: 'Descending' },
  { value: 'asc', label: 'Ascending' },
];

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
      loading: true,
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
    // Just picking an arbitrary 4 days, as we want to make sure the data exists in the API
    ExchangeRates.overTime(
      moment().subtract(10, 'days'),
      moment().subtract(1, 'days'),
      this.state.baseCurrency,
      this.state.vsCurrency,
    )
      .then((response) => {
        this.setState({
          ratesPerDate: this.transformRatesPerDate(response.rates),
          loading: false,
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
    this.setState({ baseCurrency: value, loading: true });
  };

  handleVsCurrencyChange = (value) => {
    this.setState({ vsCurrency: value, loading: true });
  };

  currencySelects() {
    const { classes } = this.props;
    return (
      <div className={classes.centeredContent}>
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
            className={classes.select}
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
        <h3 className={classes.centered}>{this.state.baseCurrency} $1</h3>
        {this.orderSelect()}
        {this.state.loading
          ? <div className={classes.centered}><Spin /></div>
          : <CurrencyTable rates={this.orderedRatesPerDate()} key={this.state.order} />
        }

      </Card>
    );
  }
}

RatesOverTime.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(Theme)(RatesOverTime);
