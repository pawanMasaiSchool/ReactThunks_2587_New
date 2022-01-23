import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Todo from "../Components/Todo";

const Home = () => {
  const isAuth = useSelector((state) => state.isAuth);

  if (isAuth === false) {
    return <Redirect to="/login" />;
  }

  return (
    <div style={{ border: "2px solid red" }}>
      <h1>TODO Home</h1>
      <Todo />
    </div>
  );
};

export default Home;
