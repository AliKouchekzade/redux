import { useSelector } from "react-redux";

const CompleteTodos = () => {
  const completeTodos = useSelector((state) => state.todos).filter(
    (todo) => todo.complete
  );

  return (
    <div className=" w-7/12 m-auto rounded-lg p-3 mt-5 bg-red-100">
      <p className="text-center text-lg">
        number of completed tasks : {completeTodos.length}
      </p>
    </div>
  );
};

export default CompleteTodos;
