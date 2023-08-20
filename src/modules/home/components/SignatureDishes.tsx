import SignatureDishItem from "./SignatureDishItem";
import claroImage from "../assets/claroImage.png"
import spicyIcon from "../assets/spicyIcon.svg"
import seeMoreIcon from "../shared/seeMoreIcon.svg";
import "../components/SignatureDishes.scss";

function SignatureDishes(){
    return(
        <div className="signature-dish">
            <p className="signature-dishes-title">SIGNATURE DISH OF:</p>
            <SignatureDishItem 
                dishImage={claroImage}
                dishName="Pad Ki Mao"
                dishIngrediant="Shrimps, Glass, Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chilli Brown Coconut" 
                specialIcon={spicyIcon}
                dishPrice="₪88"
            />
            <p className="all-restaurants">
                All Restaurants  <span className="see-more-icon"><img src={seeMoreIcon} alt="See More Icon" /></span>
            </p>
    </div>
    );
}

export default SignatureDishes;