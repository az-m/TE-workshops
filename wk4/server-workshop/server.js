import express, { json } from "express";

const app = express();

app.use(express.json());

app.listen(8080, function () {
  console.log("Server is alive and listening on 8080");
});

app.get("/", function (request, response) {
  response.json({
    message: "This is the root of the api. Nothing else is here.",
  });
});

app.get("/messages", function (request, response) {
  response.json({
    message: {
      mod: "Server message of the day: Today is Monday - enjoy your week!",
      weather: "The weather today is sunny but not very warm. Wear a jumper.",
    },
  });
});

app.post("/messages", function (request, response) {
  //   response.json({ message: "Hello, World!" });

  response.json(request.body);
});
