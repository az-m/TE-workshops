function notifyUser() {
  console.log("notifyUser function was called by myFunction!");
}

function myFunction(notifyUserCall) {
  console.log("Running myFunction ...");
  console.log("Notifying user ...");
  notifyUserCall();
}

myFunction(notifyUser);

function anotherFunction(onCompleteCallback) {
  console.log("Running anotherFunction ...");
  console.log("Notifying user ...");
  onCompleteCallback();
}

// anotherFunction(function () {
anotherFunction(() => {
  console.log("This anonymous notify function was called by anotherFunction!");
});

function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running awesome function ... doing awesome tasks");
  console.log("Complete. Notifying user ...");

  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "Success!!",
    });
  } else {
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  console.log("It was successful:", data.message);
}

function onAwesomefailure() {
  console.log("It failed :(");
}

myAwesomeFunction(onAwesomeSuccess, onAwesomefailure);

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

function myCalculatorFunction(a, b, operationCallback) {
  console.log(
    `Doing a calculation to ${operationCallback.name} the numbers ${a} and ${b}`
  );
  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result);

const result2 = myCalculatorFunction(3, 5, multiply);
console.log(result2);

const result3 = myCalculatorFunction(7, 3, subtract);
console.log(result3);

const result4 = myCalculatorFunction(56, 8, divide);
console.log(result4);
