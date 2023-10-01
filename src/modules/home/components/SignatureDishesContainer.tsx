import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';

import { dish } from '../../../shared/types';
import { getSignatureDishesFromAPI } from '../api';

import '../components/SignatureDishesContainer.scss';

function SignatureDishesContainer() {
	const [signatureDishes, setSignatureDishes] = useState<dish[]>([]);

	useEffect(() => {
		async function getSignatureDishes() {
			try {
				const result = await getSignatureDishesFromAPI();
				setSignatureDishes(result.data);
			} catch (error: unknown) {
				console.log(error);
			}
		}
		getSignatureDishes();
	}, []);

	return (
		<div className='signature-dishes-container'>
			<p className='signature-dishes-title'>SIGNATURE DISH OF:</p>
			<div className='signature-dishes-cards-display'>
				{signatureDishes.map((dish: any, index: number) => (
					<Card key={index} cardImage={dish.image} cardName={dish.name}>
						<img src={dish.icon} alt='icon' className='signature-dish-icon' />
						<p className='dish-ingredients'>{dish.ingredients}</p>
						<div className='price-line-with-text'>
							<p className='line'></p>
							<p>₪{dish.price}</p>
							<p className='line'></p>
						</div>
					</Card>
				))}
			</div>
			<NavLink to='./restaurants' className='all-restaurants'>
				All Restaurants
				<span>
					<img src={seeMoreIcon} alt='See More Icon' className='see-more-icon' />
				</span>
			</NavLink>
		</div>
	);
}

export default SignatureDishesContainer;
