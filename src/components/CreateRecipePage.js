import React, { useState } from 'react';
import './CreateRecipePage.css'; // Match styles from your design

const CreateRecipePage = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [tags, setTags] = useState(''); // New state for tags
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleCreateRecipe = () => {
    console.log({ recipeTitle, tags, ingredients, instructions });
    // Add further logic here
  };

  return (
    <div className="create-recipe-page">
      <h1>Create Your Recipe</h1>
      <section className="recipe-form">
        <div className="title-tag-container">
          <input
            type="text"
            placeholder="Recipe Title"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
            className="recipe-title"
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="recipe-tags"
          />
        </div>
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="ingredients" // Added class for styling
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="instructions" // Added class for styling
        />
        <button onClick={handleCreateRecipe}>Save Recipe</button>
      </section>
    </div>
  );
};

export default CreateRecipePage;
