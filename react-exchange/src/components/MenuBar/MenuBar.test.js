import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import MenuBar from './MenuBar';

configure({ adapter: new Adapter() });
test('renders menu bar and buttons', () => {
  const component = shallow(<BrowserRouter><MenuBar /></BrowserRouter>);
  expect(component).toMatchSnapshot();
});
