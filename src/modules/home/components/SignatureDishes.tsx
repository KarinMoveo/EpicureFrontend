import SignatureDishItem from "./SignatureDishItem";
import "../components/SignatureDishes.scss";
import claroImage from "../assets/claroImage.png"
import spicyIcon from "../assets/spicyIcon.png"

function SignatureDishes(){
    return(
        <div className="signature-dish">
            <p>SIGNATURE DISH OF:</p>
            <SignatureDishItem 
                dishImage={claroImage}
                dishName="Pad Ki Mao"
                dishIngrediant="Shrimps, Glass, Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chilli Brown Coconut" 
                specialIcon={spicyIcon}
                dishPrice="₪88"
            />
            <p>All Restaurants ͐ ͐</p>
    </div>
    );
}

export default SignatureDishes;