
const express = require('express')
var cors = require('cors')

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')
const app = express()

app.use(cors())
const port = 3000

app.get('/', (req, res) => {
      res.send('Hello World!')
})

// all chefs 
app.get('/chefs', (req, res) => {
      res.send(chefs)
})

// specific chefs 
app.get('/chefs/:id', (req, res) => {
      const id = req.params.id;
      const selectedChef = chefs.find(chef => chef.id == id);
      res.send(selectedChef)
})
app.get('/chef/:id', (req, res) => {
      const id = req.params.id;
      console.log(id);
      const selectRecipes = recipes.filter(recipe => recipe.chef_id == id);
      res.send(selectRecipes)
})

app.get('/recipes', (req, res) => {
      res.send(recipes)
})

app.get('/popular-recipe/:id', (req, res) => {
      const id = req.params.id;
      const selectedRecipe = recipes.find(recipe => recipe.id == id);
      res.send(selectedRecipe)
})

app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
})