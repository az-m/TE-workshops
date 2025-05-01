// if (movieRating == "18") {
//   if (age >= 18) {
//     console.log("You can watch the movie");
//   } else {
//     console.log("You are too young");
//   }
// } else if (movieRating == "15") {
//   if (age >= 15) {
//     console.log("You can watch the movie");
//   } else {
//     console.log("You are too young");
//   }
// } else if (movieRating == "12") {
//   if (age >= 12) {
//     console.log("You can watch the movie");
//   } else {
//     console.log("You are too young");
//   }
// } else if (movieRating == "PG") {
//   if (age >= 8) {
//     console.log("You can watch the movie");
//   } else {
//     console.log("Ask your parents");
//   }
// } else {
//   console.log("Anyone can watch this movie");
// }

let age = 18;
let movieRating = "15";

if (movieRating == "U") {
  console.log("Anyone can watch this movie");
} else if (movieRating == "PG") {
  if (age >= 8) {
    console.log("You can watch the movie");
  } else {
    console.log("Ask your parents");
  }
} else {
  if (age >= movieRating) {
    console.log("You can watch the movie");
  } else {
    console.log("You are too young");
  }
}
