import "../components/ChefOfTheWeekRestaurants.scss";

interface ChefOfTheWeekRestaurantsProps {
    ChefOfTheWeekRestaurantImage: string;
    ChefOfTheWeekRestaurantName: string;
}


function ChefOfTheWeekRestaurants(props: ChefOfTheWeekRestaurantsProps){
    return(
        <div className="chef-of-the-week-restaurants-container">
            <img 
                src={props.ChefOfTheWeekRestaurantImage}
                alt={props.ChefOfTheWeekRestaurantName} 
                className="chef-of-the-week-restaurant-image"
            />
            <p className="chef-of-the-week-retaurant-name">{props.ChefOfTheWeekRestaurantName}</p>
        </div>
    );
}

export default ChefOfTheWeekRestaurants;