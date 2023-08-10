import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/iceCream/icecreamActions";

const IcecreamContainer = (props) => {
  const numOfCake = useSelector((state) => state.icecream.numOficecream);
  const dispatch = useDispatch();

  return (
    <>
      <h2>number of iceCream - {numOfCake} </h2>
      <button onClick={() => dispatch(buyIcecream())}>buy icecream</button>
    </>
  );
};

export default IcecreamContainer;
