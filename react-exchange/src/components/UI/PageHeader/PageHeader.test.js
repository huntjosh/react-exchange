import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './PageHeader';

configure({ adapter: new Adapter() });
it('renders page header correctly', () => {
  let wrapper = render(<Header title="test" />);

  expect(wrapper.find('h3')).toBeDefined();
  expect(wrapper.text()).toMatch('test');

  wrapper = render(<Header title="test2" />);

  expect(wrapper.find('h3')).toBeDefined();
  expect(wrapper.text()).toMatch('test2');
});
