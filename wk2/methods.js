const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
  getAge: function () {
    return this.age;
  },
};

person.sayHello("Alison");

const age = person.getAge();
console.log(age);

const car = {
  make: "Mazda",
  model: "3",
  colour: "Silver",
  advert: function () {
    return `FOR SALE: One very old ${this.make} ${this.model} in ${this.colour}. All bids considered.`;
  },
};

console.log(car.advert());

const book = {
  title: "My Amazing Book",
  author: "totally, like, me",
  pages: 250,
  advert: function () {
    return `Please buy ${this.title} by ${this.author}. It's ${this.pages} pages of awesomeness.`;
  },
};

console.log(book.advert());
