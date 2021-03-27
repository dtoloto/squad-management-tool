import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewTeam from '../pages/NewTeam';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={NewTeam} />
    </Switch>
  );
};

export default Routes;
