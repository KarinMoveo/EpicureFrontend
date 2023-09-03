import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RootState from '../../../redux/types';

import { updateItem } from '../../../redux/cartSlice';

import { CartItem } from '../types';

import DeleteOrder from '../modals/DeleteOrder';

import './DishContent.scss';

interface DishContentProps {
	dishName: string;
	dishImage: string;
	dishIngredients: string;
	dishIcon?: string;
	dishPrice: number;
	dishChanges: string;
	dishSide: string;
	onClose?: () => void;
}

function DishContent({
	dishName,
	dishImage,
	dishIngredients,
	dishIcon,
	dishPrice,
	dishChanges,
	dishSide,
	onClose,
}: DishContentProps) {
	const dispatch = useDispatch();
	const { restaurantName } = useParams();
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const dish = cartItems[dishName];
	const [quantity, setQuantity] = useState(dish?.orderItemAmount || 0);
	const [deleteOrderModal, setDeleteOrderModal] = useState<any>(false);

	const closeModal = () => {
		setDeleteOrderModal(false);
	};

	function decrementQuantityHandler() {
		if (quantity === 0) return;
		setQuantity((prev) => prev - 1);
	}

	function incrementQuantityHandler() {
		setQuantity((prev) => prev + 1);
	}

	function addToCartHandler() {
		const selectedSideInput = document.querySelector('input[name="dishSide"]:checked') as HTMLInputElement;
		const selectedSide = selectedSideInput ? selectedSideInput.value : '';

		const selectedChangesInput = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
		const selectedChanges = Array.from(selectedChangesInput).map((selectedChange) => selectedChange.value);

		const item: CartItem = {
			orderItemId: dishName,
			orderItemImage: dishImage,
			orderItemName: dishName,
			orderItemAmount: quantity,
			orderItemPrice: dishPrice,
			restaurantName: restaurantName as string,
			orderItemSide: selectedSide || '',
			orderItemChanges: selectedChanges.join(', ') || '',
		};

		if (Object.keys(cartItems).length && Object.values(cartItems)[0].restaurantName !== restaurantName) {
			setDeleteOrderModal(true);
			return;
		}

		dispatch(updateItem(item));

		if (onClose) {
			onClose();
		}
	}

	return (
		<div className='dish-container'>
			<img src={dishImage} alt='Dish' className='dish-image' />
			<div className='dish-content-container'>
				<div className='dish-description'>
					<p className='dish-name'>{dishName}</p>
					<p className='dish-ingredients'>{dishIngredients}</p>
					<img className='dish-icon' src={dishIcon} alt='dish icon' />
					<p className='dish-price'>₪{dishPrice}</p>
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
						<button onClick={decrementQuantityHandler} className='quantity-button'>
							-
						</button>
						<span>{quantity}</span>
						<button onClick={incrementQuantityHandler} className='quantity-button'>
							+
						</button>
					</div>
				</div>
				<button className='add-to-cart-button' onClick={addToCartHandler} disabled={!quantity && !dish}>
					{dish ? 'UPDATE CART' : 'ADD TO CART'}
				</button>
			</div>
			{deleteOrderModal && <DeleteOrder onClose={closeModal} />}
		</div>
	);
}

export default DishContent;
