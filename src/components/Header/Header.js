import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1>Meal-Db</h1>
        <input type="text" name="" placeholder="Search Your Meal!" id="" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
