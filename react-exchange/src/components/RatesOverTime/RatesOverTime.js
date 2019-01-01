import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CurrencyTable from '../CurrencyTable/CurrencyTable';
import ExchangeRates from '../../api/ExchangeRates';

const styles = () => ({
  header: {
    textAlign: 'center',
  },
});

// Is a constant function because it's effectively a static function
const TransformRatesPerDate = ratesPerDate =>
  Object.keys(ratesPerDate)
    .map(key => ({
      label: key,
      value: ratesPerDate[key].USD,
    }));

const SortDates = (firstDate, secondDate, isDesc = true) => {
  const firstDateSeconds = moment(firstDate).valueOf();
  const secondDateSeconds = moment(secondDate).valueOf();

  return isDesc
    ? secondDateSeconds - firstDateSeconds
    : firstDateSeconds - secondDateSeconds;
};

class RatesOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We put ratesPerDate into state because this component set it's own value
      // We need to set a default, because the initial render occurs before
      // componentDidMount executes
      ratesPerDate: [],
    };
  }

  componentDidMount() {
    // We only want to fetch this data once, so we use componentDidMount
    ExchangeRates.overTime()
      .then((response) => {
        this.setState({ ratesPerDate: TransformRatesPerDate(response.rates) });
      });
  }

  orderedRatesPerDate() {
    return this.state.ratesPerDate.sort((firstDateRate, secondDateRate) =>
      SortDates(firstDateRate.date, secondDateRate.date));
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <h3 className={classes.header}>Euro £1 vs USD</h3>
        <CurrencyTable rates={this.orderedRatesPerDate()} />
      </React.Fragment>
    );
  }
}

RatesOverTime.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default withStyles(styles)(RatesOverTime);
