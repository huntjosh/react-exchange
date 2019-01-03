import React from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';

// Screens are just a composition of components, with minimal logic
function RatesOverTime() {
  return (
    // We can use React.Fragment when we don't have a wrapper and don't want a random dom element
    <React.Fragment>
      <PageHeader title="Exchange Rates" />
      Page Not Found
    </React.Fragment>
  );
}

export default RatesOverTime;
