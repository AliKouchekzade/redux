import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeContianner = (props) => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();

  return (
    <>
      <h2>number of cake - {numOfCake} </h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </>
  );
};

export default CakeContianner;

/*const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContianner);*/
