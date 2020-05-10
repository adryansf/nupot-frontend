import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Pages
import Home from '~/pages/Home';
import NewDish from '~/pages/NewDish';
import Authentication from '~/pages/Authentication';
import NewKitchen from '~/pages/NewKitchen';
import MyKitchen from '~/pages/MyKitchen';
import Search from '~/pages/Search';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import FollowOrder from '~/pages/FollowOrder';
import Dishes from '~/pages/Dishes';
import About from '~/pages/About';
import Tests from '~/pages/Tests';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/meals" exact component={Search} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/order_progress" exact component={FollowOrder} />
      <Route isPrivate path="/kitchen/new" exact component={NewKitchen} />
      <Route isPrivate path="/dish/new" exact component={NewDish} />
      <Route isPrivate path="/my_kitchen" exact component={MyKitchen} />
      <Route path="/register" exact component={Authentication} />
      <Route path="/login" exact component={Authentication} />
      <Route path="/search" exact component={Search} />
      <Route path="/about" exact component={About} />
      <Route path="/dishes/:dishId" exact component={Dishes} />
      <Route path="/tests" exact component={Tests} />
    </Switch>
  );
}
