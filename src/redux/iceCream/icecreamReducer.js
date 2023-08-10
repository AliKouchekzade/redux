import { BUY_ICECREAM } from "./icecreamtypes";

const initialState = { numOficecream: 40 };

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOficecream: state.numOficecream - action.payload };
    default:
      return state;
  }
};

export default icecreamReducer;
