import { useSelector } from 'react-redux';

import Modal from '../../../shared/components/Modal';

import shoppingBagIcon from '../assets/icons/shoppingBag.svg';

import RootState from '../../../redux/types';

import './ShoppingCart.scss';
import { NavLink } from 'react-router-dom';
import Order from '../../../shared/components/Order';

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
						<NavLink to='/checkout'>
							<button className='shopping-cart-modal-button checkout-button' onClick={onClose}>
								{isDesktop ? `CHECKOUT ₪${total}` : 'CHECKOUT'}
							</button>
						</NavLink>
					</div>
				)}

				<NavLink to='/order-history'>
					<button className='shopping-cart-modal-button order-history-button'>ORDER HISTORY</button>
				</NavLink>
			</div>
		</Modal>
	);
}

export default ShoppingCart;
