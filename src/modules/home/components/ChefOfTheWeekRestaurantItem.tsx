import "../components/ChefOfTheWeekRestaurantItem.scss";

interface ChefOfTheWeekRestaurantItemProps {
    ChefOfTheWeekRestaurantImage: string;
    ChefOfTheWeekRestaurantName: string;
}

function ChefOfTheWeekRestaurantItem(props: ChefOfTheWeekRestaurantItemProps){
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

export default ChefOfTheWeekRestaurantItem;