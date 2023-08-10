import { useSelector } from "react-redux";
import ToDo from "./todo";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="todolist w-7/12 m-auto rounded-lg p-3 mt-5 bg-red-100">
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ToDoList;
