import React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import FeedContainer from '../containers/feed';
import OptionsContainer from '../containers/options';

const AppRoutes = () => {
  return (
    // @todo use browser router and generate prerendered options.html page for chrome extension
    <MemoryRouter>
      <Switch>
        <Route exact path='/' component={ FeedContainer }/>
        <Route exact path='/options' component={ OptionsContainer }/>
        <Route component={ FeedContainer }/>
      </Switch>
    </MemoryRouter>
  );
};

export default AppRoutes;
