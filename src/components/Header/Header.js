import React from "react";
import "./Header.css";
const Header = () => {
  const getInputValue = (pro) => {
    // const userValue = pro.target.value;
    console.log(pro.target.value);
  };
  return (
    <div className="header">
      <div className="header-container">
        <h1>Meal-Db</h1>
        <input
          type="text"
          name=""
          placeholder="Search Your Meal!"
          id=""
          onChange={getInputValue}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
