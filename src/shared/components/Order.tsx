import { useSelector } from 'react-redux';

import RootState from '../../redux/types';

import OrderItem from './OrderItem';

import './Order.scss';

interface OrderProps {
	formFieldsFilled: boolean;
}

function Order({ formFieldsFilled }: OrderProps) {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	// const restaurantName = useSelector((state: RootState) => state.cart.restaurantName);
	const total = Object.values(cartItems).reduce((accumulator, cartItem) => accumulator + cartItem.orderItemPrice, 0);
	const cartItemsArray = Object.values(cartItems);

	return (
		<div className='order-container'>
			<p>MY ORDER</p>
			<p>{cartItemsArray[0]?.restaurantName}</p>
			{cartItemsArray.map((cartItem) => (
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
