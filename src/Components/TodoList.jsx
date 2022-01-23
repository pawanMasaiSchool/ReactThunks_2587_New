import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosFromServer } from "../Redux/TodoReducer/Action";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosFromServer());
  }, []);
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>
          Title:-{item.task} Status:-{`${item.status}`}
        </div>
      ))}
    </div>
  );
}

export { TodoList };
