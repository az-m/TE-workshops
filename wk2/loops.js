for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}

const favAnimals = ["cat", "meerschweinchen", "rabbit", "elephant"];
const favColours = ["blue", "amaranth", "aqua", "green"];
const favNumbers = [6, 7, 28, 49, 64];

for (let i = 0; i < favAnimals.length; i++) {
  console.log(favAnimals[i]);
}

for (let colour of favColours) {
  console.log(colour);
}

favNumbers.forEach(function (number) {
  console.log(number);
});
