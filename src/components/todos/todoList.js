import { useDispatch, useSelector } from "react-redux";
import ToDo from "./todo";
import { useEffect } from "react";
import { getAsyncTodos } from "../../features/todos/todosSlice";

const ToDoList = () => {
  const { todos, error, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  return (
    <div className="todolist w-7/12 m-auto rounded-lg p-3 mt-5 bg-red-100">
      {loading ? (
        <p>loading</p>
      ) : (
        todos.length ?
        todos.map((todo) => <ToDo todo={todo} key={todo.id} />)
        : <p>{error}</p>
      )}
    </div>
  );
};

export default ToDoList;
