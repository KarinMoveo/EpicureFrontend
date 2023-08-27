import Modal from '../../../shared/components/Modal';

import successfullyAccepted from '../assets/images/successfullyAccepted.svg';
import xIcon from '../../../shared/assets/icons/x.svg';

import './AfterPayment.scss';

interface AfterPaymentProps {
	onClose: () => void;
}

function AfterPayment(props: AfterPaymentProps) {
	return (
		<Modal onClose={props.onClose}>
			<div className='after-payment-modal-container'>
				<button className='after-payment-modal-close' onClick={props.onClose}>
					<img className='after-payment-modal-close-image' src={xIcon} alt='close' />
				</button>
				<div className='after-payment-modal-container-text'>
					<img
						className='successfully-accepted-image'
						src={successfullyAccepted}
						alt='successfully accepted'
					/>
					<p>ORDER RECEIVED</p>
					<p>Your food is in progress</p>
					<p>Arrive in 90:00 min</p>
				</div>
			</div>
		</Modal>
	);
}

export default AfterPayment;
