import axios from "axios";
import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS
} from "./ActionTypes";

const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST
});

const getTodosSuccess = (data) => ({
  type: GET_TODOS_SUCCESS,
  payload: data
});

const getTodosFailure = () => ({
  type: GET_TODOS_FAILURE
});

const addTodoRequest = () => ({
  type: ADD_TODOS_REQUEST
});

const addTodoSuccess = () => ({
  type: ADD_TODOS_SUCCESS
});

const addTodoFailure = () => ({
  type: ADD_TODOS_FAILURE
});

const postingTodo = (task) => async (dispatch) => {
  try {
    const actAddTodo = addTodoRequest();
    dispatch(actAddTodo);
    const pushingPayload = {
      task: task,
      status: false
    };
    const addResponse = await axios.post(
      `https://todo-thunk.herokuapp.com/todos`,
      pushingPayload
    );
    if (addResponse.data) {
      const actTodoDone = addTodoSuccess();
      dispatch(actTodoDone);
    }
  } catch (err) {
    console.log("error in addTodo request");
  }
};

const getTodosFromServer = () => async (dispatch) => {
  try {
    const actGetTodos = getTodosRequest();
    dispatch(actGetTodos);
    const response = await axios.get(`https://todo-thunk.herokuapp.com/todos`);

    if (response.data) {
      const actGetTodosSuccess = getTodosSuccess(response.data);
      dispatch(actGetTodosSuccess);
    }
  } catch {
    const actGetTodosFailed = getTodosFailure();
    dispatch(actGetTodosFailed);
  }
};

export {
  postingTodo,
  getTodosFromServer,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure
};
