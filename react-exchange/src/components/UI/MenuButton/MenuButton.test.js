import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuButton from './MenuButton';

configure({ adapter: new Adapter() });
test('renders menu button', () => {
  const component = shallow(<MenuButton />);
  expect(component).toMatchSnapshot();
});
