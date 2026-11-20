import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card__image" aria-hidden="true">
        <span>{recipe.emoji}</span>
      </div>

      <div className="recipe-card__content">
        <span className="recipe-card__category">{recipe.category}</span>
        <h2 className="recipe-card__title">{recipe.title}</h2>
        <p className="recipe-card__description">{recipe.description}</p>

        <div className="recipe-card__meta">
          <span>⏱ {recipe.prepTime} min</span>
          <span>● {recipe.difficulty}</span>
          <span>🍽 {recipe.servings} servings</span>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
