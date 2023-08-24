import { useState } from 'react';

import addToCart from '../assets/images/others/addToCart.svg';

import './DishContent.scss';

interface DishContentProps {
	dishName: string;
	dishImage: string;
	dishIngredients: string;
}

function DishContent({ dishName, dishImage, dishIngredients }: DishContentProps) {
	const [quantity, setQuantity] = useState(1);

	function decrementQuantity() {
		if (quantity === 1) {
			return;
		}
		setQuantity((prevValue) => prevValue - 1);
	}

	function incrementQuantity() {
		setQuantity((prevValue) => prevValue + 1);
	}

	return (
		<div className='dish-container'>
			<img src={dishImage} alt={`${dishName} Image`} className='dish-image' />
			<div className='dish-content-container'>
				<div className='dish-description'>
					<p className='dish-name'>{dishName}</p>
					<p className='dish-ingredients'>{dishIngredients}</p>
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
						<input type='checkbox' /> Whithout peanuts
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
				<img className='add-to-cart-image' src={addToCart} />
			</div>
		</div>
	);
}

export default DishContent;
