import React, { useEffect, useState } from "react";
import Card from "../../../shared/components/Card";
import kabkem from "../assets/images/restaurants/kabkem.svg";
import claro from "../assets/images/restaurants/claro.png";
import messa from "../assets/images/restaurants/messa.png";
import oneStar from "../assets/images/rating/oneStar.svg";
import twoStars from "../assets/images/rating/twoStars.svg";
// import threeStars from "../assets/images/rating/threeStars.svg";
import fourStars from "../assets/images/rating/fourStars.svg";
// import fiveStars from "../assets/images/rating/fiveStars.svg";
import downwardArrow from "../assets/icons/downwardArrow.svg";
import mapView from "../assets/images/others/mapView.png";
import "../components/Restaurants.scss";

function Restaurants() {
  const [selectedCategoryItem, setSelectedCategoryItem] =
    useState<selectedCategoryType>("All");
  const [isMapView, setIsMapView] = useState(false);
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Claro",
      image: claro,
      chefName: "Ran Shmueli",
      rating: fourStars,
    },
    {
      id: 2,
      name: "Kab Kem",
      image: kabkem,
      chefName: "Yariv Malili",
      rating: twoStars,
    },
    {
      id: 3,
      name: "Messa",
      image: messa,
      chefName: "Aviv Moshe",
      rating: oneStar,
    },
    {
      id: 4,
      name: "Messa",
      image: messa,
      chefName: "Aviv Moshe",
      rating: oneStar,
    },
    {
      id: 5,
      name: "Messa",
      image: messa,
      chefName: "Aviv Moshe",
      rating: oneStar,
    },
    {
      id: 6,
      name: "Messa",
      image: messa,
      chefName: "Aviv Moshe",
      rating: oneStar,
    },
    {
      id: 7,
      name: "Messa",
      image: messa,
      chefName: "Aviv Moshe",
      rating: oneStar,
    },
    {
      id: 8,
      name: "Messa",
      image: messa,
      chefName: "Aviv Moshe",
      rating: oneStar,
    },
  ]);

  type selectedCategoryType =
    | "All"
    | "New"
    | "Most Popular"
    | "Open Now"
    | "Map View"
    | null;

  useEffect(() => {
    // in the future, make the API call here and update the restaurants state
  }, [selectedCategoryItem]);

  const handleCategoryClick = (category: selectedCategoryType) => {
    if (category === "Map View" && window.innerWidth >= 768) {
      setIsMapView(true);
      setSelectedCategoryItem(category);
    } else {
      setIsMapView(false);
      setSelectedCategoryItem(category);
    }
  };

  const categories: selectedCategoryType[] = [
    "All",
    "New",
    "Most Popular",
    "Open Now",
    "Map View",
  ];

  return (
    <div className="restaurants-page-container">
      <div className="restaurents-title-and-categories">
        <h1 className="restaurant-page-title">RESTAURANTS</h1>
        <div className="restaurants-categories-container">
          <div className="restaurants-categories-container">
            {categories.map(
              (category) =>
                !(category === "Map View" && window.innerWidth < 768) && (
                  <p
                    key={category}
                    className={`restaurant-category-item ${
                      selectedCategoryItem === category ||
                      (category === "Map View" && isMapView)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </p>
                )
            )}
          </div>
        </div>
      </div>
      <div className="row-filter">
        <p className="filter-item price-range-filter">
          Price Range
          <span className="downward-arrow-icon">
            <img src={downwardArrow} alt="downward arrow" />
          </span>
        </p>
        <p className="filter-item distance-filter">
          Distance
          <span className="downward-arrow-icon">
            <img src={downwardArrow} alt="downward arrow" />
          </span>
        </p>
        <p className="filter-item rating-filter">
          Rating
          <span className="downward-arrow-icon">
            <img src={downwardArrow} alt="downward arrow" />
          </span>
        </p>
      </div>
      <div className="restaurants-list">
        {isMapView ? (
          <img src={mapView} alt="Map View" className="map-view-image" />
        ) : (
          restaurants.map((restaurant, index) => (
            <Card
              key={index}
              cardImage={restaurant.image}
              cardName={restaurant.name}
            >
              <p>{restaurant.chefName}</p>
              <img
                src={restaurant.rating}
                alt={`${restaurant.name} Rating`}
                className="restaurant-rating"
              />
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default Restaurants;
