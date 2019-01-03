import React from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import SpecificDateRatesContent from '../../components/SpecificDateRates/SpecificDateRates';

// Screens are just a composition of components, with minimal logic
function SpecificDateRates() {
  return (
    // We can use React.Fragment when we don't have a wrapper and don't want a random dom element
    <React.Fragment>
      <PageHeader title="Exchange Rates Date" />
      <SpecificDateRatesContent />
    </React.Fragment>
  );
}

export default SpecificDateRates;
