import messageIcon from "../images/messageIcon.png";
import accountIcon from "../images/accountIcon.png";
import searchIcon from "../images/searchIcon.png";
import logoIcon from "../images/logoIcon.png";
import burgerMenuIcon from "../images/burgerMenuIcon.png";
import NavbarIcon from "./NavbarIcon";
import "../components/NavbarStyle.scss";


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item left-icons">
          <NavbarIcon src={burgerMenuIcon} alt="menu" className="icon-image burger-menu-icon-navbar" />
        </li>
        <li className="nav-item center-icons">
          <NavbarIcon src={logoIcon} alt="logo" className="icon-image logo-icon-navbar" />
        </li>
        <li className="nav-item right-icons">
          <NavbarIcon src={searchIcon} alt="search" className="icon-image search-icon-navbar" />
          <NavbarIcon src={accountIcon} alt="account" className="icon-image account-icon-navbar" />
          <NavbarIcon src={messageIcon} alt="message" className="icon-image message-icon-navbar" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;