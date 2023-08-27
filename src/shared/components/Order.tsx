import { useSelector } from 'react-redux';

import RootState from '../../redux/types';

import OrderItem from './OrderItem';

import './Order.scss';

function Order() {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const restaurantName = useSelector((state: RootState) => state.cart.restaurantName);
	const total = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.orderItemPrice, 0);

	return (
		<div className='order-container'>
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
			<p className='order-total-cash-p'>TOTAL - {total}₪</p>
			<div className='order-textarea-container'>
				<p>Add A Comment</p>
				<textarea rows={8} placeholder='Special requests, allergies, dietary restrictions, etc.' />
			</div>
		</div>
	);
}

export default Order;
