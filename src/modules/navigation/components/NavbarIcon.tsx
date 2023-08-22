import "../components/NavbarIcon.scss";

interface NavbarIconProps {
  src: string;
  alt: string;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;  
}

function NavbarIcon (props : NavbarIconProps){
  return (
    <li className="nav-item-icon-container">
      <img 
        src={props.src}
        alt={props.alt} 
        onClick={props.onClick} 
        className="icon-image"
      />
    </li>
  );
};

export default NavbarIcon;