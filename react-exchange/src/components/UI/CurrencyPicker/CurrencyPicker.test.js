import React from 'react';
import { configure, shallow } from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import CurrencyPicker from './CurrencyPicker';

configure({ adapter: new Adapter() });
test('renders currency picker', () => {
  const component = shallow(<CurrencyPicker />);
  expect(component).toMatchSnapshot();
});