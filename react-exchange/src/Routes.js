import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScreensOverTime from './screens/OverTime/OverTime';
import ScreensPageNotFound from './screens/PageNotFound/PageNotFound';
import ScreensSpecificDate from './screens/SpecificDate/SpecificDate';

// We export the URLs so we can refer to the object
// rather than duplicating string literals
export const RouteURLs = {
  OverTime: '/recent',
  SpecificDate: '/specific-date',
};

export default () => (
  <Switch>
    <Route exact path="/" component={ScreensOverTime} />
    <Route exact path={RouteURLs.OverTime} component={ScreensOverTime} />
    <Route exact path={RouteURLs.SpecificDate} component={ScreensSpecificDate} />
    <Route component={ScreensPageNotFound} />
  </Switch>
);
