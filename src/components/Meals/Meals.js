import React, { useEffect, useState } from "react";
import ShowMeal from "../ShowMeal/ShowMeal";
import "./Meals.css";
const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  // const { meal } = meals.meals;
  return (
    <div className="ui-container">
      <div className="meals-container">
        {meals.map((meal) => (
          <ShowMeal key={meal.idMeal} meal={meal} />
        ))}
      </div>
      <div className="order-container">
        <h2>Order Items</h2>
      </div>
    </div>
  );
};

export default Meals;
