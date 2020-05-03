import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Pages
import Home from '~/pages/Home';
import Meals from '~/pages/Meals';
import Authentication from '~/pages/Authentication';
import NewKitchen from '~/pages/NewKitchen';
import MyKitchen from '~/pages/MyKitchen';

// only for test ----------
import { useAuth } from '~/contexts/AuthContext';
// ------------------------

export default function Routes() {
  const [, setSigned] = useAuth(); // remove after test
  setSigned(true); // remove after test
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/meals" exact component={Meals} />
      <Route isPrivate path="/kitchen/new" exact component={NewKitchen} />
      <Route isPrivate path="/my_kitchen" exact component={MyKitchen} />
      <Route path="/register" exact component={Authentication} />
      <Route path="/login" exact component={Authentication} />
    </Switch>
  );
}
