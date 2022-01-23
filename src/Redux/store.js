import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./LoginReducer/LoginReducer";
import TodoReducer from "./TodoReducer/TodoReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  todos: TodoReducer
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}
const enhancer = composeEnhancers(applyMiddleware(thunk));

// const policeMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     let functn = action;
//     return functn(store.dispatch, store.getState);
//   } else {
//     return next(action);
//   }
// };

export const myStore = createStore(rootReducer, enhancer);

// console.log("from store", myStore.getState());
