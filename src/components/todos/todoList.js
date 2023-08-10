import { useSelector } from "react-redux";
import ToDo from "./todo";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ToDoList;
