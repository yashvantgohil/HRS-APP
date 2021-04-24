import { updateObj } from "../../common/utility";
import {
  SET_ALL_HACKERS,
  SET_CURRENT_HACKER,
  ADD_HACKER,
  UPDATE_HACKER,
  DELETE_HACKER,
} from "./actions";

const hackerInitialState = {
  hackers: [],
  selectedHacker: null,
};

const setSelectedHacker = (state, hacker) => {
  return updateObj(state, { selectedHacker: hacker });
};

const addHacker = (state, hacker) => {
  debugger;
  const newStateProps = { hackers: [...state.hackers, hacker] };
  updateObj(state, newStateProps);
};

const updateHacker = (state, id, hacker) => {
  debugger;
  const index = state.hackers.findIndex((x) => x._id === id);
  const newHackers = state.hackers.slice();
  newHackers[index] = hacker;
  return updateObj(state, { hackers: newHackers });
};

const deletehacker = (state, id) => {
  debugger;
  const newHackers = state.hackers.filter((x) => x._id !== id);
  return updateObj(state, { hackers: newHackers });
};

const hackerReducer = (state = hackerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_HACKERS:
      return {
        ...state,
        hackers: payload.hackers,
      };
    case SET_CURRENT_HACKER:
      return setSelectedHacker(state, payload.hacker);
    case ADD_HACKER:
      return addHacker(state, payload.hacker);
    case UPDATE_HACKER:
      return updateHacker(state, payload.id, payload.hacker);
    case DELETE_HACKER:
      return deletehacker(state, payload.id);
    default:
      return state;
  }
};

export default hackerReducer;
