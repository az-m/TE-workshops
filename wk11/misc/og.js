// fetch and display data for user 1
document
  .getElementById("fetchUser1")
  .addEventListener("click", async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    document.getElementById("user1Name").textContent = user.name;
    document.getElementById("user1Email").textContent = user.email;
  });

// fetch and display data for user 2
document
  .getElementById("fetchUser2")
  .addEventListener("click", async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const user = await response.json();
    document.getElementById("user2Name").textContent = user.name;
    document.getElementById("user2Email").textContent = user.email;
  });

// fetch and display data for user 3
document
  .getElementById("fetchUser3")
  .addEventListener("click", async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    const user = await response.json();
    document.getElementById("user3Name").textContent = user.name;
    document.getElementById("user3Email").textContent = user.email;
  });
