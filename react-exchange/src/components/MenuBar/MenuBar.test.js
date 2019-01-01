import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import MenuBar from './MenuBar';

configure({ adapter: new Adapter() });
it('renders menu bar and buttons', () => {
  const wrapper = render(<BrowserRouter><MenuBar /></BrowserRouter>);

  expect(wrapper.find('.ant-row')).toBeDefined();
  expect(wrapper.find('button')).toHaveLength(2);
});
