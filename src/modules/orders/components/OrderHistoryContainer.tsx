import { useSelector } from 'react-redux';

import RootState from '../../../redux/types';

import OrderHistoryItem from './OrderHistoryItem';

import seeMoreOneArrow from '../assets/icons/seeMoreOneArrow.svg';

import './OrderHistoryContainer.scss';

function OrderHistory() {
	const orders = useSelector((state: RootState) => state.cart.orderHistory);
	return (
		<div className='order-history-container'>
			<h1 className='order-history-title'>YOUR ORDER HISTORY</h1>
			{Object.keys(orders).map((orderIndex) => (
				<OrderHistoryItem
					key={orderIndex}
					orderHistoryItemRestaurantName={orders[parseInt(orderIndex)].restaurantName}
					orderHistoryItemRestaurantDate={orders[parseInt(orderIndex)].orderDate}
					orderHistoryItemTotalOrderAmount={orders[parseInt(orderIndex)].totalAmount}
					seeMoreOneArrow={seeMoreOneArrow}
					index={parseInt(orderIndex)}
					items={orders[parseInt(orderIndex)].items}
				/>
			))}
		</div>
	);
}

export default OrderHistory;
