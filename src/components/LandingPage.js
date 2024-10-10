import React from "react";
import "./LandingPage.css"; // Ensure styles match your existing HTML/CSS
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  function goToDiscoverPage() {
    navigate("/discover");
  }
  return (
    <div className="landing-page">
      <section className="side-content">
        <button className="discover-button" onClick={goToDiscoverPage}>
          Discover new recipes
        </button>
        <div className="empty-container"></div>
      </section>
      <section className="main-content">
        <div className="recipes-preview">
          <h1>VERY COOL HEADING</h1>
          <p>With some subtext</p>
        </div>
      </section>
      <section className="side-content">
        <div className="empty-container"></div>
        <button
          className="share-button"
          onClick={() => {
            navigate("/create");
          }}
        >
          Share Your Own
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
