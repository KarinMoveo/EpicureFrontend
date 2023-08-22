import { Link } from 'react-router-dom';
import Card from "../../../shared/components/Card";
import onza from "../assets/images/restaurants/onza.png";
import seeMoreIcon from "../../../shared/assets/icons/seeMore.svg";
import "../components/ChefOfTheWeekContainer.scss";

interface ChefOfTheWeekContainerProps {
    chefOfTheWeekImage: string;
    chefOfTheWeekName: string;
    chefOfTheWeekSummary: string;
}

function ChefOfTheWeekContainer(props: ChefOfTheWeekContainerProps) {

    const chefFirstName = props.chefOfTheWeekName.split(' ');
    const chefFirstNameUpperCase = chefFirstName[0].toUpperCase();

    return (
        <div className="chef-of-the-week-container">
            <p className="chef-of-the-week-title">CHEF OF THE WEEK:</p>
            <div className="chef-of-the-week-name-image-summary-container">
                <div className="image-overlay-container">
                    <img 
                        src={props.chefOfTheWeekImage}
                        alt={props.chefOfTheWeekName} 
                        className="chef-of-the-week-image"
                    />
                    <div className="overlay-name">{props.chefOfTheWeekName}</div>
                </div>
                <p className="chef-of-the-week-summary">{props.chefOfTheWeekSummary}</p>
            </div>
            <div className="restaurants-container">
                <p className="chef-of-the-week-restaurants-title">{chefFirstNameUpperCase}'S RESTAURANTS</p>
                <div className="chef-of-the-week-resturants-cards-display">
                    <Card
                        cardImage={onza} 
                        cardName="Onza"
                    />
                    <Card
                        cardImage={onza} 
                        cardName="Onza"
                    />
                    
                </div>
                <Link to="./restaurants" className="all-restaurants"> All Restaurants
                    <span className="see-more-icon">
                        <img src={seeMoreIcon} alt="See More Icon" />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default ChefOfTheWeekContainer;
