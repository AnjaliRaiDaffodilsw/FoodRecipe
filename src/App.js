import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import RecipeTile from "./components/recipeTile/RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = 'cc9eaa15';
  const YOUR_APP_KEY = '3c2cd1e7a20a86bb22b2e2950d8766f3'
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
  &health=${healthLabel}`;


  async function getRecipes() {
    var result = await axios.get(url)
    setRecipes(result.data.hits);
    console.log(result.data);
  }
  const submitButton = (event) => {
    event.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
      <h1 >Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm"
        onSubmit={submitButton}>
        <input type="text"
          className="app__input"
          placeholder="Enter Ingredient"
          value={query}
          autoComplete="Off"
          onChange={(event) => {
            setQuery(event.target.value)
          }}
        />
        <input type="submit"
          value="Search"
          className="app__submit" />

        <select className="app_healthLabels">
          <option onClick={() => {
            sethealthLabel("vegan")
          }}>vegan</option>
          <option onClick={() => {
            sethealthLabel("paleo")
          }}>paleo</option>
          <option onClick={() => {
            sethealthLabel("dairy-free")
          }}>dairy-free</option>
          <option onClick={() => {
            sethealthLabel("gluten-free")
          }}>gluten-free</option>
          <option onClick={() => {
            sethealthLabel("wheat-free")
          }}>wheat-free</option>
          <option onClick={() => {
            sethealthLabel("low-sugar")
          }}>low-sugar</option>
          <option onClick={() => {
            sethealthLabel("egg-free")
          }}>egg-free</option>
          <option onClick={() => {
            sethealthLabel("peanut-free")
          }}>peanut-free</option>
          <option onClick={() => {
            sethealthLabel("tree-nut-free")
          }}>tree-nut-free</option>
          <option onClick={() => {
            sethealthLabel("soy-free")
          }}>soy-free</option>
          <option onClick={() => {
            sethealthLabel("fish-free")
          }}>fish-free</option>
          <option onClick={() => {
            sethealthLabel("shellfish-free")
          }}>shellfish-free</option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe}
          />
        })}
      </div>
    </div>
  );
}

export default App;
