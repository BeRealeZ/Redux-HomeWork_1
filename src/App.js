import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './App.css'

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ 
      type: "INCREMENT" 
    });
  };

  const decrement = () => {
    dispatch({ 
      type: "DECREMENT" 
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter
