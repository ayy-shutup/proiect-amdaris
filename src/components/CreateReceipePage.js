import React, { useState } from 'react';
import './CreateRecipePage.css'; // Match styles from your design

const CreateRecipePage = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleCreateRecipe = () => {
    console.log({ recipeTitle, ingredients, instructions });
    // Add further logic here
  };

  return (
    <div className="create-recipe-page">
      <header>
        <img src="/path-to-logo.png" alt="Logo" className="logo" />
        <nav>
          <button className="create-button">Create</button>
          <button className="login-button">Login</button>
        </nav>
      </header>
      <section className="recipe-form">
        <input
          type="text"
          placeholder="Recipe Title"
          value={recipeTitle}
          onChange={(e) => setRecipeTitle(e.target.value)}
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <button onClick={handleCreateRecipe}>Save Recipe</button>
      </section>
      <footer>
        <p>&copy; 2023 Company Inc.</p>
        <p>Contact us: support@company.com</p>
      </footer>
    </div>
  );
};

export default CreateRecipePage;
