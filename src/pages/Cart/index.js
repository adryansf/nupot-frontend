import React from 'react';
import List from './List';
import { useShop } from '../../contexts/ShopContext';

export default () => {
  const [shopState, dispatch] = useShop();
  function createData(name, price, quantity) {
    return { name, price, quantity };
  }

  const rows = [createData('Frozen yoghurt', 159, 6.0, 24)];

  return <List />;
};
