import { useSelector } from 'react-redux';

import RootState from '../../../redux/types';

import OrderHistoryItem from './OrderHistoryItem';

import seeMoreOneArrow from '../assets/icons/seeMoreOneArrow.svg';

import './OrderHistoryContainer.scss';

function OrderHistory() {
	const orders = useSelector((state: RootState) => state.cart.orderHistory);
	console.log(Object.values(orders));
	return (
		<div className='order-history-container'>
			<h1 className='order-history-title'>YOUR ORDER HISTORY</h1>
			{Object.values(orders).map((order) => (
				<OrderHistoryItem
					orderHistoryItemRestaurantName={order.restaurantName}
					orderHistoryItemRestaurantDate={order.orderDate}
					orderHistoryItemTotalOrderAmount={order.totalAmount}
					seeMoreOneArrow={seeMoreOneArrow}
				/>
			))}
		</div>
	);
}

export default OrderHistory;
