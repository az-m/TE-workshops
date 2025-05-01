console.log("Hello World!");

let myName = "Alison";
console.log(myName);

let age = "Mind your own business";
console.log(age);

let city = "Norwich";
console.log(city);

let num1 = 9;
let num2 = 23;
let num3 = 54;

let sumNumbers = num1 + num2 + num3;
console.log(sumNumbers);

let str1 = "parcel";
let str2 = "gardening";
let str3 = "Do you want";
let str4 = "or";
let str5 = "string.";

let outString = str3 + " " + str1 + " " + str4 + " " + str2 + " " + str5;
console.log(outString);

let litString = `Do you want ${str1} or ${str2} string?`;
console.log(litString);

let tempNum = num2;
num2 = num1;
num1 = tempNum;
console.log(num1);
console.log(num2);

let burger = 6;
let fries = 1.5;
let meal = burger + fries;
console.log(meal);

let firstName = "Alison";
let lastName = "Mills";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log(`${firstName} is ${firstName.length} characters long`);

let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);

console.log(typeof fullName);
console.log("The type of number is " + typeof num1);
console.log(`The type of isTrue is ${typeof isTrue}`);

let undefVar;
console.log(undefVar);
let nullVar = null;
console.log(nullVar);

let a = 37;
let b = 4;

let isAgtB = a > b;
let isAltB = a < b;
let isAeqB = a === b;

console.log(isAgtB);
console.log(isAltB);
console.log(isAeqB);

let temDesc = "warm";
let lightDesc = "sunny";
let temDeg = "71";

const weatherReport = `The weather today is ${temDesc} and ${lightDesc}. Currently around ${temDeg} degrees fahrenheit.`;
console.log(weatherReport);
