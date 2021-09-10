import React, { useState, useReducer } from 'react';
import ToDoList from '../ToDoList';
import AddToDo from '../AddToDo';
import todoReducer from '../../store/reducers';
import Store, { initialState } from '../../store';

const ToDo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <AddToDo />
      <ToDoList />
    </Store.Provider>
  );
};

export default ToDo;
