import shopingBagIcon from "../assets/icons/shopingBag.svg";
import "./BagModal.scss";

function BagModal(){
    return(
        <div className="bag-modal-container">
            <img 
                src={shopingBagIcon} 
                alt="Shoping Bag Icon" 
                className="shoping-bag-image"
            />
            <p className="bag-contant-text">YOUR BAG IS EMPTY</p>
            <p className="order-history-desktop">ORDER HISTORY</p>
        </div>
    );
}

export default BagModal;