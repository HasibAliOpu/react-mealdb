import React from "react";
import "./ShowMeal.css";
const ShowMeal = (props) => {
  const { strMeal, strMealThumb, strInstructions } = props.meal;
  return (
    <div className="meal-container">
      <img src={strMealThumb} alt="" />
      <h3>{strMeal}</h3>
      <p>{strInstructions.slice(0, 400)}...</p>
    </div>
  );
};

export default ShowMeal;
