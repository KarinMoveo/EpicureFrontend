import IconMeaningItem from "./IconMeaningItem";
import spicyIcon from "../assets/icons/spicy.svg";
import vegitarianIcon from "../assets/icons/vegitarian.svg";
import veganIcon from "../assets/icons/vegan.svg";
import "../components/IconsMeaningContainer.scss"

function IconsMeaningContainer(){
    return(
        <div className="icons-meaning-container">
            <p className="icons-meaning-title">THE MEANING OF OUR ICONS: </p>
            <IconMeaningItem iconMeaningItemImgae={spicyIcon} iconMeaningItemName="Spicy"/>
            <IconMeaningItem iconMeaningItemImgae={vegitarianIcon} iconMeaningItemName="Vegitarian"/>
            <IconMeaningItem iconMeaningItemImgae={veganIcon} iconMeaningItemName="Vegan"/>
        </div>
    );
}

export default IconsMeaningContainer;