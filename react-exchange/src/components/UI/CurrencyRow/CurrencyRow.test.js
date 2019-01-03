import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrencyRow from './CurrencyRow';

configure({ adapter: new Adapter() });
test('renders currency row', () => {
  const rate = {
    label: '2018-08-18',
    value: 1.2388,
  };

  const component = shallow(<CurrencyRow rate={rate} />);
  expect(component).toMatchSnapshot();
});
