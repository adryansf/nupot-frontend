import React, { useContext, createContext, useReducer } from 'react';

const ShopContext = createContext();

const initialState = []; // {...dish, quantity: 0} <= item

const reducer = (cart, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'resetCart':
      return [];
    case 'removeById':
      return [...cart.filter(item => item.id !== payload)];
    case 'updateOne':
      return (() => {
        const [index, updated] = payload;
        return [...cart.slice(0, index), updated, ...cart.slice(index + 1)];
      })();
    case 'addOneToCart':
      return (() => {
        const index = cart.findIndex(item => item.id === payload.id);
        if (index === -1) return [...cart, { ...payload, quantity: 1 }];
        return [
          ...cart.slice(0, index),
          { ...payload, quantity: cart[index].quantity + 1 },
        ];
      })();
    default:
      throw new Error('unexpected type action');
  }
};

const ShopContextProvider = ({ children }) => {
  const Shop = useReducer(reducer, initialState);
  return <ShopContext.Provider value={Shop}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);
export default ShopContextProvider;
