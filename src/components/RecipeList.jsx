import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="recipe-empty">No recipes found. Try another search.</p>;
  }

  return (
    <section className="recipe-grid" aria-label="Recipe list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}

export default RecipeList;
