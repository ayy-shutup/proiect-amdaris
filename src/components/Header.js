import React from "react";
import "./Header.css"; // Apply matching styles
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header id="header">
      <span className="logo">
        <img src="logo.webp" />
        <p className="gluten-logo">SAVORLY</p>{" "}
      </span>
      <span
        className="header-button playpen-sans-header"
        onClick={() => {
          navigate("/create");
        }}
      >
        Create +
      </span>
    </header>
  );
};

export default Header;
