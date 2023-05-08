import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "../../services/counterAction/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handelIncrement = () => {
    dispatch(counterIncrement());
  };
  const handelDecrement = () => {
    if (count > 0) {
      dispatch(counterDecrement());
    }
  };
  const handelReset = () => {
    dispatch(counterReset());
  };
  return (
    <>
      <h2>welcome to counter app with Redux</h2>
      <p>count : {count}</p>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
      <button onClick={handelReset}>Reset</button>
    </>
  );
};

export default Counter;
