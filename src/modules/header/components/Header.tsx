import { useState } from "react";
import { Link } from 'react-router-dom';
import SearchModal from "./SearchModal";
import shopingBagIcon from "../assets/icons/shopingBag.svg";
import accountIcon from "../assets/icons/account.svg";
import searchIcon from "../../../shared/assets/icons/search.svg";
import logoIcon from "../assets/icons/logo.png";
import burgerMenuIcon from "../assets/icons/burgerMenu.svg";
import HeaderIcon from "./HeaderIcon";
import BurgerMenu from "./BurgerMenu";
import BagModal from "./BagModal";
import "./Header.scss";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isBagModalOpen, setIsBagModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState("");

  const headerIcons = [ { key: "search", value: searchIcon },
                        { key: "account", value: accountIcon },
                        { key: "shoppingBag", value: shopingBagIcon },
                      ];

                      
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  type FuncMap = { [key: string]: () => void };

  const togglesIconsFromHeader: FuncMap = {
    "search": () => setIsSearchModalOpen(!isSearchModalOpen),
    "account": () => console.log("hiiii"),
    "shoppingBag": () => setIsBagModalOpen(!isBagModalOpen),
  };

  const handleSearch = (searchQuery: string) => {
    console.log("Search query:", searchQuery);
  };

  return (
    <nav className="header-container">
      <div className="header-icons-row">
        <div className="header-icon-item mobile-menu-icon-item">
          <HeaderIcon src={burgerMenuIcon} alt="menu" onClick={toggleMenu} />
        </div>
        <div className="header-icon-item logo-icon-item">
          <HeaderIcon src={logoIcon} alt="logo" onClick={() => console.log("gi")} />
        </div>
        <div className="desktop-nav-items">
          <p className="epicure-title-desktop">EPICURE</p>
          <Link
            to="./restaurants"
            className={`route-item ${selectedRoute === "restaurants" ? "selected-route" : ""}`}
            onClick={() => setSelectedRoute("restaurants")}
          >
            Restaurants
          </Link>
          <Link
            to="./chefs"
            className={`route-item ${selectedRoute === "chefs" ? "selected-route" : ""}`}
            onClick={() => setSelectedRoute("chefs")}
          >
            Chefs
          </Link>
        </div>
        <div className="header-icon-item right-icons-items">
          <div className="right-icons-items-container">
            {headerIcons.map((obj) => (
              <HeaderIcon
                key={obj.key}
                src={obj.value}
                alt={obj.key}
                onClick={togglesIconsFromHeader[obj.key]}
              />
            ))}
          </div>
        </div>
      </div>
      {isMenuOpen && <BurgerMenu onCloseMenu={toggleMenu} />}
      {isSearchModalOpen && (
        <SearchModal onClose={() => setIsSearchModalOpen(false)} onSearch={handleSearch} />
      )}
      {isBagModalOpen && <BagModal />}
    </nav>
  );
}

export default Header;