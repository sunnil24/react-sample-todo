import React, { useState, useReducer } from 'react';
import ToDoList from '../ToDoList';
import todoReducer from '../../store/reducers';
import Store, { initialState } from '../../store';

import './styles.css';

const ToDo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [value, setValue] = useState('');

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="todo-header">
        <h2>ToDo App</h2>
        <div className="add-to-do">
          <input
            type="search"
            placeholder="add todo item"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={() => setValue('')}>Save</button>
        </div>
      </div>
      <ToDoList />
    </Store.Provider>
  );
};

export default ToDo;
