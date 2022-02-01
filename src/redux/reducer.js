import { initialState } from "./initial-state";
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TOGGLE_IMPORTANT,
} from "./actions";
import shortid from "shortid";
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { title } = action.payload;
      const newState = {
        ...state,
        todos: [
          ...state.todos,
          { id: shortid(), title, completed: false, important: false },
        ],
      };
      return newState;
    case TOGGLE_TODO:
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    case DELETE_TODO:
      const { id } = action.payload;
      const newTodos2 = state.todos.filter((todo) => todo.id !== id);
      return { ...state, todos: newTodos2 };
    case TOGGLE_IMPORTANT:
      const newTodos3 = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, important: !todo.important };
        }
        return todo;
      });
      return { ...state, todos: newTodos3 };

    default:
      return state;
  }
}

export default reducer;
