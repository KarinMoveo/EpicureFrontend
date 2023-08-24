import { NavLink } from 'react-router-dom';

import xIcon from '../assets/icons/x.svg';

import './BurgerMenu.scss';

interface NavigationItem {
	to: string;
	text: string;
}

const navigationItems: NavigationItem[] = [
	{ to: '/restaurants', text: 'Restaurants' },
	{ to: '/chefs', text: 'Chefs' },
	{ to: '/', text: 'Contact Us' },
	{ to: '/', text: 'Term Of Use' },
	{ to: '/', text: 'Privacy Policy' },
];

interface BurgerMenuProps {
	onCloseMenu: () => void;
}

function BurgerMenu({ onCloseMenu }: BurgerMenuProps) {
	const handleXClick = () => {
		onCloseMenu();
	};

	const isActiveClass = ({ isActive }: { isActive: boolean }) => {
		return isActive ? 'active' : 'burger-menu-item-name';
	};

	return (
		<nav className='burger-menu-container'>
			<img className='x-icon' src={xIcon} alt='x icon' onClick={handleXClick} />
			{navigationItems.map((item, index) => (
				<NavLink key={index} to={item.to} className={isActiveClass}>
					{item.text}
				</NavLink>
			))}
		</nav>
	);
}

export default BurgerMenu;