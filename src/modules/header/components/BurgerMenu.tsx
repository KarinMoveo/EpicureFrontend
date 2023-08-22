import { Link } from 'react-router-dom';
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
    <nav className="burger-menu-container">
        <img 
            className="x-icon" 
            src={xIcon} alt="x icon"
            onClick={handleXClick}
        />
        <Link to="./restaurants" className="burger-menu-item-name">Restaurants</Link>
        <Link to="./chefs" className="burger-menu-item-name">Chefs</Link>
        <hr className="dividing-line"/>
        <Link to="./" className="burger-menu-item-name">Contact Us</Link>
        <Link to="./" className="burger-menu-item-name">Term Of Use</Link>
        <Link to="./" className="burger-menu-item-name">Privacy Policy</Link>
    </nav>
    );
}

export default BurgerMenu;