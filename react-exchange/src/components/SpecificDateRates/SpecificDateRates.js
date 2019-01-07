import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Row, Col, Card, DatePicker, Spin } from 'antd';
import { withStyles } from '@material-ui/styles';
import ExchangeRates from '../../api/ExchangeRates';
import CurrencyTable from '../UI/CurrencyTable/CurrencyTable';
import CurrencyPicker from '../UI/CurrencyPicker/CurrencyPicker';
import Theme from '../../Theme';

// Is a constant function because it's effectively a static function
const TransformRates = (rates) => {
  const dates = Object.values(rates);
  if (dates.length === 0) {
    return [];
  }

  const currencies = Object.values(rates)[0];

  return Object.keys(currencies)
    .map(currency => ({
      label: currency,
      value: currencies[currency],
    }));
};


class SpecificDateRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We put rates into state because this component set it's own value
      // We need to set a default, because the initial render occurs before
      // componentDidMount executes
      rates: [],
      date: moment(),
      baseCurrency: ExchangeRates.currencies.EUR,
      loading: true,
    };
  }

  componentDidMount() {
    // We only want to fetch this data once, so we use componentDidMount
    this.updateRates();
  }

  componentDidUpdate(prevProps, prevState) {
    // We leverage didUpdate, do see if we need to fetch new data
    if (prevState.baseCurrency !== this.state.baseCurrency
      || prevState.date.valueOf() !== this.state.date.valueOf()) {
      this.updateRates();
    }
  }

  updateRates() {
    const currencies = Object.values(ExchangeRates.currencies);

    ExchangeRates.specificDate(
      this.state.date,
      this.state.baseCurrency,
      currencies.filter(currency => currency !== this.state.baseCurrency),
    )
      .then((response) => {
        this.setState({ rates: TransformRates(response.rates), loading: false });
      });
  }

  handleDatePickerChange = (date) => {
    this.setState({ date });
  };

  handleBaseCurrencyChange = (value) => {
    this.setState({ baseCurrency: value, loading: true });
  };

  currencyPicker() {
    const { classes } = this.props;
    return (
      <div className={classes.centeredContent}>
        <CurrencyPicker
          defaultValue={this.state.baseCurrency}
          onChange={this.handleBaseCurrencyChange}
        />
        $1
      </div>
    );
  }

  datePicker() {
    const { classes } = this.props;
    return (
      <Row>
        <Col span={3}>
          Date:
        </Col>
        <Col span={4}>
          <DatePicker
            defaultValue={this.state.date}
            className={classes.select}
            onChange={this.handleDatePickerChange}
          />
        </Col>
      </Row>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        {this.currencyPicker()}
        {this.datePicker()}
        {this.state.loading
          ? <div className={classes.centered}><Spin /></div>
          : <CurrencyTable rates={this.state.rates} />
        }
      </Card>
    );
  }
}

SpecificDateRates.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(Theme)(SpecificDateRates);
