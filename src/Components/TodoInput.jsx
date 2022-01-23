import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodosFromServer, postingTodo } from "../Redux/TodoReducer/Action";

const TodoInput = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(postingTodo(task)).then(() => {
      dispatch(getTodosFromServer());
    });
  };

  return (
    <>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="add something"
      />
      <br />
      <br />
      <button onClick={handleAdd}>ADD</button>
    </>
  );
};

export default TodoInput;
