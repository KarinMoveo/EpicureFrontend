import PopularRestaurantItem from "./PopularRestaurantItem";
import claroImage from "../assets/claroImage.png";
import seeMoreIcon from "../shared/seeMoreIcon.svg";
import "../components/PopularRestaurantsContainer.scss";

function PopularRestaurantsContainer(){
    return(
        <div className="popular-restaurants-container">
            <p className="popular-restaurants-title">POPULAR RESTURANT IN EPICURE:</p>
            <PopularRestaurantItem 
                restaurantImage={claroImage}
                restaurantName="Restaurent Name" 
                restaurantChef="Restauran Chef"
            />
            <p className="all-restaurants">
                All Restaurants 
                <span className="see-more-icon">
                    <img src={seeMoreIcon} alt="See More Icon" />
                </span>
            </p>
        </div>
    );
}

export default PopularRestaurantsContainer;