import "./CountUpAndDown.css";
import { useState } from "react";

export default function CountUpAndDown() {
  let [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count} setCount={setCount} />
      <UpButton count={count} setCount={setCount} />
      <DownButton count={count} setCount={setCount} />
    </>
  );
}

function Counter({ count, setCount }) {
  function handleClick() {
    setCount(0);
  }
  return (
    <p
      className="counter"
      onClick={() => {
        handleClick();
      }}
    >
      The count is: {count}
    </p>
  );
}

function UpButton({ count, setCount }) {
  function handleClick() {
    setCount(++count);
  }
  return (
    <button
      className="counter-button"
      onClick={() => {
        handleClick();
      }}
    >
      Click count go up
    </button>
  );
}

function DownButton({ count, setCount }) {
  function handleClick() {
    setCount(--count);
  }
  return (
    <button
      className="counter-button"
      onClick={() => {
        handleClick();
      }}
    >
      Click count go down
    </button>
  );
}
