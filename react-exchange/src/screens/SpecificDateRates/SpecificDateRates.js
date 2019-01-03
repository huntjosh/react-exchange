import React from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';

// Screens are just a composition of components, with minimal logic
function SpecificDateRates() {
  return (
    <React.Fragment>
      <PageHeader title="Exchange Rates Date" />
      <SpecificDateRates />
    </React.Fragment>
  );
}

export default SpecificDateRates;
