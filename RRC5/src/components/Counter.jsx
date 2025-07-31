//hw: Redo Counter.jsx 
// quick review

///** 
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter">
        <h1>Counter: {count} </h1>
        <div className="counter__btns">
          <button 
          className="counter__btn" 
          onClick={() => setCount(count + 1)}>
            Increase
          </button>
          <button
            className="counter__btn counter__btn--decrease"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className="counter__btn counter__btn--reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;

//*/
