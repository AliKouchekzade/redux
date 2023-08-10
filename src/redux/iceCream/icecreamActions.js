import { BUY_ICECREAM } from "./icecreamtypes";

export function buyIcecream(number = 1) {
  return { type: BUY_ICECREAM, payload: number };
}
