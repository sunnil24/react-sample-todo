import React from 'react';

const ToDoItem = ({ item, toggleHandler, deleteHandler, editHandler }) => {
  return (
    <div>
      <span
        onClick={() => {
          toggleHandler(item.id);
        }}
        className="todo-text"
      >
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            toggleHandler(item.id);
          }}
        />
        {item.title}
      </span>
      <span
        className="delete"
        onClick={() => {
          deleteHandler(item.id);
        }}
      >
        Delete
      </span>
    </div>
  );
};

export default ToDoItem;
