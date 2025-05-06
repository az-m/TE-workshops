function notifyUser() {
  console.log("notifyUser function was called!");
}

function myFunction(notifyUserCall) {
  console.log("Running my function ...");
  console.log("Notifying user ...");
  notifyUserCall();
}

myFunction(notifyUser);

function anotherFunction(onCompleteCallback) {
  console.log("Running my function ...");
  console.log("Notifying user ...");
  onCompleteCallback();
}

anotherFunction(function () {
  console.log("notifyUser function was called!");
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

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Calculating with:", a, b);
  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result);

const result2 = myCalculatorFunction(1, 2, multiply);
console.log(result2);
