const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);

console.log(blogPosts[0]);
console.log(blogPosts[1]);
console.log(blogPosts[2]);

blogPosts[3] = "My fourth blog post";

console.log(blogPosts);

const favouriteFoods = ["Pizza", "Cheese", "Steak", "Chocolate"];
console.log(favouriteFoods);

const favouriteColours = ["Blue", "Teal", "Green"];
console.log(favouriteColours);

const favouriteNumbers = [6, 42, 55, 316];
console.log(favouriteNumbers);

favouriteNumbers.pop();
console.log(favouriteNumbers);

favouriteNumbers.push(456);
console.log(favouriteNumbers);

favouriteNumbers.shift();
console.log(favouriteNumbers);

favouriteNumbers.unshift(7);
console.log(favouriteNumbers);
