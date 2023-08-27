import { useDispatch, useSelector } from 'react-redux';

import { addItem, incrementQuantity, decrementQuantity } from '../../../redux/cartSlice';

import RootState from '../../../redux/types';

import addToCart from '../assets/images/others/addToCart.svg';

import './DishContent.scss';

interface DishContentProps {
	dishName: string;
	dishImage: string;
	dishIngredients: string;
	dishIcon?: string;
	dishPrice: number;
	dishChanges: string;
	dishSide: string;
}

interface CartItem {
	orderItemId: string;
	orderItemImage: string;
	orderItemName: string;
	orderItemAmount: number;
	orderItemPrice: number;
	orderItemSide: string;
	orderItemChanges: string;
}

function DishContent({
	dishName,
	dishImage,
	dishIngredients,
	dishIcon,
	dishPrice,
	dishChanges,
	dishSide,
}: DishContentProps) {
	const dispatch = useDispatch();

	const quantity = useSelector((state: RootState) => {
		const targetItem = state.cart.cartItems.find((item) => item.orderItemId === dishName);
		return targetItem ? targetItem.orderItemAmount : 0;
	});

	function decrementQuantityHandler() {
		dispatch(decrementQuantity(dishName));
	}

	function incrementQuantityHandler() {
		dispatch(incrementQuantity(dishName));
	}

	function addToCartHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		const selectedSideInput = document.querySelector('input[name="dishSide"]:checked') as HTMLInputElement;
		const selectedSide = selectedSideInput ? selectedSideInput.value : '';

		const selectedChangesInput = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
		const selectedChanges = Array.from(selectedChangesInput).map((selectedChange) => selectedChange.value);

		const item: CartItem = {
			orderItemId: dishName,
			orderItemImage: dishImage,
			orderItemName: dishName,
			orderItemAmount: 0,
			orderItemPrice: dishPrice,
			orderItemSide: selectedSide || '',
			orderItemChanges: selectedChanges.join(', ') || '',
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
						<input type='radio' name='dishSide' value={dishSide[0]} /> {dishSide[0]}
					</label>
					<label className='rounded-checkbox'>
						<input type='radio' name='dishSide' value={dishSide[1]} /> {dishSide[1]}
					</label>
					<p className='title-with-underline'>Changes</p>
					<label className='rounded-checkbox'>
						<input type='checkbox' value={dishChanges[0]} /> {dishChanges[0]}
					</label>
					<label className='rounded-checkbox'>
						<input type='checkbox' value={dishChanges[1]} /> {dishChanges[1]}
					</label>
				</div>

				<div className='quantity-container'>
					<p className='title-with-underline'>Quantity</p>
					<div className='quantity-container-buttons'>
						<button onClick={decrementQuantityHandler}>-</button>
						<span>{quantity}</span>
						<button onClick={incrementQuantityHandler}>+</button>
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
