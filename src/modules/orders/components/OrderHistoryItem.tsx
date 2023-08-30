import { useState } from 'react';
import OrderSummary from '../modals/OrderSummary';
import './OrderHistoryItem.scss';
import { CartItem } from '../../restaurants/types';

interface OrderHistoryItemProps {
	orderHistoryItemRestaurantName: string;
	orderHistoryItemRestaurantDate: string;
	orderHistoryItemTotalOrderAmount: number;
	seeMoreOneArrow: string;
	index: number;
	items: CartItem[];
}

function OrderHistoryItem(props: OrderHistoryItemProps) {
	const [openOrderHistoryModal, setOpenOrderHistoryModal] = useState(false);
	const [selectedOrderIndex, setSelectedOrderIndex] = useState<number | null>(null);

	const handleOrderButtonClick = () => {
		setSelectedOrderIndex(props.index);
		setOpenOrderHistoryModal(true);
	};

	return (
		<div className='order-history-item-container'>
			<p>{props.orderHistoryItemRestaurantName}</p>
			<p>{props.orderHistoryItemRestaurantDate}</p>
			<p>₪{props.orderHistoryItemTotalOrderAmount}</p>
			<button onClick={handleOrderButtonClick} className='order-history-button'>
				<img src={props.seeMoreOneArrow} alt='see More One Arrow' className='order-history-item-icon' />
			</button>
			{openOrderHistoryModal && (
				<OrderSummary
					onClose={() => {
						setSelectedOrderIndex(null); // Reset the selected index when modal is closed
						setOpenOrderHistoryModal(false);
					}}
					selectedOrderIndex={selectedOrderIndex}
				/>
			)}
		</div>
	);
}

export default OrderHistoryItem;
