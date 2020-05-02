import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Pages
import Home from '~/pages/Home';
import Meals from '~/pages/Meals';
import Authentication from '~/pages/Authentication';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/meals" exact component={Meals} />
      <Route isPrivate path="/kitchen/new" exact component={Meals} />
      <Route path="/register" exact component={Authentication} />
      <Route path="/login" exact component={Authentication} />
    </Switch>
  );
}
