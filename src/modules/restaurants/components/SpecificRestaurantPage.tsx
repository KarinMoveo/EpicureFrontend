import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../components/SpecificRestaurantPage.scss";
import kabkem from "../assets/images/restaurants/kabkem.svg";
import claro from "../assets/images/restaurants/claro.png";
import messa from "../assets/images/restaurants/messa.png";
import oneStar from "../assets/images/rating/oneStar.svg";
import twoStars from "../assets/images/rating/twoStars.svg";
import threeStars from "../assets/images/rating/threeStars.svg";
import fourStars from "../assets/images/rating/fourStars.svg";
import fiveStars from "../assets/images/rating/fiveStars.svg";
import clock from "../assets/icons/clock.svg";

function SpecificRestaurantPage() {
  // Sample hardcoded data for restaurants
  const restaurantData = [
    {
      id: 1,
      name: "Claro",
      image: claro,
      chefName: "Ran Shmueli",
      isOpen: true,
      rating: fourStars,
    },
    {
      id: 2,
      name: "Kab Kem",
      image: kabkem,
      chefName: "Yariv Malili",
      isOpen: true,
      rating: twoStars,
    },
    // ... add other restaurant data
  ];

  type MealType = "Breakfast" | "Lanch" | "Dinner";

  const mealsCategories: MealType[] = ["Breakfast", "Lanch", "Dinner"];

  const [selectedMealCategory, setSelectedMealCategory] =
    useState<MealType>("Breakfast");

  const handleMealCategoryClick = (mealCategory: MealType) => {
    setSelectedMealCategory(mealCategory);
  };

  const { restaurantName } = useParams();
  const restaurant = restaurantData.find(
    (item) => item.name === restaurantName
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const { image, chefName, isOpen } = restaurant;

  return (
    <div className="specific-restaurant-page-container">
      <img
        src={image}
        alt={`${restaurantName} Image`}
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <p className="restaurant-name">{restaurantName}</p>
        <p className="restaurant-chef-name">{chefName}</p>
        <div className="is-open">
          <img src={clock} className="clock-image" />
          {isOpen ? <p>Open now</p> : <p>Close now</p>}
        </div>
        </div>
        <div className="meals-category-row">
          {mealsCategories.map((mealCategoryItem) => (
            <p
              key={mealCategoryItem}
              className={`restaurant-category-item ${
                selectedMealCategory === mealCategoryItem
                  ? "category-item-selected"
                  : ""
              }`}
              onClick={() => handleMealCategoryClick(mealCategoryItem)}
            >
              {mealCategoryItem}
            </p>
          ))}
        </div>
    </div>
  );
}

export default SpecificRestaurantPage;
