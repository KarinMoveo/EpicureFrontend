import SignatureDishItem from "./SignatureDishItem";
import claroImage from "../assets/images/restaurants/claro.png"
import spicyIcon from "../assets/icons/spicy.svg"
import seeMoreIcon from "../../../shared/assets/icons/seeMore.svg";
import "../components/SignatureDishesContainer.scss";

function SignatureDishesContainer(){
    return(
        <div className="signature-dishes-container">
            <p className="signature-dishes-title">
                SIGNATURE DISH OF:
            </p>
            <div className="signature-dishes-cards-display">

                    <SignatureDishItem 
                    dishImage={claroImage}
                    dishName="Pad Ki Mao"
                    dishIngrediant="Shrimps, Glass, Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chilli Brown Coconut" 
                    specialIcon={spicyIcon}
                    dishPrice="₪88"
                    />

                    <SignatureDishItem 
                    dishImage={claroImage}
                    dishName="Pad Ki Mao"
                    dishIngrediant="Shrimps, Glass, Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chilli Brown Coconut" 
                    specialIcon={spicyIcon}
                    dishPrice="₪88"
                    />

                    <SignatureDishItem 
                    dishImage={claroImage}
                    dishName="Pad Ki Mao"
                    dishIngrediant="Shrimps, Glass, Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chilli Brown Coconut" 
                    specialIcon={spicyIcon}
                    dishPrice="₪88"
                    />
            </div>
            <p className="all-restaurants">
                All Restaurants 
                <span className="see-more-icon">
                    <img 
                        src={seeMoreIcon} 
                        alt="See More Icon" 
                    />
                </span>
            </p>
    </div>
    );
}

export default SignatureDishesContainer;