import "./Button.css";

function Button1() {
  return (
    <div>
      <button
        className="border-1 p-2 m-2 hover:bg-gray-600 hover:text-white"
        onClick={() => {
          console.log("Clicked button 1");
        }}
      >
        I am 1 - click me!
      </button>
    </div>
  );
}

function Button2() {
  return (
    <div>
      <button
        className="border-1 p-2 m-2 hover:bg-gray-600 hover:text-white"
        onClick={() => {
          console.log("Clicked button 2");
        }}
      >
        I am 2 - click me!
      </button>
    </div>
  );
}

function Button3() {
  function handleClick(message) {
    console.log(message);
  }

  return (
    <div>
      <button
        className="border-1 p-2 m-2 hover:bg-gray-600 hover:text-white"
        onClick={() => {
          handleClick("Clicked button 3");
        }}
      >
        I am 3 - click me!
      </button>
    </div>
  );
}

export default function Button() {
  return (
    <section className="buttons">
      <Button1 />
      <Button2 />
      <Button3 />
    </section>
  );
}
