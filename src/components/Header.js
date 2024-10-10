import React from 'react';
import './Header.css'; // Apply matching styles

const Header = () => {
  const recipes = new Array(12).fill({ name: 'Recipe Name', tag: 'Tag', imageUrl: '/path-to-image.jpg' });

  return (
    <div id="header">
        <span class="logo"><img src="logo.webp"/><p class="gluten-logo">LOGO</p> </span>
        <span class="header-button playpen-sans-header">Create +</span>
    </div>
  );
};

export default Header;
