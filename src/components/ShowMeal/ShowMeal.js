import React from "react";
import "./ShowMeal.css";
const ShowMeal = (props) => {
  const { strMeal, strMealThumb } = props.meal;
  return (
    <div className="meal-container">
      <img src={strMealThumb} alt="" />
      <h1>{strMeal}</h1>
    </div>
  );
};

export default ShowMeal;
