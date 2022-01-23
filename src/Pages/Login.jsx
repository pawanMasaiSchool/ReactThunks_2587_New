import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess
} from "../Redux/LoginReducer/Action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.login.isAuth);
  const isLoading = useSelector((state) => state.login.isLoading);

  const makeLoginRequest = () => {
    return axios.post(`https://reqres.in/api/login`, {
      email: email,
      password: password
    });
  };

  const handleLogin = async () => {
    try {
      const act1 = loginRequest();
      dispatch(act1);
      let response = await makeLoginRequest();
      if (response.data.token) {
        console.log("token");
        const act2 = loginSuccess();
        dispatch(act2);
      }
    } catch {
      console.log("catch");
      const act3 = loginFailure();
      dispatch(act3);
    } finally {
      // do finally
    }
  };
  // console.log("isAuth", isAuth);

  return (
    <div style={{ border: "2px solid red" }}>
      {isLoading && <h2>...Logging IN Wait</h2>}
      <h2>isAuth: ---- {`${isAuth}`}</h2>
      <h1>Login</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <br />
      <br />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
