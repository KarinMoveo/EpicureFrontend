import SignatureDishItem from "../components/SignatureDishItem";
import "../components/SignatureDishStyle.scss";

function SignatureDish(){
    return(
        <div className="signature-dish">
            <p>SIGNATURE DISH OF:</p>
            <SignatureDishItem 
                dishImage="{dishImage}"
                dishName="Dish Name"
                dishIngrediant="Dish Ingrediant" 
                specialIcon="{specialIcon}" 
                dishPrice="{dishPrice}"
            />
            <p>All Restaurants ͐ ͐</p>
    </div>
    );
}

export default SignatureDish;