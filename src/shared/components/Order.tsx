import { useSelector } from 'react-redux';

import RootState from '../../redux/types';

import OrderItem from './OrderItem';

import './Order.scss';

interface OrderProps {
	formFieldsFilled: boolean;
}

const isDesktop = window.innerWidth >= 1024;

function Order({ formFieldsFilled }: OrderProps) {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const total = Object.values(cartItems).reduce(
		(accumulator, cartItem) => accumulator + cartItem.orderItemPrice * cartItem.orderItemAmount,
		0
	);
	const cartItemsArray = Object.values(cartItems);

	return (
		<div className='order-container'>
			{isDesktop ? <p className='order-title'>YOUR ORDER</p> : <p className='order-title'>MY ORDER</p>}
			<p className='order-restaurant-name'>{cartItemsArray[0]?.orderItemRestaurantName}</p>
			<div className='items-container'>
				{cartItemsArray.map((cartItem) => (
					<OrderItem
						key={cartItem.orderItemName}
						orderItemName={cartItem.orderItemName}
						orderItemAmount={cartItem.orderItemAmount}
						orderItemChanges={cartItem.orderItemChanges}
						orderItemImage={cartItem.orderItemImage}
						orderItemPrice={cartItem.orderItemPrice}
						orderItemSide={cartItem.orderItemSide}
						orderItemRestaurantName={cartItem.orderItemRestaurantName}
					/>
				))}
			</div>
			{isDesktop ? (
				<div className='order-line-with-text'>
					<p className='line'></p>
					<p>₪{total}</p>
					<p className='line'></p>
				</div>
			) : (
				<p className='order-total-cash-p'>TOTAL - ₪{total}</p>
			)}
			<div className='order-textarea-container'>
				<p>Add A Comment</p>
				<textarea
					className='order-textarea'
					rows={8}
					placeholder='Special requests, allergies, dietary restrictions, etc.'
				/>
			</div>
		</div>
	);
}

export default Order;
