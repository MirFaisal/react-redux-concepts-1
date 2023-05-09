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

  const handel = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const user = await res.json();
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <h2>welcome to counter app with Redux</h2>
      <p>count : {count}</p>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
      <button onClick={handelReset}>Reset</button>
      <button onClick={handel}>Async fecth</button>
    </>
  );
};

export default Counter;
