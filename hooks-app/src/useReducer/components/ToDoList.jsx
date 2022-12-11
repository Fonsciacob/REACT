import { ToDoItem } from './ToDoItem';

export const ToDoList = ({ todos = [], onDelete, onToggleTodo }) => {
  return (
    <>
      <ul className="flex justify-around flex-wrap">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};
