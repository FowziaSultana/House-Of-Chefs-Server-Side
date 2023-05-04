const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/Chefs.json");
const recipes = require("./data/Recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefs.find((chef) => chef.ChefId === id);
  res.send(selectedChef);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipes = recipes.filter((rec) => rec.chef_id === id);
  res.send(selectedRecipes);
});

app.listen(port, () => {
  console.log(`Chefs API is running on port: ${port}`);
});
