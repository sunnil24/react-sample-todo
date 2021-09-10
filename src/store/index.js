import React, { createContext, useReducer } from 'react';
import todoReducer from './reducers';

export const initialState = {
  todos: []
};

const Store = createContext();

export default Store;

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
