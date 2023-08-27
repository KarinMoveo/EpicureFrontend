import { useSelector } from 'react-redux';

import Modal from '../../../shared/components/Modal';
import OrderItem from '../../../shared/components/OrderItem';

import shoppingBagIcon from '../assets/icons/shoppingBag.svg';
import checkoutButton from '../../../shared/assets/images/checkout.svg';
import orderHistory from '../../../shared/assets/images/orderHistory.svg';

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
					<div className='empty-bag-container'>
						<img src={shoppingBagIcon} alt='Shopping Bag Icon' className='shopping-bag-image' />
						<p className='bag-content-text'>YOUR BAG IS EMPTY</p>
					</div>
				) : (
					<>
						<p>MY ORDER</p>
						<p>{restaurantName}</p>
						{cartItems.map((cartItem) => (
							<OrderItem
								key={cartItem.orderItemName}
								orderItemName={cartItem.orderItemName}
								orderItemAmount={cartItem.orderItemAmount}
								orderItemChanges={cartItem.orderItemChanges}
								orderItemImage={cartItem.orderItemImage}
								orderItemPrice={cartItem.orderItemPrice}
								orderItemSide={cartItem.orderItemSide}
							/>
						))}
						<p className='bag-modal-total-cash-p'>TOTAL - {total}₪</p>
						<p>Add A Comment</p>
						<textarea className='bag-modal-textarea' rows={8}></textarea>
						<button className='bag-modal-button'>
							<img className='checkout-image' src={checkoutButton} alt='checkout' />
						</button>
					</>
				)}
				<button className='bag-modal-button order-history-button'>
					<img className='order-history-image' src={orderHistory} alt='order history' />
				</button>
			</div>
		</Modal>
	);
}

export default BagModal;
