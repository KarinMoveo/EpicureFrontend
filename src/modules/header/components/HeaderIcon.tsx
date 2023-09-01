import "./HeaderIcon.scss";

interface HeaderIconProps {
  src: string;
  alt: string;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;  
}

function HeaderIcon (props : HeaderIconProps){
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

export default HeaderIcon;