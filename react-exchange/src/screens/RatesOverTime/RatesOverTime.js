import React from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import RatesOverTimeContent from '../../components/RatesOverTime/RatesOverTime';

// Screens are just a composition of components, with minimal logic
function RatesOverTime() {
  return (
    <React.Fragment>
      <PageHeader title="Exchange Rates Over Time" />
      <RatesOverTimeContent />
    </React.Fragment>
  );
}

export default RatesOverTime;
