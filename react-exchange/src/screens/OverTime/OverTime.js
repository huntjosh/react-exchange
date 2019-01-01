import React, { Component } from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';

class OverTime extends Component {
  render() {
    return (
      <div className="over-time">
        <PageHeader title="Over Time" />
        <CurrencyTable />
      </div>
    );
  }
}

export default OverTime;
