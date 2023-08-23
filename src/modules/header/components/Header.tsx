import { useState } from "react";
import { Link } from "react-router-dom";
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

type openedModalType = "search" | "account" | "shoppingBag" | "burgerMenu" | null;

function Header() { 
  const [openedModal, setOpenedModal] = useState<openedModalType>(null);
  const [selectedRoute, setSelectedRoute] = useState("");

  const toggleModal = (modalName: openedModalType) => {
    if (modalName === openedModal){
      setOpenedModal(null);
    }
    else{
      setOpenedModal(modalName);
    }
  };

  const handleSearch = (searchQuery: string) => {
    console.log("Search query:", searchQuery);
  };

  return (
    <nav className="header-container">
      <div className="header-icons-row">
        <div className="header-icon-item mobile-menu-icon-item">
          <HeaderIcon src={burgerMenuIcon} alt="menu" onClick={()=>toggleModal("burgerMenu")} />
        </div>
        <div className="header-icon-item logo-icon-item">
          <HeaderIcon
            src={logoIcon}
            alt="logo"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className="desktop-nav-items">
          <Link
            to="/"
            className={`route-item epicure-title-desktop ${
              selectedRoute === "/" ? "selected-route" : ""
            }`}
            onClick={() => setSelectedRoute("/")}
          >
            EPICURE
          </Link>
          <Link
            to="./restaurants"
            className={`route-item ${
              selectedRoute === "restaurants" ? "selected-route" : ""
            }`}
            onClick={() => setSelectedRoute("restaurants")}
          >
            Restaurants
          </Link>
          <Link
            to="./chefs"
            className={`route-item ${
              selectedRoute === "chefs" ? "selected-route" : ""
            }`}
            onClick={() => setSelectedRoute("chefs")}
          >
            Chefs
          </Link>
        </div>
        <div className="header-icon-item right-icons-items">
          <div className="right-icons-items-container">
          <HeaderIcon src={searchIcon} alt="search" onClick={()=>toggleModal("search")}/>
          <HeaderIcon src={accountIcon} alt="account" onClick={()=>toggleModal("account")}/>
          <HeaderIcon src={shopingBagIcon} alt="shoppingBag" onClick={()=>toggleModal("shoppingBag")}/>
          </div>
        </div>
      </div>
      {openedModal === "burgerMenu" && <BurgerMenu onCloseMenu={()=>setOpenedModal(null)} />}
      {openedModal === "search" && (
        <SearchModal
          onClose={() => setOpenedModal(null)}
          onSearch={handleSearch}
        />
      )}
      {openedModal === "shoppingBag" && <BagModal />}
    </nav>
  );
}

export default Header;
