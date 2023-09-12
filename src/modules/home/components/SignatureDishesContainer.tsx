import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';

import { useDispatch, useSelector } from 'react-redux';

import { getSignatureDishes } from '../../../redux/dishSlice';

import '../components/SignatureDishesContainer.scss';
import { useEffect } from 'react';

function SignatureDishesContainer() {
	const dispatch = useDispatch();
	const signatureDishes = useSelector((state: any) => state.dish.signatureDishes);

	useEffect(() => {
		dispatch(getSignatureDishes());
	}, [dispatch]);

	return (
		<div className='signature-dishes-container'>
			<p className='signature-dishes-title'>SIGNATURE DISH OF:</p>
			<div className='signature-dishes-cards-display'>
				{signatureDishes.map((dish: any, index: number) => (
					<Card key={index} cardImage={dish.image} cardName={dish.name}>
						<p className='dish-ingredients'>{dish.ingredients}</p>
						<img src={dish.icon} alt='icon' className='signature-dish-icon' />
						<p>₪{dish.price}</p>
					</Card>
				))}
			</div>
			<NavLink to='./restaurants' className='all-restaurants'>
				All Restaurants
				<span className='see-more-icon'>
					<img src={seeMoreIcon} alt='See More Icon' />
				</span>
			</NavLink>
		</div>
	);
}

export default SignatureDishesContainer;
