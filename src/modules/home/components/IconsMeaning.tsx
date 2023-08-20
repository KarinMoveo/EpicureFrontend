import IconMeaningItem from "./IconMeaningItem";
import spicyIcon from "../assets/spicyIcon.svg";
import vegitarianIcon from "../assets/vegitarianIcon.svg";
import veganIcon from "../assets/veganIcon.svg";
import "../components/IconsMeaning.scss"

function IconsMeaning(){
    return(
        <div className="icons-meaning-container">
            <p className="icons-meaning-title">THE MEANING OF OUR ICONS: </p>
            <IconMeaningItem iconMeaningItemImgae={spicyIcon} iconMeaningItemName="Spicy"/>
            <IconMeaningItem iconMeaningItemImgae={vegitarianIcon} iconMeaningItemName="Vegitarian"/>
            <IconMeaningItem iconMeaningItemImgae={veganIcon} iconMeaningItemName="Vegan"/>
        </div>
    );
}

export default IconsMeaning;