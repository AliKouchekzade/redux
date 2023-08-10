import { BUY_ICECREAM } from "./icecreamtypes";

const initialState = { numOficecream: 10 };

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOficecream: state.numOficecream - 1 };
    default:
      return state;
  }
};

export default icecreamReducer;
