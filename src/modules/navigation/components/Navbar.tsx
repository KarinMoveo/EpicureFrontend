import { useState } from "react";
import SearchModal from "./SearchModal";
import shopingBagIcon from "../assets/shopingBagIcon.svg";
import accountIcon from "../assets/accountIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import logoIcon from "../assets/logoIcon.png";
import burgerMenuIcon from "../assets/burgerMenuIcon.svg";
import NavbarIcon from "./NavbarIcon";
import "../components/Navbar.scss";
import BurgerMenu from "./BurgerMenu";
import BagModal from "./BagModal";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isBagModalOpen, setIsBagModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const toggleBagModal = () => {
    setIsBagModalOpen(!isBagModalOpen);
  };


  const handleSearch = (searchQuery: string) => {
    console.log("Search query:", searchQuery);
  };

  const test = () => {
    console.log("hiiii");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavbarIcon src={burgerMenuIcon} alt="menu" onClick={toggleMenu} />
        </li>
        <li className="nav-item centered-icon">
          <NavbarIcon src={logoIcon} alt="logo" onClick={test} />
        </li>
        <li className="nav-item right-nav-items">
          <div className="right-icons-container">
            <NavbarIcon src={searchIcon} alt="search" onClick={toggleSearchModal} />
            <NavbarIcon src={accountIcon} alt="account" onClick={test}/>
            <NavbarIcon src={shopingBagIcon} alt="message" onClick={toggleBagModal} />
          </div>
        </li>
      </ul>
      {isMenuOpen && (
        <BurgerMenu onCloseMenu={toggleMenu} />
      )}
       {isSearchModalOpen && (
        <SearchModal onClose={() => setIsSearchModalOpen(false)} onSearch={handleSearch} />
      )}
      {isBagModalOpen && (
        <BagModal />
      )}
    </nav>
  );
}

export default Navbar;
