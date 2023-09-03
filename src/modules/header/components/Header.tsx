import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import RootState from '../../../redux/types';

import HeaderIcon from './HeaderIcon';
import ShoppingCart from '../modals/ShoppingCart';
import BurgerMenu from '../modals/BurgerMenu';
import Search from '../modals/Search';
import SignIn from '../modals/SignIn';

import { accountIcon, burgerMenuIcon, logoIcon, shoppingBagIcon } from '../assets/icons/index';
import searchIcon from '../../../shared/assets/icons/search.svg';

import './Header.scss';

type openedModalType = 'search' | 'account' | 'shoppingBag' | 'burgerMenu' | '' | null;

const routes = [
	{ to: '/', text: 'EPICURE' },
	{ to: '/restaurants', text: 'Restaurants' },
	{ to: '/chefs', text: 'Chefs' },
];

function Header() {
	const [openedModal, setOpenedModal] = useState<openedModalType>('');

	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const totalItemAmount = Object.values(cartItems).reduce(
		(accumulator, cartItem) => accumulator + cartItem.orderItemAmount,
		0
	);

	const toggleModal = (modalName: openedModalType) => {
		modalName === openedModal ? setOpenedModal(null) : setOpenedModal(modalName);
	};

	const isActiveClass = ({ isActive }: { isActive: boolean }) => {
		return isActive ? 'selected-route' : 'burger-menu-item-name';
	};

	const handleSearch = (searchQuery: string) => {
		console.log('Search query:', searchQuery);
	};

	return (
		<nav className='header-container'>
			<div className='header-icons-row'>
				<div className='header-icon-item mobile-menu-icon-item'>
					<HeaderIcon src={burgerMenuIcon} alt='menu' onClick={() => toggleModal('burgerMenu')} />
				</div>
				<div className='header-icon-item logo-icon-item'>
					<HeaderIcon src={logoIcon} alt='logo' onClick={() => (window.location.href = '/')} />
				</div>
				<div className='desktop-nav-items'>
					{routes.map((route) => (
						<NavLink key={route.to} to={route.to} className={isActiveClass}>
							{route.text}
						</NavLink>
					))}
				</div>
				<div className='header-icon-item right-icons-items'>
					<div className='right-icons-items-container'>
						<HeaderIcon src={searchIcon} alt='search' onClick={() => toggleModal('search')} />
						<HeaderIcon src={accountIcon} alt='account' onClick={() => toggleModal('account')} />
						{totalItemAmount > 0 && <div className='total-item-amount'>{totalItemAmount}</div>}
						<HeaderIcon
							src={shoppingBagIcon}
							alt='shoppingBag'
							onClick={() => toggleModal('shoppingBag')}
						/>
					</div>
				</div>
			</div>
			{openedModal === 'burgerMenu' && <BurgerMenu onCloseMenu={() => setOpenedModal(null)} />}
			{openedModal === 'search' && <Search onClose={() => setOpenedModal(null)} onSearch={handleSearch} />}
			{openedModal === 'shoppingBag' && <ShoppingCart onClose={() => setOpenedModal(null)} />}
			{openedModal === 'account' && <SignIn onClose={() => setOpenedModal(null)} />}
		</nav>
	);
}

export default Header;
