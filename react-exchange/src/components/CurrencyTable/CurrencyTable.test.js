import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrencyTable from './CurrencyTable';

configure({ adapter: new Adapter() });
test('should render correctly with no props', () => {
  const component = shallow(<CurrencyTable />);
  expect(component).toMatchSnapshot();
});

test('should render currency table correctly with given rates', () => {
  const rates = [
    {
      label: '2018-08-18',
      value: 1.2388,
    },
    {
      label: '2018-08-17',
      value: 1.250,
    },
    {
      label: '2018-08-16',
      value: 1.267,
    },
    {
      label: '2018-08-15',
      value: 1.256,
    },
  ];

  const component = shallow(<CurrencyTable list={rates} />);
  expect(component).toMatchSnapshot();
});
