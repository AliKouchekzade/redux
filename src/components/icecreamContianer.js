import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/iceCream/icecreamActions";
import { useState } from "react";

const IcecreamContainer = () => {
  const numOfCake = useSelector((state) => state.icecream.numOficecream);
  const dispatch = useDispatch();
  const [inputNumber, setInputNumber] = useState(1);

  return (
    <>
      <h2>number of iceCream - {numOfCake} </h2>
      <input
        type="number"
        onChange={({ target }) => setInputNumber(target.value)}
      />
      <button
        onClick={() =>
          dispatch(buyIcecream(inputNumber === "" ? 1 : inputNumber))
        }
      >
        buy {inputNumber === "" ? 1 : inputNumber} icecream
      </button>
    </>
  );
};

export default IcecreamContainer;
