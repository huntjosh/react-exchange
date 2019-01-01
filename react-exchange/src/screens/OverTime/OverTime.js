import React, { Component } from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';

class OverTime extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title="Over Time" />
        <CurrencyTable />
      </React.Fragment>
    );
  }
}

export default OverTime;
