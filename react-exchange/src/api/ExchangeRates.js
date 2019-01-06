const baseUrl = 'https://api.exchangeratesapi.io/';

const currencies = {
  USD: 'USD',
  EUR: 'EUR',
  NZD: 'NZD',
  AUD: 'AUD',
};

async function overTime(startDate, endDate, base, symbol) {
  const startDateString = startDate.format('YYYY-MM-DD');
  const endDateString = endDate.format('YYYY-MM-DD');

  return fetch(`${baseUrl}history?start_at=${startDateString}&end_at=${endDateString}&base=${base}&symbols=${symbol}`)
    .then(response => response.json());
}

async function specificDate() {
  return {
    rates: {
      USD: 1.2388,
      NZD: 2.311,
      YUAN: 8.920,
      AUD: 2.290,
    },
  };
}

export default { overTime, specificDate, currencies };
