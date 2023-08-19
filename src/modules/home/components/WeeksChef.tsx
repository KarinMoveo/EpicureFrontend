import React from "react";
import ChefOfTheWeekRestaurants from "../components/ChefOfTheWeekRestaurants";
import onza from "../assets/onza.png";
import "../components/WeeksChef.scss";

interface WeeksChefProps {
    chefOfTheWeekImage: string;
    chefOfTheWeekName: string;
    chefOfTheWeekSummary: string;
}

function WeeksChef(props: WeeksChefProps) {
    return (
        <div className="chef-of-the-week-container">
            <p>CHEF OF THE WEEK:</p>
            <div className="image-overlay-container">
                <img src={props.chefOfTheWeekImage} alt={props.chefOfTheWeekName} className="chef-of-the-week-image" />
                <div className="overlay-name">{props.chefOfTheWeekName}</div>
            </div>
            <p className="chef-of-the-week-summary">{props.chefOfTheWeekSummary}</p>
            <div className="restaurants-container">
                <p>{props.chefOfTheWeekName}'S RESTAURANTS</p>
                <ChefOfTheWeekRestaurants ChefOfTheWeekRestaurantImage={onza} ChefOfTheWeekRestaurantName="Onza"/>
                <p>All Restaurants ͐ ͐</p>
            </div>
        </div>
    );
}

export default WeeksChef;
