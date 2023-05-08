import { createStore } from "redux";
import {
  DECREMENT,
  INCREMENT,
  RESET,
} from "../counterConstant/counterConstant";

//initial Counter
const initCounter = {
  count: 0,
};

const counterReducer = (state = initCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
