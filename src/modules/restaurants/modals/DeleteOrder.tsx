import { useDispatch } from 'react-redux';
import { deleteCart } from '../../../redux/cartSlice';

import Modal from '../../../shared/components/Modal';

import xIcon from '../../../shared/assets/icons/x.svg';
import questionMark from '../assets/images/others/questionMark.svg';

import './DeleteOrder.scss';

interface DeleteOrderProps {
	onClose: () => void;
}

function DeleteOrder({ onClose }: DeleteOrderProps) {
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(deleteCart());
		onClose();
	};

	return (
		<Modal onClose={onClose}>
			<div className='delete-order-modal-container'>
				<button className='close-delete-order-modal-button' onClick={onClose}>
					<img src={xIcon} alt='close' />
				</button>
				<img src={questionMark} alt='question mark' />
				<h1>DELETE ORDER?</h1>
				<p>
					You can order from only one restaurant per order. Going out to another restaurant will erase all the
					items you put in the cart
				</p>
				<button className='delete-order-button delete-order-modal-button' onClick={handleClearCart}>
					DELETE
				</button>
				<button className='back-to-order-button delete-order-modal-button' onClick={onClose}>
					BACK TO ORDER
				</button>
			</div>
		</Modal>
	);
}

export default DeleteOrder;
