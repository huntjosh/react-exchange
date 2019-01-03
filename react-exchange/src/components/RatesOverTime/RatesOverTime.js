import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Row, Col, Card, Select } from 'antd';
import { withStyles } from '@material-ui/styles';
import CurrencyTable from '../CurrencyTable/CurrencyTable';
import ExchangeRates from '../../api/ExchangeRates';

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

// Is a constant function because it's effectively a static function
const TransformRatesPerDate = ratesPerDate =>
  Object.keys(ratesPerDate)
    .map(key => ({
      label: key,
      value: ratesPerDate[key].USD,
    }));

class RatesOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We put ratesPerDate into state because this component set it's own value
      // We need to set a default, because the initial render occurs before
      // componentDidMount executes
      ratesPerDate: [],
      order: 'desc',
    };
  }

  componentDidMount() {
    // We only want to fetch this data once, so we use componentDidMount
    ExchangeRates.overTime()
      .then((response) => {
        this.setState({ ratesPerDate: TransformRatesPerDate(response.rates) });
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
      this.sortDates(firstDateRate.date, secondDateRate.date));
  }

  handleOrderChange = (value) => {
    this.setState({ order: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <h3 className={classes.header}>Euro £1 vs USD</h3>
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
        <CurrencyTable rates={this.orderedRatesPerDate()} />
      </Card>
    );
  }
}

RatesOverTime.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default withStyles(styles)(RatesOverTime);
