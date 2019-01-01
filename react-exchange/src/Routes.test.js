import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';
import Routes, { RouteURLs } from './Routes';
import ScreenOverTime from './screens/OverTime/OverTime';
import ScreenSpecificDate from './screens/SpecificDate/SpecificDate';
import ScreenPageNotFound from './screens/PageNotFound/PageNotFound';

configure({ adapter: new Adapter() });
it('renders correct routes', () => {
  const wrapper = shallow(<Routes />);
  const reducedPathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    const newPathMap = {};
    newPathMap[routeProps.path] = routeProps.component;

    return { ...pathMap, ...newPathMap };
  }, {});

  expect(reducedPathMap['/']).toBe(ScreenOverTime);
  expect(reducedPathMap[RouteURLs.OverTime]).toBe(ScreenOverTime);
  expect(reducedPathMap[RouteURLs.SpecificDate]).toBe(ScreenSpecificDate);
  expect(reducedPathMap['/nothing!']).toBe(ScreenPageNotFound);
});
