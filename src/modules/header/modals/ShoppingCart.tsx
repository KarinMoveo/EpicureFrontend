import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RootState from '../../../redux/types';

import Modal from '../../../shared/components/Modal';
import Order from '../../../shared/components/Order';

import shoppingBagIcon from '../assets/icons/shoppingBag.svg';

import './ShoppingCart.scss';

const isDesktop = window.innerWidth >= 1024;

interface ShoppingCartProps {
	onClose: () => void;
}

function ShoppingCart({ onClose }: ShoppingCartProps) {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const total = Object.values(cartItems).reduce(
		(accumulator, cartItem) => accumulator + cartItem.orderItemPrice * cartItem.orderItemAmount,
		0
	);

	return (
		<Modal onClose={onClose}>
			<div
				className={`shopping-cart-modal-content ${
					isDesktop ? 'top-right-shopping-cart-modal-content' : 'top-shopping-cart-modal-content'
				}`}
			>
				{Object.values(cartItems).length === 0 ? (
					<div className='empty-shopping-cart-container'>
						<img src={shoppingBagIcon} alt='Shopping Bag Icon' className='shopping-bag-image' />
						<p className='shopping-cart-content-text'>YOUR BAG IS EMPTY</p>
					</div>
				) : (
					<div className='order-and-checkout-container'>
						<Order formFieldsFilled />
					</div>
				)}
				{Object.values(cartItems).length !== 0 && (
					<NavLink to='/checkout' className='shopping-cart-modal-button checkout-button' onClick={onClose}>
						{isDesktop ? `CHECKOUT ₪${total}` : 'CHECKOUT'}
					</NavLink>
				)}
				<NavLink to='/order-history' className='shopping-cart-modal-button order-history-button'>
					ORDER HISTORY
				</NavLink>
			</div>
		</Modal>
	);
}

export default ShoppingCart;
