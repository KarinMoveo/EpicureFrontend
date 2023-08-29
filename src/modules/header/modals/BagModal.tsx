import { useSelector } from 'react-redux';

import Modal from '../../../shared/components/Modal';

import shoppingBagIcon from '../assets/icons/shoppingBag.svg';
import orderHistory from '../../../shared/assets/images/orderHistory.svg';
import checkoutButton from '../../../shared/assets/images/checkout.svg';

import RootState from '../../../redux/types';

import './BagModal.scss';
import { NavLink } from 'react-router-dom';
import Order from '../../../shared/components/Order';

const isDesktop = window.innerWidth >= 1024;

interface BagModalProps {
	onClose: () => void;
}

function BagModal({ onClose }: BagModalProps) {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);

	return (
		<Modal onClose={onClose}>
			<div className={`bag-modal-content ${isDesktop ? 'top-right-bag-modal-content' : 'top-bag-modal-content'}`}>
				{Object.values(cartItems).length === 0 ? (
					<div className='empty-bag-container'>
						<img src={shoppingBagIcon} alt='Shopping Bag Icon' className='shopping-bag-image' />
						<p className='bag-content-text'>YOUR BAG IS EMPTY</p>
					</div>
				) : (
					<div className='order-and-checkout-container'>
						<Order formFieldsFilled />
						<NavLink to='/checkout'>
							<button className='bag-modal-button' onClick={onClose}>
								<img className='checkout-image' src={checkoutButton} alt='checkout' />
							</button>
						</NavLink>
					</div>
				)}

				<NavLink to='/order-history'>
					<button className='bag-modal-button order-history-button'>
						<img className='order-history-image' src={orderHistory} alt='order history' />
					</button>
				</NavLink>
			</div>
		</Modal>
	);
}

export default BagModal;
