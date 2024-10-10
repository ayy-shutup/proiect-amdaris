import React from 'react';
import './DiscoverPage.css'; // Apply matching styles

const DiscoverPage = () => {
  const recipes = [
    { name: 'Carbonara', tag: 'Comfort Food', imageUrl: '/background.jpg' },
    { name: 'Chicken Francese', tag: 'Gourmet', imageUrl: '/cf.webp' },
    { name: 'Fluffy Egg White Omelette ', tag: 'Breakfast', imageUrl: '/ommlet.webp' },
    { name: 'Everyday Hokkien Noodles', tag: 'Quick Food', imageUrl: '/hn.webp' },
    { name: 'Blueberry Muffins (ultra moist!)', tag: 'Dessert', imageUrl: '/bm.webp' },
    { name: 'Vanilla Cupcakes (that actually stay moist)', tag: 'Dessert', imageUrl: '/vc.webp' },
    { name: 'Cheesecake', tag: 'Dessert', imageUrl: '/cheseecake.webp' },
    { name: 'Jam Drops (Thumbprint Cookies)', tag: 'Dessert', imageUrl: '/jd.webp' },
    { name: 'Pizza Capricciosa', tag: 'Fast Food', imageUrl: '/capricioasa.webp' },
    { name: 'Greek Kofta Kebabs', tag: ' Greek National Food', imageUrl: '/gkk.webp' },
    { name: 'Chicken Shawarma (Middle Eastern)', tag: 'Street Food', imageUrl: '/shawarma.webp' },
    { name: 'Avocado Chicken Burger', tag: 'Healthy Food', imageUrl: '/avocadoburger.webp' }


  ];

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
