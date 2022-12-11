import React, { useEffect, useReducer } from 'react';
import { ToDoList } from './components/ToDoList';
import { ToDoAdd } from './components/ToDoAdd';
import { useTodo } from '../hooks/useTodo';

export const ToDoApp = () => {
  const { todos, handleDeleteToDo, handleNewToDo, onToggleTodo } = useTodo();

  return (
    <div className="bg-slate-100 flex justify-around flex-wrap m-auto h-screen p-2">
      <div className="w-8/12">
        <h1>ToDoApp</h1>
        <div className="my-2">
          <ToDoAdd handleNewToDo={handleNewToDo} />
        </div>
        <div className="rounded bg-white">
          <div className="p-2.5 h-80 overflow-auto">
            <ToDoList
              todos={todos}
              onDelete={handleDeleteToDo}
              onToggleTodo={onToggleTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
