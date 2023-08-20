import shopingBagIcon from "../assets/shopingBagIcon.svg";
import accountIcon from "../assets/accountIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import logoIcon from "../assets/logoIcon.png";
import burgerMenuIcon from "../assets/burgerMenuIcon.svg";
import NavbarIcon from "./NavbarIcon";
import "../components/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavbarIcon src={burgerMenuIcon} alt="menu" />
        </li>
        <li className="nav-item centered-icon">
          <NavbarIcon src={logoIcon} alt="logo" />
        </li>
        <li className="nav-item right-nav-items">
          <div className="right-icons-container">
          <NavbarIcon src={searchIcon} alt="search" />
          <NavbarIcon src={accountIcon} alt="account" />
          <NavbarIcon src={shopingBagIcon} alt="message" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
