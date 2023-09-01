import { useSelector } from 'react-redux';

import RootState from '../../../redux/types';

import Modal from '../../../shared/components/Modal';

import successfullyAccepted from '../assets/images/successfullyAccepted.svg';

import './AfterPayment.scss';

interface AfterPaymentProps {
	onClose: () => void;
}

function AfterPayment(props: AfterPaymentProps) {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const total = Object.values(cartItems).reduce(
		(accumulator, cartItem) => accumulator + cartItem.orderItemPrice * cartItem.orderItemAmount,
		0
	);

	const isDesktop = window.innerWidth >= 1024;

	return (
		<Modal
			hasClose={isDesktop}
			isCentered={isDesktop}
			onClose={props.onClose}
			className='after-payment-modal-container'
		>
			<div className='after-payment-modal-container-text'>
				<img className='successfully-accepted-image' src={successfullyAccepted} alt='successfully accepted' />
				<p>ORDER RECEIVED</p>
				<p>Your food is in progress</p>
				<p>
					Arrive in <b>90:00 </b>min
				</p>
				{Object.values(cartItems).map((cartItem) => (
					<div className='order-summary-container'>
						<div className='order-summary-details'>
							<p>
								{cartItem.orderItemAmount}x {cartItem.orderItemName}
							</p>
							<p> ₪{cartItem.orderItemPrice}</p>
						</div>
					</div>
				))}
				<p>TOTAL - ₪{total}</p>
			</div>
		</Modal>
	);
}

export default AfterPayment;
