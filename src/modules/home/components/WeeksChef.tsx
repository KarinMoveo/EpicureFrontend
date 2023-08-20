import ChefOfTheWeekRestaurants from "../components/ChefOfTheWeekRestaurants";
import onza from "../assets/onza.png";
import seeMoreIcon from "../shared/seeMoreIcon.svg";
import "../components/WeeksChef.scss";

interface WeeksChefProps {
    chefOfTheWeekImage: string;
    chefOfTheWeekName: string;
    chefOfTheWeekSummary: string;
}

function WeeksChef(props: WeeksChefProps) {

    const chefFirstName = props.chefOfTheWeekName.split(' ');
    const chefFirstNameUpperCase = chefFirstName[0].toUpperCase();

    return (
        <div className="chef-of-the-week-container">
            <p className="chef-of-the-week-title">CHEF OF THE WEEK:</p>
            <div className="image-overlay-container">
                <img src={props.chefOfTheWeekImage} alt={props.chefOfTheWeekName} className="chef-of-the-week-image" />
                <div className="overlay-name">{props.chefOfTheWeekName}</div>
            </div>
            <p className="chef-of-the-week-summary">{props.chefOfTheWeekSummary}</p>
            <div className="restaurants-container">
                <p className="chef-of-the-week-restaurants-title">{chefFirstNameUpperCase}'S RESTAURANTS</p>
                <ChefOfTheWeekRestaurants ChefOfTheWeekRestaurantImage={onza} ChefOfTheWeekRestaurantName="Onza"/>
                <p className="all-restaurants">
                    All Restaurants  <span className="see-more-icon"><img src={seeMoreIcon} alt="See More Icon" /></span>
                </p>
            </div>
        </div>
    );
}

export default WeeksChef;
