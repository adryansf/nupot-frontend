import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Pages
import Home from '~/pages/Home';
import Meals from '~/pages/Meals';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/meals" exact component={Meals} />
    </Switch>
  );
}
