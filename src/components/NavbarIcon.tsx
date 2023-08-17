import React, { FC } from 'react';
import "../components/NavbarIconStyle.scss";

interface NavbarIconProps {
  src: string;
  alt: string;
  className: string;
}

const NavbarIcon: FC<NavbarIconProps> = ({ src, alt, className}) => {
  return (
    <li className="nav-item">
        <a href="/">
            <img src={src} alt={alt} className={className}/>
        </a>
    </li>
  );
};

export default NavbarIcon;