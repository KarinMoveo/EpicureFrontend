import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/cartSlice';

import addToCart from '../assets/images/others/addToCart.svg';

import './DishContent.scss';

interface DishContentProps {
	dishName: string;
	dishImage: string;
	dishIngredients: string;
	dishIcon?: string;
	dishPrice: number;
}

interface CartItem {
	orderItemId: string;
	orderItemImage: string;
	orderItemName: string;
	orderItemAmount: string;
	orderItemPrice: number;
	orderItemSide: string;
	orderItemChanges: string;
}

function DishContent({ dishName, dishImage, dishIngredients, dishIcon, dishPrice }: DishContentProps) {
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();

	function decrementQuantity() {
		if (quantity === 1) {
			return;
		}
		setQuantity((prevValue) => prevValue - 1);
	}

	function incrementQuantity() {
		setQuantity((prevValue) => prevValue + 1);
	}

	function addToCartHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		const item: CartItem = {
			orderItemId: dishName,
			orderItemImage: dishImage,
			orderItemName: dishName,
			orderItemAmount: dishIngredients,
			orderItemPrice: dishPrice || 0,
			orderItemSide: '',
			orderItemChanges: '',
		};
		dispatch(addItem(item));
	}

	return (
		<div className='dish-container'>
			<img src={dishImage} alt='Dish' className='dish-image' />
			<div className='dish-content-container'>
				<div className='dish-description'>
					<p className='dish-name'>{dishName}</p>
					<p className='dish-ingredients'>{dishIngredients}</p>
					<img className='dish-icon' src={dishIcon} alt='dish icon' />
					<p className='dish-price'>{dishPrice}</p>
				</div>
				<div className='checkbox-content-container'>
					<p className='title-with-underline'>Choose a side</p>
					<label className='rounded-checkbox'>
						<input type='checkbox' /> White bread
					</label>
					<label className='rounded-checkbox'>
						<input type='checkbox' /> Sticky rice
					</label>
					<p className='title-with-underline'>Changes</p>
					<label className='rounded-checkbox'>
						<input type='checkbox' /> Without peanuts
					</label>
					<label className='rounded-checkbox'>
						<input type='checkbox' /> Sticky Less spicy
					</label>
				</div>
				<div className='quantity-container'>
					<p className='title-with-underline'>Quantity</p>
					<div className='quantity-container-buttons'>
						<button onClick={decrementQuantity}>-</button>
						<span>{quantity}</span>
						<button onClick={incrementQuantity}>+</button>
					</div>
				</div>
				<button className='add-to-cart-button' onClick={addToCartHandler}>
					<img className='add-to-cart-image' src={addToCart} alt='Add to cart' />
				</button>
			</div>
		</div>
	);
}

export default DishContent;
