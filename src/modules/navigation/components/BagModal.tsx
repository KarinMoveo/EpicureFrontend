import shopingBagIcon from "../assets/shopingBagIcon.svg";
import "../components/BagModal.scss";

function BagModal(){
    return(
        <div className="bag-modal-container">
            <img 
                src={shopingBagIcon} 
                alt="Shoping Bag Icon" 
                className="shoping-bag-image"
            />
            <p className="bag-contant-text">YOUR BAG IS EMPTY</p>
        </div>
    );
}

export default BagModal;