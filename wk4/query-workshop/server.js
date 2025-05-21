import express from "express";

const app = express();

app.listen(8080, () => console.log("Server is listening on 8080"));

app.get("/api/pokemon", (req, res) => {
  const queryStringColour = req.query.colour;
  const queryStringName = req.query.name;

  let allPokemon = [
    { name: "Pikachu", colour: "yellow" },
    { name: "Charmander", colour: "orange" },
    { name: "Squirtle", colour: "blue" },
  ];

  if (queryStringColour) {
    allPokemon = allPokemon.filter((pokemon) => {
      return pokemon.colour.toLowerCase() === queryStringColour.toLowerCase();
    });
  }

  if (queryStringName) {
    allPokemon = allPokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase() === queryStringName.toLowerCase();
    });
  }

  res.json(allPokemon);
});
