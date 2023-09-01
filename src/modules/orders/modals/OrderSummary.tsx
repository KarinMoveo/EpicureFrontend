import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RootState from '../../../redux/types';
import { updateItem } from '../../../redux/cartSlice';

import Modal from '../../../shared/components/Modal';
import OrderItem from '../../../shared/components/OrderItem';

import DeleteOrder from '../../restaurants/modals/DeleteOrder';

import './OrderSummary.scss';

interface OrderSummaryProps {
	onClose: () => void;
	selectedOrderIndex: number | null;
}

function OrderSummary({ onClose, selectedOrderIndex }: OrderSummaryProps) {
	const dispatch = useDispatch();
	const [deleteOrderModal, setDeleteOrderModal] = useState<any>(false);
	const orderHistory = useSelector((state: RootState) => state.cart.orderHistory);
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);

	if (selectedOrderIndex === null || selectedOrderIndex >= orderHistory.length) {
		return null;
	}

	const selectedOrder = orderHistory[selectedOrderIndex];

	const handleOrderAgain = () => {
		if (Object.values(cartItems).length === 0) {
			selectedOrder.items.forEach((item) => {
				dispatch(updateItem(item));
			});
		} else {
			console.log('hi');
			setDeleteOrderModal(true);
		}
	};

	return (
		<Modal isCentered hasClose onClose={onClose}>
			<div className='order-summary-modal-container'>
				<h1>ORDER SUMMARY</h1>
				<p className='order-restaurant-name'>{selectedOrder.restaurantName}</p>
				<div className='order-summary-items'>
					{selectedOrder.items.map((orderItem) => (
						<OrderItem
							key={orderItem.orderItemId}
							orderItemAmount={orderItem.orderItemAmount}
							orderItemImage={orderItem.orderItemImage}
							orderItemName={orderItem.orderItemName}
							orderItemPrice={orderItem.orderItemPrice}
							orderItemSide={orderItem.orderItemSide}
							orderItemChanges={orderItem.orderItemChanges}
						/>
					))}
				</div>
				<div className='order-line-with-text'>
					<p className='line'></p>
					<p>₪{selectedOrder.totalAmount}</p>
					<p className='line'></p>
				</div>
				<div className='order-textarea-container'>
					<p>Add A Comment</p>
					<textarea
						className='order-textarea'
						rows={8}
						placeholder='Special requests, allergies, dietary restrictions, etc.'
					/>
				</div>
				<button className='order-again-button' onClick={handleOrderAgain}>
					ORDER AGAIN
				</button>
				<button className='order-history-button' onClick={onClose}>
					ORDER HISTORY
				</button>
			</div>
			{deleteOrderModal && <DeleteOrder onClose={onClose} />}
		</Modal>
	);
}

export default OrderSummary;
