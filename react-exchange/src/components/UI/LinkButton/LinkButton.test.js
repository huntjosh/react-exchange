import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkButton from './LinkButton';

configure({ adapter: new Adapter() });
test('renders link button', () => {
  const component = shallow(<LinkButton to="/" />);
  expect(component).toMatchSnapshot();
});
