import SignatureDishItem from "./SignatureDishItem";
import "../components/SignatureDishes.scss";

function SignatureDishes(){
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

export default SignatureDishes;