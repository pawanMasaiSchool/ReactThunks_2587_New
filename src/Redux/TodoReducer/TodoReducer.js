import {
  ADD_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS
} from "./ActionTypes";

const initialTodos = {
  todos: [],
  todoLoading: false,
  todoError: false
};

const TodoReducer = (currentState = initialTodos, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST: {
      return {
        ...currentState,
        todoLoading: true
      };
    }

    case GET_TODOS_SUCCESS: {
      return {
        ...currentState,
        todoLoading: false,
        todos: [...action.payload]
      };
    }

    case GET_TODOS_FAILURE: {
      return {
        ...currentState,
        todoLoading: false,
        todoError: true
      };
    }

    case ADD_TODOS_SUCCESS: {
      return {
        ...currentState,
        todoLoading: false,
        todoError: false
      };
    }

    default: {
      return currentState;
    }
  }
};

export default TodoReducer;
