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







/**

//hw: Counter Objects
// quick review

import { useState } from "react";

function Counter() {
const [user, setUser] = useState({ name: "Erik", age: 17 })

  return (
    <>
      <div className="counter">
        <h1> Counter: {user.name} {user.age} </h1>
        <div className="counter__btns">
          <button 
          className="counter__btn" 
          onClick={() => {
            setUser((prevUser) => ({
              ...prevUser,
              age: prevUser.age + 1,
            }));
          }}>
            Increase
          </button>
          <button
            className="counter__btn counter__btn--decrease"
            onClick={() => {
              setUser((prevUser) => ({
                ...prevUser,
                age: prevUser.age - 1,
              }));
            }}
          >
            Decrease
          </button>
          <button
            className="counter__btn counter__btn--reset"
            onClick={() => {
              setUser((prevUser) => ({
                ...prevUser,
                age: 0,
              }))
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;

 */









/** 
//Hw: Counter Array
import { useState } from "react";

function Counter() {
  const [array, setArray] = useState([])
  return (
    <>
      <div className="counter">
        <h1>Counter: {array.toString} </h1>
        <div className="counter__btns">
          <button 
          className="counter__btn" 
          onClick={() => {
            setArray((prevArray) => [...prevArray, "+1"])
          }}>
            Increase
          </button>
          <button
            className="counter__btn counter__btn--decrease"
            onClick={() => {
              setArray((prevArray) => [...prevArray, "-1"])
            }}
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
*/
