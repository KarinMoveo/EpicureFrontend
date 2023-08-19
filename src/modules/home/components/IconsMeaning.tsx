import IconMeaningItem from "./IconMeaningItem";
import spicyIcon from "../assets/spicyIcon.png";
import vegitarianIcon from "../assets/vegitarianIcon.png";
import veganIcon from "../assets/veganIcon.png";
import "../components/IconsMeaning.scss"

function IconsMeaning(){
    return(
        <div className="icons-meaning-container">
            <p>THE MEANING OF OUR ICONS: </p>
            <IconMeaningItem iconMeaningItemImgae={spicyIcon} iconMeaningItemName="Spicy"/>
            <IconMeaningItem iconMeaningItemImgae={vegitarianIcon} iconMeaningItemName="Vegitarian"/>
            <IconMeaningItem iconMeaningItemImgae={veganIcon} iconMeaningItemName="Vegan"/>
        </div>
    );
}

export default IconsMeaning;