import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS
} from "./ActionTypes";

const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = () => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: {
    isAuth: true,
    isLoading: false
  }
});

const loginFailure = () => ({
  type: LOGIN_REQUEST_FAILURE,
  payload: {
    isAuth: false,
    isLoading: false
  }
});

export { loginRequest, loginSuccess, loginFailure };
