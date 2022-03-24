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
    <div className="meals-container">
      {/* <h1>Hello {meals.length}</h1> */}
      {meals.map((meal) => (
        <ShowMeal key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Meals;
