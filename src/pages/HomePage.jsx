import React, { useState } from "react";
import recipesData from "../data/recipes";
import RecipeList from "../components/RecipeList";
import "./Homepage.css";


// Example Main/List page for Milestone 1.
// The recipe records are loaded into React state as required.
function HomePage() {
  const [recipes] = useState(recipesData);

  return (
    <main className="home-page">
      <h1>Discover Recipes</h1>
      <p>Explore delicious recipes for every occasion.</p>
      <RecipeList recipes={recipes} />
    </main>
  );
}

export default HomePage;
