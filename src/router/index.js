import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FeedContainer from '../containers/feed';
import OptionsContainer from '../containers/options';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ FeedContainer }/>
        <Route exact path='/options' component={ OptionsContainer }/>
        <Route component={ FeedContainer }/>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
