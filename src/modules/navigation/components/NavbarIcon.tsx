import "../components/NavbarIcon.scss";

interface NavbarIconProps {
  src: string;
  alt: string;
}

function NavbarIcon (props : NavbarIconProps){
  return (
    <li className="nav-item-icon-container">
        <a href="/">
            <img src={props.src} alt={props.alt} className="icon-image"/>
        </a>
    </li>
  );
};

export default NavbarIcon;