const initialState = [
  {
    id: 1,
    todo: 'Recolectar la piedra del amor',
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === 'add todo') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newToDo = {
  id: 2,
  todo: 'Recolectar la piedra del odio',
  done: false,
};

const addToDo = {
  type: 'add todo',
  payload: newToDo,
};

todos = todoReducer(todos, addToDo);

console.log(todos);
