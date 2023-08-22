import { useState } from "react";
import "../components/Restaurants.scss";

function Restaurants() {
    const [selectedCategoryItem, setSelectedCategoryItem] = useState("All"); // Initialize with "All"

    const handleCategoryClick = (category:string) => {
        setSelectedCategoryItem(category);
    };

    return (
        <div className="restaurants-page-container">
            <p className="restaurant-page-title">RESTAURANTS</p>
            <div className="restaurants-categories-container">
                <p
                    className={`restaurant-category-item ${
                        selectedCategoryItem === "All" ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryClick("All")}
                >
                    All
                </p>
                <p
                    className={`restaurant-category-item ${
                        selectedCategoryItem === "New" ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryClick("New")}
                >
                    New
                </p>
                <p
                    className={`restaurant-category-item ${
                        selectedCategoryItem === "Most Popular" ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryClick("Most Popular")}
                >
                    Most Popular
                </p>
                <p
                    className={`restaurant-category-item ${
                        selectedCategoryItem === "Open Now" ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryClick("Open Now")}
                >
                    Open Now
                </p>
            </div>
        </div>
    );
}

export default Restaurants;