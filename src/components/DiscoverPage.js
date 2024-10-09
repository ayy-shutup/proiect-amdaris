import React from 'react';
import './DiscoverPage.css'; // Apply matching styles

const DiscoverPage = () => {
  const recipes = new Array(12).fill({ name: 'Recipe Name', tag: 'Tag', imageUrl: '/path-to-image.jpg' });

  return (
    <div className="discover-page">
      <header>
        <img src="/path-to-logo.png" alt="Logo" className="logo" />
        <nav>
          <button className="create-button">Create</button>
          <button className="login-button">Login</button>
        </nav>
      </header>
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
      <footer>
        <p>&copy; 2023 Company Inc.</p>
        <p>Contact us: support@company.com</p>
      </footer>
    </div>
  );
};

export default DiscoverPage;
