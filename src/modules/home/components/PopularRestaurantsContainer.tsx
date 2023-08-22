import PopularRestaurantItem from "./PopularRestaurantItem";
import claroImage from "../assets/images/restaurants/claro.png";
import seeMoreIcon from "../../../shared/assets/icons/seeMore.svg";
import "../components/PopularRestaurantsContainer.scss";
import Card from "../../../shared/components/Card";


function PopularRestaurantsContainer(){
    return(
        <div className="popular-restaurants-container">
            <p className="popular-restaurants-title">POPULAR RESTURANT IN EPICURE:</p>
            <Card
                cardImage={claroImage}
                cardName="Restaurent Name" 
            >
                <p>Yossi Shitrit</p>   
            </Card>
        
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