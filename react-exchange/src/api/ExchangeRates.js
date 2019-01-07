const baseUrl = 'https://api.exchangeratesapi.io/';

const currencies = {
  USD: 'USD',
  EUR: 'EUR',
  NZD: 'NZD',
  AUD: 'AUD',
  CNY: 'CNY',
};

async function overTime(startDate, endDate, base, symbol) {
  const startDateString = startDate.format('YYYY-MM-DD');
  const endDateString = endDate.format('YYYY-MM-DD');

  return fetch(`${baseUrl}history?start_at=${startDateString}&end_at=${endDateString}&base=${base}&symbols=${symbol}`)
    .then(response => response.json());
}

async function specificDate(date, base, symbols) {
  const dateString = date.format('YYYY-MM-DD');
  const symbolsString = symbols.join(',');

  return fetch(`${baseUrl}history?start_at=${dateString}&end_at=${dateString}&base=${base}&symbols=${symbolsString}`)
    .then(response => response.json());
}

export default { overTime, specificDate, currencies };
