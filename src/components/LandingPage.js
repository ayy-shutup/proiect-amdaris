import React from 'react';
import './LandingPage.css'; // Ensure styles match your existing HTML/CSS
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate=useNavigate();
  function goToDiscoverPage(){
  navigate("/discover")
  }
  return (
    <div className="landing-page">
      <header>
        <img src="/path-to-logo.png" alt="Logo" className="logo" />
        <nav>
          <button className="create-button">Create</button>
          <button className="login-button">Login</button>
        </nav>
      </header>
      <section className="main-content">
        <div className="recipes-preview">
          <h1>VERY COOL HEADING</h1>
          <p>With some subtext</p>
          <button className="discover-button" onClick={goToDiscoverPage}>Discover new recipes</button>
          <button className="share-button" onClick={()=>{navigate("/create")}}>Share Your Own</button>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Company Inc.</p>
        <p>Contact us: support@company.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;
