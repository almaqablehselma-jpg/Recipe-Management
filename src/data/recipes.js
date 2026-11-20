// Mock recipe data for Milestone 1.
// Each recipe has a name (title), category, and preparation time as required.
const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    category: "Main Course",
    prepTime: 25,
    difficulty: "Easy",
    servings: 2,
    description: "A comforting pasta dish with a creamy garlic sauce.",
    emoji: "🍝",
    ingredients: ["Pasta", "Garlic", "Cream", "Parmesan cheese", "Olive oil"],
    instructions: ["Cook the pasta according to the package instructions.", "Sauté minced garlic in olive oil.", "Add cream and Parmesan, then stir until smooth.", "Mix in the pasta and serve warm."]
  },
  {
    id: 2,
    title: "Greek Salad",
    category: "Salad",
    prepTime: 15,
    difficulty: "Easy",
    servings: 2,
    description: "A fresh salad with cucumber, tomato, olives, and feta.",
    emoji: "🥗",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Olives", "Feta cheese"],
    instructions: ["Chop the cucumber, tomatoes, and onion.", "Add olives and feta cheese.", "Drizzle with olive oil and lemon juice.", "Toss gently and serve."]
  },
  {
    id: 3,
    title: "Classic Pancakes",
    category: "Breakfast",
    prepTime: 20,
    difficulty: "Easy",
    servings: 4,
    description: "Soft homemade pancakes for a delicious breakfast.",
    emoji: "🥞",
    ingredients: ["Flour", "Milk", "Egg", "Sugar", "Baking powder"],
    instructions: ["Whisk the dry ingredients in a bowl.", "Add milk and egg, then mix until combined.", "Pour small portions onto a warm pan.", "Flip when bubbles appear and cook until golden."]
  },
  {
    id: 4,
    title: "Chicken Shawarma",
    category: "Main Course",
    prepTime: 40,
    difficulty: "Medium",
    servings: 3,
    description: "Juicy spiced chicken served in warm bread.",
    emoji: "🌯",
    ingredients: ["Chicken breast", "Yogurt", "Lemon juice", "Shawarma spices", "Flatbread"],
    instructions: ["Slice the chicken into thin strips.", "Mix with yogurt, lemon juice, and spices.", "Marinate for at least 20 minutes.", "Cook in a hot pan until fully cooked and serve in bread."]
  },
  {
    id: 5,
    title: "Chocolate Mug Cake",
    category: "Dessert",
    prepTime: 5,
    difficulty: "Easy",
    servings: 1,
    description: "A quick chocolate cake made in a mug.",
    emoji: "🍫",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Milk", "Oil"],
    instructions: ["Mix all ingredients in a microwave-safe mug.", "Stir until the batter is smooth.", "Microwave for about 60–90 seconds.", "Let it cool slightly before eating."]
  },
  {
    id: 6,
    title: "Vegetable Soup",
    category: "Soup",
    prepTime: 30,
    difficulty: "Easy",
    servings: 4,
    description: "A warm and nourishing soup full of vegetables.",
    emoji: "🍲",
    ingredients: ["Carrots", "Potatoes", "Zucchini", "Onion", "Vegetable stock"],
    instructions: ["Chop all vegetables into small pieces.", "Cook the onion in a pot until soft.", "Add the vegetables and stock.", "Simmer until the vegetables are tender."]
  },
  {
    id: 7,
    title: "Avocado Toast",
    category: "Breakfast",
    prepTime: 10,
    difficulty: "Easy",
    servings: 1,
    description: "Crispy toast topped with seasoned mashed avocado.",
    emoji: "🥑",
    ingredients: ["Bread", "Avocado", "Lemon juice", "Salt", "Black pepper"],
    instructions: ["Toast the bread until crisp.", "Mash the avocado with lemon juice.", "Season with salt and pepper.", "Spread over the toast and serve."]
  },
  {
    id: 8,
    title: "Strawberry Smoothie",
    category: "Drinks",
    prepTime: 5,
    difficulty: "Easy",
    servings: 2,
    description: "A refreshing smoothie made with strawberries and yogurt.",
    emoji: "🍓",
    ingredients: ["Strawberries", "Yogurt", "Milk", "Honey"],
    instructions: ["Wash and prepare the strawberries.", "Add all ingredients to a blender.", "Blend until smooth.", "Pour into glasses and serve cold."]
  },
  {
    id: 9,
    title: "Baked Salmon",
    category: "Main Course",
    prepTime: 35,
    difficulty: "Medium",
    servings: 2,
    description: "Oven-baked salmon with lemon and herbs.",
    emoji: "🐟",
    ingredients: ["Salmon fillets", "Lemon", "Garlic", "Olive oil", "Dried herbs"],
    instructions: ["Preheat the oven to 200°C.", "Place salmon in a baking dish.", "Season with lemon, garlic, oil, and herbs.", "Bake for 12–15 minutes or until cooked through."]
  },
  {
    id: 10,
    title: "Apple Cinnamon Oatmeal",
    category: "Breakfast",
    prepTime: 12,
    difficulty: "Easy",
    servings: 2,
    description: "Warm oatmeal topped with apple and cinnamon.",
    emoji: "🍎",
    ingredients: ["Rolled oats", "Milk", "Apple", "Cinnamon", "Honey"],
    instructions: ["Add oats and milk to a saucepan.", "Cook over medium heat, stirring occasionally.", "Dice the apple and add it with cinnamon.", "Cook until creamy and sweeten with honey."]
  }
];

export default recipes;
