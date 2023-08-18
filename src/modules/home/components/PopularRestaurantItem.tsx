
import "../components/PopularRestaurantItem.scss";

interface PopularRestaurantItemProps {
    restaurantImage: string;
    restaurantName: string;
    restaurantChef: string;
}


function PopularRestaurantItem(props: PopularRestaurantItemProps){
    return(
        <div className="popular-restaurant-in-epicure-card">
            <img src={props.restaurantImage} alt="Restaurant Image" className="restaurant-image" />
            <p className="restaurant-name">{props.restaurantName} </p>
            <p className="restaurant-chef">{props.restaurantChef}</p>
        </div>

    );
}

export default PopularRestaurantItem;