import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const counetr = useSelector((states) => states.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter state</h1>
      <h2>couner is : {counetr.value}</h2>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
