import React from "react";
import MealItems from "./mealitems/MealItems";

import "./Menu.scss";

const DUMMY_MEALS = [
  {
    id: "1",
    name: "White Pasta",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo7xQvKb9ZqWtjA2KMzTSaSBDrAaqeLRGlg&usqp=CAU",
    price: 20,
  },
  {
    id: "2",
    name: "Baby Corn Pizza",
    image:
      "https://www.killingthyme.net/wp-content/uploads/2020/09/veggie-deluxe-pizza-5.jpg",
    price: 18,
  },
  {
    id: "3",
    name: "Schezwan Burger",
    image:
      "https://www.seriouseats.com/thmb/4hIZ1Af5YN9hdDA2VZ6BaUX0Hi4=/1125x1125/smart/filters:no_upscale()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg",
    price: 14,
  },
  {
    id: "4",
    name: " Corn Sandwich",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/club-sandwich-recipe.jpg",
    price: 13,
  },
  {
    id: "5",
    name: "Perry Perry Fries",
    image:
      "https://www.thespruceeats.com/thmb/tXRCQhaBACOilf8tnzLhaW0uzbE=/3485x1960/smart/filters:no_upscale()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg",
    price: 3,
  },
];

const Menu = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItems
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <div className="menu">
      <div className="heading">
        <span>Meals Available</span>
      </div>
      <div className="menu-items">
        <ul>{mealsList}</ul>
      </div>
    </div>
  );
};

export default Menu;
