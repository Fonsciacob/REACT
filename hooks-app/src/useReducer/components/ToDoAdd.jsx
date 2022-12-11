import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({ handleNewToDo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = () => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    handleNewToDo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form
        onSubmit={onFormSubmit}
        className="mt-4 flex flex-wrap items-center justify-end"
      >
        <div className="w-full h-14 overflow-auto">
          <input
            type="text"
            className="w-full bg-slate-300 p-2 rounded focus:border-blue-500 focus:border-2 outline-none"
            name="description"
            placeholder="Add new task"
            value={description}
            onChange={onInputChange}
          />
        </div>
      </form>
    </>
  );
};
