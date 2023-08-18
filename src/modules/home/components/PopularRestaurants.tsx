import PopularRestaurantItem from "./PopularRestaurantItem";
import claroImage from "../assets/claroImage.png";
import "../components/PopularRestaurants.scss";

function PopularRestaurants(){
    return(
        <div className="popular-restaurants-container">
            <p>POPULAR RESTURANT IN EPICURE:</p>
            <PopularRestaurantItem restaurantImage={claroImage} restaurantName="Restaurent Name" restaurantChef="Restauran Chef"/>
            <p>All Restaurants ͐ ͐</p>
        </div>
    );
}

export default PopularRestaurants;