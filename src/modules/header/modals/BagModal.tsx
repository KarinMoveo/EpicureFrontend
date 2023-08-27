import { useSelector } from 'react-redux';

import Modal from '../../../shared/components/Modal';
import OrderItem from '../../../shared/components/OrderItem';

import shoppingBagIcon from '../assets/icons/shoppingBag.svg';
import checkoutButton from '../../../shared/assets/images/checkout.svg';

import RootState from '../../../redux/types';

import './BagModal.scss';

const isDesktop = window.innerWidth >= 1024;

interface BagModalProps {
	onClose: () => void;
}

function BagModal({ onClose }: BagModalProps) {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const restaurantName = useSelector((state: RootState) => state.cart.restaurantName);
	const total = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.orderItemPrice, 0);

	return (
		<Modal onClose={onClose}>
			<div className={`bag-modal-content ${isDesktop ? 'top-right-bag-modal-content' : 'top-bag-modal-content'}`}>
				{cartItems.length === 0 ? (
					<>
						<img src={shoppingBagIcon} alt='Shopping Bag Icon' className='shopping-bag-image' />
						<p className='bag-content-text'>YOUR BAG IS EMPTY</p>
						<p className='order-history-desktop'>ORDER HISTORY</p>
					</>
				) : (
					<>
						<p>MY ORDER</p>
						<p>{restaurantName}</p>
						{cartItems.map((cartItem) => (
							<OrderItem
								key={cartItem.orderItemName}
								orderItemName={cartItem.orderItemName}
								orderItemAmount='3'
								orderItemChanges='without'
								orderItemImage={cartItem.orderItemImage}
								orderItemPrice={cartItem.orderItemPrice}
								orderItemSide='none'
							/>
						))}
						<p>TOTAL - {total}₪</p>
						<button className='checkout-button'>
							<img className='checkout-image' src={checkoutButton} alt='checkout' />
						</button>
					</>
				)}
			</div>
		</Modal>
	);
}

export default BagModal;
