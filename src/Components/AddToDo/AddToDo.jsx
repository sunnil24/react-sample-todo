import React, { useState, useCallback } from 'react';
import useStore from '../../hooks/useStore';
import { addToDoItem } from '../../store/actions';
import './styles.css';

const AddToDo = () => {
  const [state, dispatch] = useStore();
  const [value, setValue] = useState('');

  const addToDo = useCallback(() => {
    setValue('');
    addToDoItem(dispatch, {
      userId: 1,
      id: state.todos.length + 1,
      title: value,
      completed: false
    });
  }, [value]);

  return (
    <div className="todo-header">
      <h2>ToDo App</h2>
      <div className="add-to-do">
        <textarea
          type="search"
          placeholder="add todo item"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={addToDo}>Save</button>
      </div>
    </div>
  );
};

export default AddToDo;
