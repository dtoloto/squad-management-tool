import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewTeam from '../pages/NewTeam';
import EditTeam from '../pages/EditTeam';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={NewTeam} />
      <Route path="/edit/:id" component={EditTeam} />
    </Switch>
  );
};

export default Routes;
