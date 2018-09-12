import {
  NIGHT_SHIFT_ON,
  NIGHT_SHIFT_OFF
} from "./actions";

function nightShift(state = false, action) {
  switch (action.type) {
    case(NIGHT_SHIFT_ON):
      return true;
    case(NIGHT_SHIFT_OFF):
      return false;
    default:
      return state;
  }
}

export default nightShift;
