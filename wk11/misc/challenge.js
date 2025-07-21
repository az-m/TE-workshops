//this could be for any number but we have three right now
for (let x = 1; x <= 3; x++) {
  document.getElementById(`fetchUser${x}`).addEventListener("click", () => {
    handleClick(x);
  });
}

async function handleClick(x) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${x}`
  );
  const user = await response.json();
  setContent(`user${x}Name`, user.name);
  setContent(`user${x}Email`, user.email);
}

function setContent(arg1, arg2) {
  document.getElementById(arg1).textContent = arg2;
}
