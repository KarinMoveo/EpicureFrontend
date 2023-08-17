import PopularRestaurantItem from "../components/PopularRestaurantItem";
import "../components/PopularRestaurantStyle.scss";
import claroImage from "../images/claroImage.png";



function PopularRestaurant(){
    return(
        <div className="popular-restaurant">
            <p>POPULAR RESTURANT IN EPICURE:</p>
            <PopularRestaurantItem restaurantImage={claroImage} restaurantName="Restaurent Name" restaurantChef="Restauran Chef"/>
            <p>All Restaurants ͐ ͐</p>
        </div>
    );
}

export default PopularRestaurant;