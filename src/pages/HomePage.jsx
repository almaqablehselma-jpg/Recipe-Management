import React, { useState } from "react";
import recipesData from "../data/recipes";
import RecipeList from "../components/RecipeList";
import "./Homepage.css";

function HomePage() {
  const [recipes] = useState(recipesData);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const visibleRecipes = recipes
    .filter((recipe) => {
      const text = searchText.toLowerCase();
      return (
        recipe.title.toLowerCase().includes(text) ||
        recipe.category.toLowerCase().includes(text)
      );
    })
    .sort((a, b) => {
      if (sortBy === "time-asc") return a.prepTime - b.prepTime;
      if (sortBy === "time-desc") return b.prepTime - a.prepTime;
      if (sortBy === "name") return a.title.localeCompare(b.title);
      return a.id - b.id;
    });

  const controlsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "30px",
  };

  const fieldStyle = {
    padding: "10px 14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccd5cc",
    width: "100%",
    maxWidth: "320px",
  };

  return (
    <main className="home-page">
      <h1>Discover Recipes</h1>
      <p>Explore delicious recipes for every occasion.</p>

      <div style={controlsStyle}>
        <input
          type="text"
          placeholder="Search by name or category..."
          aria-label="Search recipes"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={fieldStyle}
        />

        <select
          aria-label="Sort recipes"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={fieldStyle}
        >
          <option value="default">Sort: Default</option>
          <option value="time-asc">Prep time: Low to High</option>
          <option value="time-desc">Prep time: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <RecipeList recipes={visibleRecipes} />
    </main>
  );
}

export default HomePage;
