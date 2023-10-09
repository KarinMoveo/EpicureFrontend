import { NavLink } from 'react-router-dom';

import xIcon from '../assets/icons/x.svg';

import './BurgerMenu.scss';
import Modal from '../../../shared/components/Modal';

interface NavigationItem {
	to: string;
	text: string;
	hasDivider?: boolean;
}

const navigationItems: NavigationItem[] = [
	{ to: '/restaurants', text: 'Restaurants' },
	{ to: '/chefs', text: 'Chefs', hasDivider: true },
	{ to: '/Contact Us', text: 'Contact Us' },
	{ to: '/Term Of Use', text: 'Term Of Use' },
	{ to: '/Privacy Policy', text: 'Privacy Policy' },
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
		<Modal onClose={handleXClick}>
			<nav className='burger-menu-container'>
				<img className='x-icon' src={xIcon} alt='x icon' onClick={handleXClick} />
				{navigationItems.map((item, index) => (
					<>
						<NavLink key={index} to={item.to} className={isActiveClass}>
							{item.text}
						</NavLink>
						{item.hasDivider && <div className='divider' />}
					</>
				))}
			</nav>
		</Modal>
	);
}

export default BurgerMenu;
