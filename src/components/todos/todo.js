import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../features/todos/todosSlice";

const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="border-t border-red-300 py-3 flex justify-between">
      <div className="flex gap-x-2 items-center">
        <input
          checked={todo.complete}
          className="accent-green-600"
          type="checkbox"
          onChange={() => dispatch(completeTodo(todo.id))}
          id={todo.id}
        />
        <label
          className={`bottom-0.5 relative text-xl ${
            todo.complete && "text-green-600"
          }`}
          htmlFor={todo.id}
        >
          {todo.title}
        </label>
      </div>
      <button
        className="bg-red-500 px-2 py-1 rounded-lg text-white"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDo;
