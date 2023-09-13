import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';

import '../components/SignatureDishesContainer.scss';
import { useEffect, useState } from 'react';
import { dish } from '../../../mockData/data/types';
import { getSignatureDishesFromAPI } from '../api';

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
