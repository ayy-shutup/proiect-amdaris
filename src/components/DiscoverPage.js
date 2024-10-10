import React from 'react';
import './DiscoverPage.css'; // Apply matching styles

const DiscoverPage = () => {
  const recipes = new Array(12).fill({ name: 'Recipe Name', tag: 'Tag', imageUrl: '/path-to-image.jpg' });

  return (
    <div className="discover-page">
      <section className="recipe-list">
        <input type="text" placeholder="Filter recipes by tag" className="filter-input" />
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
              <p>{recipe.name}</p>
              <span>{recipe.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
