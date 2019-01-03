async function overTime() {
  return {
    rates: {
      '2018-08-18': {
        USD: 1.2388,
      },
      '2018-08-17': {
        USD: 1.250,
      },
      '2018-08-16': {
        USD: 1.267,
      },
      '2018-08-15': {
        USD: 1.256,
      },
    },
  };
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

export default { overTime, specificDate };
