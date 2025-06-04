import { useState } from "react";

export default function Conditionals() {
  return (
    <>
      <Hello />
      <Array />
    </>
  );
}

function Hello() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="div">
      <button class="button" onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible ? <p>Hello World</p> : null}
    </div>
  );
}

function Array() {
  const [items] = useState([
    { id: 0, title: "Turnip" },
    { id: 1, title: "Artichoke" },
  ]);

  return (
    <div className="div">
      <h1>Items</h1>
      <ul>
        {items.length ? (
          items.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No items</li>
        )}
      </ul>
    </div>
  );
}
