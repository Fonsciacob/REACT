import { useEffect, useReducer } from 'react';
import { todoReducer } from '../useReducer/todoReducer';

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewToDo = (todos) => {
    const action = {
      type: 'add',
      payload: todos,
    };
    dispatch(action);
  };

  const handleDeleteToDo = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  const onToggleTodo = (id) => {
    dispatch({ type: 'toggle', payload: id });
  };

  return {
    todos,
    handleDeleteToDo,
    handleNewToDo,
    onToggleTodo,
  };
};
