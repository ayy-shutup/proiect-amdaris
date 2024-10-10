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
    </div>
  );
};

export default CreateRecipePage;
