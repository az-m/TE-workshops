function sayHello() {
  console.log("Hello World");
}

sayHello();

function sayHelloTo(greeting, userName) {
  console.log(`${greeting} ${userName}!`);
}

sayHelloTo("Hiya", "Max");

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

const result = calculate(4, 5, "/");
console.log(`The result is ${result}`);

const myName = "Bob";

function sayHelloBob() {
  console.log(`Hello ${myName}!`);
}

sayHelloBob(); // result "Hello Bob!"
console.log(myName); // result "Bob"

function sayHelloBarry() {
  const myName = "Barry";
  console.log(`Hello ${myName}!`);
}

sayHelloBarry(); // result "Hello Barry!"
console.log(myName); //result "Bob"
