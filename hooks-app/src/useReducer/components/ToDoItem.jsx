import React from 'react';

export const ToDoItem = ({ todo, onDelete, onToggleTodo }) => {
  return (
    <>
      <li className="mt-2 w-full flex justify-between items-center">
        <span
          className={`${todo.done ? 'line-through' : ''}`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 px-2 py-1.5 rounded text-white"
        >
          delete
        </button>
      </li>
      <span className="w-full h-0.5 bg-slate-200 mt-2"></span>
    </>
  );
};
