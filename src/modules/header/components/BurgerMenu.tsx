import xIcon from "../assets/icons/x.svg";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
    onCloseMenu: () => void;
  }

function BurgerMenu({ onCloseMenu }: BurgerMenuProps){

    const handleXClick = () => {
        onCloseMenu(); 
    };

    return(
    <div className="burger-menu-container">
        <img 
            className="x-icon" 
            src={xIcon} alt="x icon"
            onClick={handleXClick}
        />
        <p className="burger-menu-item-name">Restaurants</p>
        <p className="burger-menu-item-name">Chefs</p>
        <hr className="dividing-line"/>
        <p className="burger-menu-item-name">Contact Us</p>
        <p className="burger-menu-item-name">Term Of Use</p>
        <p className="burger-menu-item-name">Privacy Policy</p>
    </div>
    );
}

export default BurgerMenu;