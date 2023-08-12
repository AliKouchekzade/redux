import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodo } from "../../features/todos/todosSlice";

const ToDoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addAsyncTodo(input));
    setInput("");
  };

  return (
    <div className="w-7/12 m-auto rounded-lg p-3 mt-5 bg-red-100">
      <form className="flex justify-between" onSubmit={submitHandler}>
        <input
          type="text"
          className="w-9/12 px-3 py-1.5 rounded-lg border border-red-500 outline-red-500 text-lg"
          placeholder="new todo . . ."
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 px-8 rounded-md text-white"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
