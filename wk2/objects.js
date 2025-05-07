const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);
// console.table(person);

console.log(person.name);
console.log(person.age);
console.log(person.favouriteColour);

person.favouriteFood = "pizza";

console.log(person);

const car = {
  make: "Mazda",
  model: "3",
  colour: "Silver",
};

console.log(
  `FOR SALE: One very old ${car.make} ${car.model} in ${car.colour}. All bids considered.`
);

const book = {
  title: "My Amazing Book",
  author: "totally, like, me",
  pages: 250,
};

console.log(
  `Please buy ${book.title} by ${book.author}. It's ${book.pages} pages of awesomeness.`
);

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post all about learning objects and arrays",
};

console.log(blogPost.author.name);
console.log(blogPost.tags[0]);
console.log(blogPost.tags.length);

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
);
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

console.log(`Tags for post "${blogPost.title}":`);
for (let tag of blogPost.tags) {
  console.log(tag);
}
