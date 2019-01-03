import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Row, Col, Card, DatePicker } from 'antd';
import { withStyles } from '@material-ui/styles';
import ExchangeRates from '../../api/ExchangeRates';
import CurrencyTable from '../CurrencyTable/CurrencyTable';

const styles = theme => ({
  header: {
    textAlign: 'center',
  },
  datePicker: {
    width: 150,
    marginBottom: theme.mediumSpacing,
  },
});

// Is a constant function because it's effectively a static function
const TransformRates = rates =>
  Object.keys(rates)
    .map(currency => ({
      label: currency,
      value: rates[currency],
    }));

class SpecificDateRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We put rates into state because this component set it's own value
      // We need to set a default, because the initial render occurs before
      // componentDidMount executes
      rates: [],
      date: moment(),
    };
  }

  componentDidMount() {
    // We only want to fetch this data once, so we use componentDidMount
    ExchangeRates.specificDate()
      .then((response) => {
        this.setState({ rates: TransformRates(response.rates) });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <h3 className={classes.header}>Euro £1 vs USD</h3>
        <Row>
          <Col span={3}>
            Date:
          </Col>
          <Col span={4}>
            <DatePicker defaultValue={this.state.date} className={classes.datePicker} />
          </Col>
        </Row>
        <CurrencyTable rates={this.state.rates} />
      </Card>
    );
  }
}

SpecificDateRates.propTypes = {
  // Override Because we define this object in this file
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default withStyles(styles)(SpecificDateRates);
