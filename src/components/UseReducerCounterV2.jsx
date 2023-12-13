import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../store/counter/action";

function UseReducerCounter() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(
      incrementAction({
        by: 20,
        default: 10,
      })
    );
  };

  const incrementBy = (by) => {
    dispatch(incrementAction({ by: by, default: 1 }));
  };

  const decrement = () => {
    dispatch(decrementAction({ by: 3 }));
  };

  const reset = () => {
    dispatch(resetAction());
  };

  return (
    <div className="m-4">
      <h1 className="p-4 border mx-2 my-4">Count: {state.count}</h1>
      <button className="border m-2 p-2" onClick={increment}>
        Increment
      </button>
      <button className="border m-2 p-2" onClick={() => incrementBy(5)}>
        Increment by 5
      </button>
      <button className="border m-2 p-2" onClick={() => incrementBy(50)}>
        Increment by 50
      </button>
      <button className="border m-2 p-2" onClick={() => incrementBy(500)}>
        Increment by 500
      </button>
      <button className="border m-2 p-2" onClick={() => incrementBy(5000)}>
        Increment by 5000
      </button>
      <button className="border m-2 p-2" onClick={() => incrementBy(50000)}>
        Increment by 50000
      </button>
      <button className="border m-2 p-2" onClick={() => incrementBy(500000)}>
        Increment by 500000
      </button>

      <button className="border m-2 p-2" onClick={decrement}>
        Decrement
      </button>
      <button className="border m-2 p-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default UseReducerCounter;
