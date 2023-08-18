import "../components/SignatureDishItem.scss";

interface SignatureDishItemProps {
    dishImage: string;
    dishName: string;
    dishIngrediant: string;
    specialIcon: string; 
    dishPrice: string;
}


function SignatureDishItem(props: SignatureDishItemProps){
    return(
        <div className="signature-dish-item-card">
        <img src={props.dishImage} alt="Dish Image" className="dish-image" />
        <p className="dish-name">{props.dishName} </p>
        <p className="dish-ingrediant">{props.dishIngrediant}</p>
        <img src={props.specialIcon} alt="Dish special icon" className="dish-special-icon" />
        <p className="dish-price">{props.dishPrice}</p>
    </div>

    );
}

export default SignatureDishItem;