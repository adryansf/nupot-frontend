import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Pages
import Home from '~/pages/Home';
import Meals from '~/pages/Meals';
import Authentication from '~/pages/Authentication';
import NewKitchen from '~/pages/NewKitchen';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/meals" exact component={Meals} />
      <Route isPrivate path="/kitchen/new" exact component={NewKitchen} />
      <Route path="/register" exact component={Authentication} />
      <Route path="/login" exact component={Authentication} />
    </Switch>
  );
}
