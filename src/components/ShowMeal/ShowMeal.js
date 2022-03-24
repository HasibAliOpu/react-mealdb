import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ShowMeal.css";
const ShowMeal = (props) => {
  const { strMeal, strMealThumb, strInstructions } = props.meal;
  return (
    <div className="meal-card">
      <div className="meal-container">
        <img src={strMealThumb} alt="" />
        <h3>{strMeal}</h3>
        <p>{strInstructions.slice(0, 230)}...</p>
      </div>
      <div className="mealAdd-btn">
        <p>Order</p>
        <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default ShowMeal;
