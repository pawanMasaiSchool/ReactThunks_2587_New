import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const Routes = () => {
  return (
    <Switch>
      <div style={{ margin: "50px 0px" }}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </div>
    </Switch>
  );
};

export { Routes };
