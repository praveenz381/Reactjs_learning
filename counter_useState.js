import React from "react";
import "./style.css";
import ReactDOM from "react-dom";
import { useState } from "react";

export default function App() {
  function increment() {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); //increases + 2
  }
  function decrement() {
    setCount(prevCount => prevCount - 1);
    setCount(count - 1); //decreases -1
  }
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
