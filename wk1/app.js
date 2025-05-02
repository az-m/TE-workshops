const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.textContent = "This is a heading!";
body.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

li1.textContent = "This is a list item";
li2.textContent = "This is another list item";
li3.textContent = "Last list item!";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

body.appendChild(ul);

// h1.remove();

const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  console.log(event);
});

button.addEventListener("mouseover", function (event) {
  console.log(event);
});

button.addEventListener("mouseleave", function (event) {
  console.log(event);
});
