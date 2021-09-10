import React, { useContext } from 'react';
import StoreContext from '../store';

const useStore = () => {
  const { state, dispatch } = useContext(StoreContext);
  console.log('hhhh');
  return [state, dispatch];
};

export default useStore;
