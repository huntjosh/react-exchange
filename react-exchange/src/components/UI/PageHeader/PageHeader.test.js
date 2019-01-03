import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './PageHeader';

configure({ adapter: new Adapter() });
test('renders header', () => {
  const component = shallow(<Header title="test" />);
  expect(component).toMatchSnapshot();
});
