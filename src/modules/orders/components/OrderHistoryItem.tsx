import { useState } from 'react';
import './OrderHistoryItem.scss';
import OrderSummary from '../modals/OrderSummary';

interface OrderHistoryItemProps {
	orderHistoryItemRestaurantName: string;
	orderHistoryItemRestaurantDate: string;
	orderHistoryItemTotalOrderAmount: number;
	seeMoreOneArrow: string;
}

function OrderHistoryItem(props: OrderHistoryItemProps) {
	const [openOrderHistoryModal, setOpenOrderHistoryModal] = useState(false);

	return (
		<div className='order-history-item-container'>
			<p>{props.orderHistoryItemRestaurantName}</p>
			<p>{props.orderHistoryItemRestaurantDate}</p>
			<p>{props.orderHistoryItemTotalOrderAmount}</p>
			<button onClick={() => setOpenOrderHistoryModal(true)} className='order-history-button'>
				<img src={props.seeMoreOneArrow} alt='see More One Arrow' className='order-history-item-icon' />
			</button>
			{openOrderHistoryModal && <OrderSummary onClose={() => setOpenOrderHistoryModal(false)} />}
		</div>
	);
}

export default OrderHistoryItem;
