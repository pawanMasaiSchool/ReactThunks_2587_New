import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS
} from "./ActionTypes";
import { loadData, savData } from "../utils";

const initialState = {
  isAuth: loadData("isAuth") || false,
  isLoading: false
};

const LoginReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...currentState,
        isLoading: true
      };
    }
    case LOGIN_REQUEST_SUCCESS: {
      savData("isAuth", action.payload.isAuth);
      return {
        ...currentState,
        isAuth: action.payload.isAuth,
        isLoading: action.payload.isLoading
      };
    }
    case LOGIN_REQUEST_FAILURE: {
      return {
        ...currentState,
        isAuth: action.payload.isAuth,
        isLoading: action.payload.isLoading
      };
    }
    default: {
      return currentState;
    }
  }
};

export { LoginReducer };
